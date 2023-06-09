import { useState } from 'react'
import Canvas from './canvas'
import Customizer from './pages/Customizer'
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <main className='app transition-all ease-in'>
        <Canvas />
        <Customizer />
        <Home />
      </main>
    </div>
  )
}

export default App
