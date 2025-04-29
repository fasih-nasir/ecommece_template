import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // 👈 react-router-dom se import karo
// =================== COMPONENTS START ===========================
import Navbar from './component/navbar'
// =================== COMPONENTS END ===========================
// =================== PAGE START ===========================
import Home from '../page/home'
// =================== PAGE START ===========================


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Yahan Route define karoge */}
          <Route path="/" element={<Home/>} />
          {/* aur agar chaho to aur bhi route add karo */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
