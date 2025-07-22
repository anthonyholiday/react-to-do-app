import { useEffect, useState } from 'react'
import ToDoInput from "./components/toDoInput.jsx"
import ToDoList from "./components/toDoList.jsx"
import Image from './components/image.jsx'
import Tag from './components/Tag.jsx'

function App() {
  const [toDo, setToDo] = useState(() => {
  const items = JSON.parse(localStorage.getItem("toDo"))
  return items || 
  [
    {
      title: "Hello, this will be a to do card.",
      id: crypto.randomUUID()
    }
]
})

const images = [
  {
      emotion: "happy",
      image: "/happy.jpeg"
  },
  {
      emotion: "ok",
      image: "/ok.jpeg"
  },
  {
      emotion: "so-so",
      image: "/so-so.jpeg"
  },
  {
      emotion: "hairy",
      image: "/hairy.jpeg"
  },
  {
      emotion: "stressed",
      image: "/stressed.jpg"
  },
  {
      emotion: "insane",
      image: "/insane.jpeg"
  },
  {
      emotion: "dead",
      image: "/dead.jpeg"
  }
]

let selectedImage = ""

if (toDo.length === 0) {
  selectedImage = images[0].image
} else if (toDo.length <= 5) {
  selectedImage = images[1].image
} else if (toDo.length <= 7) {
  selectedImage = images[2].image
} else if (toDo.length <= 10) {
  selectedImage = images[3].image
} else if (toDo.length <= 12) {
  selectedImage = images[4].image
} else if (toDo.length <= 15) {
  selectedImage = images[5].image
} else {
  selectedImage = images[6].image
}

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
    if (!title) {
      alert("Please enter something you'd like to remember to do.")
    } else {
      setToDo(prev => [
        ...prev,
        {
          title, id: crypto.randomUUID()
        }
      ]);
    }
  }

  function deleteToDo(id)   {
    setToDo(prev => prev.filter(item => item.id !== id))
  }
  

  return (
      <main>
        <Tag />
        <div className="mx-8 pt-20 lg:mx-40 lg:pt-40">
          <div className="max-w-2xl mx-auto">
            <div className="todo-app-wrapper bg-slate-900 flex flex-col items-center justify-items-stretch w-100% gap-6 shadow-lg lg:gap-8 border rounded rounded-xl border-slate-700 p-6 lg:p-12 transition ease-in duration-200 hover:border-slate-600">
              <Image image={selectedImage}/>
              <h1 className="text-center text-3xl lg:text-6xl">Anthony's ToDo App</h1>
              <ToDoInput addToDo={addToDo} />
              <ToDoList toDo={toDo} deleteToDo={deleteToDo} />
            </div>
          </div>
        </div>
      </main>
  )
}

export default App
