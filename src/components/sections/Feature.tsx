'use client';

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { containerVariants, fadeUpVariants, scaleUpVariants, fadeLeftVariants, fadeRightVariants } from "@/lib/animations";
import { useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Feature() {
    const { t } = useLanguage();

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Chapter 1: Fades out cleanly by 0.24, strictly disappears forever
    // Chapter 1: 0.0 -> 0.25
    const opacity1 = useTransform(scrollYProgress, [0, 0.16, 0.23, 1], [1, 1, 0, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.16, 0.23, 1], [0, 0, -30, -30]);
    const display1 = useTransform(scrollYProgress, (v) => v >= 0.24 ? "none" : "flex");

    // Chapter 2: 0.25 -> 0.50
    const opacity2 = useTransform(scrollYProgress, [0, 0.25, 0.32, 0.43, 0.49, 1], [0, 0, 1, 1, 0, 0]);
    const y2 = useTransform(scrollYProgress, [0, 0.25, 0.32, 0.43, 0.49, 1], [30, 30, 0, 0, -30, -30]);
    const display2 = useTransform(scrollYProgress, (v) => v < 0.25 || v >= 0.50 ? "none" : "flex");

    // Chapter 3: 0.50 -> 0.75
    const opacity3 = useTransform(scrollYProgress, [0, 0.50, 0.57, 0.68, 0.74, 1], [0, 0, 1, 1, 0, 0]);
    const y3 = useTransform(scrollYProgress, [0, 0.50, 0.57, 0.68, 0.74, 1], [30, 30, 0, 0, -30, -30]);
    const display3 = useTransform(scrollYProgress, (v) => v < 0.50 || v >= 0.75 ? "none" : "flex");

    // Chapter 4: 0.75 -> 1.00
    const opacity4 = useTransform(scrollYProgress, [0, 0.75, 0.82, 1], [0, 0, 1, 1]);
    const y4 = useTransform(scrollYProgress, [0, 0.75, 0.82, 1], [30, 30, 0, 0]);
    const display4 = useTransform(scrollYProgress, (v) => v < 0.75 ? "none" : "flex");

    return (
        <div id="features" ref={containerRef} className="bg-MainOrange border-t-[20px] border-b-[10px] border-DarkBrown relative w-full h-[300vh] flex flex-col items-center text-[#F5EFEB]">

            {/* Decorative vertical line (flips to right side in RTL) */}
            <div className="hidden sm:block absolute top-0 bottom-0 left-6 md:left-10 rtl:left-auto rtl:right-6 rtl:md:right-10 w-[0.5px] bg-white/30 pointer-events-none" />

            <Image
                src="/images/film-grain.avif"
                alt="Film grain texture"
                fill
                sizes="100vw"
                quality={60}
                className="object-cover opacity-50 pointer-events-none mix-blend-screen"
            />
            <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden px-4 sm:px-8 md:px-12">
                {/* Decorative horizontal tick (flips to right side in RTL) */}
                <div className="hidden sm:flex absolute top-110 md:top-100 left-6 md:left-10 rtl:left-auto rtl:right-6 rtl:md:right-10 w-8 md:w-10 h-[0.5px] bg-white/40" />

                {/* Chapter 1: Introduction */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    style={{ opacity: opacity1, y: y1, display: display1 }}
                    className="absolute flex gap-3 sm:gap-4 flex-col items-center text-center max-w-2xl lg:max-w-4xl px-4"
                >
                    <motion.div variants={fadeLeftVariants}>
                        <svg width="75" height="70" viewBox="0 0 67 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 sm:w-16 md:w-20 h-auto opacity-80">
                            <path d="M26.9407 0.00143177C16.0917 -0.123819 2.32824 7.94291 2.06575 34.3345C0.807781 37.0155 0 39.9374 0 42.7739C0 44.9933 0.727253 46.8746 2.10138 48.5965C3.4755 50.3184 5.52094 51.8372 8.04601 53.0676C13.0963 55.5285 20.0215 56.8162 26.9407 56.8162C31.3727 56.8162 35.8062 56.2868 39.7486 55.2604V47.4547C40.0284 46.4851 40.5 45.4959 41.0889 44.8732C41.8599 44.0737 42.8577 43.4525 44.0312 42.9379C46.3783 41.9085 49.4556 41.3213 52.851 41.3213C53.1753 41.3213 53.4956 41.3284 53.8138 41.339C53.4269 37.1054 51.4003 32.8044 48.8888 29.5003C47.4908 27.6609 45.9509 26.1333 44.5344 25.0981C44.2616 24.8986 43.9813 24.7118 43.6942 24.538C43.4581 24.7829 43.1971 25.0067 42.9243 25.2106C41.9375 25.9482 40.6564 26.5441 39.0988 27.0564C35.9837 28.081 31.7621 28.7316 26.9407 28.7316C22.1194 28.7316 17.8978 28.081 14.7827 27.0563C13.2251 26.5441 11.9442 25.9482 10.9574 25.2106C10.6846 25.0067 10.4234 24.7829 10.1874 24.5378C9.90038 24.7117 9.62008 24.8986 9.34726 25.0981C7.58124 26.5846 6.01117 28.097 4.83579 29.7143C5.29128 15.0599 15.1035 2.82732 26.9407 2.90673C33.86 2.90673 39.2765 4.14681 43.0493 8.57853C45.814 11.8262 47.8125 16.9876 48.6838 25.0319C49.4519 25.8199 50.2047 26.6932 50.9245 27.6402C51.1696 27.9633 51.4086 28.2918 51.6416 28.6254C51.0184 17.9606 48.7514 11.0188 44.9866 6.59631C40.5154 1.34384 34.1544 0.00127014 26.9407 0.00127014V0.00143177ZM25.6158 14.3665V18.4612C23.3495 18.638 20.0822 19.2596 17.2515 19.9722C15.4125 20.4352 13.3474 20.8639 11.8589 22.2294C12.7921 23.2915 14.4324 23.9024 15.5441 24.2735C18.3176 25.1857 22.3402 25.8262 26.9407 25.8262C31.5413 25.8262 35.5638 25.1857 38.3374 24.2735C39.5031 23.6674 41.2308 23.4595 42.0229 22.2294C40.4311 21.0507 38.2726 20.427 36.6301 19.9722C33.8124 19.1998 30.532 18.638 28.2657 18.4612V14.3664L25.6158 14.3665ZM63.3954 20.104C61.5989 20.0879 59.8887 20.9821 59.9171 22.0833C62.6241 23.6971 65.3167 23.7489 66.8525 22.3367C67.7885 21.4761 63.9865 20.1094 63.3954 20.104ZM58.0916 24.2728C56.2262 26.3312 54.1011 28.2192 52.0249 29.1849C54.3817 32.7167 56.2081 37.0356 56.4918 41.5587C57.28 41.6638 58.0632 41.8104 58.8386 41.9981C61.9284 37.3412 63.2327 30.9628 65.1842 25.9101C63.0109 26.2863 60.5391 25.8875 58.0916 24.2728ZM52.851 44.2266C49.742 44.2266 47.007 45.0462 45.0152 45.6353C43.9551 45.9489 42.4187 46.7305 42.3986 47.9389C42.7107 49.1546 44.0946 49.8324 45.0152 50.2423C46.9306 51.0825 49.742 51.6512 52.851 51.6512C55.9599 51.6512 58.7713 51.0825 60.6869 50.2423C61.4545 49.7688 63.2834 49.1474 63.3034 47.9389C62.9914 46.723 61.6075 46.0453 60.6869 45.6353C58.7713 44.7954 55.9601 44.2266 52.851 44.2266ZM42.3986 52.0717V63.4339C42.3986 65.4111 43.4389 66.829 45.3775 67.9626C47.316 69.0961 50.0833 69.7287 52.851 69.7287C55.6187 69.7287 58.386 69.0961 60.3246 67.9626C62.2632 66.829 63.3034 65.4111 63.3034 63.4339V52.0717C62.808 52.3942 62.262 52.6807 61.6708 52.9401C59.3238 53.9692 56.2465 54.5565 52.851 54.5565C49.4554 54.5565 46.3783 53.9692 44.0312 52.9399C43.4401 52.6807 42.8939 52.3942 42.3986 52.0717ZM24.4247 61.5596C19.5747 62.8504 14.7314 62.5313 10.5678 62.2315C8.00876 62.0472 5.69701 61.8813 3.84149 62.054C2.61944 62.1676 1.65178 62.4356 0.868729 62.8636C2.58646 64.7663 4.80193 66.3201 7.67002 67.2256C8.49767 66.6855 9.41307 66.3248 10.3597 66.1125C12.5479 65.6219 14.967 65.7353 17.5761 65.7584C19.1661 65.7726 20.8184 65.7636 22.5133 65.6059C23.5157 64.4722 23.9751 62.8576 24.4247 61.5596ZM32.719 65.4075C27.2998 68.5398 21.9271 68.7023 17.5546 68.6634C14.9038 68.6398 12.5975 68.5761 10.8907 68.9588C9.59709 69.249 8.68773 69.6946 7.97991 70.6258C11.925 73.5553 18.059 75.3401 25.4811 72.7442C29.7828 71.2399 31.1981 69.4651 32.0305 67.5752C32.326 66.9042 32.5251 66.1668 32.719 65.4075Z" fill="white" />
                        </svg>
                    </motion.div>
                    <motion.h1 variants={fadeUpVariants} className="font-goudy italic text-white text-2xl sm:text-3xl md:text-4xl text-center">
                        {t.feature.maintitle}
                    </motion.h1>
                    <motion.p variants={fadeUpVariants} className="font-lateef font-thin text-white/80 text-center text-xl sm:text-2xl md:text-3xl w-full leading-relaxed">
                        {t.feature.maindescription}
                    </motion.p>
                </motion.div>

                {/* Chapter 2: Speciality Coffee */}
                <motion.div
                    style={{ opacity: opacity2, y: y2, display: display2 }}
                    className="absolute flex flex-col items-center justify-center w-full max-w-4xl px-4"
                >
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center w-full"
                    >
                        <motion.div variants={fadeLeftVariants} className="shrink-0">
                            <svg viewBox="0 0 258 263" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 sm:w-32 md:w-48 lg:w-56 h-auto drop-shadow-lg">
                                <path d="M95.2806 -0.000101909C69.8096 -0.000101909 46.6962 5.05308 29.4536 13.6031C12.2109 22.1519 0 34.7628 0 50.2125C0 51.8338 0.134378 53.4261 0.394922 54.9837L0.374732 58.69C0.0246046 110.987 10.6262 162.537 9.8187 213.073C9.58402 227.769 18.8362 240.772 33.7914 249.406C48.7465 258.04 69.6223 262.97 95.0636 262.97C120.523 262.97 140.068 257.908 153.674 249.072C167.282 240.235 174.75 227.174 174.75 213.171C174.75 211.171 174.784 209.168 174.829 207.159C201.415 206.456 222.343 192.365 236.101 173.999C250.128 155.273 257.567 132.169 257.984 111.149C258.4 90.1289 251.686 68.9383 233.282 60.3056C224.079 55.9893 213.982 56.159 202.212 59.5959C198.326 60.7302 194.296 62.2771 190.146 64.2485C190.19 62.4001 190.225 60.5517 190.225 58.7285V54.4891C190.433 53.0924 190.54 51.6603 190.54 50.2119C190.54 34.7621 178.329 22.1525 161.086 13.6031C143.844 5.05245 120.75 -0.000101909 95.2806 -0.000101909ZM95.2806 11.7894C119.171 11.7894 140.757 16.6798 155.862 24.17C170.967 31.6583 178.75 41.1868 178.75 50.2119C178.75 59.237 170.967 68.7844 155.862 76.2746C140.757 83.7629 119.171 88.635 95.2806 88.635C71.3899 88.635 49.8019 83.7635 34.6979 76.2739C19.5932 68.7856 11.7895 59.237 11.7895 50.2119C11.7895 41.1868 19.5932 31.6583 34.6979 24.17C49.8019 16.6792 71.3887 11.7888 95.2793 11.7888L95.2806 11.7894ZM51.3368 36.4118C36.7072 40.643 27.4228 46.9371 27.4228 53.9586C27.4228 66.6975 57.9552 77.024 95.6149 77.024C133.275 77.024 163.787 66.6969 163.787 53.9579C163.787 47.4828 155.889 41.6272 143.186 37.4376C146.508 40.0273 148.371 42.921 148.371 45.994C148.371 56.8359 125.178 65.6288 96.5612 65.6288C67.9454 65.6288 44.7519 56.8359 44.7519 45.9933C44.7519 42.5122 47.1416 39.2469 51.3368 36.4118ZM217.45 79.4882C220.188 79.4737 222.386 79.9884 224.093 80.7896C230.922 83.9919 235.704 95.1795 235.39 111.149C235.075 127.118 229.262 146.168 218.455 160.593C208.175 174.314 194.416 183.526 176.108 184.505C178.854 153.062 185.085 121.11 188.271 91.2367C201.345 82.5043 210.915 79.5235 217.448 79.4875L217.45 79.4882Z" fill="white" />
                            </svg>
                        </motion.div>

                        <motion.div variants={containerVariants} className="flex flex-col gap-2 items-center md:items-start rtl:md:items-end text-center md:text-left rtl:md:text-right max-w-lg">
                            <motion.h1 variants={fadeRightVariants} className="font-goudy italic text-white text-2xl sm:text-3xl md:text-4xl">
                                {t.feature.box1.title}
                            </motion.h1>
                            <motion.div className="w-32 sm:w-44 md:w-60 h-[0.5px] bg-white/40 my-1" variants={scaleUpVariants} />
                            <motion.p variants={fadeUpVariants} className="font-lateef font-thin text-white/80 text-xl sm:text-2xl w-full leading-relaxed">
                                {t.feature.box1.description}
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Chapter 3: Curated Reads */}
                <motion.div
                    style={{ opacity: opacity3, y: y3, display: display3 }}
                    className="absolute flex flex-col items-center justify-center w-full max-w-4xl px-4"
                >
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center w-full"
                    >
                        <motion.div variants={fadeLeftVariants} className="shrink-0">
                            <svg viewBox="0 0 243 271" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 sm:w-32 md:w-48 lg:w-56 h-auto drop-shadow-lg">
                                <path d="M8 122.75H235M115.194 122.75L89.9722 59M197.167 122.75L184.556 59M58.4444 122.75V59M146.722 122.75V59M108.889 186.5H134.111M33.2222 237.5V263M209.778 237.5V263M8 161V84.5C8 48.443 8 30.4017 19.7283 19.2072C31.4567 8.01275 50.3481 8 88.1184 8H154.882C192.652 8 211.531 8 223.272 19.2072C235 30.4017 235 48.443 235 84.5V161C235 197.057 235 215.098 223.272 226.293C211.543 237.487 192.652 237.5 154.882 237.5H88.1184C50.3481 237.5 31.4693 237.5 19.7283 226.293C8 215.098 8 197.057 8 161Z" stroke="white" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </motion.div>

                        <motion.div variants={containerVariants} className="flex flex-col gap-2 items-center md:items-start rtl:md:items-end text-center md:text-left rtl:md:text-right max-w-lg">
                            <motion.h1 variants={fadeUpVariants} className="font-goudy italic text-white text-2xl sm:text-3xl md:text-4xl">
                                {t.feature.box2.title}
                            </motion.h1>
                            <motion.div className="w-32 sm:w-44 md:w-52 h-[0.5px] bg-white/40 my-1" variants={scaleUpVariants} />
                            <motion.p variants={fadeUpVariants} className="font-lateef font-thin text-white/80 text-xl sm:text-2xl w-full leading-relaxed">
                                {t.feature.box2.description}
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Chapter 4: Book Binding Workshop */}
                <motion.div
                    style={{ opacity: opacity4, y: y4, display: display4 }}
                    className="absolute flex flex-col items-center justify-center w-full max-w-4xl px-4"
                >
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center w-full"
                    >
                        <motion.div variants={fadeLeftVariants} className="shrink-0">
                            <svg viewBox="0 0 340 302" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 sm:w-36 md:w-52 lg:w-64 h-auto drop-shadow-lg">
                                <path d="M66.1111 37.75H9.44444C4.25 37.75 0 41.9969 0 47.1875V254.812C0 260.003 4.25 264.25 9.44444 264.25H66.1111C71.3056 264.25 75.5556 260.003 75.5556 254.812V47.1875C75.5556 41.9969 71.3056 37.75 66.1111 37.75ZM56.6667 94.375H18.8889V75.5H56.6667V94.375ZM160.556 37.75H103.889C98.6944 37.75 94.4444 41.9969 94.4444 47.1875V254.812C94.4444 260.003 98.6944 264.25 103.889 264.25H160.556C165.75 264.25 170 260.003 170 254.812V47.1875C170 41.9969 165.75 37.75 160.556 37.75ZM151.111 94.375H113.333V75.5H151.111V94.375Z" fill="white" />
                                <path d="M225.797 52.3402L175.194 77.8215C172.958 78.9462 171.26 80.912 170.474 83.2868C169.688 85.6616 169.877 88.2512 171.001 90.4866L256.001 259.04C257.126 261.275 259.093 262.971 261.47 263.757C263.847 264.542 266.438 264.353 268.675 263.231L319.278 237.749C321.514 236.625 323.212 234.659 323.998 232.284C324.785 229.909 324.595 227.32 323.472 225.084L238.472 56.5305C237.346 54.2962 235.379 52.5998 233.002 51.8141C230.626 51.0284 228.034 51.2176 225.797 52.3402Z" fill="white" />
                                <path d="M273.889 254.812C273.889 257.315 272.894 259.716 271.123 261.486C269.352 263.256 266.949 264.25 264.444 264.25C261.94 264.25 259.537 263.256 257.766 261.486C255.995 259.716 255 257.315 255 254.812C255 252.31 255.995 249.909 257.766 248.139C259.537 246.369 261.94 245.375 264.444 245.375C266.949 245.375 269.352 246.369 271.123 248.139C272.894 249.909 273.889 252.31 273.889 254.812Z" fill="white" />
                            </svg>
                        </motion.div>

                        <motion.div variants={containerVariants} className="flex flex-col gap-2 items-center md:items-start rtl:md:items-end text-center md:text-left rtl:md:text-right max-w-lg">
                            <motion.h1 variants={fadeUpVariants} className="font-goudy italic text-white text-2xl sm:text-3xl md:text-4xl">
                                {t.feature.box3.title}
                            </motion.h1>
                            <motion.div className="w-32 sm:w-48 md:w-64 h-[0.5px] bg-white/40 my-1" variants={scaleUpVariants} />
                            <motion.p variants={fadeUpVariants} className="font-lateef font-thin text-white/80 text-xl sm:text-2xl w-full leading-relaxed">
                                {t.feature.box3.description}
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>






        </div>
    );
}
