import React from "react"

export default function Image(props) {
    return <img src={props.image} className="rounded rounded-full w-36 h-36 lg:w-56 lg:h-56 object-cover shadow-md border border-slate-800"/>
}