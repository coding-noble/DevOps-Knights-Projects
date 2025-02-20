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
        <div>
            <Header />

            <div>
                {items.length > 0 ? (
                    items.map((item) => <ItemCard key={item.id} {...item} />)
                ) : (
                    <p>Loading items...</p>
                )}
            </div>

            <Footer />
        </div>
    );
}
