import '../App.css';
import { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    function handleClick() {
      setIsOpen(!isOpen);
    }
  
    return (
      <>
        <div className="navbar">
          <div className="logo"><a href="#">Angelz28</a></div>
          <ul className="links">
            <li><a href="home">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="service">Service</a></li>
            <li><a href="contact">Contact</a></li>
          </ul>
          <a href="#" className="action-btn">Get Started</a>
          <div className="toggle-btn" onClick={handleClick}>
            <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </div>
        </div>
  
        <div className={isOpen ? "hamburger-menu open" : "hamburger-menu"}>
          <ul>
            <li><a href="home">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="service">Service</a></li>
            <li><a href="contact">Contact</a></li>
            <li><a href="#" className="action-btn">Get Started</a></li>
          </ul>
        </div>
      </>
    );
  }

export default NavBar