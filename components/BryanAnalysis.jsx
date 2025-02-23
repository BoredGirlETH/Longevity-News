import React, { useState } from 'react';

const BryanAnalysis = () => {
    const [analysis, setAnalysis] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchAnalysis = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/bryan-analysis');
            const result = await response.json();
            
            // Check if the response has the expected structure
            if (result.success && result.data) {
                setAnalysis(result.data);
            } else {
                throw new Error('Invalid data structure received');
            }
        } catch (error) {
            console.error('Error fetching Bryan analysis:', error);
            setError('Failed to fetch analysis');
        }
        setLoading(false);
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <button
                onClick={fetchAnalysis}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4"
            >
                What's up with Bryan!
            </button>

            {loading && (
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
                </div>
            )}

            {error && (
                <div className="text-red-500 text-center mb-4">
                    {error}
                </div>
            )}

            {analysis && (
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">Bryan Johnson Analysis</h2>
                    
                    {/* Metrics Section */}
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2">Latest Metrics</h3>
                        <ul className="list-disc pl-5">
                            {analysis.metrics && Object.entries(analysis.metrics).map(([key, value]) => (
                                <li key={key} className="capitalize">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}: {value}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Protocol Section */}
                    {analysis.protocol && analysis.protocol.length > 0 && (
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold mb-2">Current Protocol</h3>
                            <ul className="list-disc pl-5">
                                {analysis.protocol.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Experiments Section */}
                    {analysis.experiments && analysis.experiments.length > 0 && (
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold mb-2">Recent Experiments</h3>
                            <ul className="list-disc pl-5">
                                {analysis.experiments.map((exp, index) => (
                                    <li key={index}>{exp}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Focus Areas Section */}
                    {analysis.focusAreas && analysis.focusAreas.length > 0 && (
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold mb-2">Current Focus Areas</h3>
                            <ul className="list-disc pl-5">
                                {analysis.focusAreas.map((area, index) => (
                                    <li key={index}>{area}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Mood Section */}
                    {analysis.mood && (
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Overall Mood</h3>
                            <p>{analysis.mood}</p>
                        </div>
                    )}

                    {/* Last Updated */}
                    {analysis.lastUpdated && (
                        <div className="mt-4 text-sm text-gray-500">
                            Last updated: {new Date(analysis.lastUpdated).toLocaleString()}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default BryanAnalysis; 