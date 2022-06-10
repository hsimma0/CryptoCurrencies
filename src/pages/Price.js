import { useState, useEffect } from 'react';

const Price = (props) => {
  // Our api key from coinapi.io
  const apiKey = "3E0B48CC-DCD8-4A5C-B336-8DCD7F024521";
  // Grabbing the Currency symbol from the URL Param
  const symbol = props.match.params.symbol;
  // Using the other two variables to create our URL
  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  //state to hold the coin data
  const [coin, setCoin] = useState(null);

  //function to fetch coin data
  const getCoin = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCoin(data);
  };

  // useEffect to run getCoin when component mounts
  useEffect(() => {
    getCoin();
  }, []);

  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
          <h2>{coin.rate}</h2>
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if coin has data, run the loaded function, otherwise, run loading
  return coin ? loaded() : loading();
};

export default Price;