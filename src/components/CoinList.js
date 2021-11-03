import React, { useEffect, useState } from "react";
import coinGecko from "../apis/coinGecko";
import Coin from "./Coin";

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  console.log(coins);
  useEffect(() => {
    const fetchData = async () => {
      const response = await coinGecko.get("/coins/markets", {
        params: {
          vs_currency: "krw",
          order: "market_cap_desc",
          per_page: "30",
          page: "1",
          sparkline: "false",
        },
      });
      setCoins(response.data);
    };

    fetchData();
  }, []);

  const renderCoins = () => {
    return (
      <ul>
        {coins.map((coin) => {
          return <Coin key={coin.id} coin={coin}></Coin>;
        })}
      </ul>
    );
  };

  return <div>{renderCoins()}</div>;
};

export default CoinList;
