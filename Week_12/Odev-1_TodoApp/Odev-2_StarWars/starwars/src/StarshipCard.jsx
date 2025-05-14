import React from "react";
import { useNavigate } from "react-router-dom";
import "./StarshipCard.css";

const StarshipCard = ({ ship }) => {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/starship/${encodeURIComponent(ship.url)}`);
  };

  return (
    <div className="card-container">
      <img src="./ship.jfif" alt="starwarsship" />
      <h3>{ship.name}</h3>
      <p>Model: {ship.model}</p>
      <p>Speed: {ship.max_atmosphering_speed}</p>
      <button className="detail-btn" onClick={goToDetails}>
        Details
      </button>
    </div>
  );
};

export default StarshipCard;
