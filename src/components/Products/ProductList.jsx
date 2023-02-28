import React, { useState, useEffect, useContext } from "react";
import Card from "./SingleCard";
import { GlobalState } from "../../context/GlobalContext";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ProductInput from "./InputProduct";
import { baseUrl, fetchApi, status } from "../../Data/API";

const ProductList = () => {
  const [visible, setVisible] = useState(3);
  const [btn, setBtn] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);

  const { category, filterPrice, order } = useContext(GlobalState);

  const [products, setProducts] = useState([]);
  let itemFound = 0;
  console.log(order);

  //used to fetch data from the api
  // const fetchApi = async () => {
  //   setLoading(true);

  //   setProducts(data);
  //   setLoading(false);
  // };

  const getCategoryData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/category/${category}`);
      const data = await response.json();
      setProducts(data);
    } catch (e) {}
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
  console.log(itemFound);

  const productsComp = products
    ?.filter((item) => {
      if (searchInput.toLowerCase() === "") {
        return item;
      }
      if (item.title.toLowerCase().includes(searchInput)) {
        itemFound = 1;
        return item.title.toLowerCase().includes(searchInput);
      } else {
        itemFound = -1;
      }
    })
    ?.filter((value) => {
      if (value.price < filterPrice) {
        return value.price < filterPrice;
      }
    })
    ?.sort((a, b) => {
      return sortFunction(a, b);
    })
    ?.slice(0, visible)

    ?.map((product) => {
      return <Card key={product.id} product={product} />;
    });

  return (
    <>
      <div className="productList">
        {status ? (
          <div className="productList__server">SERVER FAILED</div>
        ) : (
          <div className="productList__container">
            {loading ? (
              <div className="loading">
                <AiOutlineLoading3Quarters className="loading-animation" />
              </div>
            ) : (
              <section className="productList__container_right">
                <ProductInput
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                  products={products}
                  setProducts={setProducts}
                />
                <div className="productList__container_right--contain">
                  {productsComp}
                </div>
                <div className="productList__btn">
                  {productsComp.length > 0 ? (
                    <button onClick={visibleHandler}>
                      {btn ? <span>show less</span> : <span>show more</span>}
                    </button>
                  ) : (
                    <div className="productList__server">
                      There are no products
                    </div>
                  )}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default React.memo(ProductList);
