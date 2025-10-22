import React, {Suspense} from 'react'
import {getQueryClient, trpc} from "@/trpc/server"
import {Client} from "@/app/clent";
import {HydrationBoundary, dehydrate} from "@tanstack/react-query";



const Page = async () => {
    const queryClient = getQueryClient()
    void queryClient.prefetchQuery(trpc.getUsers.queryOptions())
    return (
        <div className={"flex min-h-screen min-w-screen justify-center items-center" }>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Suspense fallback={<p>Loading...</p>}>
                <Client />
            </Suspense>
            </HydrationBoundary>

        </div>
    )
}
export default Page


