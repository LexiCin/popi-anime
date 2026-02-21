import { getServerSession } from "next-auth";
import { option } from "~/app/api/auth/[...nextauth]/route";

export const authUSerSession = async() => {
    const session = await getServerSession(option)
    return session?.user
}