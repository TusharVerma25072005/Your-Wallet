import { Sidenav } from "../components/sidenav";
import { TopBar } from "../components/topBar";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/authOptions";
import { redirect } from "next/navigation";
import { ClientProviders } from "../components/clientProviders";
import { Provider } from "jotai";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/register");
  }
  const token = session.user?.accessToken;

  return (
    <html lang="en">
      <body className="h-screen overflow-hidden">
        <div className="w-full h-16 shadow-sm bg-blue-700">
          <TopBar />
        </div>
        <div className="grid grid-cols-4 h-[calc(100vh-4rem)]">
          <div className="hidden md:block col-span-1 overflow-y-auto border-r-2 border-gray-200">
            <Sidenav />
          </div>
          <div className=" col-span-4 md:col-span-3 overflow-y-auto bg-gray-100">
            <Provider>

              <ClientProviders token={token} >
                {children}
              </ClientProviders>
            </ Provider>
          </div>
        </div>
      </body>
    </html>
  );
}