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
            <div style={card}>
                <div style={imageContainer}>
                    {image ? <Image src={image} alt={name} width={100} height={100} style={imageStyle} /> : <div />}
                </div>
                <div>
                    <h3 style={title}>{name}</h3>
                    <p style={descriptionStyle}>{description}</p>
                    <p style={priceStyle}>${price.toFixed(2)}</p>
                    <p style={creatorStyle}>By {creator}</p>
                </div>
            </div>
        </Link>
    );
};

const card: React.CSSProperties = {
    borderRadius: '12px',
    backgroundColor: '#e3ceb9',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',  // Here we specify a valid value for flexDirection
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    width: '250px',
    textAlign: 'center',
    transition: 'transform 0.2s',
};

const imageContainer: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '12px',
};

const imageStyle: React.CSSProperties = {
    borderRadius: '8px',
    objectFit: 'cover',
};

const title: React.CSSProperties = {
    color: '#cda882',
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
};

const descriptionStyle: React.CSSProperties = {
    color: '#d4b595',
    fontSize: '14px',
    marginBottom: '12px',
};

const priceStyle: React.CSSProperties = {
    color: '#dcc1a7',
    fontSize: '16px',
    marginBottom: '8px',
};

const creatorStyle: React.CSSProperties = {
    color: '#eadbcb',
    fontSize: '12px',
    fontStyle: 'italic',
};

export default ItemCard;
