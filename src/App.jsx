import { useEffect, useState } from 'react'
import ToDoInput from "./components/toDoInput.jsx"
import ToDoList from "./components/toDoList.jsx"
import Image from './components/image.jsx'

function App() {
  const [toDo, setToDo] = useState(() => {
  const items = JSON.parse(localStorage.getItem("toDo"))
  return items || 
  [
    {
      title: "Hello",
      id: crypto.randomUUID()
    }
]
})

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("toDo"))
    if(items) {
      setToDo(items)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("toDo", JSON.stringify(toDo))
  },[toDo])

  function addToDo(title) {
    setToDo(prev => [
      ...prev,
      { title, id: crypto.randomUUID() }
    ]);
  }

  function deleteToDo(id)   {
    setToDo(prev => prev.filter(item => item.id !== id))
}

  return (
      <main>
        <div className="mx-40 py-80">
          <div className="max-w-7xl">
            <div className="todo-app-wrapper flex flex-col items-center justify-items-stretch w-100% gap-8 bg-red-900">
              <Image />
              <h1>Anthony's ToDo App</h1>
              <ToDoInput addToDo={addToDo} />
              <ToDoList toDo={toDo} deleteToDo={deleteToDo} />
            </div>
          </div>
        </div>
      </main>
  )
}

export default App
