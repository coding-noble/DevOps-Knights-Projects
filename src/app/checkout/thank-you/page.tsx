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
    <div>
      <Header />

      <section>
        <h2>Thank You</h2>
        <p>Your order has been successfully placed!</p>
      </section>

      <section>
        <h3>Receipt Information:</h3>
        <ul>
          <li>Date: {currentDate}</li>
          <li>Total: ${getTotal()}</li>
        </ul>
      </section>

      <section>
        <h3>Items Purchased:</h3>
        <ul>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <li key={item.id}>
                {item.name} x{item.quantity} — ${(item.price * item.quantity).toFixed(2)}
              </li>
            ))
          ) : (
            <li>No items purchased.</li>
          )}
        </ul>
      </section>

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
