
import React from "react";
import queryClientConfig from "@/config/query-config";
import { QueryClientProvider } from "@tanstack/react-query";


const queryclient = queryClientConfig()

const QueryClientProviders =  ({children}:{
    children:React.ReactNode
}) =>{
    
    return (
        <QueryClientProvider client={queryclient}>
            {
                children
            }
        </QueryClientProvider>
    )
}

export default QueryClientProviders