import Head from "next/head";
import React, { Fragment } from "react";
import Navbar from "../components/Navbar";

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
            <div className="container">
              <div className="course-section-title">
                <h4 className="text-danger">
                  Expand your career opportunities with Python
                </h4>
                <p>
                  Whether you work in machine learning or finance, or are
                  pursuing a career in web development or data science, Python
                  is one of the most important skills you can learn. Python's
                  simple syntax is especially suited for desktop, web, and
                  business
                </p>
                <button className="btn-outline-secondary btn">Explore</button>
              </div>

              <div className="courses">
                <div className="course">
                  <div className="course">
                    <img
                      src="/images/course1.png"
                      className="img-fluid"
                      alt=""
                    />
                    <h5 className="text-secondary mt-3 mb-0">
                      Teacher finishing school
                    </h5>
                    <small className="d-block">Mrs Ken Nkwonta</small>
                    <small className="mb-2 mt-2">Rating</small>
                    <strong className="text-danger d-block">
                      &#8358;10,000
                    </strong>
                    {/* <button className="btn-primary border rounded text-light py-1 px-4">
                      Enroll Now
                    </button> */}
                  </div>
                </div>

                <div className="course">
                  <div className="course">
                    <img
                      src="/images/course2.png"
                      className="img-fluid"
                      alt=""
                    />
                    <h5 className="text-secondary mt-3 mb-0">Social Polish</h5>
                    <strong className="d-block">Mrs Ken Nkwonta</strong>
                    <small className="mb-2 mt-2">Rating</small>
                    <strong className="text-danger d-block">
                      &#8358;25,000
                    </strong>
                    {/* <button className="btn-primary border rounded text-light py-1 px-4">
                      Enroll Now
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
}
