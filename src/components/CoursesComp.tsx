import React, { Component } from "react";
import Slider from "react-slick";
import { Popover, Button } from "antd";

class CoursesComp extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      className: "center",
      // centerMode: true,
      infinite: true,
      // centerPadding: "5rem",
      slidesToShow: 5,
      speed: 500,
      arrows: true,
      // dots: true,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
    };

    const content = (
      <div className="popover">
        <h6>
          <strong>Teacher Finishing School</strong>
        </h6>
        <small className="d-block mb-2 text-info">Mrs Ken Nkwonta</small>
        <small className="d-block">
          3 months - All Levels{" "}
          <span className="text-success">
            Updated <strong>April 2021</strong>
          </span>
        </small>

        <p>
          Learn Python like a Professional Start from the basics and go all the
          way to creating your own applications and games
        </p>

        <ul className="d-block">
          <li>
            <i className="fas fa-check"></i>
            <p>Master Machine Learning on Python & R</p>
          </li>

          <li>
            <i className="fas fa-check"></i>
            <p>Use Spark for Big Data Analysis</p>
          </li>

          <li>
            <i className="fas fa-check"></i>
            <p>Make accurate predictions</p>
          </li>
        </ul>

        <button className="btn-primary btn rounded w-100">Enroll Now</button>
      </div>
    );

    return (
      <div>
        <div className="courses">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <Popover content={content} title="Title" placement="top">
              <div className="course">
                <img src="/images/course1.png" className="img-fluid" alt="" />
                <strong className="text-secondary mt-3 mb-0">
                  Teacher finishing school
                </strong>
                <small className="d-block">Mrs Ken Nkwonta</small>
                <small className="mb-2 mt-2">Rating</small>
                <small>
                  <strong className="text-danger d-block">&#8358;10,000</strong>
                </small>
                {/* <button className="btn-primary border rounded text-light py-1 px-4">
                      Enroll Now
                    </button> */}
              </div>
            </Popover>

            <Popover content={content} title="Title" placement="top">
              <div className="course">
                <img src="/images/course2.png" className="img-fluid" alt="" />
                <strong className="text-secondary mt-3 mb-0">
                  Social Polish
                </strong>
                <small className="d-block">Mrs Ken Nkwonta</small>
                <small className="mb-2 mt-2">Rating</small>
                <small>
                  <strong className="text-danger d-block">&#8358;10,000</strong>
                </small>
                {/* <button className="btn-primary border rounded text-light py-1 px-4">
                      Enroll Now
                    </button> */}
              </div>
            </Popover>

            <Popover content={content} title="Title" placement="top">
              <div className="course">
                <img src="/images/course1.png" className="img-fluid" alt="" />
                <strong className="text-secondary mt-3 mb-0">
                  Teacher finishing school
                </strong>
                <small className="d-block">Mrs Ken Nkwonta</small>
                <small className="mb-2 mt-2">Rating</small>
                <small>
                  <strong className="text-danger d-block">&#8358;10,000</strong>
                </small>
                {/* <button className="btn-primary border rounded text-light py-1 px-4">
                      Enroll Now
                    </button> */}
              </div>
            </Popover>

            <Popover content={content} title="Title" placement="top">
              <div className="course">
                <img src="/images/course2.png" className="img-fluid" alt="" />
                <strong className="text-secondary mt-3 mb-0">
                  Social Polish
                </strong>
                <small className="d-block">Mrs Ken Nkwonta</small>
                <small className="mb-2 mt-2">Rating</small>
                <small>
                  <strong className="text-danger d-block">&#8358;10,000</strong>
                </small>
                {/* <button className="btn-primary border rounded text-light py-1 px-4">
                      Enroll Now
                    </button> */}
              </div>
            </Popover>

            <Popover content={content} title="Title" placement="top">
              <div className="course">
                <img src="/images/course1.png" className="img-fluid" alt="" />
                <strong className="text-secondary mt-3 mb-0">
                  Teacher finishing school
                </strong>
                <small className="d-block">Mrs Ken Nkwonta</small>
                <small className="mb-2 mt-2">Rating</small>
                <small>
                  <strong className="text-danger d-block">&#8358;10,000</strong>
                </small>
                {/* <button className="btn-primary border rounded text-light py-1 px-4">
                      Enroll Now
                    </button> */}
              </div>
            </Popover>

            <Popover content={content} title="Title" placement="top">
              <div className="course">
                <img src="/images/course2.png" className="img-fluid" alt="" />
                <strong className="text-secondary mt-3 mb-0">
                  Social Polish
                </strong>
                <small className="d-block">Mrs Ken Nkwonta</small>
                <small className="mb-2 mt-2">Rating</small>
                <small>
                  <strong className="text-danger d-block">&#8358;10,000</strong>
                </small>
                {/* <button className="btn-primary border rounded text-light py-1 px-4">
                      Enroll Now
                    </button> */}
              </div>
            </Popover>
          </Slider>

          <button
            className="btn rounded-circle prev arrows"
            onClick={this.previous}
          >
            <i className="fas fa-chevron-left rounded-circle p-2"></i>
          </button>
          <button
            className="btn rounded-circle next arrows"
            onClick={this.next}
          >
            <i className="fas fa-chevron-right p-2"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default CoursesComp;
