'use client'
// import { LineChart, ResponsiveContainer } from 'recharts';
import styles from './chart.module.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: "Sun",
        answered: 4000,
        rejected: 2400,
    },
    {
        name: "Mon",
        answered: 3000,
        rejected: 1398,
    },
    {
        name: "Tue",
        answered: 2000,
        rejected: 3800,
    },
    {
        name: "Wed",
        answered: 2780,
        rejected: 3800,
    },
    {
        name: "Thu",
        answered: 1890,
        rejected: 4800,
    },
    {
        name: "Fri",
        answered: 2390,
        rejected: 3800,
    },
    {
        name: "Sat",
        answered: 3490,
        rejected: 4300,
    },
]

const Chart = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Performance</h2>
           <ResponsiveContainer width="90%" height="90%">
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
                <Tooltip contentStyle={{background:"#151c2c", border:"none"}} />
                <Legend />
                <Line type="monotone" dataKey="rejected" stroke="#8884d8" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="answered" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
            </LineChart>
        </ResponsiveContainer>
    </div>
    )
}

export default Chart