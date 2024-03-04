import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/kk.jpg";
import "./choose-us.css";
import Slider from "react-slick";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              {/* <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt mollitia nostrum harum eos praesentium odit a sed quod
                aut fugit. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Reprehenderit omnis, culpa eligendi inventore perspiciatis
                minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores cupiditate facilis provident quidem accusamus impedit
                tenetur laboriosam debitis nisi eius!
              </p> */}
              <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 mt-4 fw-bold">
                      Convenient shopping experience                      </h6>
                      <p > 
                      With Alhazar Mobiles, you can enjoy a convenient shopping experience that is tailored to your needs and preferences. Our commitment to excellence shines through every aspect of our service,we're not just a store; we're a partner on your tech journey.
                      </p>

                    
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 mt-4 fw-bold">
                      Wide range of products                      </h6>
                      <p>
                      Alhazar Mobiles offers a wide range of mobiles, laptops, and accessories to choose from. You'll find the perfect device or accessory for your needs
                      ,Your satisfaction is our priority. We listen to your feedback, address your concerns, and continually improve our services to exceed your expectations
                      </p>

                    
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 mt-4 fw-bold">
                      Reliable service and support                      </h6>
                      <p>
                      We provide reliable service and support for all your mobile and laptop needs. Our team of experts is here to assist you with any issues or queries.
                      . Whether you're a tech enthusiast, a business professional, or a student, our carefully curated collection ensures there's something for everyone.
                      </p>

                     
                    </div>
                  </div>
                </Slider>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img" data-aos='fade-left' data-aos-delay='400'>
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=a0Y_SyZ5xx0"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
