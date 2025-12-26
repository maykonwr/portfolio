import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  const [isPtBr, setIsPtBr] = useState(false);

  useEffect(() => {
    const lang = navigator.language || navigator.userLanguage;
    setIsPtBr(lang === 'pt-BR');
  }, []);

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {isPtBr ? "Olá, Sou " : "Hello! I am "}
            <span className="purple">{isPtBr ? "Maykon Willian" : "Maykon Willian"}</span>
            {isPtBr ? " de " : " from "}
            <span className="purple">{isPtBr ? "Joinville, Brasil." : "Joinville, Brasil."}</span>
            <br />
            {isPtBr ? "Atualmente sou desenvolvedor de software." : "I currently work as a software developer."}
            <br />
            {isPtBr ? "Estou finalizando o curso de desenvolvimento de sistemas, porem atuo em projetos pessoais e freelance desde 2017." : "I'm almost finished with my Systems Development degree, but I've been working on personal and freelance projects since 2017."}
            <br />
            <br />
            {isPtBr ? "Além de programar, algumas outras atividades que amo fazer!" : "Apart from coding, these are other activities that I love to do!"}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {isPtBr ? "Jogar jogos" : "Playing Video Games"}
            </li>
            <li className="about-activity">
              <ImPointRight /> {isPtBr ? "Praticar esportes" : "Playing sports"}
            </li>
            <li className="about-activity">
              <ImPointRight /> {isPtBr ? "Viajar" : "Travelling"}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", fontStyle: "italic" }}>
            {isPtBr ? '"Seu trabalho vai preencher uma parte grande da sua vida, e a única maneira de ficar realmente satisfeito é fazer o que você acredita ser um ótimo trabalho. E a única maneira de fazer um excelente trabalho é amar o que você faz!"' : '"Your work will fill a huge part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do!"'}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
