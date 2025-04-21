'use server'
import { interCeptorAxiosClient } from "@/lib/hooks/use-server-axios"
import { revalidatePath } from "next/cache"
 
export const createTodos = async ()=>{
    const axios = await interCeptorAxiosClient()
    const payload:IFormTodos = {
        title:'dataTodos12312',
        body:'desc123',
        userId:1,
    }
    try{
        const xhr  = await fetch(`https://jsonplaceholder.typicode.com/postsasdasda`,{
            headers:{
                "Content-Type":'application/json'
            },
            method:'POST',
            body:JSON.stringify(payload)
        })

        const response = await xhr.json()
        if(!response.id){
            return {
                error:true,
                message:'gagal mengirim data'
            }
        }
        revalidatePath('/')
        console.log('response',response)
        return response
    }
    catch(err:any){
        console.log('err',err)
        // return {
        //     message:err?.message || 'gagal',
        //     code:err.status
        // }
        //! process.production ? err.repose.message : err.message 
        throw new Error(err)
    }
}