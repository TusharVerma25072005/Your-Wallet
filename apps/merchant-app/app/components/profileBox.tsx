import { authOptions } from "../../lib/authOptions"
import { getServerSession } from "next-auth"
export const ProfileBox = async () => {
    const session = await getServerSession(authOptions)
    return (
        <div className="flex flex-col justify-center m-3">
            <span className="font-bold text-3xl text-blue-700 my-3"> Account</span>
            <div className="flex flex-col justify-center bg-white rounded-lg p-5">
                <span className="text-xl font-semibold my-3 ">
                    Personal Info
                </span>
                <span className="text-lg my-1">
                    Name : {session?.user?.name}
                </span>
                <span className="text-lg my-1">
                    Ph. No : {session?.user?.phone}
                </span>
                <span className="text-lg my-1">
                    PayID : {session?.user?.payId}
                </span>
                <span className="text-lg my-1">
                    Email : {session?.user?.email}
                </span>
                <span className="text-lg my-1">
                    Date Created : {session?.user?.createdAt?.toString().slice(0, 10)}
                </span>
            </div>
        </div>
    )
}