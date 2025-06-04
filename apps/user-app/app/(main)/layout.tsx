
import { Sidenav } from "../components/sidenav";
import { TopBar } from "../components/topBar";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/authOptions";
import { redirect } from "next/navigation";
import ClientProviders from "../components/clientProviders";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect("/register")
  }
  //@ts-ignore
  const token = session.user?.accessToken

  return (
    <html lang="en">
      <body className="h-screen overflow-hidden">
        <div className="w-full h-16 bg-white shadow-sm">
          <TopBar />
        </div>
        <div className="grid grid-cols-4 h-[calc(100vh-4rem)]">
          <div className="col-span-1 overflow-y-auto border-r-2 border-gray-200">
            <Sidenav />
          </div>
          <div className="col-span-3 overflow-y-auto bg-gray-100">
            <ClientProviders token={token}>
              {children}
            </ClientProviders>
          </div>
        </div>

      </body>
    </html>
  );
}