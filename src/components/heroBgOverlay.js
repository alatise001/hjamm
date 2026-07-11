import React from 'react'

export default function HeroBgOverlay({ children, style, imageUrl }) {
    const mergedStyle = {
        ...style,
        backgroundImage: imageUrl ? `url("${imageUrl}")` : style?.backgroundImage,
    }

    return (
        <section className="h-screen bg-cover bg-center flex items-center justify-center bg-blend-overlay bg-black/50" style={mergedStyle}>
            {children}
        </section>
    )
}
