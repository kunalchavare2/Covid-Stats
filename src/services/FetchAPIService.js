import axios from "axios";
import { format } from "date-fns";

const config = {
  mode: "no-cors",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

const FetchAPIService = async (apiURL) => {
  const countryData = [];

  try {
    const response = await axios.get(apiURL, config);
    console.log(response);

    const countryDetails = response.data;

    countryDetails.map((element) => {
      let data = {
        id: element.countryInfo.iso2,
        country: element.country,
        latitude: element.countryInfo.lat,
        longitude: element.countryInfo.long,
        flag: element.countryInfo.flag,
        deaths: element.deaths,
        recovered: element.recovered,
        cases: element.cases,
        active: element.active,
      };

      countryData.push(data);
    });

    return countryData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const FetchAPIServiceGraphData = async (apiURL, covidData, year) => {
  try {
    const response = await axios.get(apiURL, config);
    const worldData = response.data[covidData];

    const monthlySum = {
      2020: {},
      2021: {},
      2022: {},
      2023: {},
    };

    for (const dateKey in worldData) {
      const date = new Date(dateKey);
      const dataYear = format(date, "yyyy");
      const month = format(date, "MMMM");

      if (monthlySum.hasOwnProperty(dataYear)) {
        if (!monthlySum[dataYear].hasOwnProperty(month)) {
          monthlySum[dataYear][month] = 0;
        }

        monthlySum[dataYear][month] += worldData[dateKey];
      }
    }

    const result = [];
    for (const dataYear in monthlySum) {
      if (year && year !== dataYear) {
        continue;
      }
      for (const month in monthlySum[dataYear]) {
        result.push({
          year: parseInt(dataYear),
          month,
          total: monthlySum[dataYear][month],
        });
      }
    }

    return monthlySum;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// const result = await FetchAPIServiceGraphData(
//   "https://disease.sh/v3/covid-19/historical/all?lastdays=all",
//   "cases",
//   "2020"
// );
// console.log(result);

export { FetchAPIService, FetchAPIServiceGraphData };
