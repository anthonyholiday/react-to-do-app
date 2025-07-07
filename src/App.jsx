import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="flex flex-col align-items-center place-items-center">
        <h1>React ToDo App by Tony</h1>
      </main>
    </>
  )
}

export default App
