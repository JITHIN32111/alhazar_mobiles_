import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/io.jpg";
import "./testimonial.css";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




const Testimonials = () => {
  const first =process.env.REACT_APP_SERVICE_ID
  const second=process.env.REACT_APP_TEMPLATE_ID
  const third=process.env.REACT_APP_ID

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nrxu5qe', 'template_2yfprii', form.current, 'Eon2qLoo4y96jqVSG')
      .then((result) => {
        toast.success("login successfull", {
          position: toast.POSITION.TOP_CENTER,
        });
        form.current.reset();
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section>
              <ToastContainer />

      <Container>
        <Row className="flex-sm-row-reverse align-items-center">
          <Col lg="6" md="6">
            <div className="ms-5">
              <div className="contact-form">
              
                <form ref={form} onSubmit={sendEmail} data-aos='fade-left' data-aos-delay='400'>
                  <h3>Drop Us a Message</h3>
                  <Row>
                    <Col md="6">
                      <div className="form-group mb-4">
                        <input
                          type="text"
                          name="from_name"
                          className="form-control"
                          placeholder="Your Name *"
                        />
                      </div>
                      <div className="form-group mb-4">
                        <input
                          type="text"
                          name="txtEmail"
                          className="form-control"
                          placeholder="Your Email *"
                        />
                      </div>
                      <div className="form-group mb-4">
                        <input
                          type="text"
                          name="txtPhone"
                          className="form-control"
                          placeholder="Your Phone Number *"
                        />
                      </div>
                      <div className="form-group mb-4">
                        <input
                          type="submit"
                          name="submit"
                          className="btn btnContact"
                        />
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="form-group mb-4">
                        <textarea
                          name="message"
                          className="form-control"
                          placeholder="Your Message *"
                          style={{ width: "100%", height: "150px" }}
                        ></textarea>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div>
              <iframe
              data-aos='fade-right' data-aos-delay='400'
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3607.7066237320796!2d55.33152387538448!3d25.28045267765751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE2JzQ5LjYiTiA1NcKwMjAnMDIuOCJF!5e0!3m2!1sen!2sin!4v1692453152190!5m2!1sen!2sin"
                className="w-100 custom-iframe"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <h1></h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;





