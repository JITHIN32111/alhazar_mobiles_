import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/io.jpg";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row className="flex-sm-row-reverse">
        

          <Col lg="6" md="6">
            <div className="about__content  " data-aos='fade-left' data-aos-delay='400'>
              <h2>About Us</h2>
              <p data-aos='fade-up' data-aos-delay='400'>
              At Alhazar Mobiles, we're not just a store; we're your partner in all things mobile and beyond. With a passion for technology and a commitment to customer satisfaction, we're here to redefine your shopping experience, making it informative, enjoyable, and seamless.Our journey began with a simple yet powerful vision: to be your one-stop destination for all your mobile and laptop needs
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                 

             
                </div>

              
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100"data-aos='fade-right' data-aos-delay='400' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
