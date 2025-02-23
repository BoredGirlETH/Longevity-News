import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        // Hardcoded analysis data for demonstration
        const analysis = {
            metrics: {
                sleep: "2.2 hrs deep sleep, 1.8 hrs REM",
                bloodMarkers: "Glucose variance ±4mg/dl, Morning cortisol 12.3 ng/mL",
                temperature: "Cold plunge 54°F, Sleep environment 65°F",
                biologicalAge: "5.2 years younger than chronological age"
            },
            protocol: [
                "Time-Restricted Feeding (6-hour window)",
                "Rapamycin cycling and Metformin",
                "Lion's Mane and cognitive enhancers",
                "Cold plunge therapy",
                "Red light therapy",
                "Zone 2 cardio",
                "Meditation practice"
            ],
            experiments: [
                "Metformin + Exercise: 31% better glucose response",
                "Sleep temperature optimization: 23% increase in deep sleep",
                "Lion's Mane supplementation reducing brain inflammation",
                "Zero alcohol/sugar protocol (Day 732)"
            ],
            focusAreas: [
                "Sleep optimization",
                "Cognitive enhancement",
                "Metabolic health",
                "Anti-aging interventions",
                "Inflammation reduction"
            ],
            mood: "Neutral and factual",
            lastUpdated: new Date().toISOString()
        };

        // Add a small random delay to simulate processing time (optional)
        await new Promise(resolve => setTimeout(resolve, 500));

        res.status(200).json({
            success: true,
            data: analysis
        });

    } catch (error) {
        console.error('Error in Bryan analysis endpoint:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch Bryan analysis'
        });
    }
} 