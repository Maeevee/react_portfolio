import React from 'react'

const GradientSvg = ({pathD, viewBox}) => {
return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
    <defs>
        <linearGradient id="myGradient" gradientTransform="rotate(90.21)">
        <stop offset="-5.91%" stopColor="#6b22b9" />
        <stop offset="111.58%" stopColor="#8d7ea2" />
        </linearGradient>
        <filter id="drop-shadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
        <feOffset dx="2" dy="2" result="offsetblur" />
        <feFlood floodColor="rgba(0,0,0,0.5)" />
        <feComposite in2="offsetblur" operator="in" />
        <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
        </feMerge>
        </filter>
    </defs>
    <g>
        <path d={pathD} fill="url(#myGradient)" filter="url(#drop-shadow)" />
    </g>
    </svg>
)
}

export default GradientSvg;



