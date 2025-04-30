"use client"

import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import styles from "./chart.module.css";
import * as d3 from "d3-dsv"; // Import d3-dsv for CSV parsing
import React, { useState, useEffect } from 'react';

// Function to read data from a CSV file
const readCSV = async (filePath) => {
  try {
    const response = await fetch(filePath);
    const text = await response.text();
    const data = d3.csvParse(text);
    return data.slice(1,8); //slice to first 7
  } catch (error) {
    console.error("Error reading CSV file:", error);
    return []; // Return an empty array if there's an error
  }
};

const Chart = () => {
  const [chartData, setChartData] = useState([]);
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(7);

  useEffect(() => {
    // Read data from a CSV file (replace 'data.csv' with your actual CSV file path)
    readCSV("./data.csv").then((data) => setChartData(data));
  }, []);

  const handleNextClick = () => {
    console.log("New startIndex:", startIndex + 7);
    setStartIndex(startIndex + 7);
    setEndIndex(endIndex + 7);
  };

  let slicedData = chartData.slice(startIndex, endIndex);
  console.log("Sliced data:", slicedData);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Load Analytics</h2>
      <button onClick={handleNextClick}>Next 7</button>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={400}
          data={slicedData} // Use the fetched data
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          fit
        >
          {/* rns import if want to be used** <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: "#151c2c", border: "none" }} />
          <Legend />
          <Line type="monotone" dataKey="lastweek" stroke="#8884d8" />
          <Line type="monotone" dataKey="predicted" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;