"use client";
import { useEffect, useState } from "react";
import styles from "@/app/ui/dashboard/charts/charts.module.css";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Fungsi untuk fetch data dari API
const fetchData = async () => {
    const response = await fetch("/api/getMeasurement");
    const result = await response.json();
    return result;
};

const ChartsPage = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        fetchData().then((data) => {
            // Urutkan data berdasarkan 'date' atau ID dan ambil 10 data terbaru
            const sortedData = data
                .sort((a, b) => new Date(b.date) - new Date(a.date)) // Mengurutkan berdasarkan tanggal terbaru
                .slice(0, 10); // Ambil hanya 10 data terbaru
            setChartData(sortedData);
        });
    }, []);

    // Fungsi untuk menampilkan tiap chart dengan data dan judul
    const renderChart = (title, dataKey) => (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart data={chartData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
                    <Legend />
                    <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );

    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                {renderChart("Water Level", "waterLevel")}
                {renderChart("Water Temperature", "waterTemp")}
                {renderChart("Air Temperature", "airTemp")}
                {renderChart("Air Humidity", "airHumidity")}
                {renderChart("Air Pressure", "airPressure")}
                {renderChart("Wind Speed", "windSpeed")}
                {renderChart("Rainfall", "curahHujan")}
            </div>
        </div>
    );
};

export default ChartsPage;
