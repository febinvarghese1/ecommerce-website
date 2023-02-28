import React, { useState, useContext } from "react";
import { GlobalState } from "../../context/GlobalContext";
import SidebarInputs from "./SidebarInputs";

const Sidebar = () => {
  const { setOrder, setCategory, setFilterPrice, setRange, range } =
    useContext(GlobalState);

  //this function is used to check which category is used
  const setCategoryFunction = (e) => {
    let value = e.target.value;
    setCategory(value);
  };

  //this function is used to check the price which is filtered
  const setFilterPriceFunction = (e) => {
    if (e.target.checked) {
      setFilterPrice(e.target.value);
    }
  };

  //this function is used to get the order from the sidebar
  const setOrderFunction = (e) => {
    setOrder(e.target.value);
  };

  //this function is used to get the range from the sidebar

  const setRangeFunction = (e) => {
    //setting the filter price from the range
    setFilterPrice(range);
    setRange(e.target.value);
  };

  const CategoryDataValues = [
    {
      type: "radio",
      id: "men's clothing",
      value: "men's clothing",
      name: "category",
      onChange: setCategoryFunction ,
    },
    {
      type: "radio",
      id: "women's clothing",
      value: "women's clothing",
      name: "category",
      onChange: setCategoryFunction ,
    },
    {
      type: "radio",
      id: "jewelery",
      value: "jewelery",
      name: "category",
      onChange:setCategoryFunction ,
    },
    {
      type: "radio",
      id: "electronics",
      value: "electronics",
      name: "category",
      onChange: setCategoryFunction ,
    },
  ];


const PriceDataValues =  [
  {
    type:"radio",
    id:"20",
    value:"20",
    name:"filterprice",
    onChange:setFilterPriceFunction
  ,
  },{
    type:"radio",
    id:"50",
    value:"50",
    name:"filterprice",
    onChange:setFilterPriceFunction
  },{
    type:"radio",
    id:"100",
    value:"100",
    name:"filterprice",
    onChange:setFilterPriceFunction
  },
  {
    type:"radio",
    id:"200",
    value:"200",
    name:"filterprice",
    onChange:setFilterPriceFunction
  }
]





  return (
    <div className="sidebar">
      <div className="sidebar__top"></div>
      <div className="sidebar__center">
        <div className="sidebar__center_discount">
          <h3>Category</h3>
          <div className="sidebar__center_discount_items">
           {CategoryDataValues.map(category=>(
            <SidebarInputs type={category.type} id={category.id} name={category.name} value={category.value} onChange={category.onChange} />
           ))}
          </div>
        </div>
        <div className="sidebar__center_filter">
          <h3>Filters</h3>
            {PriceDataValues.map(price =>(
          <SidebarInputs type={price.type} name={price.name} id={price.id} value={price.value} onChange={price.onChange} />
              
            ))}
        </div>

        <div className="sidebar__center_price">
          <h3>Filters the prices</h3>
          <section>
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={setOrderFunction}
            />
            <label htmlFor="asc">Price Low to High</label>
          </section>
          <section>
            <input
              type="radio"
              id="dsc"
              value="dsc"
              name="price"
              onChange={setOrderFunction}
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
              onChange={setRangeFunction}
            />
            <label>{range}</label>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
