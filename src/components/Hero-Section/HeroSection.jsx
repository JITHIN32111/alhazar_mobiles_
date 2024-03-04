import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/ll.jpg";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content ">
              <h2 className="mb-6  hero__title " data-aos='fade-left' data-aos-delay='400'>
                Your one-stop shop <br /> for mobiles, <br /> laptops and accessories
              </h2>
              <p className="mb-5" data-aos='fade-right' data-aos-delay='400'>
              Looking for the latest mobiles, laptops, or accessories?  <br />  Alhazar Mobiles has everything you need,<br /> 
              along with top-notch service

              </p>
            </div>
         
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" data-aos='fade-down' data-aos-delay='400'/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
