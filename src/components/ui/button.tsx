'use client';

import React from "react";
import { motion } from "framer-motion";

// 1. Define your custom interface
interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
}

// 2. Component
export default function Button({
    children,
    variant = "primary",
    size = "md",
    icon,
    iconPosition = "right",
    onClick,
    className = "",
    type = "button",
}: ButtonProps) {
    const variants = {
        primary: "bg-MainOrange text-white hover:bg-MainOrange/90",
        secondary: "bg-MainGreen/80 font-lateef rounded-md text-white hover:bg-opacity-60 shadow-md",
        outline: "border border-white/30 text-white hover:bg-white/10",
        ghost: "text-white hover:bg-white/10",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-xs rounded-lg",
        md: "px-5 py-2.5 text-sm rounded-xl",
        lg: "px-5 py-2.5 text-lg rounded-full",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type={type}
            onClick={onClick}
            className={`inline-flex w-fit items-center justify-center gap-2 font-medium transition-colors cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`}
        >
            {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
            <span>{children}</span>
            {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
        </motion.button>
    );
}
