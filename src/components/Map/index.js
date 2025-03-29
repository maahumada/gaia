"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import mapStyles from "./styles"; // Import styles

// Dynamically update the map center when user location changes
const ChangeView = ({ center }) => {
    const map = useMap();
    useEffect(() => {
        if (center) {
            map.setView(center, 13, { animate: true });
        }
    }, [center, map]);
    return null;
};

const Map = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [userIcon, setUserIcon] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Ensure Leaflet is only accessed on the client
            const userPin = L.icon({
                iconUrl: "/img/pin.png", // Place your pin image in /public/img/
                iconSize: [40, 40], // Bigger icon
                iconAnchor: [30, 75],
                popupAnchor: [0, -70],
            });
            setUserIcon(userPin);

            // Get user's location
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        setUserLocation([position.coords.latitude, position.coords.longitude]);
                    },
                    (error) => {
                        console.error("Geolocation error:", error);
                        alert("Location access denied. Using default location.");
                        setUserLocation([-34.6037, -58.3816]); // Default to Buenos Aires
                    },
                    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
                );
            } else {
                console.error("Geolocation not supported");
                setUserLocation([-34.6037, -58.3816]); // Fallback
            }
        }
    }, []);

    // Function to create a custom icon with border and border-radius
    const createCustomIcon = (imageUrl) => {
        return L.divIcon({
            html: `<div style="
                width: 90px; 
                height: 90px; 
                background-image: url('${imageUrl}');
                background-size: cover;
                background-position: center;
                border: 3px solid white;
                border-radius: 50%;
                box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            "></div>`,
            className: "custom-icon",
            iconSize: [50, 50], // Increased size
            iconAnchor: [40, 50], // Adjusted for new size
            popupAnchor: [0, -80],
        });
    };

    // Sample locations
    const points = [
        { position: [-34.6037, -58.3816], image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Alouatta_pigra_-_josebarrientos_-_464580361.jpeg", title: "Alouatta Pigra" },
        { position: [-34.6118, -58.4173], image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Cervus_eldii4.jpg", title: "Cervus Eldii" },
    ];

    return (
        <div style={mapStyles.container}>
            <MapContainer center={[-34.6037, -58.3816]} zoom={13} style={mapStyles.map}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* Change the map center when user location is available */}
                {userLocation && <ChangeView center={userLocation} />}

                {/* User location marker */}
                {userLocation && userIcon && (
                    <Marker position={userLocation} icon={userIcon}>
                        <Popup>You are here!</Popup>
                    </Marker>
                )}

                {/* Custom markers */}
                {points.map((point, index) => (
                    <Marker key={index} position={point.position} icon={createCustomIcon(point.image)}>
                        <Popup>{point.title}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Map;
