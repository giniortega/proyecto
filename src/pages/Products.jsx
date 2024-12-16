import React from 'react';
import '../styles/Products.css';

function Products() {
  
  return (
    <div className="products">
      <h1 className="products-title">Productos</h1>

      <div className="products-grid">
        <img src="./imangenes/cinturon.jpg" alt="cinturon" className="product-image" />
        <img src="./imangenes/carteras.jpg" alt="carteras" className="product-image" />
        <img src="./imangenes/chaquetas.jpg" alt="chaquetas" className="product-image" />
        <img src="./imangenes/zapatos.jpg" alt="zapatos" className="product-image" />
        <img src="./imangenes/colores.jpg" alt="colores" className="product-image" />
        <img src="./imangenes/tamaños.jpg" alt="tamaños" className="product-image" />
      </div>
      
    </div>
  );
}

export default Products;
