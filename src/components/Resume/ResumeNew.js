import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdfEnglish from "../../Assets/../Assets/Maykon_Willian_Rodrigues_da_SIlva_-_English.pdf";
import pdfPortuguese from "../../Assets/../Assets/Maykon_Willian_Rodrigues_da_SIlva_-_portugues.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [isPtBr, setIsPtBr] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const lang = navigator.language || navigator.userLanguage;
    setIsPtBr(lang === 'pt-BR');
  }, []);

  return (
    <div>
      {isPtBr ? (
        <>
          <Container fluid className="resume-section">
                  <Particle />
                  <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                      variant="primary"
                      href={pdfPortuguese}
                      target="_blank"
                      style={{ maxWidth: "250px" }}
                    >
                      <AiOutlineDownload />
                      &nbsp;Baixar CV
                    </Button>
                  </Row>

                  <Row className="resume">
                    <Document file={pdfPortuguese} className="d-flex justify-content-center">
                      <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                    </Document>
                  </Row>

                  <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                      variant="primary"
                      href={pdfPortuguese}
                      target="_blank"
                      style={{ maxWidth: "250px" }}
                    >
                      <AiOutlineDownload />
                      &nbsp;Baixar CV
                    </Button>
                  </Row>
                </Container>
        </>
      ) : (
        <>
          <Container fluid className="resume-section">
            <Particle />
            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button
                variant="primary"
                href={pdfEnglish}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
            </Row>

            <Row className="resume">
              <Document file={pdfEnglish} className="d-flex justify-content-center">
                <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
              </Document>
            </Row>

            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button
                variant="primary"
                href={pdfEnglish}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
            </Row>
          </Container>
        </>
      )}
    </div>
  );
}

export default ResumeNew;
