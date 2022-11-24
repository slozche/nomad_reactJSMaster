import { fetchChartData } from "../api";
import { useQuery } from "react-query";
import ApexChart from "react-apexcharts";
import dayjs from "dayjs";

interface ICoinHistorical {
  close: string;
  high: string;
  low: string;
  market_cap: number;
  open: string;
  time_close: number;
  time_open: number;
  volume: string;
}
interface priceProps {
  coinId: string;
}
const Price = ({ coinId }: priceProps) => {
  const { isLoading, data } = useQuery<ICoinHistorical[]>(
    [coinId, "chart"],
    () => fetchChartData(coinId)
  );
  return (
    <>
      {isLoading ? (
        "loading..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data: data?.map((price) => [
                dayjs.unix(price.time_open),
                [price.open, price.high, price.low, price.close],
              ]) as any,
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              type: "candlestick",
              height: 350,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            xaxis: {
              type: "datetime",
            },
            yaxis: {
              show: false,
              tooltip: {
                enabled: true,
              },
            },
          }}
        />
      )}
    </>
  );
};

export default Price;
