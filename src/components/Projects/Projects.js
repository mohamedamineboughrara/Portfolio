import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your project images
import leaf from "../../Assets/Projects/leaf.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import suicide from "../../Assets/Projects/suicide.png";
import constr from "../../Assets/Projects/constr.png";
import shutdown from "../../Assets/Projects/shutdown.png";


// Import the Cloudinary video URL
const energyEventVideoURL = "https://res.cloudinary.com/dz9pdjk1o/video/upload/v1643602654/your-cloudinary-video.mp4";

function Projects() {
  // Sample project data
  const projects = [
    {
      imgPath: constr,
      title: "Constructor Project Management",
      description: "This project involves building a website to represent an event focused on project management within the construction industry. The website serves as a platform for showcasing different aspects of project management, including planning, resource allocation, scheduling, and budgeting. It provides attendees with valuable information and resources to enhance their project management skills and knowledge.",
    },
    {
      imgPath: shutdown,
      title: "World Energy Hub ",
      description: "development of a website that serves as a central hub for various energy-related initiatives. It consolidates information and resources from multiple projects within the energy sector, including renewable energy projects, infrastructure development, research endeavors, and policy implementations. The website aims to provide a comprehensive overview of the global energy landscape and facilitate collaboration and knowledge sharing among stakeholders.",
    },
    {
      imgPath: chatify,
      title: "ERP",
      description: "This project involves the development of an ERP system using Spring Boot, AxonIQ, PhaseTwo, Keycloak, Kafka, Angular, Docker, JUnit, and PostgreSQL. It encompasses various modules for managing different aspects of business operations, including finance, human resources, inventory, and customer relationship management. The ERP system aims to streamline processes, improve efficiency, and provide valuable insights through data analysis.",
    },
    {
      imgPath: bitsOfCode,
      title: "Guido",
      description: "Guido is a website developed for a training center. It includes features such as API development using Node.js, Express.js, and MongoDB, deployment on Heroku, code revision via GitHub, and containerization with Docker. The website serves as a platform for showcasing training programs, courses, and other educational resources offered by the training center.",
    },
    {
      imgPath: leaf,
      title: "RestoTech",
      description: "RestoTech is a project focused on developing a comprehensive technology solution for restaurants. It involves the creation of a web application using Angular for the frontend and Express.js for the backend. The application facilitates online ordering, table management, menu customization, and other restaurant operations. Additionally, it may include integration with hardware devices such as robots for order distribution.",
    },
    {
      imgPath: suicide,
      title: "SecBaby",
      description: "SecBaby is an ecosystem of sensors designed to enhance child safety at home. These sensors are strategically placed throughout the house to detect any potential dangers or hazards that the child may encounter. If the sensors detect that the child is in proximity to any danger, such as stairs, electrical outlets, or sharp objects, it will trigger an alarm within the home and simultaneously send notifications to the parents' smartphones. Additionally, the project includes both a mobile application and a web application that allow parents to monitor and visualize the movement of the baby in real-time. This comprehensive system provides peace of mind to parents by ensuring the safety of their child within the home environment.",
    },
  ];

  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index}>
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={4} className="project-card">
                  {project.type === "video" ? (
                    <ProjectCard
                      videoPath={project.videoPath}
                      title={project.title}
                      description={project.description}
                    />
                  ) : (
                    <ProjectCard
                      imgPath={project.imgPath}
                      title={project.title}
                      description={project.description}
                    />
                  )}
                </Col>
              </Row>
            </div>
          ))}
        </Slider>
      </Container>
    </Container>
  );
}

export default Projects;
