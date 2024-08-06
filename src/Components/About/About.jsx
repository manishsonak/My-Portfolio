import image from'../../assets/Logo.png'

function About() {
  return (
    <section className="about" id="about">
    <div className="about-img">
      <img src={image} alt="" />
    </div>
    <div className="about-content">
      <h2 className="heading">About <span>Me</span></h2>
      <h3><span>Web </span> Developer</h3>
      <p> <b>Web Development</b>, I am a Fresher developer looking for opportunities to expand my skills. I have knowledge of <b>HTML</b>, <b>CSS</b>,  <b>JavaScript</b> and  <b>MERN</b> I am committed to improving my proficiency in these technologies.
       
      </p>
      <p>
        If you are looking for a <b>motivated</b> and <b>dedicated Web developer </b>, I am available for work opportunities and excited to contribute to projects that allow me to expand my experience and knowledge.
      </p>
      <a href="#" className="btn">Read More</a>
    </div>
  </section>
  )
}

export default About