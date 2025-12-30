import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Title from "./Title";
import { NavLink } from "react-router-dom";

const RelatedProducts = () => {
  let {
    relatedProducts,
    handleSingleProduct,
  } = useContext(ProductContext);

  return (
    <div className="w-full py-20">
      <Title text1={"Related"} text2={"Products"} para={""} />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 px-6 md:px-24 py-10">
        {relatedProducts.map((item, index) => (
          <NavLink
            key={index}
            onClick={() => handleSingleProduct(item._id)}
            to={`/product/${item._id}`}
            className="group"
          >
            <div className="overflow-hidden bg-gray-100">
              <img
                src={item.images[0]}
                alt=""
                className="group-hover:scale-110 transition duration-300 object-cover"
              />
            </div>

            <div className="mt-3 text-center">
              <h1 className="text-sm text-gray-700">{item.name}</h1>
              <h1 className="text-sm font-medium">${item.price}</h1>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
