"use client"

import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import styles from "./chart.module.css"

const data = [
  {
    name: "Sun",
    lastweek: 4000,
    predicted: 3400,
  },
  {
    name: "Mon",
    lastweek: 3000,
    predicted: 2398,
  },
  {
    name: "Tue",
    lastweek: 2000,
    predicted: 3800,
  },
  {
    name: "Wed",
    lastweek: 2780,
    predicted: 3908,
  },
  {
    name: "Thu",
    lastweek: 1890,
    predicted: 4800,
  },
  {
    name: "Fri",
    lastweek: 2390,
    predicted: 3800,
  },
  {
    name: "Sat",
    lastweek: 3490,
    predicted: 4300,
  },
];

const Chart = () => {


  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Load Analytics
      </h2>
      <ResponsiveContainer width='100%' height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          >
            {/*rns import if want to be used** <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip contentStyle={{ backgroundColor: '#151c2c', border: "none"}}/>
            <Legend />
            <Line type="monotone" dataKey="lastweek" stroke="#8884d8" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="predicted" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
          </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart