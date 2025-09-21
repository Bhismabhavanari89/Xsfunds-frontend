import React, { useState } from 'react';

const faqs = [
  {
    question: 'What does XS Funds do with my money?',
    answer: 'XS Funds collects investments from clients and invests the pooled money in various stocks chosen by the XS Funds team to aim for growth and diversification.',
  },
  {
    question: 'Are there any fees or charges?',
    answer: 'As of now, XS Funds does not charge any fees or commissions on the investments.',
  },
  {
    question: 'Can I track the performance of my investment?',
    answer: 'Currently, XS Funds does not provide individual performance tracking or statements. Updates may be provided periodically.',
  },
  {
    question: 'When can I withdraw my investment?',
    answer: 'Withdrawals are allowed only after a minimum lock-in period of 6 months from the date of investment.',
  },
  {
    question: 'Is my investment guaranteed?',
    answer: 'No investment guarantee is provided. Stock investments are subject to market risks, and the value can go up or down.',
  },
  {
    question: 'Can I choose which stocks my money is invested in?',
    answer: 'Investment decisions and stock allocations are made by XS Funds based on their expertise to maintain a diversified portfolio.',
  },
  {
    question: 'What risks should I consider before investing?',
    answer: 'Stock market investments are volatile. XS Funds encourages investors to understand that returns are not assured and to invest only what they can afford to risk.',
  },
  {
    question: 'How do I start investing with XS Funds?',
    answer: 'Contact XS Funds to discuss your investment interests and complete the necessary formalities to begin investing.',
  },
  {
    question: 'What are the benefits of a 6-month withdrawal lock-in period?',
    answer: (
      <>
        <ul>
          <li>Better Investment Planning: Allows the fund manager to invest with a medium-term horizon, avoiding frequent cash flow disruptions.</li>
          <li>Reduced Transaction Costs: Lowers costs and fees by reducing frequent buying and selling.</li>
          <li>Stability in Portfolio: Ensures a stable investment corpus for diversified portfolio management.</li>
          <li>Potential for Higher Returns: Smooths out market volatility over a longer period.</li>
          <li>Discourages Speculation: Encourages long-term investing by preventing impulsive withdrawals.</li>
          <li>Regulatory/Compliance Advantages: Helps maintain compliance with regulatory guidelines.</li>
        </ul>
      </>
    ),
  },
  {
    question: 'How is my money diversified?',
    answer: 'XS Funds invests across different stocks and sectors to spread risk and avoid concentration in any one company or industry.',
  },
  {
    question: 'What should I do if I want to increase my investment?',
    answer: 'You can contact XS Funds directly to discuss additional investment options or top-ups to your existing portfolio.',
  },
  {
    question: 'Are there any tax implications on my investments?',
    answer: 'Tax treatment depends on local regulations regarding capital gains and dividends from stock investments. XS Funds recommends consulting with a tax professional.',
  },
  {
    question: 'How does XS Funds handle market downturns?',
    answer: 'XS Funds aims to mitigate risk through diversification and professional management, but market downturns can still affect portfolio value.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{
        maxWidth: '800px',
        margin: 'auto',
        padding: '2rem 1rem',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '2rem',
          color: '#2c7a58',
          paddingTop: '80px',
          fontSize: '2rem',
          fontWeight: '700',
          lineHeight: '1.2',
        }}
      >
        Frequently Asked Questions
      </h2>
      <div>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              borderBottom: '1px solid #ccc',
              padding: '1.25rem 0',
            }}
          >
            <button
              onClick={() => toggleOpen(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              style={{
                width: '100%',
                background: '#e8f4ef',
                border: 'none',
                padding: '1rem',
                textAlign: 'left',
                fontSize: '1.2rem',
                fontWeight: '600',
                color: '#2c7a58',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: '8px',
                boxShadow: '0 2px 6px rgba(44, 122, 88, 0.15)',
                userSelect: 'none',
              }}
            >
              <span style={{ flexGrow: 1, whiteSpace: 'normal' }}>{faq.question}</span>
              <span
                aria-hidden="true"
                style={{
                  fontSize: '1.8rem',
                  marginLeft: '1rem',
                  transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  lineHeight: '1',
                  userSelect: 'none',
                }}
              >
                +
              </span>
            </button>
            {openIndex === index && (
              <div
                id={`faq-answer-${index}`}
                style={{
                  marginTop: '0.75rem',
                  color: '#4a5568',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  paddingLeft: '1rem',
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
