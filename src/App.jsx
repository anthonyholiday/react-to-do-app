import { useState } from 'react'
import ToDoInput from "./components/toDoInput.jsx"
import ToDoList from "./components/toDoList.jsx"

function App() {
  const [toDo, setToDo] = useState([
    {
        title: "this is an item",
        id: crypto.randomUUID()
    },
    {
        title: "this is another item #2",
        id: crypto.randomUUID()
    }
])

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
            <div className="todo-app-wrapper flex flex-col items-center justify-items-stretch w-100% gap-8">
              <ToDoInput addToDo={addToDo} />
              <ToDoList toDo={toDo} deleteToDo={deleteToDo} />
            </div>
          </div>
        </div>
      </main>
  )
}

export default App
