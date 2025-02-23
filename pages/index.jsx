import BryanAnalysis from '../components/BryanAnalysis';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 py-6">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Bryan Johnson Analysis Dashboard</h1>
                <BryanAnalysis />
            </div>
        </div>
    );
} 