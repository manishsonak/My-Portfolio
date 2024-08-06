
import { FaGithub } from "react-icons/fa"
import { GoLinkExternal } from "react-icons/go"


function Projects() {

    const Project=[
        {
            id:1,
            projectName:"Resume Builder",
            projectDescription:"The Resume Builder is a web app built using the MERN stack (MongoDB, Express.js, React, Node.js). It offers a user-friendly interface, customizable templates, real-time previews, and download options, making it easy to create professional resumes efficiently.",
            projectImg:"https://media.istockphoto.com/id/1138817616/photo/top-view-of-stack-of-resume-files-magnifier-on-black-surface-concept-of-reviewing-resume.webp?b=1&s=170667a&w=0&k=20&c=oEnForHoBUjy3x12DzagJaRm1jfE5yBqUWpw3-xeVpQ=",
            projectLink:"https://github.com/manishsonak/ResumeBuilder",
            icon:<FaGithub />
        },
        {
            id:2,
            projectName:"Job Portal",
            projectDescription:"The Job Portal, built with the MERN stack (MongoDB, Express.js, React, Node.js), offers job listings, application tracking, user profiles, and search functionality. It provides a seamless interface for employers to post jobs and for job seekers to find and apply for positions.",
            projectImg:"https://media.istockphoto.com/id/1233085632/photo/indian-young-businessman-stock-images.webp?b=1&s=170667a&w=0&k=20&c=qKNsnhYlHy3DgIK0OZxbqTryps-PqtOS3dFIYgTbicM=",
            projectLink:"https://github.com/manishsonak/CodSoft/tree/main/Job%20Portal",
            icon:<FaGithub />
        },
        {
            id:3,
            projectName:"Property Rental",
            projectDescription:"The Property Rental website, built using React, provides a seamless interface for listing, searching, and viewing rental properties. It features property details, user authentication, and responsive design for an optimal user experience across devices.",
            projectImg:"https://media.istockphoto.com/id/155700839/photo/a-beautiful-home-available-for-rent.webp?b=1&s=170667a&w=0&k=20&c=5PoQ_SqsuwDaAG_Gv_XAf8PuOacq0wOrKARNfztMdg4=",
            projectLink:"https://propertyrentalwebsite.netlify.app/",
            icon:<GoLinkExternal />
        },
        {
            id:4,
            projectName:"Food Odering Website",
            projectDescription:"The Food Website, built using PHP, offers features like recipe listings, user accounts, and search functionality. It provides an easy-to-navigate interface for browsing and sharing recipes, complete with detailed instructions and ingredient lists.",
            projectImg:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Rm9vZCUyMG9kZXJpbmclMjB3ZWJzaXRlfGVufDB8fDB8fHww",
            projectLink:"https://github.com/manishsonak/food_odring",
            icon:<FaGithub />
        },
        {
            id:5,
            projectName:"Tribute Page",
            projectDescription:"The Tribute Page for Abdul Kalam, built using HTML, CSS, and JavaScript, offers a visually appealing and interactive experience. It includes biography sections, achievements, images, and quotes, all presented with smooth animations and responsive design.",
            projectImg:"https://apjabdulkalamm.netlify.app/images/hero.webp",
            projectLink:"https://app.netlify.com/sites/apjabdulkalamm/overview",
            icon:<GoLinkExternal />
        },
        {
            id:6,
            projectName:"Photography Website",
            projectDescription:"The Photography website, built using HTML, CSS, and JavaScript, showcases portfolios, galleries, and contact forms. It features a visually appealing layout with responsive design and smooth animations to enhance the user experience.",
            projectImg:"https://plus.unsplash.com/premium_photo-1674389991678-0836ca77c7f7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
            projectLink:"https://6640ef4bc06afeed1221500d--sonakphotographer.netlify.app/",
            icon:<GoLinkExternal />
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
                <a target="_blank" href={proj.projectLink}><i>{proj.icon}</i></a>
            </div>
        </div>
        ))
       }
       
       
        </div>
        </section>
  )
}

export default Projects