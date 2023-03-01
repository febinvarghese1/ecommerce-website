import React from "react";
import HomeProduct from "../components/Home/HomeProductsList";
import { AiOutlineArrowRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="home--img">
        <img src={process.env.PUBLIC_URL + "/assets/img-bg.jpg"} alt="" />
      </div>
      <div className="home__container">
        <div className="home__container_left">
          <h1>Fashion for everyone</h1>
          <p>
            Shopkart provides everyone the type of fashion which they are
            looking for, there are variety of products which match the users
            satisfaction and needs for the user.
          </p>
          <div className="home__container_left_btn">
            <button>
              Join Now <AiOutlineArrowRight />
            </button>

            <button>
              <NavLink to="/products" style={{ color: "white" }}>
                Browse
              </NavLink>
            </button>
          </div>
        </div>
        {/* <Slider /> */}
        <HomeProduct />
      </div>
    </div>
  );
};

export default Home;
