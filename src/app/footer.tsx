import React, { useState } from 'react';
import Link from 'next/link';

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <footer style={footerStyle}>
      <p style={footerTextStyle}>© 2025 DevOps Knights. All rights reserved.</p>
      <ul style={footerListStyle}>
        {['Twitter', 'GitHub', 'LinkedIn'].map((platform) => (
          <li key={platform} style={footerItemStyle}>
            <Link
              href={`https://${platform.toLowerCase()}.com`}
              style={{
                ...footerLinkStyle,
                backgroundColor: hoveredLink === platform ? '#d4b595' : 'transparent',
              }}
              onMouseEnter={() => setHoveredLink(platform)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {platform}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;

// Styles
const footerStyle: React.CSSProperties = {
  backgroundColor: '#cda882',
  color: '#fff',
  padding: '20px 30px',
  textAlign: 'center',
  borderRadius: '12px',
  marginTop: '30px',
  boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)',
};

const footerTextStyle: React.CSSProperties = {
  fontSize: '16px',
  marginBottom: '10px',
};

const footerListStyle: React.CSSProperties = {
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  margin: 0,
  padding: 0,
};

const footerItemStyle: React.CSSProperties = {
  fontSize: '16px',
};

const footerLinkStyle: React.CSSProperties = {
  textDecoration: 'none',
  color: '#fff',
  fontWeight: '500',
  padding: '6px 10px',
  borderRadius: '8px',
  transition: 'background-color 0.3s',
  cursor: 'pointer',
};
