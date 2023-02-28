import React, { useState, useEffect, useContext } from "react";
import Card from "./Card";
import { GlobalState } from "../../context/GlobalContext";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ProductInput from "./ProductInput";
import { baseUrl, fetchApi } from "../../Data/API";

const ProductList = () => {
  const [visible, setVisible] = useState(3);
  const [btn, setBtn] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showBtn,setShowBtn] = useState(true);

  const { category, filterPrice, order } = useContext(GlobalState);

  const [products, setProducts] = useState([]);
  console.log(order);

  //used to fetch data from the api
  // const fetchApi = async () => {
  //   setLoading(true);

  //   setProducts(data);
  //   setLoading(false);
  // };

  const getCategoryData = async () => {
    setLoading(true);
    const response = await fetch(
      `${baseUrl}/category/${category}`
    );
    const data = await response.json();
    setProducts(data);
    setLoading(false);
  };

  const getData = async () => {
    setLoading(true);
    const data = fetchApi(baseUrl);
    const result = await data;
    setProducts(result);
    setLoading(false);
  };

  //fetch the api whenever the category changes
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getCategoryData();
    setSearchInput("");
  }, [category]);

  //read more functionality
  const visibleHandler = () => {
    setBtn(!btn);
    setVisible((prev) => (prev === 3 ? prev * 8 : 3));
  };

  //sorting function when ascending (low) and descending (high)
  const sortFunction = (a, b) => {
    if (order == "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  };

  return (
    <>
      <div className="productList">
        <div className="productList__container">
          {loading ? (
            <div className="loading">
              <AiOutlineLoading3Quarters className="loading-animation" />
            </div>
          ) : (
            <section className="productList__container_right">
              <ProductInput setSearchInput={setSearchInput} />
              <div className="productList__container_right--contain">
                {products
                  ?.filter((item) => {
                    if(searchInput.toLowerCase() === ""){
                      return item;
                    }if(item.title.toLowerCase().includes(searchInput)){
                      return item.title.toLowerCase().includes(searchInput);
                    }else{
                    }
                   
                  })
                  ?.filter((value) => {
                    return value.price < filterPrice;
                  })
                  ?.sort((a, b) => {
                    return sortFunction(a, b);
                  })
                  ?.slice(0, visible)

                  ?.map((product) => (
                    <Card key={product.id} product={product} />
                  ))}
              </div>
              <div className="productList__btn">
                {showBtn ? <button onClick={visibleHandler}>
                  {btn ? <span>show less</span> : <span>show more</span>}
                </button> :
                <>
                <h1>
                  There are no products</h1></>}
                
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default React.memo(ProductList);