'use client'

import useGetTodo from "@/services/todos/use-get-todos";
// import { useGetTodoCSR } from "@/services/todos/use-get-todo-by-csr";
export default function Home() {

  // get todos from server
  const {data,isLoading} = useGetTodo()

  // get todos from server side
  // const {data} = useGetTodoCSR()
  console.log(data)
  return (
  <section className="position-relative w-full p-5 h-[100vh] overflow-x-hidden overflow-y-auto bg-slate-900 flex justify-center items-center">
 
    {/* container */}
    <section className="w-[450px]">


    {/* input group */}
    <div className="flex gap-4 ">
      <input type="text" className="p-2 flex-1 outline-none  text-[14px] font-medium bg-transparent border-b-2 border-b-white" placeholder="Add todo..." />

      <button className="p-2 bg-lime-700 rounded-md">
        Add
      </button>
    </div>

    {/* list todo */}
    <div className="flex flex-col h-[300px] overflow-x-hidden overflow-y-auto gap-3 mt-4 ">
      {
        isLoading ? 
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
