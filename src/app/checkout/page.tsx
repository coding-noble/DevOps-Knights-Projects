"use client";

import React, { useEffect, useState } from "react";
import Header from "../header";
import Footer from "../footer";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CartItem {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    creator: string;
    quantity: number;
}

export default function CheckoutPage() {
    const [cart, setCart] = useState<CartItem[]>([]);
    const router = useRouter();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(storedCart);
    }, []);

    const getTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleCheckout = () => {
        const totalAmount = getTotal().toFixed(2);

        sessionStorage.setItem("purchasedItems", JSON.stringify(cart));

        localStorage.removeItem("cart");
        setCart([]);

        router.push(`/checkout/thank-you?total=${totalAmount}`);
    };

    if (cart.length === 0) {
        return (
            <div style={pageContainer}>
                <Header />
                <p style={emptyCartText}>Your cart is empty.</p>
                <Footer />
            </div>
        );
    }

    return (
        <div style={pageContainer}>
            <Header />

            <div style={checkoutContainer}>
                <h1 style={title}>Checkout</h1>

                <div style={itemsContainer}>
                    {cart.map((item) => (
                        <div key={item.id} style={itemCard}>
                            <Image src={item.image} alt={item.name} width={80} height={80} style={imageStyle} />
                            <div style={itemDetails}>
                                <h2 style={itemName}>{item.name}</h2>
                                <p style={itemCreator}>By {item.creator}</p>
                                <p style={itemPrice}>${item.price.toFixed(2)} x {item.quantity}</p>
                                <p style={itemTotal}>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={totalContainer}>
                    <h2>Total Amount: ${getTotal().toFixed(2)}</h2>
                </div>

                <div style={buttonContainer}>
                    <button onClick={handleCheckout} style={checkoutButton}>Complete Purchase</button>
                </div>
            </div>

            <Footer />
        </div>
    );
}

const pageContainer: React.CSSProperties = {
    backgroundColor: '#eadbcb',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
};

const checkoutContainer: React.CSSProperties = {
    width: '80%',
    maxWidth: '1000px',
    backgroundColor: '#e3ceb9',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
};

const title: React.CSSProperties = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#cda882',
    textAlign: 'center',
    marginBottom: '20px',
};

const itemsContainer: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '20px',
};

const itemCard: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    backgroundColor: '#dcc1a7',
    borderRadius: '12px',
    padding: '15px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

const imageStyle: React.CSSProperties = {
    borderRadius: '8px',
    objectFit: 'cover',
    flexShrink: 0,
};

const itemDetails: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
};

const itemName: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#cda882',
};

const itemCreator: React.CSSProperties = {
    fontSize: '14px',
    color: '#d4b595',
};

const itemPrice: React.CSSProperties = {
    fontSize: '16px',
    color: '#333',
};

const itemTotal: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#cda882',
};

const totalContainer: React.CSSProperties = {
    textAlign: 'right',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#cda882',
    marginBottom: '20px',
};

const buttonContainer: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
};

const checkoutButton: React.CSSProperties = {
    backgroundColor: '#cda882',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 20px',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
};

const emptyCartText: React.CSSProperties = {
    fontSize: '20px',
    color: '#cda882',
    textAlign: 'center',
    marginTop: '20px',
};
