export default function BackgroundOverlay() {
    return (
        <div className="absolute w-full h-full bg-black opacity-10">
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(6, 182, 212, 0.35) 30%, rgba(6, 182, 212, 0.2) 70%, transparent 100%)'
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-75" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40" />
        </div>
    );
};