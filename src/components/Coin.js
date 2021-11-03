import React from "react";
import { Link } from "react-router-dom";
import "./Coin.css";

const Coin = ({ coin, deleteCoin }) => {
  return (
    <Link to={`/coins/${coin.id}`} className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={coin.image} alt="crypto" />
          <h1>{coin.name}</h1>
          <p className="coin-symbol">{coin.symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">{coin.current_price.toLocaleString()}원</p>
          <p className="coin-volume">{coin.total_volume.toLocaleString()}</p>

          {coin.price_change_percentage_24h < 0 ? (
            <p className="coin-percent red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          ) : (
            <p className="coin-percent green">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          )}

          <p className="coin-marketcap">
            {coin.market_cap_change_24h.toLocaleString()}
          </p>
        </div>
      </div>
      <i
        onClick={(e) => {
          e.preventDefault();
          deleteCoin(coin.id);
        }}
        className="delete-icon far fa-times-circle text-danger"
      ></i>
    </Link>
  );
};

export default Coin;
