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
                        console.log("Geolocation error:", error);
                        console.log("Location access denied. Using default location.");
                        setUserLocation([-34.6037, -58.3816]); // Default to Buenos Aires
                    },
                    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
                );
            } else {
                console.log("Geolocation not supported");
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
        { position: [-34.6037, -58.3816], image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Alouatta_pigra_-_josebarrientos_-_464580361.jpeg", title: "Alouatta Pigra (YucatÃ¡n Black Howler)" },
        { position: [-34.6118, -58.4173], image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Cervus_eldii4.jpg", title: "Cervus Eldii (Eld's Deer)" },
        { position: [-34.5711, -58.4116], image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Dolichotis_patagonum_at_Allwetterzoo_M%C3%BCnster_1_August_2020_JM.jpg_%283%29.jpg", title: "Dolichotis patagonum (Patagonian Mara)" },
        { position: [-34.6175, -58.3551], image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Capybara._Hydrochoerus_hydrochaeris.jpg", title: "Hydrochoerus hydrochaeris (Capybara)" },
        { position: [-34.5683, -58.4112], image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Southern_screamer_%28Chauna_torquata%29.JPG", title: "Chauna torquata (Southern Screamer)" },
        { position: [-34.5764, -58.4117], image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Anatidae_Cygnus_melancoryphus_1.3.jpg", title: "Cygnus melancoryphus (Black-necked Swan)" },
        { position: [-34.5106, -58.4716], image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Nutria_%28Myocastor_coypus%29_in_a_partially_frozen_river_Ljubljanica.jpg", title: "Myocastor coypus (Coypu / Nutria)" },
        { position: [-34.5931, -58.3745], image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Rufous_hornero_%28Red_ovenbird%29%28Furnarius_rufus%29.JPG", title: "Furnarius rufus (Rufous Hornero)" },
        { position: [-34.6097, -58.4306], image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Monk_Parakeet_%28Myiopsitta_monachus%29_%2828420470712%29.jpg", title: "Myiopsitta monachus (Monk Parakeet)" },
        { position: [-34.6081, -58.3700], image: "https://upload.wikimedia.org/wikipedia/commons/8/86/Torcaza_%28Zenaida_auriculata%29%2C_Uruguay%2C_2015.jpg", title: "Zenaida auriculata (Eared Dove)" },
        { position: [-34.5678, -58.4265], image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Green-barred_Woodpecker_%28Colaptes_melanochloros%29_male.jpg", title: "Colaptes melanochloros (Green-barred Woodpecker)" },
        { position: [-34.5462, -58.4495], image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Tortuga_morrocoy_Sabanero.jpg", title: "Chelonoidis carbonarius (Red-footed Tortoise)" },
        { position: [-34.6410, -58.4040], image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Snowy_Egret_flying_0587.jpg", title: "Egretta thula (Snowy egret)" },
        { position: [-34.6420, -58.4050], image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Southern_Lapwing_%28Vanellus_chilensis%29_%288077646901%29.jpg", title: "Vanellus chilensis (Southern lapwing)" },
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
