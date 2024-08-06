

import { GoLinkExternal } from "react-icons/go"

import { Link } from "react-router-dom"


function Projects() {

    const Project=[
        {
            id:1,
            projectName:"Resume Builder",
            projectDescription:"A web application that allows users to create and customize professional resumes easily. Built with the MERN stack, it offers real-time preview, template selection, and export options for various resume formats.",
            projectImg:"https://media.istockphoto.com/id/1138817616/photo/top-view-of-stack-of-resume-files-magnifier-on-black-surface-concept-of-reviewing-resume.webp?b=1&s=170667a&w=0&k=20&c=oEnForHoBUjy3x12DzagJaRm1jfE5yBqUWpw3-xeVpQ=",
            projectLink:"https://github.com/manishsonak/ResumeBuilder",
        },
        {
            id:2,
            projectName:"Job Portal",
            projectDescription:"A web application that connects job seekers with employers, featuring job listings, application tracking, and user profiles. Built with the MERN stack, it supports job search, application management, and user authentication.",
            projectImg:"https://media.istockphoto.com/id/1233085632/photo/indian-young-businessman-stock-images.webp?b=1&s=170667a&w=0&k=20&c=qKNsnhYlHy3DgIK0OZxbqTryps-PqtOS3dFIYgTbicM=",
            projectLink:"https://github.com/manishsonak/CodSoft/tree/main/Job%20Portal",
        },
        {
            id:3,
            projectName:"Property Rental",
            projectDescription:"A user-friendly platform for browsing and renting properties. Built with React and Firebase, it offers property listings with detailed information, search functionality, and user authentication for managing rental applications.",
            projectImg:"https://media.istockphoto.com/id/155700839/photo/a-beautiful-home-available-for-rent.webp?b=1&s=170667a&w=0&k=20&c=5PoQ_SqsuwDaAG_Gv_XAf8PuOacq0wOrKARNfztMdg4=",
            projectLink:"https://propertyrentalwebsite.netlify.app/",
        },
        {
            id:4,
            projectName:"Food Odering Website",
            projectDescription:"A web application for browsing food menus, placing orders, and managing carts. Built with PHP and MySQL, it includes admin functionalities for managing menu items and orders, with a focus on secure and efficient order processing.",
            projectImg:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Rm9vZCUyMG9kZXJpbmclMjB3ZWJzaXRlfGVufDB8fDB8fHww",
            projectLink:"https://github.com/manishsonak/food_odring",
        },
        {
            id:5,
            projectName:"Tribute Page",
            projectDescription:"A single-page tribute dedicated to Dr. A.P.J. Abdul Kalam, featuring his biography, achievements, and inspirational quotes, designed with HTML, CSS, and JavaScript to honor his legacy.",
            projectImg:"https://apjabdulkalamm.netlify.app/images/hero.webp",
            projectLink:"https://app.netlify.com/sites/apjabdulkalamm/overview",
        },
        {
            id:6,
            projectName:"Photography Website",
            projectDescription:"A visually appealing website designed to showcase photography portfolios. Features include image galleries, sliders, and a contact form, all built with HTML, CSS, and JavaScript to highlight and share photography work.",
            projectImg:"https://plus.unsplash.com/premium_photo-1674389991678-0836ca77c7f7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
            projectLink:"https://6640ef4bc06afeed1221500d--sonakphotographer.netlify.app/",
        },
    ]

  return (
    <section className="portfolio" id="projects">
    <div className="heading">Latest <span>Project</span></div>
    <div className="portfolio-container">
       
       {
        Project.map((proj)=>(
            <div className="portfolio-box " key={proj.id}>
            <img src={proj.projectImg} alt="project"/>
            <img src="" alt="project"/>
            <div className="portfolio-layer">
                <h4>{proj.projectName}</h4>
               <p> {proj.projectDescription}</p>
                <Link to={`/detail/${proj.id}`}><i><GoLinkExternal/></i></Link>
            </div>
        </div>
        ))
       }
       
       
        </div>
        </section>
  )
}

export default Projects