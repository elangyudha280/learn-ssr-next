'use client'

import { useQuery } from "@tanstack/react-query"
import { InterCeptorAxios } from "@/lib/hooks/use-axios"


const useGetTodoCSR =  ()=>{
    const axios = InterCeptorAxios() 
    const getTodos = async ()=>{
        try{
            const reponse = await axios.get('todos')
            return reponse
        }
        catch(err:any){
             throw new Error(err)
        }
    }

    return useQuery({
        queryKey:['todos-csr'],
        queryFn:getTodos
    })
}

export {useGetTodoCSR}