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
            <div>
                <div>
                    {image ? <Image src={image} alt={name} width={100} height={100} /> : <div />}
                </div>
                <div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <p>${price.toFixed(2)}</p>
                    <p>By {creator}</p>
                </div>
            </div>
        </Link>
    );
};

export default ItemCard;
