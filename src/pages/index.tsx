import Head from "next/head";
import React, { Fragment, useState } from "react";
import CoursesComp from "../components/CoursesComp";
import Navbar from "../components/NavbarComp";
import SocialIconsComp from "../components/SocialIconsComp";
import FormComp from "../components/FormComp";

import { Anchor, Modal } from "antd";
import WhatsappWidget from "react-whatsapp-widget";

export default function Home() {
  const { Link } = Anchor;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  return (
    <Fragment>
      <Head>
        <title>mindspire</title>
      </Head>

      <header>
        <Navbar />

        <div className="banner-section" id="home">
          <div className="main-banner">
            <div className="banner-text">
              <h4 className="text-light banner-title">
                Engage your teachers <br /> with the right skills
              </h4>
              <p className="text-primary">Start Learning Today</p>
            </div>
            <div className="banner-social-icons text-primary c-hand">
              <SocialIconsComp />
            </div>
          </div>
          <div className="inner">
            <div className="banner-boxes">
              <div className="box mb-3">
                <i className="fas fa-tv  fa-2x mr-3"></i>
                <div className="box-text">
                  <p>100 video courses</p>
                  <small>Enjoy a variety of engaging topics</small>
                </div>
              </div>
              <div className="box mb-3">
                <i className="fas fa-chalkboard-teacher fa-2x mr-3"></i>
                <div className="box-text">
                  <p>Expert Instructor</p>
                  <small>Get the right Instructor</small>
                </div>
              </div>
              <div className="box mb-3">
                <i className="fas fa-calendar-check fa-2x mr-3"></i>
                <div className="box-text">
                  <p>Lifetime access</p>
                  <small>Learn at your own convenience</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="course-section" id="courses">
          <div className="course-section-title container">
            <div className="course-section-title">
              <h3 className="text-secondary">
                The world's largest selection of courses
              </h3>
              <p>
                Choose from 130,000 online video courses with new additions
                published every month
              </p>
            </div>
          </div>
          <div className="container course-section-content">
            <div className="course-section-content-title d-none d-md-flex">
              <div className="course-section-content-title-text mb-5">
                <h4 className="">
                  Expand your career opportunities with Social Polish
                </h4>
                <p>
                  Whether you work in machine learning or finance, or are
                  pursuing a career in web development or data science, Python
                  is one of the most important skills you can learn. Python's
                  simple syntax is especially suited for desktop, web, and
                  business
                </p>
                {/* <button className="btn-outline-secondary btn mb-5">
                  Explore
                </button> */}
              </div>

              <div className="course-section-content-title-picture">
                <img src="/images/profilePicture.png" alt="profile_picture" />
              </div>
            </div>

            <CoursesComp />
          </div>
        </div>
        <Modal visible={isModalVisible}>
          <FormComp />
        </Modal>
      </main>

      <section className="about" id="about">
        <div className="container">
          <div className="about-section">
            <div className="about-section-left">
              <div className="top">
                <img src="/images/about1.png" className="img1" alt="" />
              </div>
              <div className="bottom">
                <img src="/images/about.png" className="img2" alt="" />
                <img src="/images/aboutlogo.png" className="img3" alt="" />
              </div>
            </div>
            <div className="about-section-right">
              <h3 className="text-light text-primary mb-3">About Mindspire</h3>
              <h5 className="text-primary">
                Best Virtual eLearning Network ???Mindspire???
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed
                eius to mod tempors incididunt ut labore et dolore magna this
                aliqua enims ad minim.
              </p>
              <h5 className="text-primary">Our Vision</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed
                eius to mod tempors incididunt ut labore et dolore magna this
                aliqua enims ad minim.
              </p>
              <h5 className="text-primary">Our Mission</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed
                eius to mod tempors incididunt ut labore et dolore magna this
                aliqua enims ad minim.
              </p>
              {/* <button className="btn btn-outline-primary ">Read More</button> */}
            </div>
          </div>
        </div>
      </section>

      <section className="trainer" id="trainer">
        <div className="container">
          <div className="trainer-section">
            <h2 className="text-light mb-3 d-md-none text-center">
              Meet your trainer
            </h2>
            <div className="trainer-section-left">
              <h2 className="text-light mb-2 d-none d-md-block">
                Meet your trainer
              </h2>
              <h5 className="text-primary">Mrs Nkechi Nkwonta</h5>
              <p>
                Recogizing the need is the primary than we expected Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Sint ipsa
                voluptatibus,
              </p>
              <h6 className="text-primary mb-2">CEO Mindspire / Instructor</h6>
              <div className="trainer-icons">
                <SocialIconsComp />
              </div>
            </div>
            <div className="trainer-section-right">
              <img src="/images/profilePicture.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="contact text-secondary" id="contact-us">
        <div className="container">
          <div className="contact-section">
            <h3 className="text-secondary text-center">Get In Touch</h3>
            <div className="contact-section-content">
              <div className="contact-section-content-left">
                <div className="address contact-box">
                  <i className="fas fa-map-marker-alt mr-3"></i>
                  <p>No 6. Mission Road, Elimgbu Port Harcourt, Nigeria</p>
                </div>
                <div className="phone contact-box mb-3">
                  <i className="fas fa-phone-alt mr-3"></i>
                  <div className="numbers">
                    <p className="m-0">+234 8109169579</p>
                    <p className="m-0">+234 8109169579</p>
                  </div>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.5916228635783!2d6.962575314293801!3d4.83996534178304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069ce3535ac50b9%3A0xd3565a36f7f3f80d!2sSitrid%20International%20School!5e0!3m2!1sen!2sng!4v1620678118946!5m2!1sen!2sng"
                  width="250"
                  height="250"
                  className="rounded"
                  style={{ border: 0 }}
                  // allowfullscreen=true
                  loading="lazy"
                ></iframe>
              </div>
              <div className="contact-section-content-right">
                <h5 className="mb-3">Leave a message</h5>
                <FormComp />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-section">
            <div className="footer-section-pic d-none d-md-flex">
              <img src="/images/aboutlogo.png" alt="" />
            </div>
            <div className="footer-section-text">
              {/* <h5 className="text-primary">About Mindspire</h5> */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed
                eius to mod tempors incididunt ut labore et dolore magna this
                aliqua enims ad minim.
              </p>
              <div className="rights">
                <small>&copy; 2021 All Rights Reserved </small>
                <div className="footer-icons">
                  <SocialIconsComp />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <WhatsappWidget
        phoneNumber="+2348109169579"
        message="welcome to MindSpire"
        companyName="Mrs Ken"
        textReplyTime="Typically replies in an hour"
      />
    </Fragment>
  );
}

const arrowDown = () => {
  <div className="arrown-down">
    <i className="fas fa-chevron-down fa-2x text-primary"></i>
  </div>;
};
