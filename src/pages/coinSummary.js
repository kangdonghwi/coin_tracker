/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import CoinList from "../components/CoinList";
import FavoriteList from "../components/FavoriteList";
import { BsStar } from "react-icons/bs";

const coinSummary = () => {
  const [favorite, setFavorite] = useState(false);

  const handleClick = () => {
    setFavorite(!favorite);
  };

  return (
    <>
      <button onClick={handleClick}>
        <BsStar />
      </button>
      <div className="coin-app">
        {favorite ? <FavoriteList /> : <CoinList />}
      </div>
    </>
  );
};

export default coinSummary;
