import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  const [isPtBr, setIsPtBr] = useState(false);

  useEffect(() => {
    const lang = navigator.language || navigator.userLanguage;
    setIsPtBr(lang === 'pt-BR');
  }, []);

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              {isPtBr ? "Conheça quem" : "Know Who"}{" "}
              <strong className="purple">{isPtBr ? "EU SOU" : "I'M"}</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          {isPtBr ? (
            <>
             <strong className="purple">Habilidades </strong> Profissionais
            </>
          ) : (
            <>
              Professional <strong className="purple">Skillset</strong>
            </>
          )}
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">{isPtBr ? "Ferramentas" : "Tools"}</strong>{" "}
          {isPtBr ? "que eu uso" : "I use"}
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
