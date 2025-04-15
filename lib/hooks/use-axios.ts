'use client'
import { useEffect } from "react"
import { axiosClient } from "../utils/api"

const InterCeptorAxios = ()=>{
    useEffect(() => {
        const axisIntercep = axiosClient.interceptors.request.use(  (config)=>{
            // http header autorization here (optional)
                return config
            },
            (error)=>{
                return Promise.reject(error)
            }
        )
    
      return () => {
        axiosClient.interceptors.request.eject(axisIntercep)
        }
    }, [])

    return axiosClient;
}

export {InterCeptorAxios}