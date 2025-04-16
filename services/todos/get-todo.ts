'use server'
import { interCeptorAxiosClient } from "@/lib/hooks/use-server-axios";

const getTodos = async ()=>{
    const axios =await interCeptorAxiosClient()
    try {
        const response = await axios.get('todos?userId=1')
        console.log(response)
        return response.data
    }
    catch(err:any){
        throw new Error(err?.message)
    }
}

export default getTodos