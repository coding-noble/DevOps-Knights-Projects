import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <header style={headerStyle}>
      <div style={logoContainerStyle}>
        <Image src="/images/logo.png" alt="Logo" width={100} height={50} style={logoStyle} />
        <h1 style={titleStyle}>DevOps Knights</h1>
      </div>
      <nav>
        <ul style={navListStyle}>
          {['/', 'About', 'Contact', 'Checkout'].map((item, index) => (
            <li key={item} style={navItemStyle}>
              <Link
                href={index === 0 ? '/' : `/${item.toLowerCase()}`}
                style={{
                  ...linkStyle,
                  backgroundColor: hoveredLink === item ? '#d4b595' : 'transparent',
                }}
                onMouseEnter={() => setHoveredLink(item)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {index === 0 ? 'Home' : item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// Styles
const headerStyle: React.CSSProperties = {
  backgroundColor: '#cda882',
  color: '#fff',
  padding: '15px 30px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '12px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
};

const logoContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const logoStyle: React.CSSProperties = {
  borderRadius: '8px',
};

const titleStyle: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginLeft: '10px',
  color: '#fff',
};

const navListStyle: React.CSSProperties = {
  listStyleType: 'none',
  display: 'flex',
  gap: '20px',
  margin: 0,
  padding: 0,
};

const navItemStyle: React.CSSProperties = {
  fontSize: '16px',
  fontWeight: '500',
};

const linkStyle: React.CSSProperties = {
  textDecoration: 'none',
  color: '#fff',
  transition: 'background-color 0.3s',
  borderRadius: '8px',
  padding: '8px 12px',
  cursor: 'pointer',
};
