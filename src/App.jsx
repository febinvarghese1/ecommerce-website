import Home from "./pages/Home";
import "./styles/main.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Product from "./components/Products/SingleProduct";
import { ContextProvider } from "./context/GlobalContext";
import About from "./pages/About";
import AddProduct from "./pages/AddProduct";
import ProductsContainer from "./pages/ProductsContainer";
function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsContainer />} />
          <Route path="/about" element={<About />}/>
          <Route path="/add" element={<AddProduct />}/>
          <Route path="/product">
            <Route index element={<Product />} />
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
