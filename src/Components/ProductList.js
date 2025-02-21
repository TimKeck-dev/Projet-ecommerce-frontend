import React, { useState, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Erreur lors du chargement :", error));
  }, []);

  return (
    <div className="product-list">
      {products.length > 0 ? (
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={product.image_url} alt={product.name} className="card-img-top" />
                <div className="card-body">
                  <h3 className="card-title">{product.name}</h3>
                  <p className="card-price">{product.price} €</p>
                  <p className="card-description">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Aucun produit disponible</p>
      )}
    </div>
  );
};

export default ProductList;
