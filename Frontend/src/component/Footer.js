import { Container, Row, Col } from "react-bootstrap";

import linkedin from "../assets/images/linkedin.png";
import git from "../assets/images/github.png";
import cv from "../assets/images/cv.jpeg";
import leetcode from "../assets/images/leetcode.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
         
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://drive.google.com/file/d/1NZtOv2fExF6o1JVwMHbpecnaA7UHg2J1/view?usp=sharing" target="_blank"><img src={cv} alt="Icon" /></a>
              <a href="https://github.com/kashvi1904" target="_blank"><img src={git} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/kashvi-jain-7b9b50291/" target="_blank"><img src={linkedin} alt="Icon" /></a>
              <a href="https://leetcode.com/u/jainkashvi04/" target="_blank"><img src={leetcode} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}