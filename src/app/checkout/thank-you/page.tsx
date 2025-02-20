"use client";

import React, { useEffect, useState, Suspense } from "react";
import Header from "../../header";
import Footer from "../../footer";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const ThankYouPage = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getCurrentDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  useEffect(() => {
    setCurrentDate(getCurrentDate());
    const storedItems = JSON.parse(sessionStorage.getItem("purchasedItems") || "[]");
    setCartItems(storedItems);
  }, []);

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div style={pageContainer}>
      <Header />

      <div style={thankYouContainer}>
        <section style={sectionStyle}>
          <h2 style={title}>Thank You!</h2>
          <p style={subtitle}>Your order has been successfully placed!</p>
        </section>

        <section style={sectionStyle}>
          <h3 style={sectionTitle}>Receipt Information:</h3>
          <ul style={listStyle}>
            <li>Date: {currentDate}</li>
            <li>Total: ${getTotal()}</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h3 style={sectionTitle}>Items Purchased:</h3>
          <ul style={listStyle}>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <li key={item.id} style={listItemStyle}>
                  {item.name} <span style={quantityStyle}>x{item.quantity}</span> — ${(item.price * item.quantity).toFixed(2)}
                </li>
              ))
            ) : (
              <li style={listItemStyle}>No items purchased.</li>
            )}
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default function ThankYouPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYouPage />
    </Suspense>
  );
}

// Styles
const pageContainer: React.CSSProperties = {
  backgroundColor: "#eadbcb",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
};

const thankYouContainer: React.CSSProperties = {
  width: "80%",
  maxWidth: "800px",
  backgroundColor: "#e3ceb9",
  borderRadius: "12px",
  padding: "20px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  marginBottom: "20px",
};

const sectionStyle: React.CSSProperties = {
  marginBottom: "20px",
  padding: "15px",
  backgroundColor: "#dcc1a7",
  borderRadius: "12px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
};

const title: React.CSSProperties = {
  fontSize: "32px",
  fontWeight: "bold",
  color: "#cda882",
  marginBottom: "10px",
};

const subtitle: React.CSSProperties = {
  fontSize: "18px",
  color: "#333",
  marginBottom: "10px",
};

const sectionTitle: React.CSSProperties = {
  fontSize: "22px",
  fontWeight: "bold",
  color: "#cda882",
  marginBottom: "10px",
};

const listStyle: React.CSSProperties = {
  listStyleType: "none",
  padding: 0,
  margin: 0,
  fontSize: "16px",
  color: "#333",
};

const listItemStyle: React.CSSProperties = {
  padding: "8px 0",
  borderBottom: "1px solid #e3ceb9",
};

const quantityStyle: React.CSSProperties = {
  fontWeight: "bold",
  color: "#cda882",
};
