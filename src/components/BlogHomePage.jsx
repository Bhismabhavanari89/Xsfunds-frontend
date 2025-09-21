import React from 'react';

const blogs = [
  {
    title: "How XS Funds Differs from Traditional Mutual Funds",
    desc: "Discover how XS Funds offers unique investment solutions with lock-in benefits, zero management fees, and personalized portfolio management.",
    url: "/blogs/xs-vs-traditional-mutual-funds",
  },
  {
    title: "A Beginner’s Guide to Investing in Stocks Through XS Funds",
    desc: "Learn the essentials of stock investment with XS Funds and understand the benefits and potential risks involved.",
    url: "/blogs/beginners-guide-investing-xs-funds",
  },
  {
    title: "Boosting Returns: How Diversification Works in XS Funds Portfolio",
    desc: "Explore the diversification strategies XS Funds uses to balance risk and maximize potential returns for investors.",
    url: "/blogs/boosting-returns-diversification-xs",
  },
  {
    title: "Tips for New Investors: Avoiding Common Pitfalls in Stock Market Investments",
    desc: "Get practical advice on how to steer clear of common mistakes and make confident investment decisions.",
    url: "/blogs/tips-new-investors-stock-market",
  },
  {
    title: "How XS Funds Simplifies Investment for Busy Professionals",
    desc: "See how XS Funds’ easy-to-use platform and real-time messaging make investing stress-free for busy individuals.",
    url: "/blogs/xs-funds-for-busy-professionals",
  },
  {
    title: "Understanding Market Risks: What Every Investor Should Know Before Investing",
    desc: "Understand market volatility and how XS Funds works to manage risks effectively for your investments.",
    url: "/blogs/understanding-market-risks-xs-funds",
  },
  {
    title: "The Benefits of Diversified Portfolios in Uncertain Markets",
    desc: "Learn why diversification is crucial for protecting and growing your investment, especially during market uncertainties.",
    url: "/blogs/benefits-diversified-portfolios",
  },
];

function BlogHomePage() {
  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: 'auto',
        padding: '2rem 1rem',
        fontFamily: 'Arial, sans-serif',
        color: '#4a5568',
      }}
    >
      <h1 style={{ color: '#2c7a58', textAlign: 'center', marginBottom: '2rem', marginTop: '76px' }}>
        XS Funds Blog
      </h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {blogs.map(({ title, desc, url }, index) => (
          <a
            key={index}
            href={url}
            style={{
              textDecoration: 'none',
              color: '#2c7a58',
              border: '1px solid #cbd5e0',
              borderRadius: '10px',
              padding: '1.5rem',
              boxShadow: '0 4px 8px rgba(44, 122, 88, 0.1)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: 'white',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 10px 15px rgba(44, 122, 88, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(44, 122, 88, 0.1)';
            }}
          >
            <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{title}</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.4', color: '#4a5568' }}>{desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default BlogHomePage;
