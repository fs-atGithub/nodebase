'use client'
import React from 'react'
import {useTRPC} from "@/trpc/client";
import {useSuspenseQuery} from "@tanstack/react-query";

export const Client = ( ) => {
    const trpc = useTRPC()
    const {data: users} = useSuspenseQuery(trpc.getUsers.queryOptions())
    return (
        <div>Client component: {JSON.stringify(users)}</div>
    )
}

