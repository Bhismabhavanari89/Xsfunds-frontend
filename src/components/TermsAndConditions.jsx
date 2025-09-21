import React from 'react';

const terms = [
  {
    title: '1. Investment Purpose',
    content:
      'XS Funds collects funds from investors to invest collectively in a diversified portfolio of stocks. The aim is to enable growth of the invested capital through market appreciation.',
  },
  {
    title: '2. No Guarantees',
    content:
      'Investments in stocks are subject to market risks and fluctuations. XS Funds does not guarantee returns or protection of the principal amount invested. Past performance is not indicative of future results.',
  },
  {
    title: '3. Lock-in Period',
    content:
      'Investors agree to a minimum lock-in period of 6 months from the date of investment. Withdrawals before this period are not permitted.',
  },
  {
    title: '4. Fees and Charges',
    content:
      'Currently, XS Funds does not charge any management fees or commissions to investors. Any future fees will be communicated clearly to investors with sufficient notice.',
  },
  {
    title: '5. Investment Decisions',
    content:
      'All investment decisions including stock selections and portfolio allocations are made at the discretion of XS Funds management based on market research and expertise.',
  },
  {
    title: '6. Investor Responsibilities',
    content:
      'Investors should provide accurate personal and financial information when investing. It is the investor\'s responsibility to understand the risks involved and seek independent financial or tax advice if desired.',
  },
  {
    title: '7. Reporting and Communication',
    content:
      'XS Funds may provide periodic updates on portfolio status and investment performance. Investors can contact XS Funds for any queries or further information.',
  },
  {
    title: '8. Withdrawal Requests',
    content:
      'Withdrawal requests can be made only after the lock-in period. XS Funds reserves the right to process withdrawal requests subject to portfolio liquidity.',
  },
  {
    title: '9. Confidentiality',
    content:
      'Investor information and investment details will be kept confidential and handled with appropriate security measures.',
  },
  {
    title: '10. Amendments',
    content:
      'These terms and conditions may be amended by XS Funds with prior notice to investors.',
  },
  {
    title: '11. Governing Law',
    content:
      'Investments and related agreements are governed by applicable laws of the jurisdiction where XS Funds operates.',
  },
  {
    title: '12. Limitation of Liability',
    content:
      'XS Funds is not liable for any losses incurred due to market conditions, delays, or any unforeseen events affecting investments.',
  },
];

function TermsAndConditions() {
  return (
    <section
      style={{
        maxWidth: '800px',
        margin: 'auto',
        padding: '74px 1rem 2rem',
        color: '#4a5568',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2
        style={{
          color: '#2c7a58',
          fontSize: '2rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '2rem',
        }}
      >
        Terms and Conditions
      </h2>
      <div>
        {terms.map((term, index) => (
          <div key={index} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2c7a58' }}>
              {term.title}
            </h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginTop: '0.5rem' }}>
              {term.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TermsAndConditions;
