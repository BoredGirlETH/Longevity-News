import React, { useState } from 'react';

const BryanAnalysis = () => {
    const [analysis, setAnalysis] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchAnalysis = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/bryan-analysis');
            const data = await response.json();
            setAnalysis(data);
        } catch (error) {
            console.error('Error fetching Bryan analysis:', error);
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

            {analysis && (
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">Bryan Johnson Analysis</h2>
                    
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2">Latest Metrics</h3>
                        <ul className="list-disc pl-5">
                            <li>Sleep: {analysis.metrics.sleep}</li>
                            <li>Blood Markers: {analysis.metrics.bloodMarkers}</li>
                            <li>Temperature: {analysis.metrics.temperature}</li>
                            <li>Biological Age: {analysis.metrics.biologicalAge}</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2">Current Protocol</h3>
                        <ul className="list-disc pl-5">
                            {analysis.protocol.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2">Recent Experiments</h3>
                        <ul className="list-disc pl-5">
                            {analysis.experiments.map((exp, index) => (
                                <li key={index}>{exp}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2">Current Focus Areas</h3>
                        <ul className="list-disc pl-5">
                            {analysis.focusAreas.map((area, index) => (
                                <li key={index}>{area}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Overall Mood</h3>
                        <p>{analysis.mood}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BryanAnalysis; 