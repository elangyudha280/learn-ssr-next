'use client'
import getTodos from "./get-todo"
import { useQuery } from "@tanstack/react-query"

const useGetTodo = ()=>{
    return useQuery({
        queryKey:['todos'],
        queryFn:async()=>{
        const data = await getTodos();
        return data;
        }
    })
}

export default useGetTodo