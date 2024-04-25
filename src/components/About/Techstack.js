import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGithub,
  DiBootstrap,
  DiRubyRough,
  DiAngularSimple,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiDocker,
  SiLua,
  SiGraphql,
} from "react-icons/si";
import ReactTooltip from "react-tooltip";
import "../.././style.css";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-tip="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="TypeScript">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="GraphQL">
        <SiGraphql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Next.js">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Docker">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Bootstrap">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Angular">
        <DiAngularSimple />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Github">
        <DiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="MongoDB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Firebase">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="PostgreSQL">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Lua">
        <SiLua />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Ruby on Rails">
        <DiRubyRough />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Python">
        <DiPython />
      </Col>
      <ReactTooltip className="custom-tooltip" place="bottom" effect="solid" />
    </Row>
  );
}

export default Techstack;
