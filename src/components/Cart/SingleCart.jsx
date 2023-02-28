import React, { useState, useContext, useEffect } from "react";
import { GlobalState } from "../../context/GlobalContext";
import { AiFillDelete, AiOutlineHeart } from "react-icons/ai";
import { IoMdGitCompare } from "react-icons/io";
const SingleCart = ({ product, setTotalFunc }) => {
  const {  deleteCartItems,value } =
    useContext(GlobalState);
  const [cartVal, setCartVal] = useState(product.quantity);

  console.log(value)

  useEffect(() => {
    // quantity.map((id) => {
    //   if(id === product.id ){
    //     setCartVal(prev => prev + 1)
    //   }
    // })
    setTotalFunc(product.price,cartVal,"addTotal");
  }, []);

  
  return (
    <div className="cart__contain_card">
      <div className="cart__contain_card_img">
        <img src={product.image} />
      </div>
      <div className="cart__contain_card_details">
        <section className="cart__contain_card_details_items">
          <h2>{product.title}</h2>
          <h4>$ {(product.price * cartVal).toFixed(1)}</h4>
        </section>
        <section className="cart__contain_card_details_items cart__contain_card_details_items--button">
          <button
            onClick={() => {
              if (cartVal > 1) {
                setTotalFunc(product.price, cartVal, "remove");
              }
              return setCartVal((prev) => (prev > 1 ? prev - 1 : 1));
            }}
          >
           <p>  -</p>
          </button>
          <span>{cartVal}</span>
          <button
            onClick={() => {
              if (cartVal !== 10) {
                setTotalFunc(product.price, cartVal, "add");
              }

              return setCartVal((prev) => (prev < 10 ? prev + 1 : prev));
            }}
          >
           <p> +</p>
          </button>
        </section>
        <section className="cart__contain_card_details_items cart__contain_card_details_items--flex">
          <div>
            <i>
              <AiOutlineHeart />
            </i>
            <span>Add to wishlist</span>
          </div>
          <div>
            <i>
              <IoMdGitCompare />
            </i>
            <span>Add to compare</span>
          </div>
        </section>
        <section className="cart__contain_card_details_items">
          <h3>Category: {product.category}</h3>
        </section>
        
        <section className="cart__contain_card_details_items cart__contain_card_details_items--button">
          <button className="cart__contain_card_details_items--button--remove"
            onClick={() => {
              setTotalFunc(product.price, cartVal, "removeAll");
              return deleteCartItems(product.id, product);
            }}
          >
            remove from cart
            <i>
              <AiFillDelete />
            </i>
          </button>
        </section>
      </div>
    </div>
  );
};

export default SingleCart;
