import React from "react"

export default function Item(props)  {
    return (
        <li className="px-8 py-4 bg-slate-700 flex flex-row justify-between w-100">
            <p>{props.title}</p>
            <a>Delete</a>
        </li>
    )
}