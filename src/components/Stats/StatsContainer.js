import React, { useEffect, useState } from "react";
import "./StatsContainer.scss";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { Pie, Line, Bar } from "react-chartjs-2";
import { FetchAPIServiceGraphData } from "../../services/FetchAPIService";
import Loading from "./../Loading/Loading";
import Wrapper from "../../helpers/wrapper";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Legend
);

const chartData = {};
let pieData = [];

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Augest",
  "September",
  "October",
  "November",
  "December",
];

function StatsContainer(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (props.theme) {
      ChartJS.defaults.color = "#fff";
    }

    pieData = [];
    async function fetchData() {
      const result = await FetchAPIServiceGraphData(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all",
        "cases",
        "2021"
      );

      for (const item in result) {
        chartData[item] = {};
        chartData[item].labels = Object.keys(result[item]);
        chartData[item].values = Object.values(result[item]);
        chartData[item].lastValue =
          chartData[item].values[chartData[item].values.length - 1];
      }

      if (result["2020"]) {
        setLoading(false);
      }

      for (const key in chartData) {
        pieData.push(chartData[key].lastValue);
      }

      pieData = pieData.filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
      });
    }

    fetchData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        text: "Line Chart",
      },
    },
    scales: {
      y: {
        ticks: {
          // For a category axis, the val is the index so the lookup via getLabelForValue is needed
          callback: function (val, index) {
            return formatCmpctNumber(val);
          },
        },
      },
      x: {
        ticks: {
          // For a category axis, the val is the index so the lookup via getLabelForValue is needed
          callback: function (val, index) {
            let month = this.getLabelForValue(val);
            return month.substring(0, 3);
          },
        },
      },
    },
  };

  /**
   *
   * @param {<Number>} number the mumber value in thousands, millions, or billion
   * @returns {<String>} number formated in short format
   */
  function formatCmpctNumber(number) {
    let options = {
      notation: "compact",
      compactDisplay: "short",
    };
    const usformatter = Intl.NumberFormat("en-US", options);
    return usformatter.format(number);
  }

  const dataLine = {
    labels,
    datasets: [
      {
        label: "2020",
        data: chartData["2020"] ? chartData["2020"].values : [],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "2021",
        data: chartData["2021"] ? chartData["2021"].values : [],
        borderColor: "rgb(27, 207, 180)",
        backgroundColor: "rgba(27, 207, 180,0.5)",
      },
      {
        label: "2022",
        data: chartData["2022"] ? chartData["2022"].values : [],
        borderColor: "rgb(220, 53, 69)",
        backgroundColor: "rgba(220, 53, 69,0.5)",
      },
      {
        label: "2023",
        data: chartData["2023"] ? chartData["2023"].values : [],
        borderColor: "rgb(224, 181, 15)",
        backgroundColor: "rgba(224, 181, 15,0.5)",
      },
    ],
  };

  const data = {
    labels: ["20", "21", "22", "23"],
    datasets: [
      {
        label: "# of Votes",
        data: pieData.sort(),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Wrapper>
      <div
        className={`stats-container__linegraph sc-chart ${
          props.theme ? "dark" : ""
        }`}
      >
        {loading && <Loading />}
        {!loading && <Line options={options} data={dataLine} />}
      </div>
      <div
        className={`stats-container__bargraph sc-chart ${
          props.theme ? "dark" : ""
        }`}
      >
        {loading && <Loading />}
        {!loading && <Bar options={options} data={dataLine} />}
      </div>
      <div
        className={`stats-container__piechart sc-chart ${
          props.theme ? "dark" : ""
        }`}
      >
        {loading && <Loading />}
        {!loading && <Pie data={data} />}
      </div>
    </Wrapper>
  );
}

export default StatsContainer;
