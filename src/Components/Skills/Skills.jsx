
import { FaJava, FaUser } from 'react-icons/fa';
import { IoCodeSlash } from 'react-icons/io5';




function Skills() {

  const skillsData = [
    {
      icon: <IoCodeSlash />,
      title: 'Full Stack Developer',
      skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS','MERN'],
      link: '#'
    },
    
    {
      icon: <FaUser />,
      title: 'Software Engineering',
      skills: ['Basic C Programming', 'Basic C++ Programming', 'Java'],
      link: '#'
    },
    {
      icon: <FaJava />,
      title: 'Java Developer',
      skills: ['Core Java', 'Collection Framework', 'Swing', 'Hibernate', 'Spring'],
      link: '#'
    }
  ];

  return (
    <section className="service" id="service">
      <div className="heading">
        My <span>Skills</span>
      </div>

      <div className="service-container">
        {skillsData.map((skill, index) => (
          <div className="service-box" key={index}>
            <i>{skill.icon}</i>
            <h3>{skill.title}</h3>
            <ul>
              {skill.skills.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            {/* <a href={skill.link} className="btn">Read More</a> */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
