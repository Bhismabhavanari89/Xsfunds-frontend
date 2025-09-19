import React from 'react';
import './About.css'

function About() {
    return (
        <section id="about" className="fade-in">
            <div className="text-content">
                <h2>Your Vision, Our Expertise</h2>
                <div className="underline"></div>
                <p>
                    We are more than just financial advisors; we are your dedicated partners in prosperity. Our mission is to demystify the stock market, providing you with clear, strategic, and personalized investment plans.
                </p>
                <p>
                    We believe that everyone deserves the chance to see their savings flourish, and we have the expertise to make that happen. Your trust is our most valued asset.
                </p>
            </div>
            <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
                alt="Financial advisors meeting with a client"
            />
        </section>

    );
}

export default About;