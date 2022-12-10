import { useState } from "react"
import About from "./components/About"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"

function App() {
  const [mode, setMode] = useState('light') //whether dark mode is enabled or not
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
    }
    else if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <div>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter Text to analyze below" mode={mode} />
        {/*<About /> */}
      </div>
    </div>
  )
}



export default App