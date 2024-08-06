import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Header/Footer"
import Header from "../Header/Header"
import Home from "../Home/Home"
import Projects from "../Projects/Projects"
import Skills from "../Skills/Skills"

function Portfolio() {
  return (
    <>
        <Header/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Portfolio