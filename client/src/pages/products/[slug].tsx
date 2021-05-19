import Head from "next/head";
import { Fragment } from "react";
import products from "../../products.json";
import { fromImageToUrl } from "../../utils/urls";
const product = products[0];

const ProductComp = () => {
  return (
    <Fragment>
      <Head>
        {product.meta_title && <title>{product.meta_title}</title>}

        {product.meta_description && (
          <meta name="description" content={product.meta_description}></meta>
        )}
      </Head>

      <div className="course">
        <img src={fromImageToUrl(product.image)} className="img-fluid" alt="" />
        <div className="course-details mt-2">
          <strong className="text-secondary mt-3 mb-0">{product.name}</strong>

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
          <p>{product.content}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductComp;
