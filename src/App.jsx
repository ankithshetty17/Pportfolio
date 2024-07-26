import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { About, Contact, Experience, Footer, Header, Profile, Projects, Skills } from './components'


function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div>
      <Header/>
      <Profile/>
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
      </div>
  
  )
}

export default App
