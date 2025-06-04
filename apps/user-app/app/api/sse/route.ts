import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import db from '@repo/db/client'

export async function GET(req: NextRequest) {
  const { readable, writable } = new TransformStream();
  const writer = writable.getWriter();
  const encoder = new TextEncoder();

  const url = new URL(req.url);
  const token = url.searchParams.get('token');
  if (!token) {
    writer.write(encoder.encode(`event: error\ndata: Unauthorized\n\n`));
    writer.close();
    return new Response(readable, {
      status: 401,
      headers: { 'Content-Type': 'text/event-stream' },
    });
  }
  let userId: string;
  try {
    const jwtSecret = process.env.JWT_SECRET || process.env.NEXTAUTH_SECRET || '';
    if (!jwtSecret) {
      writer.write(encoder.encode(`event: error\ndata: JWT secret not configured\n\n`));
      writer.close();
      return new Response(readable, {
        status: 500,
        headers: { 'Content-Type': 'text/event-stream' },
      });
    }

    const decoded = jwt.verify(token, jwtSecret) as { id: string };
    userId = decoded.id;
  } catch {
    writer.write(encoder.encode(`event: error\ndata: Invalid token\n\n`));
    writer.close();
    return new Response(readable, {
      status: 403,
      headers: { 'Content-Type': 'text/event-stream' },
    });
  }
  const sendUpdate = async () => {
    const balance = await db.user.findUnique({
      where: { id: userId },
      select: { balance: true }
    })

    const transaction = await db.transaction.findMany({
      where: {
        userId: userId
      },
      orderBy: { createdAt: 'desc' },
      take: 20,
      include : {
        merchant : {
          select : {
            name: true
          }
        }

      }
    })

    const modifiedTransactions = transaction.map(({ createdAt,merchant, ...rest }) => ({
      ...rest,
      date: createdAt,
      userName :  merchant.name,
    }));
    writer.write(encoder.encode(`data: ${JSON.stringify({ balance, transaction: modifiedTransactions })}\n\n`));
  };

  await sendUpdate();
  const intervalId = setInterval(sendUpdate, 10000);

  req.signal.addEventListener('abort', () => {
    clearInterval(intervalId);
    writer.close();
  });

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
}
