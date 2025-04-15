'use server'
import { axiosClient } from "../utils/api"

const interCeptorAxiosClient = async ()=>{
    axiosClient.interceptors.request.use( async (config)=>{
        // http header autorization here (optional)
        return config
    },
    async (error)=>{
        return Promise.reject(error)
    }
    )

    return axiosClient
}

export {interCeptorAxiosClient}