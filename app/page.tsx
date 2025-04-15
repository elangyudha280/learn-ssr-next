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
  <section className="position-relative w-full p-5 h-[100vh] overflow-x-hidden overflow-y-auto bg-slate-900">
   
   {
    isLoading ?
    <p className="text-slate-50">
    loading...
  </p>
  :
  <p className="text-slate-50">
  {data[0]?.title}
</p>
   }
   
  </section>
  );
}
