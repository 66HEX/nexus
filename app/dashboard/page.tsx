"use client"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import {
    Users,
    Target,
    Calendar,
    TrendingUp,
    Clock,
    Weight,
    Home,
    Dumbbell,
    History,
    Settings,
    ChevronRight,
    LogOut
} from 'lucide-react';

const progressData = [
    { week: 'Week 1', squat: 180, bench: 120, deadlift: 220, volume: 12450 },
    { week: 'Week 2', squat: 182.5, bench: 122.5, deadlift: 225, volume: 12800 },
    { week: 'Week 3', squat: 185, bench: 125, deadlift: 227.5, volume: 13100 },
    { week: 'Week 4', squat: 187.5, bench: 127.5, deadlift: 230, volume: 13400 }
];

const volumeData = [
    { day: 'Mon', volume: 12450 },
    { day: 'Tue', volume: 8300 },
    { day: 'Wed', volume: 10200 },
    { day: 'Thu', volume: 11500 },
    { day: 'Fri', volume: 9800 },
    { day: 'Sat', volume: 13200 },
    { day: 'Sun', volume: 0 }
];

const Sidebar = () => {
    const navigation = [
        { name: 'Dashboard', icon: Home, current: true },
        { name: 'Workouts', icon: Dumbbell, current: false },
        { name: 'History', icon: History, current: false },
        { name: 'Settings', icon: Settings, current: false },
    ];

    return (
        <div className="fixed inset-y-0 left-0 w-64 bg-black border-r border-white/[0.05]">
            <div className="flex flex-col h-full">
                <div className="p-6 mb-6">
                    <button
                        className="text-white h-4 flex items-center"
                        aria-label="Go to homepage">
                        <img
                            src="/logos/nexus-logo.svg"
                            alt="Nexus Logo"
                            className="h-full w-auto"
                        />
                    </button>
                </div>

                <nav className="flex-1 px-4">
                    <div className="space-y-1">
                        {navigation.map((item) => (
                            <button
                                key={item.name}
                                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                                    item.current ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5'
                                }`}
                            >

                                <span>{item.name}</span>
                                {item.current && <ChevronRight className="w-4 h-4 ml-auto"/>}
                            </button>
                        ))}
                    </div>
                </nav>

                {/* User */}
                <div className="p-4 border-t border-white/[0.05]">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                            <Users className="w-5 h-5"/>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium">Adam Smith</div>
                            <div className="text-xs text-white/50 truncate">adam@example.com</div>
                        </div>
                        <LogOut className="w-5 h-5 text-white/50"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Dashboard = () => {
    interface CustomTooltipProps {
        active?: boolean;
        payload?: Array<{
            color: string;
            name: string;
            value: number;
        }>;
        label?: string;
    }

    const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-black/90 border border-white/10 backdrop-blur-md p-4 rounded-lg">
                    <p className="text-white/70 mb-2">{label}</p>
                    {payload.map((entry, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
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
        <div className="min-h-screen bg-black text-white">
            <Sidebar />
            <div className="pl-64">
                <div className="p-6 max-w-7xl mx-auto space-y-6">
                    {/* Header */}
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-medium">Dashboard</h1>
                            <p className="text-white/50">Welcome back, Adam</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-white/5 px-4 py-2 rounded-lg">
                                <div className="text-sm text-white/50">Next session</div>
                                <div className="font-medium">Today, 18:00</div>
                            </div>
                            <div className="bg-white/5 px-4 py-2 rounded-lg">
                                <div className="text-sm text-white/50">Current block</div>
                                <div className="font-medium">Week 4/8</div>
                            </div>
                        </div>
                    </div>

                    {/* Rest of the dashboard content remains the same */}
                    {/* Quick stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[
                            { icon: Target, label: 'Total Volume', value: '58,250kg', change: '+2.4%' },
                            { icon: Calendar, label: 'Training Days', value: '16/20', change: '80%' },
                            { icon: TrendingUp, label: 'PR Progress', value: '+15kg', change: 'This month' },
                            { icon: Weight, label: 'Body Weight', value: '82.5kg', change: '-0.5kg' }
                        ].map((stat, index) => (
                            <div key={index} className="bg-white/[0.05] rounded-xl p-4 border border-white/[0.05]">
                                <div className="flex items-center gap-3 mb-3">
                                    <stat.icon className="w-5 h-5 text-white/70" />
                                    <span className="text-white/70">{stat.label}</span>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-medium">{stat.value}</span>
                                    <span className="text-sm text-green-400">{stat.change}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Main content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left column */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Progress chart */}
                            <div className="bg-white/[0.05] rounded-xl p-6 border border-white/[0.05]">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-medium">Progress Overview</h2>
                                    <div className="flex gap-2">
                                        {['SBD Total', 'Volume'].map((metric) => (
                                            <button key={metric} className="px-3 py-1 text-sm rounded-full bg-white/5 text-white/70">
                                                {metric}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="h-64">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={progressData}>
                                            <CartesianGrid stroke="#ffffff10" />
                                            <XAxis dataKey="week" stroke="#ffffff50" />
                                            <YAxis stroke="#ffffff50" />
                                            <Tooltip content={<CustomTooltip />} />
                                            <Line type="monotone" dataKey="squat" stroke="#60A5FA" strokeWidth={2} />
                                            <Line type="monotone" dataKey="bench" stroke="#34D399" strokeWidth={2} />
                                            <Line type="monotone" dataKey="deadlift" stroke="#F87171" strokeWidth={2} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            {/* Volume chart */}
                            <div className="bg-white/[0.05] rounded-xl p-6 border border-white/[0.05]">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-medium">Weekly Volume</h2>
                                    <div className="text-white/50">12,450kg total</div>
                                </div>
                                <div className="h-48">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={volumeData}>
                                            <CartesianGrid stroke="#ffffff10" />
                                            <XAxis dataKey="day" stroke="#ffffff50" />
                                            <YAxis stroke="#ffffff50" />
                                            <Tooltip />
                                            <Bar dataKey="volume" fill="#60A5FA" radius={[4, 4, 0, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>

                        {/* Right column */}
                        <div className="space-y-6">
                            {/* Next workout */}
                            <div className="bg-white/[0.05] rounded-xl p-6 border border-white/[0.05]">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-medium">Next Workout</h2>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Clock className="w-4 h-4" />
                                        <span>Today, 18:00</span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { name: 'Competition Squat', sets: '5x3', weight: '187.5kg' },
                                        { name: 'Competition Bench', sets: '5x3', weight: '127.5kg' },
                                        { name: 'Competition Deadlift', sets: '3x3', weight: '230kg' }
                                    ].map((exercise, index) => (
                                        <div key={index} className="border border-white/[0.05] rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <span>{exercise.name}</span>
                                                <div className="flex gap-3 text-white/70 text-sm">
                                                    <span>{exercise.sets}</span>
                                                    <span>{exercise.weight}</span>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                {['Form check', 'RPE 8'].map((tag) => (
                                                    <span key={tag} className="text-xs bg-white/10 px-2 py-1 rounded">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Coach messages */}
                            <div className="bg-white/[0.05] rounded-xl p-6 border border-white/[0.05]">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-medium">Coach Messages</h2>
                                    <button className="text-sm text-white/70">View all</button>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { name: 'Coach Mike', message: 'Great work on hitting that PR! Let\'s focus on technique next session.', time: '2h ago' },
                                        { name: 'Coach Sarah', message: 'Form check video reviewed. Looking solid!', time: '5h ago' }
                                    ].map((message, index) => (
                                        <div key={index} className="grid grid-cols-10 gap-4 rounded-lg hover:bg-white/5">
                                            <div className="col-span-2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                                <Users className="w-5 h-5" />
                                            </div>
                                            <div className="col-span-8">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="font-medium">{message.name}</span>
                                                    <span className="text-sm text-white/50">{message.time}</span>
                                                </div>
                                                <p className="text-sm text-white/70">{message.message}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;