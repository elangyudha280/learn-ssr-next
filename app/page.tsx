'use client'
// import {useState } from "react";
import {toast} from 'react-toastify'
import useGetTodo from "@/services/todos/use-get-todos";
import { useQueryClient } from "@tanstack/react-query";
// import { useGetTodoCSR } from "@/services/todos/use-get-todo-by-csr";
import { createTodos } from '../services/todos/create-todo';
export default function Home() {
  const queryclient= useQueryClient()
  // const [ valuetodo ,] = useState('')
  // get todos from server
  const {data,isFetching} = useGetTodo()

  // get todos from server side
  // const {data} = useGetTodoCSR()
  // console.log(data)

  const handleCreateTodo = async ()=>{
    try{
        const res  = await createTodos()
        console.log('response',res)
        if(res.error){
         throw new Error(res?.message)
        }
        toast.success('berhasil')
        queryclient.invalidateQueries({
          queryKey:['todos']
        })
    }
    catch(err:any){
      toast.error(err?.message)
    }
  }
  return (
  <section className="position-relative w-full p-5 h-[100vh] overflow-x-hidden overflow-y-auto bg-slate-900 flex justify-center items-center">
 
    {/* container */}
    <section className="w-[450px]">


    {/* input group */}
    <div className="flex gap-4 ">
      <input type="text" className="p-2 flex-1 outline-none  text-[14px] font-medium bg-transparent border-b-2 border-b-white" placeholder="Add todo..."
      // onChange={(e)=>setValueTodo(e.target.value)}
      />

      <button
      onClick={()=>handleCreateTodo()}
      className="p-2 bg-lime-700 rounded-md">
        Add
      </button>
    </div>

    {/* list todo */}
    <div className="flex flex-col h-[300px] overflow-x-hidden overflow-y-auto gap-3 mt-4 ">
      {
        isFetching ? 
        <p className="text-center text-white">
          Loading...
        </p>
        :
        data?.map((el:any)=>{
         return (
          <div key={el.id} className="p-5 bg-blue-950 w-full rounded-md">
            <p className="m-0 p-0 text-white">
            {el?.title}
            </p>
          </div>
         ) 
        })

      }
    </div>

    </section>
    
   
  </section>
  );
}
