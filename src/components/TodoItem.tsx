'use client'
type TodoItemProps = {
  id: string
  title: string
  complete: boolean
  toggleTodo: (id: string, complete: boolean) => void
  deleteTodo: (id: string) => void
}

export default function TodoItem ({
  id,
  title,
  complete,
  toggleTodo,
  deleteTodo
}: TodoItemProps) {
  return (
    <li className='flex gap-1 items-center'>
      <input
        id={id}
        type='checkbox'
        className='cursor-pointer peer'
        defaultChecked={complete}
        onChange={e => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className='cursor-pointer peer-checked:line-through peer-checked:text-slate-500'
      >
        {title}
      </label>
      <div
        className='text-red-800 cursor-pointer'
        onClick={e => deleteTodo(id)}
      >
        x
      </div>
    </li>
  )
}
