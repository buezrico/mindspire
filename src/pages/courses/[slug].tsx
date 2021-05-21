import Head from "next/head";
import { Fragment } from "react";
import courses from "../../courses.json";
// import { fromImageToUrl } from "../../utils/urls";
// const course = courses[0];

const Course = () => {
  return (
    <Fragment>
      <Head>
        {course.title && <title>{course.title}</title>}

        {course.desc && <meta name="description" content={course.desc}></meta>}
      </Head>

      <div className="course">
        <img src={course.img} className="img-fluid" alt="" />
        <div className="course-details mt-2">
          <strong className="text-secondary mt-3 mb-0">{course.title}</strong>

          <small className="d-block mb-2">{course.instructor}</small>
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
      </div>
    </Fragment>
  );
};

export default Course;

export async function getStaticPaths() {
  // const course = await courses
  return {
    paths: courses.map((course) => ({
      params: {
        slug: String(course.slug),
      },
    })),
    fallback: false,
  };
}
