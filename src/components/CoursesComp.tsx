import React, { Component, useState } from "react";
import Slider from "react-slick";
import courses from "../courses.json";
import Link from "next/link";

class CoursesComp extends Component {
  slider: any;

  constructor(props) {
    super(props);
    this.slider = React.createRef();
  }

  render() {
    const settings = {
      className: "center",
      // centerMode: true,
      infinite: true,
      // centerPadding: "5rem",
      slidesToShow: 4,
      speed: 500,
      arrows: true,
      // dots: true,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            // slidesToScroll: 1,
            infinite: true,
            // dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            // slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            // slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div>
        <div className="courses">
          <Slider ref={this.slider} {...settings}>
            {courses.map((course, i) => (
              <div className="course" key={i}>
                <Link href={`/courses/${course.slug} `}>
                  <a>
                    <img src={course.img} className="img-fluid" alt="" />
                    <div className="course-details mt-2">
                      <strong className="text-secondary mt-3 mb-0">
                        {course.title}
                      </strong>

                      <small className="d-block mb-2">
                        {course.instructor}
                      </small>
                      {/* <small className="desc text-justify">{course.desc}</small> */}
                      <small>
                        <strong className="text-danger d-block mt-2 mb-2">
                          &#8358;{course.price}
                        </strong>
                      </small>
                      {/* <button className="btn-primary btn btn-enroll rounded text-center w-100">
                    Enroll Now
                  </button> */}
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default CoursesComp;
