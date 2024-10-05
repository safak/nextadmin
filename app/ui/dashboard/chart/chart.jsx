"use client"
import styles from './chart.module.css';
import {Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const data = [
    {
        name: 'Page A',
        uv: 4000,
        visit: 2400,
        click: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        visit: 1398,
        click: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        visit: 9800,
        click: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        visit: 3908,
        click: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        visit: 4800,
        click: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        visit: 3800,
        click: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        visit: 4300,
        click: 2100,
    },
];
const Chart = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Weekly Recap</h2>
            <ResponsiveContainer width="100%" height="90%">
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
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip contentStyle={{background: "#151c2c", border: "none"}} />
                    <Legend />
                    <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart;