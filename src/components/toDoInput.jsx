import React from "react"

export default function ToDoInput({ addToDo }) {
    const [inputValue, setInputValue] = React.useState("")
    const handleSubmit = (event) => {
        event.preventDefault()
        addToDo(inputValue)
        setInputValue("")
    }
    return (
        <form className="flex flex-col gap-8 w-full lg:flex-row lg:justify-center">
            <input id="todo" type="text" placeholder="Ex. Take out trash" value={inputValue} onChange={e => setInputValue(e.target.value)} className="bg-white text-black w-full h-12 lg:w-3/4 lg:h-16 lg:text-lg rounded rounded-sm px-4 shadow-md" />
            <button className="w-full lg:w-1/4 shadow-md" onClick={handleSubmit}>Add ToDo</button>
      </form>
    )
}
