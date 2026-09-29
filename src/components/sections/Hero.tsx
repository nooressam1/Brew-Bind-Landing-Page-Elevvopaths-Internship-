'use client';
import Image from "next/image";
import Button from "../ui/button";
import { ArrowRight } from "lucide-react"; // 1. Import the icon
import { motion } from "framer-motion";
import { containerVariants, fadeUpVariants, zoomLoopVariants } from "@/lib/animations";
import { useLanguage } from "@/lib/LanguageContext";
import { useScrollSection } from "@/lib/ScrollContext";

export default function Hero({ isLoaded = true }: { isLoaded?: boolean }) {
    const { t } = useLanguage();
    const { scrollToSection } = useScrollSection();

    return (
        <section id="home" className="relative w-full min-h-[800px] flex justify-center overflow-hidden items-center">

            {/* The animated wrapper */}
            <motion.div
                variants={zoomLoopVariants}
                animate="visible"
                initial="visible"
                className=" w-full  h-full absolute inset-0    overflow-hidden "
            >
                <Image
                    src="/images/Hero_Image.avif"
                    alt="Brew & Bind warm cafe atmosphere"
                    fill
                    sizes="100vw"
                    quality={70}
                    priority
                    style={{ animation: 'pulse 10s ease-in-out infinite' }}
                    className="object-cover h-full w-full  "
                />
            </motion.div>

            <div className="absolute inset-0 bg-black/20 " />
            <div className="absolute inset-0 bg-MainGreen/13 " />
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                className="relative flex flex-col w-full justify-center items-center gap-6 text-center z-10 px-4"
            >
                <div>
                    {/* 1. First headline */}
                    <motion.h2
                        variants={fadeUpVariants}
                        className="font-lateef text-white text-3xl"
                    >
                        {t.hero.headline}
                    </motion.h2>
                    {/* 2. Main Title (waits 0.15s) */}
                    <motion.h1
                        variants={fadeUpVariants}
                        className="font-goudy italic text-white text-3xl sm:text-4xl md:text-5xl"
                    >
                        {t.hero.title}
                    </motion.h1>
                </div>
                {/* 3. Button (waits another 0.15s, no jumping or flash!) */}
                <motion.div variants={fadeUpVariants}>
                    <Button
                        size="lg"
                        variant="secondary"
                        onClick={() => scrollToSection('contact')}
                        icon={<ArrowRight className="w-5 h-5" />}
                    >
                        {t.hero.cta}
                    </Button>
                </motion.div>
            </motion.div>

        </section >
    );
}
