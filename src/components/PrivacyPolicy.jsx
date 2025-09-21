import React from 'react';

const privacyPolicySections = [
  {
    title: '1. Introduction',
    content:
      'XS Funds respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.',
  },
  {
    title: '2. Information We Collect',
    content:
      'We collect personal information such as your name, contact details and transaction history as necessary for investing on your behalf and complying with legal requirements.',
  },
  {
    title: '3. How We Use Your Information',
    content:
      'Your information is used to manage investments, communicate with you, comply with regulatory obligations, and improve our services. We do not sell or rent your personal information to third parties.',
  },
  {
    title: '4. Data Security',
    content:
      'We implement appropriate technical and organizational measures to protect your information from unauthorized access, disclosure, alteration, or destruction.',
  },
  {
    title: '5. Sharing of Information',
    content:
      'XS Funds does not sell, rent, or share your personal information with any third parties for their marketing or business purposes. We strictly use your information only to manage your investment and comply with legal and regulatory requirements. Your privacy is our priority, and we are committed to protecting your personal data with the highest standards of confidentiality.',
  },
  {
    title: '6. Your Rights',
    content:
      'You have the right to access, correct, or request deletion of your personal data. Please contact us if you wish to exercise these rights or have any privacy concerns.',
  },
  {
    title: '7. Cookies and Tracking',
    content:
      'Our website may use cookies and similar technologies to enhance your experience. You can control cookie preferences through your browser settings.',
  },
  {
    title: '8. Changes to This Policy',
    content:
      'We may update this Privacy Policy periodically. We encourage you to review it regularly for any changes.',
  },
  {
    title: '9. Contact Us',
    content:
      'If you have questions about this Privacy Policy or how we handle your information, please contact us at support@xsfunds.in.',
  },
];

function PrivacyPolicy() {
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
        Privacy Policy
      </h2>
      <div>
        {privacyPolicySections.map((section, index) => (
          <div key={index} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2c7a58' }}>
              {section.title}
            </h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginTop: '0.5rem' }}>
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PrivacyPolicy;
