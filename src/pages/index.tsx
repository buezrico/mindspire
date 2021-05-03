import Head from "next/head";
import React, { Fragment } from "react";
import CoursesComp from "../components/CoursesComp";
import Navbar from "../components/NavbarComp";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>mindspire</title>
      </Head>

      <div className="page">
        <header>
          <Navbar />
        </header>

        <main>
          <div className="banner-section">
            <div className="main-banner">
              <div className="banner-text">
                <h4 className="text-light">
                  Engage your teachers <br /> with the right skills
                </h4>
                <p className="text-primary">Start Learning Today</p>
              </div>
              <div className="banner-social-icons text-primary c-hand">
                <a href="#">
                  <i className="fab fa-instagram c-hand"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter c-hand"></i>
                </a>
                <a href="#">
                  <i className="fab fa-facebook c-hand"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin c-hand"></i>
                </a>
              </div>
            </div>

            <div className="container ">
              <div className="row banner-boxes">
                <div className="box col-sm">
                  <i className="fas fa-tv  fa-2x mr-3"></i>
                  <div className="box-text">
                    <p>100 video courses</p>
                    <small>Enjoy a variety of engagingtopics</small>
                  </div>
                </div>
                <div className="box col-sm">
                  <i className="fas fa-chalkboard-teacher fa-2x mr-3"></i>
                  <div className="box-text">
                    <p>Expert Instructor</p>
                    <small>Get the right Instructor</small>
                  </div>
                </div>
                <div className="box col-sm">
                  <i className="fas fa-calendar-check fa-2x mr-3"></i>
                  <div className="box-text">
                    <p>Lifetime access</p>
                    <small>Learn at your own convenience</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="course-section">
            <div className="course-section-title container">
              <div className="course-section-title">
                <h3 className="text-danger">
                  The world's largest selection of courses
                </h3>
                <p>
                  Choose from 130,000 online video courses with new additions
                  published every month
                </p>
              </div>
            </div>
            <div className="container course-section-content">
              <div className="course-section-content-title ">
                <div className="course-section-content-title-text">
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
                  <button className="btn-outline-secondary btn mb-5">
                    Explore
                  </button>
                </div>

                <div className="course-section-content-title-picture">
                  <img src="/images/profilePicture.png" alt="profile_picture" />
                </div>
              </div>

              <CoursesComp />
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
}
