import React, { Component, useState } from "react";
import Slider from "react-slick";

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
            {coursedata.map((course, i) => (
              <div className="course" key={i}>
                <img src={course.img} className="img-fluid" alt="" />
                <div className="course-details mt-2">
                  <strong className="text-secondary mt-3 mb-0">
                    {course.title}
                  </strong>

                  <small className="d-block mb-2">{course.instructor}</small>
                  <small className="desc text-justify">{course.desc}</small>
                  <small>
                    <strong className="text-danger d-block mt-2 mb-2">
                      &#8358;{course.price}
                    </strong>
                  </small>
                  <button className="btn-primary btn btn-enroll rounded text-center w-100">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default CoursesComp;

const coursedata = [
  {
    title: "Teacher Finishing School",
    img: "/images/course1.png",
    instructor: "Mrs Ken Nkwonta",
    price: "10,000",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque accusantium tempore similique voluptates harum, officiis soluta voluptatibus! Soluta odit, animi quas ",
  },
  {
    title: "Social Polish",
    img: "/images/course2.png",
    instructor: "Mrs Ken Nkwonta",
    price: "10,000",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque accusantium tempore similique voluptates harum, officiis soluta voluptatibus! Soluta odit, animi quas ",
  },
  {
    title: "Career Path",
    img: "/images/course3.png",
    instructor: "Mrs Ken Nkwonta",
    price: "10,000",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque accusantium tempore similique voluptates harum, officiis soluta voluptatibus! Soluta odit, animi quas ",
  },
  {
    title: "Teachers Guide",
    img: "/images/course4.png",
    instructor: "Mrs Ken Nkwonta",
    price: "10,000",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque accusantium tempore similique voluptates harum, officiis soluta voluptatibus! Soluta odit, animi quas ",
  },
  {
    title: "Get It Right",
    img: "/images/course5.png",
    instructor: "Mrs Ken Nkwonta",
    price: "10,000",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque accusantium tempore similique voluptates harum, officiis soluta voluptatibus! Soluta odit, animi quas ",
  },
];
