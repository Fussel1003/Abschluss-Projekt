import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/Configure.css";

const Configure = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { serverName } = location.state || { serverName: "Unbekannt" };

  const [slots, setSlots] = React.useState(50);
  const [storage, setStorage] = React.useState(50);
  const pricePerSlot = 0.5;
  const pricePerGB = 0.3;
  const price = slots * pricePerSlot + storage * pricePerGB;

  const handlePayment = () => {
    navigate("/payment", {
      state: { price, serverName, slots, storage },
    });
  };

  return (
    <div className="configure-container">
      <h2>Konfiguriere deinen {serverName}-Server</h2>
      <div className="slider-group">
        <label>
          Slots: <span>{slots}</span>
        </label>
        <input
          type="range"
          min="10"
          max="200"
          step="10"
          value={slots}
          onChange={(e) => setSlots(parseInt(e.target.value, 10))}
        />
      </div>
      <div className="slider-group">
        <label>
          Speicherplatz (GB): <span>{storage}</span>
        </label>
        <input
          type="range"
          min="10"
          max="500"
          step="10"
          value={storage}
          onChange={(e) => setStorage(parseInt(e.target.value, 10))}
        />
      </div>
      <h3>Preis: {price.toFixed(2)} €/Monat</h3>
      <button onClick={handlePayment}>Zur Zahlung</button>
    </div>
  );
};

export default Configure;
