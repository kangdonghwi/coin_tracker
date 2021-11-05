/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import CoinList from "../components/CoinList";
import FavoriteList from "../components/FavoriteList";
import { BsStar, BsHouse } from "react-icons/bs";

const coinSummary = () => {
  const [favorite, setFavorite] = useState(false);

  const handleGoHome = () => {
    setFavorite(false);
  };
  const handleClick = () => {
    setFavorite(!favorite);
  };

  return (
    <>
      <div className="list-header">
        <BsHouse onClick={handleGoHome} type="button" className="Home" />
        <BsStar onClick={handleClick} type="button" />
      </div>
      <div className="coin-app">
        {favorite ? <FavoriteList /> : <CoinList />}
      </div>
    </>
  );
};

export default coinSummary;
