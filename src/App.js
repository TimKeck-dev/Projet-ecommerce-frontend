import React from "react";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";

function App() {
  return (
    <div className="container">
      <Navbar />
      <h1 className="title text-center my-4">Nos Produits</h1>
      <ProductList />
    </div>
  );
}

export default App;
