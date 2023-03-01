import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
