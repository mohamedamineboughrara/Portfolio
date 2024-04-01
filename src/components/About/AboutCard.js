import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohamed Amine Boughrara </span>
            from <span className="purple"> Tunisia.</span>
            <br /> I'm a fresh graduated Engineer on Telecommunication and computer science From
            the Private School Of engineering of tunis ESPRIT .
            <br />
            Additionally, I am currently work  as an intern on Software Development at one Gate Africa

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Boughrara</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
