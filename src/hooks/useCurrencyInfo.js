/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
