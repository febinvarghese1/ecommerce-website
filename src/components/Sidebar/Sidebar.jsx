import React, { useState, useContext  } from "react";
import { GlobalState } from "../../context/GlobalContext";

const Sidebar = () => {
  const { setOrder,setCategory,setFilterPrice,setRange,range } =
    useContext(GlobalState);
 //this function is used to check which category is used
 const handleCheckHandler = (e) => {
  let value = e.target.value;
  setCategory(value);
};

//this function is used to check the price which is filtered
const checkFilterPrice = (e) => {
  if (e.target.checked) {
    setFilterPrice(e.target.value);
  }
};

//this function is used to get the order from the sidebar
const setOrderFunc = (e) => {
  setOrder(e.target.value);
};


//this function is used to get the range from the sidebar

const setRangeFunc = (e) => {
  //setting the filter price from the range
  setFilterPrice(range);
  setRange(e.target.value);
};
   
 

  return (
    <div className="sidebar">
      <div className="sidebar__top">
      </div>
      <div className="sidebar__center">
        <div className="sidebar__center_discount">
          <h3>Category</h3>
          <div className="sidebar__center_discount_items">
            <input
              type="radio"
              id="men's clothing"
              value="men's clothing"
              name="category"
              onChange={handleCheckHandler}
            />
            <label htmlFor="men's clothing">Mens clothing</label>
          </div>
          <div className="sidebar__center_discount_items">
            <input
              type="radio"
              id="women's clothing"
              value="women's clothing"
              name="category"
              onChange={handleCheckHandler}
            />
            <label htmlFor="women's clothing">Women clothing</label>
          </div>
          <div className="sidebar__center_discount_items">
            <input
              type="radio"
              id="jewelery"
              value="jewelery"
              name="category"
              onChange={handleCheckHandler}
            />
            <label htmlFor="jewelery">Jewlery</label>
          </div>
          <div className="sidebar__center_discount_items">
            <input
              type="radio"
              id="electronics"
              value="electronics"
              name="category"
              onChange={handleCheckHandler}
            />
            <label htmlFor="electronics">Electronics</label>
          </div>
        </div>
        <div className="sidebar__center_filter">
          <h3>Filters</h3>
          <section>
            <input
              type="radio"
              id="20"
              value="20"
              name="filterprice"
              onChange={checkFilterPrice}
            />
            <label htmlFor="20">Under 20</label>
          </section>
          <section>
            <input
              type="radio"
              id="50"
              value="50"
              name="filterprice"

              onChange={checkFilterPrice}
            />
            <label htmlFor="50">Under 50</label>
          </section>
          <section>
            <input
              type="radio"
              id="100"
              value="100"
              name="filterprice"

              onChange={checkFilterPrice}
            />
            <label htmlFor="100">Under 100</label>
          </section>
          <section>
            <input
              type="radio"
              id="200"
              name="filterprice"
              value="200"
              onChange={checkFilterPrice}
            />
            <label htmlFor="200">Under 200</label>
          </section>
        </div>

        <div className="sidebar__center_price">
          <h3>Filters the prices</h3>
          <section>
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={setOrderFunc}
            />
            <label htmlFor="asc">Price Low to High</label>
          </section>
          <section>
            <input
              type="radio"
              id="dsc"
              value="dsc"
              name="price"
              onChange={setOrderFunc}
            />
            <label htmlFor="dsc">Price High to Low</label>
          </section>
        </div>

        <div className="sidebar__center_range">
          <h3>Select the range</h3>
          <section>
            <label>0</label>
            <input
              type="range"
              list="values"
              min={0}
              step={10}
              max={200}
              onChange={setRangeFunc}
            />
            <label>{range}</label>
          </section>
        </div>
      </div>
      {/* <div className="sidebar__bottom">
        <button>Apply filters</button>
      </div> */}
    </div>
  );
};

export default Sidebar;
