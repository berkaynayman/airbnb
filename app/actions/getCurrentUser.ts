import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import prisma from "@/app/libs/prismadb";

export async function getSessions() {
    return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
    try {
        const session = await getSessions();

        if (!session?.user?.email) {
            return null;
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        });

        if (!currentUser) {
            return null;
        }

        return currentUser;

    } catch (error: any) {
        return null;
    }
}