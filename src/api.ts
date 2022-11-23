const BASE_URL = "https://api.coinpaprika.com/v1";

export const fetchCoins = async () => {
  const response = await (await fetch(`${BASE_URL}/coins`)).json();
  const result = response.slice(0, 100);

  //   const arr = [];
  //   for (let i = 0; i < json.length; i += 100) {
  //     arr.push(json.slice(i, i + 100));
  //   }
  //   return arr;

  return result;
};

export const fetchCoinInfo = async (coinId: string) => {
  return await (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
};

export const fetchCoinTickers = async (coinId: string) => {
  return await (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();
};

export const fetchChartData = async (coinId: string) => {
  return await (
    await fetch(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`)
  ).json();
};
