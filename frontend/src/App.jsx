import { useState } from 'react'
import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-screen'>
    <HomePage />
    </div>
    </>
  )
}

export default App
