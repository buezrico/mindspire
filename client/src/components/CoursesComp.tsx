import React, { Component, useState } from "react";
import Slider from "react-slick";
import products from "../products.json";

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
            {products.map((product) => (
              <div className="course" key={product.name}>
                <img src={product.image} className="img-fluid" alt="" />
                <div className="course-details mt-2">
                  <strong className="text-secondary mt-3 mb-0">
                    {product.name}
                  </strong>

                  <small className="d-block mb-2">{product.meta_title}</small>
                  <small className="desc text-justify">
                    {product.meta_description}
                  </small>
                  <small>
                    <strong className="text-danger d-block mt-2 mb-2">
                      &#8358;{product.price}
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
