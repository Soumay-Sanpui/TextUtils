import { useState } from "react"
import Navbar from "./components/Navbar.jsx"
import TextForm from "./components/TextForm.jsx"
import ColorSwithcher from "./components/ColorSwithcher.jsx"
function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('warning')
      document.body.style.background = 'black'
      document.body.style.color = 'whitesmoke'
    }
    else {
      setMode('light')
      document.body.style.background = 'white'
      document.body.style.color = 'black'
    }
  }
  const monokai = () => {
    if (mode !== 'success') {
      setMode('success')
      document.body.style.background = '#475B5A'
      document.body.style.color = '#F2C078'
    }
    else {
      setMode('light')
      document.body.style.background = 'white'
      document.body.style.color = 'black'
    }
  }
  const GruvBox = () => {
    if (mode !== 'danger') {
      setMode('danger')
      document.body.style.background = '#94C9A9'
      document.body.style.color = '#F7E733'
    }
    else {
      setMode('light')
      document.body.style.background = 'white'
      document.body.style.color = 'black'
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm text="Enter Your Text here" />
        <ColorSwithcher colorMode={monokai} modeLabel="Monokai" />
        <ColorSwithcher colorMode={GruvBox} modeLabel="GruvBox" />
      </div>
    </>
  )
}

export default App
