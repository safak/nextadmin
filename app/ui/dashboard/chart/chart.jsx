"use client"

import { useState } from "react";
import {
  BarChart, Bar, LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./chart.module.css";

export const TinyBarChart = ({ opt, title, dataKey, datas }) => {
  const options = [
    { value: "all", text: "All" },
  ];
  opt = opt || options
  const [selected, setSelected] = useState(opt[0].value) || "all"
  const [data, setData] = useState(datas[0])
  const handleChange = (value) => {
    setSelected(value);
    setData(datas[value])
    console.log(data)
  }

  // console.log(data)
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <select value={selected} onChange={(e) => { handleChange(e.target.value); }} className={styles.dropdown} name="period" id=""
        >
          {opt.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
      {/* <BarChartContent data={data} dataKey={dataKey} /> */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={500}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 50 }}
        >
          <Bar barSize={20} dataKey="count" fill="#1976D2" />
          <XAxis dataKey={dataKey} />
          <YAxis dataKey="count" />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Legend verticalAlign="top" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const Chart = () => {
  return (
    <div className={styles.container}>
      <h2>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDashArray="3 3" /> */}
          <XAxis datakey="name" />
          <YAxis />
          <Tooltip contentStyle={{background:"#151c12c", border: "none"}} />
          <Legend verticalAlign="top" />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// export default Chart;