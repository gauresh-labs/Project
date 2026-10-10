import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import resumePdf from "../../Assets/Soumyajit_Behera.pdf";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center hero-row">
            <Col md={7} className="home-header">
              <div className="eyebrow">Software engineer • problem solver</div>
              <h1 className="heading">
                Hi there
                <span className="wave" role="img" aria-labelledby="wave">
                  {" "}👋🏻
                </span>
              </h1>

              <h2 className="heading-name">
                I&apos;m <strong className="main-name">Soumyajit Behera</strong>
              </h2>

              <div className="home-type-wrap">
                <Type />
              </div>

              <div className="home-cta-row">
                <Link to="/project" className="primary-btn">
                  View my projects
                </Link>
                <a href={resumePdf} className="secondary-btn" target="_blank" rel="noreferrer">
                  Download resume
                </a>
              </div>
            </Col>

            <Col md={5} className="hero-visual-col">
              <div className="hero-visual-card">
                <img src={homeLogo} alt="Developer illustration" className="img-fluid hero-visual" />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
