import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import './StockvsFd.css';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

function StockvsFd() {
    const [amount, setAmount] = useState(50000);
    const [rateStock, setRateStock] = useState(12);
    const [rateFD, setRateFD] = useState(7);
    const [years, setYears] = useState(10);

    const [amountError, setAmountError] = useState('');
    const [rateStockError, setRateStockError] = useState('');
    const [rateFDError, setRateFDError] = useState('');
    const [yearsError, setYearsError] = useState('');

    const [stockData, setStockData] = useState([]);
    const [fdData, setFDData] = useState([]);
    const [finalStock, setFinalStock] = useState(0);
    const [finalFD, setFinalFD] = useState(0);

    function formatCurrency(val) {
        return '₹' + Number(val).toLocaleString('en-IN');
    }

    function calculateGrowth(amount, rate, years) {
        const values = [];
        for (let i = 1; i <= years; i++) {
            const value = amount * Math.pow(1 + rate / 100, i);
            values.push(Math.round(value));
        }
        return values;
    }

    // Validation always on input change
    useEffect(() => {
        let valid = true;

        if (!amount || isNaN(amount) || Number(amount) < 100) {
            setAmountError('Enter a valid amount (min ₹100)');
            valid = false;
        } else {
            setAmountError('');
        }
        if (!rateStock || isNaN(rateStock) || Number(rateStock) < 0.1) {
            setRateStockError('Rate must be at least 0.1%');
            valid = false;
        } else {
            setRateStockError('');
        }
        if (!rateFD || isNaN(rateFD) || Number(rateFD) < 0.1) {
            setRateFDError('Rate must be at least 0.1%');
            valid = false;
        } else {
            setRateFDError('');
        }
        if (!years || isNaN(years) || Number(years) < 1) {
            setYearsError('Enter years (min 1)');
            valid = false;
        } else {
            setYearsError('');
        }

        if (valid) {
            const stockVals = calculateGrowth(Number(amount), Number(rateStock), Number(years));
            const fdVals = calculateGrowth(Number(amount), Number(rateFD), Number(years));
            setStockData(stockVals);
            setFDData(fdVals);
            setFinalStock(stockVals[years - 1]);
            setFinalFD(fdVals[years - 1]);
        } else {
            setStockData([]);
            setFDData([]);
            setFinalStock(0);
            setFinalFD(0);
        }
    }, [amount, rateStock, rateFD, years]);

    const chartData = {
        labels: Array.from({ length: years }, (_, i) => `${i + 1} yr${i === 0 ? '' : 's'}`),
        datasets: [
            {
                label: 'Stocks',
                data: stockData,
                borderColor: '#258d5f',
                backgroundColor: 'rgba(37,141,95,.15)',
                borderWidth: 3,
                pointRadius: 5,
                tension: 0.35,
                fill: false,
            },
            {
                label: 'FD',
                data: fdData,
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37,99,235,.16)',
                borderWidth: 3,
                pointRadius: 5,
                tension: 0.35,
                fill: false,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: '#155547',
                    font: { size: 15, weight: 'bold' },
                },
            },
            tooltip: {
                callbacks: {
                    label: ctx =>
                        `${ctx.dataset.label}: ₹${ctx.parsed.y.toLocaleString('en-IN')}`,
                },
            },
            title: {
                display: true,
                text: 'Year-wise Growth Projection',
                color: '#2c7a58',
                font: { size: 17, weight: 'bold' },
            },
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Projected Value (₹)',
                    color: '#154e3d',
                    font: { size: 15, weight: 'bold' },
                },
                ticks: {
                    color: '#238048',
                    callback: val => '₹' + val.toLocaleString('en-IN'),
                    font: { size: 13 },
                },
                grid: { color: '#dbf0db' },
            },
            x: {
                title: {
                    display: true,
                    text: 'Investment Duration (Years)',
                    color: '#154e3d',
                    font: { size: 15, weight: 'bold' },
                },
                ticks: {
                    color: '#2c7a58',
                    font: { size: 12 },
                },
                grid: { color: '#dbf0db' },
            },
        },
    };

    return (
        <div className="svf-container">
            <section className="svf-section" aria-label="Stock vs FD Growth Simulator">
                <h2 className="svf-heading">Stock vs FD Growth Simulator</h2>
                <form onSubmit={e => e.preventDefault()} noValidate>
                    <div className="svf-input-group">
                        <div className="svf-input-field">
                            <label htmlFor="amount" className="svf-label">
                                Investment Amount (₹)
                            </label>
                            <input
                                type="number"
                                id="amount"
                                min="100"
                                step="100"
                                value={amount}
                                required
                                className="svf-input"
                                onChange={e => setAmount(e.target.value)}
                            />
                            <div className="svf-error">{amountError}</div>
                        </div>
                        <div className="svf-input-field">
                            <label htmlFor="rateStock" className="svf-label">
                                Expected Return Rate in Stocks (%)
                            </label>
                            <input
                                type="number"
                                id="rateStock"
                                min="1"
                                step="0.1"
                                value={rateStock}
                                required
                                className="svf-input"
                                onChange={e => setRateStock(e.target.value)}
                            />
                            <div className="svf-error">{rateStockError}</div>
                        </div>
                        <div className="svf-input-field">
                            <label htmlFor="rateFD" className="svf-label">
                                Expected Return Rate in FD (%)
                            </label>
                            <input
                                type="number"
                                id="rateFD"
                                min="1"
                                step="0.1"
                                value={rateFD}
                                required
                                className="svf-input"
                                onChange={e => setRateFD(e.target.value)}
                            />
                            <div className="svf-error">{rateFDError}</div>
                        </div>
                        <div className="svf-input-field">
                            <label htmlFor="years" className="svf-label">
                                Investment Duration (Years)
                            </label>
                            <input
                                type="number"
                                id="years"
                                min="1"
                                max="50"
                                step="1"
                                value={years}
                                required
                                className="svf-input"
                                onChange={e => setYears(e.target.value)}
                            />
                            <div className="svf-error">{yearsError}</div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="svf-button"
                        aria-label="Calculate projections"
                    >
                        Compare
                    </button>
                </form>

                <div className="svf-result-row">
                    <div className="svf-result-card">
                        <h4 className="svf-result-title">Final Stocks Value</h4>
                        <div className="svf-result-value">{formatCurrency(finalStock)}</div>
                    </div>
                    <div className="svf-result-card">
                        <h4 className="svf-result-title">Final FD Value</h4>
                        <div className="svf-result-value">{formatCurrency(finalFD)}</div>
                    </div>
                </div>
                <div className="svf-chart-container">
                    <Line data={chartData} options={chartOptions} height={320} />
                </div>
            </section>
            <section aria-label="Disclaimer" className="svf-disclaimer">
                <strong style={{ color: '#c0392b' }}>Disclaimer:</strong>{' '}
                This calculator provides estimated returns for informational purposes only and does not guarantee future performance. Investment returns in stocks are subject to market risks, including loss of principal, and can fluctuate significantly. Please consult with a financial advisor before making any investment decisions. The final decision and risk are solely yours.
            </section>
        </div>
    );
}

export default StockvsFd;
