import './App.css'
import Navbar from './components/Navbar'
import { useState } from 'react'
function App() {
const [Theme, setTheme] = useState(()=>localStorage.getItem('theme')||'light')

  return (
    <>
    <Navbar/>

    </>
  )
}

export default App
