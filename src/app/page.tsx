"use client";

import React, { useEffect, useState } from "react";
import Header from "./header";  // Adjust path as needed
import Footer from "./footer";  // Adjust path as needed
import ItemCard from "./ItemCard";  // Adjust path as needed

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
      .then((data) => setItems(data.items)) // 🔥 Fix: Access "items" inside JSON
      .catch((error) => console.error("Error loading items:", error));

  }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {items.length > 0 ? (
          items.map((item) => <ItemCard key={item.id} {...item} />)
        ) : (
          <p>Loading items...</p>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
