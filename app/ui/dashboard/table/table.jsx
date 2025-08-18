"use client"
import { useEffect, useState } from 'react'
import styles from './table.module.css'

const Table = () => {
    const [data, setData] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/getMeasurement');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };
        fetchData();
    }, []);

    // Tentukan data yang akan ditampilkan berdasarkan state showAll
    const displayedData = showAll ? data : data.slice(0, 10);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Recent Data</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>No</td>
                        <td>Water level (m)</td>
                        <td>Water temperature (°C)</td>
                        <td>Air temperature (°C)</td>
                        <td>Humidity (%)</td>
                        <td>Pressure (hPa)</td>
                        <td>Velocity (m/s)</td>
                        <td>Rainfall (mm)</td>
                        <td>Date</td>
                    </tr>
                </thead>
                <tbody>
                    {displayedData.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.waterLevel}</td>
                            <td>{item.waterTemp}</td>
                            <td>{item.airTemp}</td>
                            <td>{item.airHumidity}</td>
                            <td>{item.airPressure}</td>
                            <td>{item.windSpeed}</td>
                            <td>{item.curahHujan}</td>
                            <td>{new Date(item.date).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Tombol Show All / Show Less */}
            <button onClick={() => setShowAll(!showAll)} className={styles.toggleBtn}>
                {showAll ? "Show Less" : "Show All"}
            </button>
        </div>
    );
}

export default Table;
