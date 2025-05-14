import "./PurchaseSummary.css";

export default function PurchaseSummary({ purchases, products }) {
  const items = products.filter((p) => purchases[p.id] > 0);
  if (items.length === 0) return null;

  // Toplam harcama
  const totalSpent = items.reduce(
    (acc, p) => acc + purchases[p.id] * p.price,
    0
  );

  return (
    <div className="reciept">
      <h3>Your Receipt</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((p) => (
          <li
            key={p.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
            }}
          >
            <span>
              {p.name} x{purchases[p.id]}
            </span>
            <span className="price1">
              ${(purchases[p.id] * p.price).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>

      {/* Araya çizgi */}
      <hr />

      {/* Toplam harcama */}
      <div className="total">
        <span>Total</span>
        <span className="price1">${totalSpent.toLocaleString()}</span>
      </div>
    </div>
  );
}
