import './Advantages.css'
function Advantages() {
    return (
        <section id="advantages" className="fade-in">
            <h2>The InvestRight Advantage</h2>
            <div className="underline"></div>
            <div className="grid">
                <div className="advantage-card" tabIndex={0}>
                    <div className="icon" aria-hidden="true">
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#2c7a58"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M13 16h-1v-4h-1m1-4h.01"></path>
                            <circle cx="12" cy="12" r="9"></circle>
                        </svg>
                    </div>
                    <h3>Expert Guidance</h3>
                    <p>
                        Our seasoned analysts leverage decades of market experience to ensure your portfolio is robust and
                        resilient.
                    </p>
                </div>

                <div className="advantage-card" tabIndex={0} style={{ transitionDelay: '150ms' }}>
                    <div className="icon" aria-hidden="true">
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#2c7a58"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V4m0 16v-2M12 12l-2-2m2 2l2 2m2-2l-2 2m-2-2l2-2"></path>
                        </svg>
                    </div>
                    <h3>Personalized Strategies</h3>
                    <p>
                        Your financial goals are unique. We craft bespoke investment strategies tailored to your risk appetite
                        and aspirations.
                    </p>
                </div>

                <div className="advantage-card" tabIndex={0} style={{ transitionDelay: '300ms' }}>
                    <div className="icon" aria-hidden="true">
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#2c7a58"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M9 12l2 2 4-4"></path>
                            <circle cx="12" cy="12" r="9"></circle>
                        </svg>
                    </div>
                    <h3>Proven Track Record</h3>
                    <p>
                        Our history of consistent returns and client satisfaction speaks for itself. We are committed to building
                        your wealth.
                    </p>
                </div>
            </div>
        </section>

    )
}

export default Advantages;