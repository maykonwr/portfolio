import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  
  const lang = navigator.language || navigator.userLanguage;
  const isPtBr = lang === 'pt-BR';
  
  return (
    <Container fluid className="footer">
      {isPtBr ? (
        <>
          <Row>
            <Col md="4" className="footer-copywright">
              <h3>Desenvolvido por Maykon Willian</h3>
            </Col>
            <Col md="4" className="footer-copywright">
              <h3>Copyright © {year}</h3>
            </Col>
            <Col md="4" className="footer-body">
              <ul className="footer-icons">
                <li className="social-icons">
                  <a
                    href="https://github.com/maykonwr"
                    style={{ color: "white" }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/maykonwr/"
                    style={{ color: "white" }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/maykon_wrs/"
                    style={{ color: "white" }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </>
      ) : (
        <>
          <Row>
            <Col md="4" className="footer-copywright">
              <h3>Developed by Maykon Willian</h3>
            </Col>
            <Col md="4" className="footer-copywright">
              <h3>Copyright © {year}</h3>
            </Col>
            <Col md="4" className="footer-body">
              <ul className="footer-icons">
                <li className="social-icons">
                  <a
                    href="https://github.com/maykonwr"
                    style={{ color: "white" }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/maykonwr/"
                    style={{ color: "white" }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/maykon_wrs/"
                    style={{ color: "white" }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Footer;
