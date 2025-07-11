import React from "react"

export default function ToDoInput({ addToDo }) {
    const [inputValue, setInputValue] = React.useState("")
    const handleSubmit = (event) => {
        event.preventDefault()
        addToDo(inputValue)
        setInputValue("")
    }
    return (
        <form className="flex gap-8 w-full justify-center">
            <input id="todo" type="text" placeholder="Ex. Take out trash" value={inputValue} onChange={e => setInputValue(e.target.value)} className="bg-white text-black w-3/4 h-16 text-lg rounded rounded-sm px-4" />
            <button className="w-1/4" onClick={handleSubmit}>Add ToDo</button>
      </form>
    )
}
