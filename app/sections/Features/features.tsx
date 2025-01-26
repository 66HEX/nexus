"use client";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, Target } from 'lucide-react';
import BackgroundOverlay from "@/app/components/backgroundOverlay/backgroundOverlay";

interface CustomTooltipProps {
    active?: boolean;
    payload?: Array<{
        color: string;
        name: string;
        value: number;
    }>;
    label?: string;
}

const Features = () => {
    const chartData = [
        { month: 'Jan', squat: 180, bench: 120, deadlift: 220 },
        { month: 'Feb', squat: 190, bench: 125, deadlift: 230 },
        { month: 'Mar', squat: 195, bench: 127.5, deadlift: 235 },
        { month: 'Apr', squat: 200, bench: 130, deadlift: 245 },
        { month: 'May', squat: 205, bench: 132.5, deadlift: 250 },
        { month: 'Jun', squat: 215, bench: 135, deadlift: 255 }
    ];


    const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-black/90 border border-white/10 backdrop-blur-md p-4 rounded-lg">
                    <p className="text-white/70 mb-2">{label}</p>
                    {payload.map((entry, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: entry.color }}
                            />
                            <span className="text-white/90">
                            {entry.name}: {entry.value}kg
                        </span>
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <section
            id="features"
            className="bg-black text-white py-12 lg:py-24 px-4 lg:px-24 relative overflow-hidden"
            aria-label="Product features"
        >
            <div className="absolute inset-0 z-0" aria-hidden="true">
                <BackgroundOverlay/>
            </div>
            <div className="container mx-auto relative">
                <div className="text-center mb-8 sm:mb-16">
                    <div
                        className="inline-flex items-center rounded-full bg-white/[0.05] border border-white/[0.05] px-3 py-1 text-sm text-white/70 backdrop-blur-sm mb-6 sm:mb-8">
                        Features
                    </div>
                    <h2
                        aria-label="Essential tools for your strength journey"
                        className="text-3xl md:text-5xl font-medium tracking-tight mb-4 lg:mb-6">
                        Essential tools for your
                        <br/>
                        <span
                            className="bg-gradient-to-r from-cyan-500 to-slate-800 text-transparent bg-clip-text">strength journey</span>
                    </h2>
                    <p
                        className="text-white/80 text-base md:text-xl max-w-2xl mx-auto">
                        Connect with experienced powerlifting coaches and get personalized training
                        plans to maximize your potential
                    </p>
                </div>

                <div
                    aria-label="Feature cards"
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    <div
                        className="space-y-4 lg:space-y-6">
                        <div
                            aria-labelledby="progress-tracking-title"
                            className="bg-white/[0.05] backdrop-blur-md rounded-2xl md:rounded-3xl p-4 lg:p-8 border border-white/[0.05] h-fit">
                            <h3
                                id="progress-tracking-title"
                                className="text-xl lg:text-2xl font-medium mb-3 lg:mb-4">Real-time progress
                                tracking
                            </h3>
                            <p className="text-white/50 text-sm lg:text-base mb-6 lg:mb-8">
                                Track your training progress and share results with your coach in real-time.
                                Get immediate feedback and adjustments to your program.
                            </p>
                            <div
                                aria-label="Progress statistics"
                                className="border border-white/[0.05] rounded-xl p-3 md:p-6">
                                <div className="flex items-center justify-between mb-4 lg:mb-6">
                                    <div className="space-y-1">
                                        <span className="text-2xl lg:text-3xl font-medium">610kg</span>
                                        <div className="text-white/50 text-xs md:text-sm">Total</div>
                                    </div>
                                    <div className="flex gap-4" aria-label="Monthly progress">
                                        <div className="text-right">
                                            <div className="text-green-400 text-sm lg:text-base">+35kg</div>
                                            <div className="text-white/50 text-xs lg:text-sm">vs Last Month</div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="h-40 lg:h-48 md:h-52">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={chartData} margin={{top: 5, right: 20, bottom: 5, left: 0}}>
                                            <CartesianGrid stroke="#ffffff10"/>
                                            <XAxis
                                                dataKey="month"
                                                stroke="#ffffff50"
                                                fontSize={10}
                                                tickMargin={8}
                                            />
                                            <YAxis
                                                stroke="#ffffff50"
                                                fontSize={10}
                                                tickFormatter={(value) => `${value}kg`}
                                                tickMargin={8}
                                            />
                                            <Tooltip content={<CustomTooltip/>}/>
                                            <Line
                                                type="monotone"
                                                dataKey="squat"
                                                stroke="#60A5FA"
                                                strokeWidth={2}
                                                dot={{fill: '#60A5FA', strokeWidth: 2}}
                                                name="Squat"
                                            />
                                            <Line
                                                type="monotone"
                                                dataKey="bench"
                                                stroke="#34D399"
                                                strokeWidth={2}
                                                dot={{fill: '#34D399', strokeWidth: 2}}
                                                name="Bench"
                                            />
                                            <Line
                                                type="monotone"
                                                dataKey="deadlift"
                                                stroke="#F87171"
                                                strokeWidth={2}
                                                dot={{fill: '#F87171', strokeWidth: 2}}
                                                name="Deadlift"
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>

                        <div
                            aria-labelledby="coach-communication-title"
                            className="bg-white/[0.05] backdrop-blur-md rounded-2xl lg:rounded-3xl p-4 lg:p-8 border border-white/[0.05] h-fit">
                            <h3
                                id="coach-communication-title"
                                className="text-xl lg:text-2xl font-medium mb-3 lg:mb-4">Coach Communication</h3>
                            <p className="text-white/50 text-sm lg:text-base mb-6 lg:mb-8">
                                Stay connected with your coach through integrated messaging and video consultations.
                                Get form checks and instant feedback on your training.
                            </p>
                            <div className="grid grid-cols-2 gap-3 lg:gap-4">
                                <div className="border border-white/[0.05] p-4 lg:p-6 rounded-xl text-center">
                                    <Users className="h-6 w-6 lg:h-8 lg:w-8 mx-auto mb-2"/>
                                    <div className="text-xl lg:text-2xl font-medium">100+</div>
                                    <div className="text-white/50 text-xs lg:text-sm">Verified Coaches</div>
                                </div>
                                <div className="border border-white/[0.05] p-4 lg:p-6 rounded-xl text-center">
                                    <Target className="h-6 w-6 lg:h-8 lg:w-8 mx-auto mb-2"/>
                                    <div className="text-xl lg:text-2xl font-medium">24/7</div>
                                    <div className="text-white/50 text-xs lg:text-sm">Support</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="space-y-4 lg:space-y-6">
                        <div
                            aria-labelledby="workout-planning-title"
                            className="bg-white/[0.05] backdrop-blur-md rounded-2xl lg:rounded-3xl p-4 sm:p-8 border border-white/[0.05] h-fit">
                            <h3
                                id="workout-planning-title"
                                className="text-xl lg:text-2xl font-medium mb-3 lg:mb-4">Smart workout planning</h3>
                            <p className="text-white/50 text-sm lg:text-base mb-6 lg:mb-8">
                                Receive personalized training plans from your coach, designed specifically
                                for your goals and current level. Access detailed instructions and video guides.
                            </p>
                            <div className="border border-white/[0.05] rounded-xl p-3 lg:p-6">
                                <div className="flex items-center justify-between mb-4 lg:mb-6">
                                    <div className="space-y-1">
                                        <span className="text-lg lg:text-2xl font-medium">Week 4 / Block 2</span>
                                        <div className="text-white/50 text-xs lg:text-sm">Strength Focus</div>
                                    </div>
                                    <div
                                        className="flex items-center gap-2 border border-white/[0.05] rounded-full px-2 sm:px-3 py-1">
                                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                        <span className="text-white/50 text-xs lg:text-sm">In Progress</span>
                                    </div>
                                </div>

                                <div className="space-y-4 lg:space-y-6">
                                    <div className="space-y-3 lg:space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-base lg:text-lg font-medium">Primary Movements</span>
                                            <span className="text-white/50 text-xs lg:text-sm">RPE Target: 8</span>
                                        </div>
                                        {[
                                            {
                                                name: 'Competition Squat',
                                                weight: '180kg',
                                                sets: '5x3',
                                                status: 'completed',
                                                notes: 'Focus on bracing',
                                                warmup: ['60kg x5', '100kg x3', '140kg x2']
                                            },
                                            {
                                                name: 'Competition Bench',
                                                weight: '120kg',
                                                sets: '3x8',
                                                status: 'next',
                                                notes: 'Pause at chest',
                                                warmup: ['40kg x8', '80kg x5', '100kg x3']
                                            },
                                            {
                                                name: 'Competition Deadlift',
                                                weight: '220kg',
                                                sets: '5x3',
                                                status: 'pending',
                                                notes: 'Hook grip',
                                                warmup: ['80kg x5', '140kg x3', '180kg x2']
                                            },
                                        ].map((exercise, index) => (
                                            <div
                                                aria-label={`${exercise.name} exercise details`}
                                                key={index}
                                                 className="rounded-lg border border-white/[0.05] overflow-hidden">
                                                <div className="flex items-center justify-between p-3 sm:p-4">
                                                    <div className="flex items-center gap-2 lg:gap-3">
                                                        <div
                                                            className={`w-2 h-2 rounded-full ${
                                                                exercise.status === 'completed' ? 'bg-green-400' :
                                                                    exercise.status === 'next' ? 'bg-blue-400' :
                                                                        'bg-white/20'
                                                            }`}
                                                        />
                                                        <span className="text-sm lg:text-base">{exercise.name}</span>
                                                    </div>
                                                    <div className="flex gap-3 lg:gap-4">
                                                        <span className="text-white/50 text-sm">{exercise.weight}</span>
                                                        <span className="text-white/50 text-sm">{exercise.sets}</span>
                                                    </div>
                                                </div>
                                                <div
                                                    className="px-3 lg:px-4 pb-3 lg:pb-4 pt-2 border-t border-white/[0.05] space-y-2 lg:space-y-3">
                                                    <div className="flex gap-2 flex-wrap">
                                                        {exercise.warmup.map((set, idx) => (
                                                            <span key={idx}
                                                                  className="text-xs lg:text-sm text-white/50 bg-white/5 px-2 py-1 rounded">
                                                                {set}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <div className="text-xs lg:text-sm text-white/50">
                                                        Note: {exercise.notes}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div
                                        className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 text-xs lg:text-sm border-t border-white/[0.05] pt-4">
                                        <div className="flex items-center gap-4 sm:gap-6">
                                            <div>
                                                <div className="text-white/50">Total Volume</div>
                                                <div className="font-medium">12,450 kg</div>
                                            </div>
                                            <div>
                                                <div className="text-white/50">Est. Duration</div>
                                                <div className="font-medium">95 min</div>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="inline-flex items-center rounded bg-white/5 px-2 py-1">
                                                High Intensity
                                            </span>
                                            <span className="inline-flex items-center rounded bg-white/5 px-2 py-1">
                                                Strength
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;