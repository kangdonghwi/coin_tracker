import React, { useContext, useEffect, useState } from "react";
import coinGecko from "../apis/coinGecko";
import { WatchListContext } from "../context/watchListContext";
import AddCoin from "./AddCoin";
import Coin from "./Coin";

const FavoriteList = () => {
  const [coins, setCoins] = useState([]);
  const { watchList, deleteCoin } = useContext(WatchListContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await coinGecko.get("/coins/markets", {
        params: {
          vs_currency: "krw",
          ids: watchList.join(),
        },
      });
      setCoins(response.data);
    };

    if (watchList.length > 0) {
      fetchData();
    } else setCoins([]);
  }, [watchList]);

  const renderCoins = () => {
    return (
      <ul>
        {coins.map((coin) => {
          return (
            <div className="favor">
              <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin}></Coin>
            </div>
          );
        })}
      </ul>
    );
  };

  return (
    <div>
      <AddCoin />
      {renderCoins()}
    </div>
  );
};

export default FavoriteList;
