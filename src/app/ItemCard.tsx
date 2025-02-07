import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ItemCardProps {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    creator: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ id, name, price, description, image, creator }) => {
    return (
        <Link href={`/item/${id}`} passHref>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    padding: "15px",
                    margin: "10px",
                    width: "600px",
                    cursor: "pointer",
                    textDecoration: "none",
                    backgroundColor: "#fff",
                }}
            >
                {/* Image Section */}
                <div style={{ marginRight: "15px" }}>
                    {image ? (
                        <Image src={image} alt={name} width={80} height={80} />
                    ) : (
                        <div style={{ width: "80px", height: "80px", backgroundColor: "#eee" }} />
                    )}
                </div>

                {/* Text Content */}
                <div style={{ flex: 1 }}>
                    <h3 style={{ margin: "0", fontSize: "18px" }}>{name}</h3>
                    <p style={{ margin: "5px 0", fontSize: "14px" }}>{description}</p>
                    <p style={{ margin: "5px 0", fontWeight: "bold" }}>${price.toFixed(2)}</p>
                    <p style={{ fontSize: "12px", color: "#555" }}>By {creator}</p>
                </div>
            </div>
        </Link>
    );
};

export default ItemCard;
