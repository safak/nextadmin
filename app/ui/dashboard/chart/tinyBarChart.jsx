"use client"

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from "./chart.module.css";

export const TinyBarChart = ({data}) => {
  return (
    <div className={styles.container}>
      <h2>News Portal on Spotlight</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="count" fill="orange" />
          <XAxis dataKey="source" />
          <YAxis dataKey="count" />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Legend />
        </BarChart>
      </ResponsiveContainer>;
    </div>
  );

}

// export default TinyBarChart;