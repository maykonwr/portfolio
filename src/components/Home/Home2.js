import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const lang = navigator.language || navigator.userLanguage;
  const isPtBr = lang === 'pt-BR';
  
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            {isPtBr ? (
              <>
                <h1 style={{ fontSize: "2.6em" }}>
                  DEIXA EU ME <span className="purple"> APRESENTAR </span> PARA VOCÊ
                </h1>
              </>
            ) : (
              <>
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="purple"> INTRODUCE </span> MYSELF
                </h1>
              </>
            )}
            
            <p className="home-about-body">
              {isPtBr ? (
                <>
                  Me apaixonei pela programação aos 17 anos e pelo menos aprendi
                  alguma coisa, eu acho… 🤷‍♂️
                  <br />
                  <br />Tenho ótimos conhecimentos em
                  <i>
                    <b className="purple"> Javascript, React <b style={{ color: "white", fontWeight: "400" }}>e</b> Typescript. </b>
                  </i>
                  <br />
                  <br />
                  Meus campos de interesse são{" "}
                  <i>
                    <b className="purple">E-commerce e Produtos Web</b> e
                    também em áreas relacionadas a{" "}
                    <b className="purple">
                      Blockchain.
                    </b>
                  </i>
                  <br />
                  <br />
                  Sempre que possível, também aplico minha paixão por
                  desenvolver produtos com <b className="purple">Node.js, Ruby and Rails</b> e{" "}
                  <i>
                    <b className="purple">
                      {" "}
                      Bibliotecas e Frameworks Javascript Modernos
                    </b>
                  </i>
                  &nbsp; como{" "}
                  <i>
                    <b className="purple">Angular e Next.js</b>
                  </i>
                </>
              ) : (
                <>
                  I fell in love with programming and I have at least learnt
                  something, I think… 🤷‍♂️
                  <br />
                  <br />I have great knowledge in
                  <i>
                    <b className="purple"> Javascript, React <b style={{ color: "white", fontWeight: "400" }}>and</b> Typescript. </b>
                  </i>
                  <br />
                  <br />
                  My field of Interest's are building new{" "}
                  <i>
                    <b className="purple">Web Technologies and Products </b> and
                    also in areas related to{" "}
                    <b className="purple">
                      Blockchain.
                    </b>
                  </i>
                  <br />
                  <br />
                  Whenever possible, I also apply my passion for developing
                  products with <b className="purple">Node.js, Ruby and Rails</b> and{" "}
                  <i>
                    <b className="purple">
                      {" "}
                      Modern Javascript Library and Frameworks
                    </b>
                  </i>
                  &nbsp; like{" "}
                  <i>
                    <b className="purple">React.js and Next.js</b>
                  </i>
                </>
              )}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
          {isPtBr ? (
            <>
              
            <h1>ENCONTRE ME EM</h1>
            <p>
              Sinta-se livre para se <span className="purple">conectar </span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/maykonwr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/maykonwr/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            </>
          ) : (
            <>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/maykonwr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/maykonwr/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/maykon_wrs/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            </>
          )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
