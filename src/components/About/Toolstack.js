import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiDiscord,
  SiAmazonaws,
} from "react-icons/si";

import { DiWindows, DiLinux } from "react-icons/di";

import ReactTooltip from "react-tooltip";
import "../.././style.css";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-tip="Windows">
        <DiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Linux">
        <DiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="VSCode">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Amazon AWS">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Slack">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Discord">
        <SiDiscord />
      </Col>
      <ReactTooltip className="custom-tooltip" place="bottom" effect="solid" />
    </Row>
  );
}

export default Toolstack;
