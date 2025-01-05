import React from "react";

export default function BackgroundOverlay() {
    return (
        <div className="absolute inset-0  overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black to-transparent pointer-events-none"/>
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent pointer-events-none"/>
        </div>
    );
}