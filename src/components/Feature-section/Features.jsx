import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";
import { FaBeer } from 'react-icons/fa'

const FeatureData = [
  {
    title: "Quality Assurance",
    desc: "We prioritize quality and authenticity in every product we offer. Rest assured that when you shop with Alhazar Mobiles, you're investing in genuine and reliable devices and accessories.",
    icon: "ri-draft-line",
  },

  {
    title: "Repair and Support Services",
    desc: "we provide comprehensive repair and support services. Our skilled technicians are equipped to handle a wide range of repairs,ensuring your devices stay in top-notch condition",
    icon: "ri-tools-line",
  },

  {
    title: "Value for Money",
    desc: "We understand the importance of getting the most out of your investment. That's why we offer competitive prices and special deals, helping you find the perfect balance between quality and affordability",
    icon: "ri-currency-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4"data-aos='fade-left' data-aos-delay='400'>
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
