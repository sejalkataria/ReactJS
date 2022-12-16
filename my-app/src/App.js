import { useState } from "react"
import About from "./components/About"
import Alert from "./components/Alert"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"

function App() {
  const [mode, setMode] = useState('light') //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message,
      type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode is enabled', 'success')
      document.title = 'TextUtils - Dark Mode'
    }
    else if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode is enabled', 'success')
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <div>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter Text to analyze below" showAlert={showAlert} mode={mode} />
        {/*<About /> */}
      </div>
    </div>
  )
}



export default App