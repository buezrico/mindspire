import React from "react";
import Slider from "react-slick";
// import products from "../products.json";
// import { products } from "../products";
// import { fromImageToUrl } from "../utils/urls";
import Link from "next/link";

const CoursesComp = () => {
  // slider: any;
  // products: any;

  // constructor(props) {
  //   super(props);
  const slider = React.createRef();
  // }

  // render() {
  const settings: any = {
    className: "center",
    // centerMode: true,
    infinite: true,
    // centerPadding: "5rem",
    slidesToShow: 4,
    speed: 500,
    arrows: true,
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
        <Slider ref={slider} {...settings}>
          {products.map((product) => (
            <Link href={`/products/${product.slug}`}>
              <a>
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
              </a>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CoursesComp;

// export async function getStaticProps() {
//   const product_res = await fetch(`${API_URL}/products/`);
//   const products = product_res.json();

//   return {
//     props: {
//       products,
//     },
//   };
// }

const products = [
  {
    id: 1,
    name: "Get It Right",
    content:
      "Get it right course available on mindspire. Learn how to get things right.",
    meta_description: "Get it right course for old teachers",
    meta_title: "get it right course I",
    price: 49.99,
    slug: "get-it-right",
    image: "/images/course1.png",
  },

  {
    id: 2,
    name: "Get It Right",
    content:
      "Get it right course available on mindspire. Learn how to get things right.",
    meta_description: "Get it right course for old teachers",
    meta_title: "get it right course I",
    price: 49.99,
    slug: "get-it-right",
    image: "/images/course1.png",
  },

  {
    id: 3,
    name: "Get It Right",
    content:
      "Get it right course available on mindspire. Learn how to get things right.",
    meta_description: "Get it right course for old teachers",
    meta_title: "get it right course I",
    price: 49.99,
    slug: "get-it-right",
    image: "/images/course1.png",
  },

  {
    id: 4,
    name: "Get It Right",
    content:
      "Get it right course available on mindspire. Learn how to get things right.",
    meta_description: "Get it right course for old teachers",
    meta_title: "get it right course I",
    price: 49.99,
    slug: "get-it-right",
    image: "/images/course1.png",
  },

  {
    id: 5,
    name: "Get It Right",
    content:
      "Get it right course available on mindspire. Learn how to get things right.",
    meta_description: "Get it right course for old teachers",
    meta_title: "get it right course I",
    price: 49.99,
    slug: "get-it-right",
    image: "/images/course1.png",
  },
];
