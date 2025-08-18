"use client";  // Menandakan sebagai Client Component

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Configure Leaflet's default icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapPage = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const awsData = [
        { awsNumber: 1, location: [-6.971200, 107.631100], suhu: '28°C', kelembapan: '70%' },
        { awsNumber: 2, location: [-6.972000, 107.632000], suhu: '27°C', kelembapan: '65%' },
        { awsNumber: 3, location: [-6.973500, 107.629800], suhu: '27°C', kelembapan: '65%' },
        // Tambahkan data AWS lainnya di sini
    ];

    if (!isClient) {
        return null; // Render nothing on the server
    }

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <MapContainer center={[-6.973022, 107.630348]} zoom={18} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {awsData.map(({ awsNumber, location, suhu, kelembapan }) => (
                    <Marker key={awsNumber} position={location}>
                        <Popup>
                            AWS Station {awsNumber} <br />
                            Suhu: {suhu} <br />
                            Kelembapan: {kelembapan}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapPage;
