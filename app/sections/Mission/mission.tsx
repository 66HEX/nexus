import { Target, Brain, Users, TrendingUp, Award, Clock, Shield, PlayCircle, MessageCircle, CheckCircle2, LineChart, Video, RefreshCcw, ThumbsUp } from 'lucide-react';

const Mission = () => {
    const missionPoints = [
        {
            title: "Professional Coaching",
            description: "We connect dedicated athletes with experienced powerlifting coaches. Our mission is to make professional training guidance accessible to lifters at every level of advancement.",
            mainStat: {
                value: "95%",
                label: "Client satisfaction",
            },
            subStats: [
                {
                    icon: Target,
                    value: "92%",
                    label: "Program completion"
                },
                {
                    icon: Clock,
                    value: "24h",
                    label: "Avg. response time"
                }
            ],
            highlights: [
                {
                    icon: Shield,
                    text: "Verified coaches",
                    bg: "bg-blue-500/20"
                },
                {
                    icon: Target,
                    text: "Personalized programs",
                    bg: "bg-green-500/20"
                },
                {
                    icon: MessageCircle,
                    text: "Ongoing support",
                    bg: "bg-purple-500/20"
                }
            ]
        },
        {
            title: "Expert Training Plans",
            description: "Each training plan is crafted by certified coaches who combine their expertise with your individual needs and goals. Get a program that's truly tailored to you.",
            mainStat: {
                value: "200+",
                label: "Active coaches",
            },
            subStats: [
                {
                    icon: Brain,
                    value: "10+",
                    label: "Years avg. experience"
                },
                {
                    icon: TrendingUp,
                    value: "85%",
                    label: "PR achievement rate"
                }
            ],
            highlights: [
                {
                    icon: Video,
                    text: "Video technique analysis",
                    bg: "bg-red-500/20"
                },
                {
                    icon: LineChart,
                    text: "Progress monitoring",
                    bg: "bg-yellow-500/20"
                },
                {
                    icon: RefreshCcw,
                    text: "Program adjustments",
                    bg: "bg-emerald-500/20"
                }
            ]
        },
        {
            title: "Seamless Communication",
            description: "Direct communication between you and your coach ensures your training is always on track. Get feedback, ask questions, and receive guidance when you need it.",
            mainStat: {
                value: "7/7",
                label: "Days of support",
            },
            subStats: [
                {
                    icon: Users,
                    value: "100%",
                    label: "Coach availability"
                },
                {
                    icon: Award,
                    value: "4.9/5",
                    label: "Coach rating"
                }
            ],
            highlights: [
                {
                    icon: CheckCircle2,
                    text: "Real-time feedback",
                    bg: "bg-cyan-500/20"
                },
                {
                    icon: PlayCircle,
                    text: "Video consultations",
                    bg: "bg-indigo-500/20"
                },
                {
                    icon: ThumbsUp,
                    text: "Form check reviews",
                    bg: "bg-orange-500/20"
                }
            ]
        }
    ];

    return (
        <section id="mission" className="bg-black text-white py-12 lg:py-24 px-4 lg:px-24 relative overflow-hidden">
            <div className="container mx-auto relative">
                <div className="text-center mb-8 sm:mb-16">
                    <div className="inline-flex items-center rounded-full bg-white/5 border border-white/[0.05] px-3 py-1 text-sm text-white/50 backdrop-blur-sm mb-6 sm:mb-8">
                        Our Mission
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-medium tracking-tight mb-4 lg:mb-6">
                        Connecting athletes with
                        <br />
                        <span className="bg-gradient-to-r from-cyan-300 to-slate-800 text-transparent bg-clip-text">professional coaches</span>
                    </h2>
                    <p className="text-white/80 text-base md:text-xl max-w-2xl mx-auto">
                        We&apos;re bridging the gap between athletes and experienced powerlifting coaches to help you achieve your strength goals
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                    {missionPoints.map((point, index) => (
                        <div key={index} className="bg-white/[0.05] backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/[0.05]">
                            <h3 className="text-xl sm:text-2xl font-medium mb-3 sm:mb-4">{point.title}</h3>
                            <p className="text-white/50 text-sm lg:text-base mb-6 sm:mb-8">
                                {point.description}
                            </p>

                            <div className="space-y-4">
                                <div className="border border-white/[0.05] rounded-xl p-4 sm:p-6">
                                    <div className="mb-4">
                                        <div className="text-2xl sm:text-3xl font-medium mb-1">{point.mainStat.value}</div>
                                        <div className="text-white/50 text-xs sm:text-sm">{point.mainStat.label}</div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        {point.subStats.map((stat, idx) => (
                                            <div key={idx} className="border border-white/[0.025] rounded-lg p-3 text-center">
                                                <stat.icon className="h-5 w-5 mx-auto mb-2 text-white/50" />
                                                <div className="text-sm lg:text-base font-medium">{stat.value}</div>
                                                <div className="text-white/50 text-xs">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="grid gap-2">
                                        {point.highlights.map((highlight, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-3 p-3 border border-white/[0.025] rounded-lg"
                                            >
                                                <div className="p-2 rounded-lg">
                                                    <highlight.icon className="h-4 w-4 text-white" />
                                                </div>
                                                <span className="text-white/80 text-sm lg:text-base font-medium">
                                                    {highlight.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Mission;