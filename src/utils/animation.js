export const SlideIn = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
        y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
        x: 0,
        y: 0,
        transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});

export const FadeIn = (direction, type, delay, duration) => ({
    hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    },
    show: {
    x: 0,
    y: 0,
    transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
    },
    },
});

export const FadeIn2 = (delay) => ({
    hidden: {
    y: 50,
    opacity: 0,
    },
    show: {
    y: 0,
    opacity: 1,
    transition: {
        type: 'spring',
        duration: 0.8,
        delay,
    },
    },
});
