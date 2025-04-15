import { QueryClient } from "@tanstack/react-query";


export default function queryClientConfig(){
    return new QueryClient({
        defaultOptions:{
            queries:{
                refetchOnMount:false,
                refetchOnWindowFocus:false
            }
        }
    })
}