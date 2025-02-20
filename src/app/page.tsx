"use client";

import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import ItemCard from "./ItemCard";

interface Item {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    creator: string;
}

export default function Home() {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        fetch("/items.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => setItems(data.items))
            .catch((error) => console.error("Error loading items:", error));
    }, []);

    return (
        <div style={homeContainerStyle}>
            <Header />

            <div style={itemGridStyle}>
                {items.length > 0 ? (
                    items.map((item) => <ItemCard key={item.id} {...item} />)
                ) : (
                    <p style={loadingTextStyle}>Loading items...</p>
                )}
            </div>

            <Footer />
        </div>
    );
}

// Styles
const homeContainerStyle: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
};

const itemGridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px",
};

const loadingTextStyle: React.CSSProperties = {
    fontSize: "18px",
    textAlign: "center",
    color: "#cda882",
};
