import { useState , useEffect} from "react";
import { Navbar,Container, Nav} from "react-bootstrap";
import cv from '../assets/images/cv.jpeg';
import linkedin from '../assets/images/linkedin.png';
import git from'../assets/images/github.png';
import leetcode from "../assets/images/leetcode.png";
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
export const NavBar=() =>
{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setscrolled] = useState(false); 

    useEffect( ()=>{
        const onScroll = () => {
            if(window.scrollY >50)
            {
                setscrolled(true);
            }
            else{
                setscrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () =>window.removeEventListener("scroll",onScroll);
    }, [])

    const onUpdateActiveLink =(value) =>
    {
        setActiveLink(value);
    }
  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled": ""}>
        <Container>
          {/* <Navbar.Brand href="#home">
              <img src={cv} alt="Logo"/>
          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
              <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as = {HashLink} to="#home" smooth className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link>
              <Nav.Link as = {HashLink} to="#skill" smooth className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              
              <Nav.Link as = {HashLink} to="#achievement" smooth className={activeLink === 'achievements' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Achievements</Nav.Link>
              <Nav.Link as = {HashLink} to="#extra" smooth className={activeLink === 'extracurricular' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Extra-Curricular</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                  <a href="https://drive.google.com/file/d/1NZtOv2fExF6o1JVwMHbpecnaA7UHg2J1/view?usp=sharing" target="_blank"><img src={cv} alt="resume"/></a>
                  <a href="https://www.linkedin.com/in/kashvi-jain-7b9b50291/" target="_blank"><img src={linkedin} alt="linkedIn"/></a>
                  <a href="https://github.com/kashvi1904" target="_blank"><img src={git} alt="Icon" /></a>
                  <a href="https://leetcode.com/u/jainkashvi04/" target="_blank"><img src={leetcode} alt="Icon" /></a>
              </div>
              <HashLink to='#connect'>
              <button className="vvd"><span>Let's Connect</span></button>
              </HashLink> 
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>  
  );
}