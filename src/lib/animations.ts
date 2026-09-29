// src/lib/animations.ts
import type { Variants } from "framer-motion";

export const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

// Slides up and fades in with spring physics
export const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
        },
    },
};
// src/lib/animations.ts
export const fadeDownVariants: Variants = {
    hidden: {
        opacity: 0,
        y: -25      // Starts 25px above its normal resting spot
    },
    visible: {
        opacity: 1,
        y: 0,       // Drops down into place
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
        },
    },
};

export const fadeLeftVariants: Variants = {
    hidden: { opacity: 0, x: -55 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
        },
    },
};

export const fadeRightVariants: Variants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
        },
    },
};
// Simple fade in without vertical movement
export const fadeInVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

// Continuous breathing zoom loop (Hero background)
export const zoomLoopVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 1,
    },
    visible: {
        opacity: 1,
        scale: 1.08,
        transition: {
            opacity: {
                duration: 1.5,
                ease: "easeOut",
            },
            scale: {
                duration: 10,
                repeatType: "reverse",
                ease: "easeInOut",
            },
        },
    },
};

// Card / Image entrance: Scales up gently
export const scaleUpVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};
