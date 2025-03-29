"use client"; // Force this component to be a Client Component

import Map from "@/components/Map"; // Adjust the path as needed

export default function Home() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <Map />
        </div>
    );
}
