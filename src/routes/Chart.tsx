import dayjs from "dayjs";
import ApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { fetchChartData } from "../api";
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
interface chartProps {
  coinId: string;
}

const Chart = ({ coinId }: chartProps) => {
  const { isLoading, data } = useQuery<ICoinHistorical[]>(
    [coinId, "chart"],
    () => fetchChartData(coinId)
  );
  console.log(data);
  return (
    <>
      {isLoading ? (
        "loading..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => price.close) as any,
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
              type: "area",
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              categories: data?.map((price) =>
                dayjs.unix(price.time_open).format("DD MMM")
              ),
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
            },
          }}
        />
      )}
    </>
  );
};

export default Chart;
