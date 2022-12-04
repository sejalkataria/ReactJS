import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"

function App() {
  return (
    <div>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter Text to analyze below" />
      </div>
    </div>
  )
}



export default App