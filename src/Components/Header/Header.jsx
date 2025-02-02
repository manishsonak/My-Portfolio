import  { useEffect, useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import ScrollReveal from 'scrollreveal';


const Header = () => {

  
  const [isMenuIconToggled, setIsMenuIconToggled] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState('');
  const [isSticky, setIsSticky] = useState(false);

  const handleMenuIconClick = () => {
    setIsMenuIconToggled(!isMenuIconToggled);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const offsetTop = section.offsetTop - 150;
      const offsetHeight = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        setActiveNavLink(id);
      }
    });

    setIsSticky(scrollPosition > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // ScrollReveal configuration
    ScrollReveal().reveal('.home-container,.heading', { origin: 'top', reset: true, distance: '80px', duration: 2000, delay: 0 });
    ScrollReveal().reveal('.home-img,.service-container,.portfolio-box,contact form', { origin: 'bottom', reset: true, distance: '80px', duration: 2000, delay: 200 });
    ScrollReveal().reveal('.home-container h1,.about-img', { origin: 'left', reset: true, distance: '80px', duration: 2000, delay: 0 });
    ScrollReveal().reveal('.home-container p,.about-content', { origin: 'right', reset: true, distance: '80px', duration: 2000, delay: 0 });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <a href="#" className="logo">MANISH Portfolio</a>
      <i id="menu-icon" onClick={handleMenuIconClick}>
      {
        !isMenuIconToggled ? <IoMenu /> : <RxCross2 />
      }
      </i>
      <nav className={`navbar ${isMenuIconToggled ? 'active' : ''}`}>
        <a onClick={()=>setIsMenuIconToggled(false)} href="#home" className={activeNavLink === 'home' ? 'active' : ''}>Home</a>
        <a onClick={()=>setIsMenuIconToggled(false)} href="#about" className={activeNavLink === 'about' ? 'active' : ''}>About</a>
        <a  onClick={()=>setIsMenuIconToggled(false)} href="#service" className={activeNavLink === 'service' ? 'active' : ''}>Skills</a>
        <a onClick={()=>setIsMenuIconToggled(false)} href="#projects" className={activeNavLink === 'projects' ? 'active' : ''}>Projects</a>
        <a onClick={()=>setIsMenuIconToggled(false)} href="#contact" className={activeNavLink === 'contact' ? 'active' : ''}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
