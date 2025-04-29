import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// =================== COMPONENTS START ===========================
import Navbar from './component/navbar'
// =================== COMPONENTS END =============================
// =================== PAGE START ================================
import Home from '../page/home'
// =================== PAGE END ===================================

function App() {
  const [count, setCount] = useState(0)

  // Tawk.to Script Integration
  useEffect(() => {
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script");
      s1.async = true;
      s1.src = "https://embed.tawk.to/68114b7009ac26190b4aa713/1iq1otc2m";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      var s0 = document.getElementsByTagName("script")[0];
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
