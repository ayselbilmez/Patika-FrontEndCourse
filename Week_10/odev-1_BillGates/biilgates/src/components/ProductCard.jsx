import "./ProductCard.css";
import React from "react";

const ProductCard = ({ product, count, onBuy, onSell, balance }) => {
  const handleBuy = () => onBuy(product);
  const handleSell = () => onSell(product);

  return (
    <div
      className="cards"
      style={{
        border: "none",
        borderRadius: "1px",
        padding: "20px",
        width: "275px",
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      <img src={product.image} alt={product.name} />
      <h2 className="h2">{product.name}</h2>
      <p className="p1">${product.price.toLocaleString()}</p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          marginTop: "-5px",
        }}
      >
        <button className="btn1" onClick={handleSell} disabled={count === 0}>
          Sell
        </button>

        <div className="btn2">{count}</div>

        <button
          className="btn3"
          onClick={handleBuy}
          disabled={balance < product.price}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
