'use server'
import { interCeptorAxiosClient } from "@/lib/hooks/use-server-axios";

const getTodos = async ()=>{
    const axios =await interCeptorAxiosClient()
    try {
        const response = await axios.get('todos')
        return response.data
    }
    catch(err:any){
        throw new Error(err?.message)
    }
}

export default getTodos