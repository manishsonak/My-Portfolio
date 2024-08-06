import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import image from'../../assets/Logo.png'

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-container">
        <h3>Hello, It&apos;s Me</h3>
        <h1>Manish Sonak</h1>
        <h3>And I&apos;m a <span> Web Developer</span></h3>
        <p>
          I am a Web developer looking for opportunities to expand my skills.</p>
        <div className="social-media">
          <a target='_blank' href="https://www.facebook.com/profile.php?id=100025851462616"><FaFacebook /></a>
          <a target='_blank' href="https://www.instagram.com/manish_sonak/"><FaInstagram /></a>
          <a target='_blank' href="https://github.com/manishsonak"><FaGithub /></a>
          <a target='_blank' href="https://www.linkedin.com/in/manish-sonak-26233129a/"><FaLinkedin /></a>
        </div>
        <a href="./image/ManishCV.pdf" download="" className="btn">Download CV</a>
      </div>
      <div className="home-img">
        <img src={image} alt="Sonak" />
      </div>
    </section>
  )
}

export default Home