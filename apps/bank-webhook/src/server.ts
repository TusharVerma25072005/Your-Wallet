import express, { Express} from 'express';
import db from '@repo/db'


const app: Express = express();
const PORT = process.env.PORT || 3003;
app.use(express.json());



app.post('/updatetrans', async (req: any, res: any) => {
    const { transactionId, status } = req.body
    if (!transactionId || !status) {
        return res.status(400).json({ error: 'Missing transactionId or status' })
    }

    try {
        const transaction = await db.transaction.update({
            where: { id: transactionId },
            data: { status }
        })
        await db.user.update({
            where: { id: transaction.userId },
            data: {
                balance: {
                    increment: status === 'COMPLETED' ? transaction.amount : 0
                }
            }
        })
        return res.json({ message: 'Transaction updated successfully', transaction })
    } catch (error) {
        console.error('Error updating transaction:', error)
        return res.status(500).json({ error: 'Internal server error' })
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});