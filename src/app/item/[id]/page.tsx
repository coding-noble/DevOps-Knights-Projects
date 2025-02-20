"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "../../header";
import Footer from "../../footer";
import Image from "next/image";

interface Item {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    creator: string;
}

interface CartItem extends Item {
    quantity: number;
}

export default function ItemPage() {
    const { id } = useParams();
    const router = useRouter();
    const [item, setItem] = useState<Item | null>(null);

    useEffect(() => {
        if (id) {
            fetch("/items.json")
                .then((res) => res.json())
                .then((data) => {
                    const foundItem = data.items.find((i: Item) => i.id === id);
                    setItem(foundItem || null);
                })
                .catch((err) => console.error("Failed to load item:", err));
        }
    }, [id]);

    const addToCart = () => {
        if (!item) return;

        const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");

        const existingItem = cart.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...item, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(`${item.name} added to cart!`);
    };

    const buyNow = () => {
        if (!item) return;

        addToCart();
        router.push("/checkout");
    };

    if (!item) return <p>Loading item or item not found...</p>;

    return (
        <div>
            <Header />
            <div>
                <div>
                    <Image src={item.image} alt={item.name} />
                    <h1>{item.name}</h1>
                    <p>${item.price.toFixed(2)}</p>
                    <div>
                        <button onClick={addToCart}>Add to Cart</button>
                        <button onClick={buyNow}>Buy Now</button>
                    </div>
                </div>
                <div>
                    <p>{item.description}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
