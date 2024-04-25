import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dashboard from "../../Assets/Projects/dashboard.png";
import emotion from "../../Assets/Projects/emotion.png";
import pokemon from "../../Assets/Projects/pokemon.png";
import rentalCars from "../../Assets/Projects/rentalcars.jpg";
import netflixclone from "../../Assets/Projects/netflixclone.png";
import appDelivery from "../../Assets/Projects/app-delivery.jpeg";
import "../../style.css"
function Projects() {

  const lang = navigator.language || navigator.userLanguage;
  const isPtBr = lang === 'pt-BR';

  return (
    <Container fluid className="project-section">
      <Particle />
      {isPtBr ? (
        <>
          <Container>
            <h1 className="project-heading">
              Meus <strong className="purple">trabalhos </strong> recentes
            </h1>
            <p style={{ color: "white" }}>
            Aqui estão alguns projetos em que trabalhei recentemente.
            </p>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={rentalCars}
                  isBlog={false}
                  title="Aluguel de Veículos (FiveM)"
                  description="Um sistema de aluguel de carros, onde o usuario seleciona os carros configurados, escolhe o tempo que deseja ficar com o veiculo e a forma de pagamento (dinheiro ou cartao). Sistema desenvolvido em linguagem Lua."
                  ghLink="https://github.com/maykonwr/mwr-rentals"
                />
              </Col>
    
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={appDelivery}
                  isBlog={false}
                  title="Aplicativo de Delivery"
                  description="Aplicativo simples de entrega, pode ser usado para diversos itens, podendo adicionar, remover ou editar os mesmos. Ao selecionar seus produtos, o mesmo encaminha uma mensagem direta para o estabelecimento com as informacoes do pedido, e do usuario. Sistema desenvolvido utilizando React Native, Typescript e Nodejs."
                  ghLink="https://github.com/maykonwr/app-delivery"
                />
              </Col>
    
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={pokemon}
                  isBlog={false}
                  title="Pokemon Doctor"
                  description="Um site para agendar consultas para seus pokemons, podendo realizar novas consultas, cancelar e editar suas consultas. Cada ponto de consulta aceita pokemons especificos. Sistema desenvolvido utilizando React, Typescript e Next.js."
                  ghLink="https://github.com/maykonwr/pokemon-doctor"           
                />
              </Col>
    
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={dashboard}
                  isBlog={false}
                  title="Dashboard"
                  description="Um site para gerenciar suas financas, podendo adicionar gastos e entradas de dinheiro em sua conta. Sistema desenvolvido utilizando React, Typescript, Nodejs e Styled-Components."
                  ghLink="https://github.com/maykonwr/dashboard"
                />
              </Col>
    
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={netflixclone}
                  isBlog={false}
                  title="Netflix Clone"
                  description="Um clone da Netflix, onde o mesmo traz todos os filmes e series conforme o atual. Ordenacoes como 'Em Alta' e outros tambem esta sendo feito. Sistema desenvolvido utilizando React e Javascript."
                  ghLink="https://github.com/maykonwr/netflixclone"
                  // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
                />
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <>
          <Container>
            <h1 className="project-heading">
              My Recent <strong className="purple">Works </strong>
            </h1>
            <p style={{ color: "white" }}>
              Here are a few projects I've worked on recently.
            </p>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={rentalCars}
                  isBlog={false}
                  title="Rental Cars"
                  description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages"
                  ghLink="https://github.com/maykonwr/mwr-rentals"
                />
              </Col>
    
              <Col md={4} className="project-card mobile">
                <ProjectCard
                  imgPath={appDelivery}
                  isBlog={false}
                  title="App Delivery"
                  description="Simple delivery application, can be used for different items, being able to add, remove or edit them. When selecting your products, it sends a direct message to the establishment with the order and user information. System developed using React Native, Typescript and Nodejs."
                  ghLink="https://github.com/maykonwr/Bits-0f-C0de"
                  demoLink="https://blogs.soumya-jit.tech/"
                />
              </Col>
    
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={pokemon}
                  isBlog={false}
                  title="Pokemon Doctor"
                  description="A website to schedule appointments for your pokemons, being able to make new appointments, cancel and edit your appointments. Each consultation point accepts specific pokemons. System developed using React, Typescript and Next.js."
                  ghLink="https://github.com/maykonwr/pokemon-doctor"        
                />
              </Col>
    
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={dashboard}
                  isBlog={false}
                  title="Dashboard"
                  description="A website to manage your finances, being able to add expenses and cash receipts to your account. System developed using React, Typescript, Nodejs and Styled-Components."
                  ghLink="https://github.com/maykonwr/dashboard"
                />
              </Col>
    
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={netflixclone}
                  isBlog={false}
                  title="Netflix Clone"
                  description="A clone of Netflix, where it brings all the films and series as current. Ordinances such as 'Em Alta' and others are also being made. System developed using React and Javascript."
                  ghLink="https://github.com/maykonwr/netflixclone"
                />
              </Col>
            </Row>
          </Container>
        </>
      )}
    </Container>
  );
}

export default Projects;
