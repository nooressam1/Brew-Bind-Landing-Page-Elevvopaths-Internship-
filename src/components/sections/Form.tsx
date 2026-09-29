'use client';

import Image from "next/image";
import WaitlistCard from "@/components/ui/waitlistCard";
import { motion } from "framer-motion";
import { containerVariants, scaleUpVariants, zoomLoopVariants } from "@/lib/animations";

export default function Form() {

    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            id="contact"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="relative bg-Cream w-full min-h-[600px] sm:min-h-[700px] md:min-h-[750px] py-12 sm:py-16 md:py-20 px-4 flex justify-center items-center overflow-hidden"
        >
            <motion.div variants={zoomLoopVariants} className="absolute inset-0 w-full h-full">
                <Image
                    src="/images/botanical_pattern_landscape.avif"
                    alt="Botanical background pattern"
                    fill
                    sizes="100vw"
                    quality={60}
                    className="object-cover"
                />
            </motion.div>

            <motion.div
                variants={scaleUpVariants}
                className="relative z-10 flex justify-center items-center w-full"
            >
                <WaitlistCard />
            </motion.div>
        </motion.section>
    );
}
