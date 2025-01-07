export default function HeroOverlay() {
    return (
        <div className="absolute w-full h-full">
            <div
                className="absolute inset-0 bg-gradient-to-b from-cyan-300/40 to-transparent"
                style={{
                    background: 'radial-gradient(ellipse 100% 50% at 50% 0%, rgba(6, 182, 212, 0.5) 0%, transparent 70%)'
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-75" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-black opacity-40" />
        </div>
    );
}