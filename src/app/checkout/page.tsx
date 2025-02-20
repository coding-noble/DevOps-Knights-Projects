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
            <div>
                <Header />
                <p>Your cart is empty.</p>
                <Footer />
            </div>
        )
    }

    return (
        <div>
            <Header />

            <div>
                <h1>Checkout</h1>

                <div>
                    {cart.map((item) => (
                        <div key={item.id}>
                            <Image src={item.image} alt={item.name} width={80} height={80} />
                            <div>
                                <h2>{item.name}</h2>
                                <p>By {item.creator}</p>
                                <p>${item.price.toFixed(2)} x {item.quantity}</p>
                                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    <h2>Total Amount: ${getTotal().toFixed(2)}</h2>
                </div>

                <div>
                    <button onClick={handleCheckout}>Complete Purchase</button>
                </div>
            </div>

            <Footer />
        </div>
    );
}
