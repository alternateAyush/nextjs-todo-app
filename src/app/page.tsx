import { prisma } from '@/prisma'
import Link from 'next/link'

function getTodos()
{
  return prisma.todo.findMany();
}

export default async function Home () {
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
      <ul></ul>
    </>
  )
}
