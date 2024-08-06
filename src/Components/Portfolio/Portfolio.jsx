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
    {/* Navbar */}
        <Header/>
        {/* Hero Section */}
        <Home/>
        {/* About Section */}
        <About/>
        {/* Skill Section */}
        <Skills/>
        {/* Project Section */}
        <Projects/>
        {/* Contact Section */}
        <Contact/>
        {/* Footer Section */}
        <Footer/>
    </>
  )
}

export default Portfolio