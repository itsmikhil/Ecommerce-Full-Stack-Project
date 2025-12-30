import React, { useContext } from "react";
import { assets, products } from "../assets/frontend_assets/assets";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const AllCollection = () => {
  let {
    filteredProducts,
    setpricingOrder,
    showFilters,
    setshowFilters,
    handleSelectionOfFilter,
    handleSelectionOfsubCategory,
    handleSingleProduct,
  } = useContext(ProductContext);

  return (
    <div className="w-full min-h-screen">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-10 px-6 md:px-24 py-10">
        {/* filters */}
        <div className="w-full md:w-[22%] flex flex-col gap-6">
          <h1
            className="uppercase text-lg tracking-wider flex items-center justify-between cursor-pointer"
            onClick={() => setshowFilters(!showFilters)}
          >
            Filters
            <img
              className={`w-[0.6rem] ${
                showFilters ? "rotate-270" : "rotate-90"
              }`}
              src={assets.dropdown_icon}
              alt=""
            />
          </h1>

          {/* Categories */}
          {showFilters && (
            <>
              <div className="border border-gray-200 p-5 flex flex-col gap-4">
                <h1 className="uppercase text-sm font-medium">Categories</h1>
                <div className="text-sm text-gray-600 flex flex-col gap-3">
                  <label className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      value="Men"
                      onChange={handleSelectionOfFilter}
                    />
                    Men
                  </label>
                  <label className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      value="Women"
                      onChange={handleSelectionOfFilter}
                    />
                    Women
                  </label>
                  <label className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      value="Kids"
                      onChange={handleSelectionOfFilter}
                    />
                    Kids
                  </label>
                </div>
              </div>

              {/* subcategories */}
              <div className="border border-gray-200 p-5 flex flex-col gap-4">
                <h1 className="uppercase text-sm font-medium">Sub Category</h1>
                <div className="text-sm text-gray-600 flex flex-col gap-3">
                  <label className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      value="Topwear"
                      onChange={handleSelectionOfsubCategory}
                    />
                    Topwear
                  </label>
                  <label className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      value="Bottomwear"
                      onChange={handleSelectionOfsubCategory}
                    />
                    Bottomwear
                  </label>
                  <label className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      value="Winterwear"
                      onChange={handleSelectionOfsubCategory}
                    />
                    Winterwear
                  </label>
                </div>
              </div>
            </>
          )}
        </div>

        {/* All collection */}
        <div className="flex-1">
          {/* Top */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2 uppercase">
              <h1 className="text-3xl font-light text-gray-500">All</h1>
              <h1 className="text-3xl font-medium">Collection</h1>
            </div>

            <div className="border border-gray-300 px-3 py-2 text-sm">
              <select
                className="outline-none bg-transparent"
                onChange={(e) => setpricingOrder(e.target.value)}
              >
                <option value="Relevant">Relevant</option>
                <option value="High to low">High to low</option>
                <option value="Low to High">Low to High</option>
              </select>
            </div>
          </div>

          {/* Products */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {products &&
              filteredProducts &&
              filteredProducts.map((item, index) => (
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
      </div>
    </div>
  );
};

export default AllCollection;
