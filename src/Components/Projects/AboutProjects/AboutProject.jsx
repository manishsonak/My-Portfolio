
import {  useParams } from 'react-router-dom';


// Dummy data for multiple projects


const AboutProject = () => {

  const projects = [
    {
      id: 1,
      title: 'Resume Builder',
      description: 'The Resume Builder is a web application designed to help users create professional resumes effortlessly. It features a user-friendly interface, real-time preview of the resume, and the ability to download the resume in multiple formats.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      link: '', 
      features: [
        'Real-time resume preview',
        'Template selection for different resume styles',
        'Option to download the resume as PDF ',
        'User authentication '
      ],
      challenges: [
        'Ensuring cross-browser compatibility',
        'Implementing a responsive design for various devices',
        'Handling complex document formatting'
      ],
      additionalLinks: [
        { name: 'GitHub Repository', url: 'https://github.com/manishsonak/ResumeBuilder' },
      ]
    },
    {
      id: 3,
      title: 'Property Rental Website',
      description: 'The Property Rental Website is a user-friendly platform for browsing and renting properties. It features a comprehensive search functionality, property listings with detailed information, and user authentication for managing rental applications.',
      technologies: ['React', 'Firebase', 'JavaScript', 'CSS'],
      link: 'https://propertyrentalwebsite.netlify.app/', 
      features: [
        'Property search with filters',
        'Detailed property listings',
        'User authentication with Firebase',
        'Responsive design for mobile and desktop'
      ],
      challenges: [
        'Integrating Firebase authentication securely',
        'Designing a responsive layout',
        'Managing state and data flow efficiently'
      ],
      additionalLinks: [
        { name: 'GitHub Repository', url: 'https://github.com/manishsonak/totality-frontend-challenge' },
      ]
    },
    {
      id: 5,
      title: 'Abdul Kalam Tribute Page',
      description: 'The Abdul Kalam Tribute Page is a single-page website dedicated to honoring Dr. A.P.J. Abdul Kalam, the former President of India and a renowned scientist. It features a biography, notable achievements, and inspirational quotes.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://apjabdulkalamm.netlify.app/', 
      features: [
        'Responsive design for all devices',
        'Custom styling to reflect Abdul Kalam’s legacy',
        'Interactive elements such as quotes and achievements'
      ],
      challenges: [
        'Designing a visually appealing layout',
        'Ensuring cross-browser compatibility',
        'Creating engaging and interactive elements'
      ],
      additionalLinks: [
        { name: 'GitHub Repository', url: 'https://github.com/manishsonak/CodSoft/tree/main/Tribute%20Page' },
      ]
    },
    {
      id: 2,
      title: 'Job Portal',
      description: 'The Job Portal is a web application that connects job seekers with employers. It features job listings, application tracking, and user profiles for both job seekers and employers.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      link: '',
      features: [
        'Job listings with search and filter options',
        'User profiles for job seekers and employers',
        'Application tracking '
      ],
      challenges: [
        'Implementing secure user authentication',
        'Handling  job listings and applications',
        'Ensuring data privacy and security'
      ],
      additionalLinks: [
        { name: 'GitHub Repository', url: 'https://github.com/manishsonak/CodSoft/tree/main/Job%20Portal' },

      ]
    },
    {
      id: 4,
      title: 'Food Ordering (PHP)',
      description: 'The Food Ordering System is a web application built with PHP that allows users to browse food menus, place orders, and manage their cart. It includes admin functionalities for managing menu items and orders.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
      link: '',
      features: [
        'Browse and order food items',
        'Manage cart and checkout process',
        'Admin panel for managing menu items and orders'
      ],
      challenges: [
        'Implementing secure payment processing',
        'Handling order management efficiently',
        'Designing a user-friendly interface'
      ],
      additionalLinks: [
        { name: 'GitHub Repository', url: 'https://github.com/manishsonak/food_odring' },
       
      ]
    },
    {
      id: 6,
      title: 'Photography Website',
      description: 'The Photography Website is a visually appealing site designed to showcase photography portfolios. It includes galleries, image sliders, and contact forms for potential clients.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://sonakphotographer.netlify.app/',
      features: [
        'Image galleries and sliders',
        'Responsive design for showcasing portfolios',
        'Contact form for inquiries'
      ],
      challenges: [
        'Optimizing image loading and performance',
        'Ensuring a responsive layout for all devices',
        'Implementing smooth image transitions'
      ],
      additionalLinks: [
        { name: 'GitHub Repository', url: 'https://sonakphotographer.netlify.app/' },
    
      ]
    }
  ];

  const { id } = useParams(); // Extract projectId from URL parameters
  const project = projects.find(p => p.id === parseInt(id)); // Find the project based on the ID

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <section className="about-project">
      <div className="project-header">
        <h2 className="project-title">{project.title}</h2>
        {project.link && (
          <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        )}
      </div>
      <p className="project-description">{project.description}</p>
      <div className="technologies">
        <h3>Technologies Used:</h3>
        <ul className="tech-list">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="project-features">
        <h3>Features:</h3>
        <ul className="feature-list">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="project-challenges">
        <h3>Challenges Faced:</h3>
        <ul className="challenge-list">
          {project.challenges.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
      </div>
      <div className="additional-links">
        <h3>Additional Links:</h3>
        <ul className="link-list">
          {project.additionalLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </li>
          ))}
          {/* <Link to="/" >Go Back</Link> */}
        </ul>
      </div>
    </section>
  );
}

export default AboutProject;
