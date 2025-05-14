import { useState } from "react";
import products from "./products";
import ProductCard from "./components/ProductCard";
import PurchaseSummary from "./components/PurchaseSummary";
import "./App.css";

export default function App() {
  const [balance, setBalance] = useState(100_000_000_000);
  const [purchases, setPurchases] = useState({});

  const handleBuy = (product) => {
    const id = Number(product.id);
    if (balance >= product.price) {
      setBalance(balance - product.price);
      setPurchases((prev) => ({
        ...prev,
        [id]: (prev[id] || 0) + 1,
      }));
    }
  };

  const handleSell = (product) => {
    const id = Number(product.id);
    if (purchases[id] > 0) {
      setBalance(balance + product.price);
      setPurchases((prev) => ({
        ...prev,
        [id]: prev[id] - 1,
      }));
    }
  };

  return (
    <div className="maindiv">
      <div className="intro">
        <img src="./billgates.jpg" alt="billgates" />
        <h1>Spend Bill Gates' Money</h1>
      </div>

      <div className="balance">${balance.toLocaleString()}</div>

      <div className="product">
        {products.map((product) => {
          const id = Number(product.id);
          return (
            <ProductCard
              key={id}
              product={product}
              canBuy={balance >= product.price}
              canSell={purchases[id] > 0}
              onBuy={() => handleBuy(product)}
              onSell={() => handleSell(product)}
              count={purchases[id] || 0}
              balance={balance}
            />
          );
        })}
      </div>

      <PurchaseSummary purchases={purchases} products={products} />
    </div>
  );
}
