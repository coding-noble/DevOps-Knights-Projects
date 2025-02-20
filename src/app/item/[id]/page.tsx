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

    if (!item) return <p style={loadingText}>Loading item or item not found...</p>;

    return (
        <div style={pageContainer}>
            <Header />
            <div style={itemContainer}>
                <div style={imageContainer}>
                    <Image src={item.image} alt={item.name} width={300} height={300} style={imageStyle} />
                </div>
                <div style={detailsContainer}>
                    <h1 style={title}>{item.name}</h1>
                    <p style={price}>${item.price.toFixed(2)}</p>
                    <div style={buttonContainer}>
                        <button style={addToCartButton} onClick={addToCart}>Add to Cart</button>
                        <button style={buyNowButton} onClick={buyNow}>Buy Now</button>
                    </div>
                </div>
            </div>
            <div style={descriptionContainer}>
                <p>{item.description}</p>
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

const itemContainer: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    borderRadius: '12px',
    backgroundColor: '#e3ceb9',
    padding: '20px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    width: '80%',
    maxWidth: '1000px',
    margin: '20px auto',
};

const imageContainer: React.CSSProperties = {
    borderRadius: '12px',
    overflow: 'hidden',
    flexShrink: 0,
};

const imageStyle: React.CSSProperties = {
    borderRadius: '12px',
    objectFit: 'cover',
};

const detailsContainer: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '10px',
};

const title: React.CSSProperties = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#cda882',
    marginBottom: '10px',
};

const price: React.CSSProperties = {
    fontSize: '24px',
    color: '#d4b595',
    marginBottom: '20px',
};

const buttonContainer: React.CSSProperties = {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
};

const addToCartButton: React.CSSProperties = {
    backgroundColor: '#dcc1a7',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 15px',
    color: '#333',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
};

const buyNowButton: React.CSSProperties = {
    backgroundColor: '#cda882',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 15px',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
};

const descriptionContainer: React.CSSProperties = {
    backgroundColor: '#d4b595',
    borderRadius: '12px',
    padding: '20px',
    width: '80%',
    maxWidth: '1000px',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
};

const loadingText: React.CSSProperties = {
    color: '#cda882',
    fontSize: '18px',
    textAlign: 'center',
    marginTop: '20px',
};
