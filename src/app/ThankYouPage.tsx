import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import Header from './header.tsx';
import Footer from './footer.tsx';

const ThankYouPage = () => {
  const [currentDate, setCurrentDate] = useState('');

  // This function will get the current date
  const getCurrentDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  };

  // useEffect will set the current date
  useEffect(() => {
    setCurrentDate(getCurrentDate());
  }, []);

  return (
    <div>
      {/* this is the Header section */}
      <Header />

      {/* this is the Thank You section */}
      <section>
        <h2>Thank You</h2>
      </section>

      {/* Receipt Section */}
      <section>
        <h3>Receipt Information:</h3>
        <ul>
          <li>Date: {currentDate}</li>
          <li>Total: {/* will need to pull this info from the cart page */}</li>
        </ul>
      </section>

      {/* this is the Footer section */}
      <Footer />
    </div>
  );
};

export default ThankYouPage;