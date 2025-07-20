import { useEffect, useState } from 'react'
import ToDoInput from "./components/toDoInput.jsx"
import ToDoList from "./components/toDoList.jsx"
import Image from './components/image.jsx'
import Tag from "/Users/anthonymarkin/Documents/1AREAS/Programming/Projects/global-components/tag.jsx"

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
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mytalk1071.com%2Fwp-content%2Fuploads%2F2023%2F04%2FCMGfd59564a-9fcb-4bcf-8d21-cadda76e764b.jpg&f=1&nofb=1&ipt=2dbb6286c9cdd8d6786f6cf78dd74acaba52e872b346d070185a4b7a8b5e58f6"
  },
  {
      emotion: "fine",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/USAFA_Hosts_Elon_Musk_%28Image_1_of_17%29_%28cropped%29.jpg/500px-USAFA_Hosts_Elon_Musk_%28Image_1_of_17%29_%28cropped%29.jpg"
  },
  {
      emotion: "angry",
      image: "https://images.squarespace-cdn.com/content/v1/520ed800e4b0229123208764/1630946885160-6GGYPZO3JO1W7G7183WP/ja_headshot.jpeg?format=1500w"
  },
  {
      emotion: "sad",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mytalk1071.com%2Fwp-content%2Fuploads%2F2023%2F04%2FCMGfd59564a-9fcb-4bcf-8d21-cadda76e764b.jpg&f=1&nofb=1&ipt=2dbb6286c9cdd8d6786f6cf78dd74acaba52e872b346d070185a4b7a8b5e58f6"
  }
]

let selectedImage = ""

if (toDo.length <= 2) {
  selectedImage = images[0].image
} else if (toDo.length <= 5) {
  selectedImage = images[1].image
} else if (toDo.length <= 7) {
  selectedImage = images[2].image
} else  {
  selectedImage = images[3].image
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
        <Tag classes={"bg-slate-800 text-white px-2 py-1 rounded absolute bottom-4 right-4 flex flow-row justify-normal gap-2 ease-in transition duration-150 hover:-translate-y-1"}/>
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
