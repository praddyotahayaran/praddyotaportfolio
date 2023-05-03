import './App.css'
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Portfolio from './Components/Portfolio/Portfolio.jsx'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'



function App() {

  return (
    <div className="app">
      <Header />
      <NavBar />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />  
    </div>
  )
}

export default App
