import React from 'react';
import styles from './page.module.css';
import Header from './header.tsx';
import Footer from './footer.tsx';
 
const ThankYouPage = () => {
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
<li>Date:</li>
<li>Total:</li>
</ul>
</section>
        {/* this is the Footer section */}
<Footer />
</div>
    );
  };
  export default ThankYouPage;