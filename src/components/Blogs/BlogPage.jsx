import React from 'react';
import Contact from '../ContactForm'; 
import './BlogPage.css'; 

export default function BlogPage() {
  return (
    <article className="blog-container">
      <header>
        <h1 className="blog-title">How XS Funds Differs from Traditional Mutual Funds</h1>
        {/* <img
          src="/images/blog-xs-vs-traditional.jpg"
          alt="XS Funds vs Traditional Mutual Funds"
          className="blog-image"
        /> */}
      </header>

      <section className="blog-section">
        <h2>No Management Fees: Keeping More Returns for You</h2>
        <p>
          Traditional mutual funds often charge investors fees based on the assets managed, which can eat into your overall return, especially over the long term. XS Funds takes a transparent approach—no hidden fees mean more of your money stays invested and has the potential to grow.
        </p>
      </section>

      <section className="blog-section">
        <h2>A Disciplined Investment Approach with a 6-Month Lock-in Period</h2>
        <p>
          XS Funds incorporates a 6-month lock-in period, which requires investors to hold their investment for at least six months...
        </p>
      </section>

      <section className="blog-section">
        <h2>Personalized Portfolio Management</h2>
        <p>
          Unlike many traditional funds that follow a one-size-fits-all strategy, XS Funds offers personalized portfolio management...
        </p>
      </section>

      <section className="blog-section">
        <h2>Transparency and Real-Time Updates</h2>
        <p>
          Transparency is a cornerstone of XS Funds' philosophy...
        </p>
      </section>

      <section className="blog-section">
        <h2>Leveraging Modern Technology for Seamless Communication</h2>
        <p>
          XS Funds leverages modern technology, including seamless communication channels like WhatsApp...
        </p>
      </section>

      <section className="blog-section">
        <h2>Strategic and Flexible Investment Options</h2>
        <p>
          While traditional mutual funds might limit themselves to specific asset classes or sectors...
        </p>
      </section>

      <section className="blog-section">
        <h2>Conclusion</h2>
        <p>
          XS Funds offers a modern, investor-friendly alternative to traditional mutual funds...
        </p>
      </section>

      {/* Contact Form Component */}
      <Contact />

      {/* Disclaimer Section */}
      <section className="disclaimer">
        <h3>Disclaimer</h3>
        <p>
          The information provided in this blog is for informational purposes only and does not constitute financial advice. Please consult a professional advisor before making any investment decisions.
        </p>
      </section>
    </article>
  );
}
