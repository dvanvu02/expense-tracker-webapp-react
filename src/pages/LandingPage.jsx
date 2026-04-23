import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { assets } from "../assets/assets"

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <main className="flex flex-col items-center text-center mt-20 px-4">
                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
                    Take Control of Your Finances
                </h1>
                <p className="text-gray-500 max-w-2xl text-lg mb-10">
                    Your foundation for secure, intelligent financial management. Effortlessly track your income and expenses to achieve your financial goals.
                </p>

                <div className="flex gap-4 mb-16">
                    <button onClick={() => navigate('/signup')} className="bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-purple-700 transition cursor-pointer">
                        Start Tracking for Free
                    </button>
                    <button onClick={() => navigate('/signup')} className="flex items-center gap-2 bg-gray-100 text-gray-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition cursor-pointer">
                        Learn More <span>→</span>
                    </button>
                </div>

                {/* Preview Dashboard Image */}
                <div className="w-full max-w-5xl rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                    <img
                        src={assets.dashboard_preview}
                        alt="Dashboard Preview"
                        className="w-full h-auto"
                    />
                </div>
            </main>
        </div>
    );
};

export default LandingPage;