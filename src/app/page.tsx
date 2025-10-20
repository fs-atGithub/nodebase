import React from 'react'
import prisma from "@/lib/db";

const Page = async () => {
    const users = await  prisma.user.findMany()
    return (
        <div className={"flex min-h-screen min-w-screen justify-center items-center" }>
            {JSON.stringify(users, null, 2)}
        </div>
    )
}
export default Page