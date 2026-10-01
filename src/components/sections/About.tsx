'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, fadeLeftVariants, fadeUpVariants, zoomLoopVariants } from "@/lib/animations";
import { useLanguage } from "@/lib/LanguageContext";


export default function About() {
    const { t } = useLanguage();

    return (
        <motion.section
            id="about"
            variants={containerVariants}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true, amount: 0.2 }}
            className="relative bg-Cream w-full flex flex-col lg:flex-row justify-center items-center overflow-hidden"
        >
            {/* Top on Mobile, Left on Desktop: Cafe Arch Image */}
            <div className="w-full lg:w-1/2 relative h-[420px] sm:h-[540px] lg:h-[750px] overflow-hidden">
                <motion.div variants={zoomLoopVariants} className="w-full h-full">
                    <Image
                        src="/images/botanical_pattern.avif"
                        style={{ animation: 'pulse 10s ease-in-out infinite' }}
                        alt="Cozy coffee and books background"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        quality={65}
                        className="object-cover"
                    />
                </motion.div>
                <motion.div
                    variants={fadeLeftVariants}
                    className="absolute inset-0 z-10 flex items-center justify-center p-6 sm:p-10 lg:p-14"
                >
                    <div className="relative w-full h-full max-w-[290px] max-h-[380px] sm:max-w-[380px] sm:max-h-[480px] lg:max-w-[480px] lg:max-h-[600px]">
                        <Image
                            src="/images/cafe-arch.avif"
                            alt="Cozy coffee and books background"
                            fill
                            sizes="(max-width: 640px) 290px, (max-width: 1024px) 380px, 480px"
                            quality={75}
                            className="object-contain drop-shadow-2xl"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Bottom on Mobile, Right on Desktop: About Text Content */}
            <div className="w-full lg:w-1/2 relative min-h-[380px] sm:min-h-[440px] lg:h-[750px] z-10 overflow-hidden flex justify-center items-center px-6 py-14 sm:px-12 sm:py-20 lg:p-20">
                <Image
                    src="/images/Rock.avif"
                    alt="Cozy coffee and books background"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={60}
                    className="object-cover h-full w-full z-0 mix-blend-overlay opacity-60"
                />
                <motion.div
                    variants={containerVariants}
                    className="relative flex flex-col gap-3 max-w-xl z-10 text-center lg:text-left rtl:lg:text-right items-center lg:items-start rtl:lg:items-end"
                >
                    <motion.h1
                        variants={fadeUpVariants}
                        className="font-goudy italic text-DarkBrown text-3xl sm:text-4xl"
                    >
                        {t.about.title}
                    </motion.h1>
                    <motion.p
                        variants={fadeUpVariants}
                        className="font-lateef text-DarkBrown text-2xl sm:text-3xl w-full leading-relaxed"
                    >
                        {t.about.description}
                    </motion.p>
                </motion.div>
            </div>
        </motion.section>
    );
}
