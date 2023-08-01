import { prisma } from '@/prisma'
import Link from 'next/link'
import TodoItem from "../components/TodoItem"

function getTodos()
{
  return prisma.todo.findMany();
}

export default async function Home () {
  // await prisma.todo.create({data:{title: "test1",complete:false}})
  const todos=await getTodos();
  return (
    <>
      <header className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl'>Todos</h1>
        <Link
          href='/new'
          className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map(todo=>(
          <TodoItem key={todo.id} {...todo}/>
        ))}
      </ul>
    </>
  )
}
