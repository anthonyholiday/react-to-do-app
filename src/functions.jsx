import React from "react"
import useState from "react"

export default function addToDo() {
    const [toDos, setToDos] = useState("this is state")    
    return toDos
}