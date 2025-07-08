import React from "react"

export default function ToDoInput() {
    const [inputValue, setInputValue] = React.useState("")
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(inputValue)
    }
    return (
        <form className="flex gap-8">
            <input id="todo" type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} className="bg-white text-black" />
            <button onClick={handleSubmit}>Add ToDo</button>
      </form>
    )
}