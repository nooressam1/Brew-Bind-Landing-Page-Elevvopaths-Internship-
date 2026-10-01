

'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, fadeUpVariants, scaleUpVariants } from "@/lib/animations";
import { useLanguage } from "@/lib/LanguageContext";
import { useScrollSection } from "@/lib/ScrollContext";

export default function Footer() {
    const { t } = useLanguage();
    const { scrollToSection } = useScrollSection();

    return (
        <motion.footer
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden bg-MainOrange w-full min-h-[350px] h-auto flex flex-col items-center justify-between"
        >
            {/* Film grain texture */}
            <Image
                src="/images/film-grain.avif"
                alt="Film grain texture"
                fill
                sizes="100vw"
                quality={60}
                className="object-cover opacity-50 pointer-events-none mix-blend-screen"
            />

            <motion.div
                variants={containerVariants}
                className="relative z-10 flex flex-col md:flex-row w-full px-6 sm:px-12 md:px-20 lg:px-32 py-10 gap-8 md:gap-4 justify-evenly items-center flex-1"
            >
                {/* Desktop Left Links / Mobile Links 1 */}
                <motion.div
                    variants={fadeUpVariants}
                    className="flex flex-wrap justify-center md:flex-col gap-6 md:gap-4 items-center md:items-end text-center md:text-right rtl:md:text-left order-2 md:order-1"
                >
                    <button
                        type="button"
                        onClick={() => scrollToSection('home')}
                        className="font-lateef text-white text-2xl cursor-pointer hover:opacity-80 transition-opacity"
                    >
                        {t.footer.home}
                    </button>
                    <button
                        type="button"
                        onClick={() => scrollToSection('about')}
                        className="font-lateef text-white text-2xl cursor-pointer hover:opacity-80 transition-opacity"
                    >
                        {t.footer.locationHours}
                    </button>
                </motion.div>

                {/* Vertical Divider 1 (Desktop) */}
                <div className="w-[0.5px] h-32 bg-white/30 hidden md:block md:order-2" />

                {/* Center Brand & Emblem */}
                <motion.div
                    variants={fadeUpVariants}
                    className="flex flex-col items-center gap-1.5 sm:gap-2 text-center order-1 md:order-3"
                >
                    <div className="flex items-center justify-center gap-3 sm:gap-6 mb-1 sm:mb-2">
                        <span className="font-goudy text-xs sm:text-sm tracking-widest text-white font-medium">
                            {t.footer.estd}
                        </span>

                        {/* Vintage Teapot & Cup Emblem */}
                        <motion.div variants={scaleUpVariants} className="text-white flex flex-col items-center shrink-0">
                            <svg viewBox="0 0 67 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 sm:w-12 md:w-14 h-auto">
                                <path d="M26.9407 0.00143177C16.0917 -0.123819 2.32824 7.94291 2.06575 34.3345C0.807781 37.0155 0 39.9374 0 42.7739C0 44.9933 0.727253 46.8746 2.10138 48.5965C3.4755 50.3184 5.52094 51.8372 8.04601 53.0676C13.0963 55.5285 20.0215 56.8162 26.9407 56.8162C31.3727 56.8162 35.8062 56.2868 39.7486 55.2604V47.4547C40.0284 46.4851 40.5 45.4959 41.0889 44.8732C41.8599 44.0737 42.8577 43.4525 44.0312 42.9379C46.3783 41.9085 49.4556 41.3213 52.851 41.3213C53.1753 41.3213 53.4956 41.3284 53.8138 41.339C53.4269 37.1054 51.4003 32.8044 48.8888 29.5003C47.4908 27.6609 45.9509 26.1333 44.5344 25.0981C44.2616 24.8986 43.9813 24.7118 43.6942 24.538C43.4581 24.7829 43.1971 25.0067 42.9243 25.2106C41.9375 25.9482 40.6564 26.5441 39.0988 27.0564C35.9837 28.081 31.7621 28.7316 26.9407 28.7316C22.1194 28.7316 17.8978 28.081 14.7827 27.0563C13.2251 26.5441 11.9442 25.9482 10.9574 25.2106C10.6846 25.0067 10.4234 24.7829 10.1874 24.5378C9.90038 24.7117 9.62008 24.8986 9.34726 25.0981C7.58124 26.5846 6.01117 28.097 4.83579 29.7143C5.29128 15.0599 15.1035 2.82732 26.9407 2.90673C33.86 2.90673 39.2765 4.14681 43.0493 8.57853C45.814 11.8262 47.8125 16.9876 48.6838 25.0319C49.4519 25.8199 50.2047 26.6932 50.9245 27.6402C51.1696 27.9633 51.4086 28.2918 51.6416 28.6254C51.0184 17.9606 48.7514 11.0188 44.9866 6.59631C40.5154 1.34384 34.1544 0.00127014 26.9407 0.00127014V0.00143177ZM25.6158 14.3665V18.4612C23.3495 18.638 20.0822 19.2596 17.2515 19.9722C15.4125 20.4352 13.3474 20.8639 11.8589 22.2294C12.7921 23.2915 14.4324 23.9024 15.5441 24.2735C18.3176 25.1857 22.3402 25.8262 26.9407 25.8262C31.5413 25.8262 35.5638 25.1857 38.3374 24.2735C39.5031 23.6674 41.2308 23.4595 42.0229 22.2294C40.4311 21.0507 38.2726 20.427 36.6301 19.9722C33.8124 19.1998 30.532 18.638 28.2657 18.4612V14.3664L25.6158 14.3665ZM63.3954 20.104C61.5989 20.0879 59.8887 20.9821 59.9171 22.0833C62.6241 23.6971 65.3167 23.7489 66.8525 22.3367C67.7885 21.4761 63.9865 20.1094 63.3954 20.104ZM58.0916 24.2728C56.2262 26.3312 54.1011 28.2192 52.0249 29.1849C54.3817 32.7167 56.2081 37.0356 56.4918 41.5587C57.28 41.6638 58.0632 41.8104 58.8386 41.9981C61.9284 37.3412 63.2327 30.9628 65.1842 25.9101C63.0109 26.2863 60.5391 25.8875 58.0916 24.2728ZM52.851 44.2266C49.742 44.2266 47.007 45.0462 45.0152 45.6353C43.9551 45.9489 42.4187 46.7305 42.3986 47.9389C42.7107 49.1546 44.0946 49.8324 45.0152 50.2423C46.9306 51.0825 49.742 51.6512 52.851 51.6512C55.9599 51.6512 58.7713 51.0825 60.6869 50.2423C61.4545 49.7688 63.2834 49.1474 63.3034 47.9389C62.9914 46.723 61.6075 46.0453 60.6869 45.6353C58.7713 44.7954 55.9601 44.2266 52.851 44.2266ZM42.3986 52.0717V63.4339C42.3986 65.4111 43.4389 66.829 45.3775 67.9626C47.316 69.0961 50.0833 69.7287 52.851 69.7287C55.6187 69.7287 58.386 69.0961 60.3246 67.9626C62.2632 66.829 63.3034 65.4111 63.3034 63.4339V52.0717C62.808 52.3942 62.262 52.6807 61.6708 52.9401C59.3238 53.9692 56.2465 54.5565 52.851 54.5565C49.4554 54.5565 46.3783 53.9692 44.0312 52.9399C43.4401 52.6807 42.8939 52.3942 42.3986 52.0717ZM24.4247 61.5596C19.5747 62.8504 14.7314 62.5313 10.5678 62.2315C8.00876 62.0472 5.69701 61.8813 3.84149 62.054C2.61944 62.1676 1.65178 62.4356 0.868729 62.8636C2.58646 64.7663 4.80193 66.3201 7.67002 67.2256C8.49767 66.6855 9.41307 66.3248 10.3597 66.1125C12.5479 65.6219 14.967 65.7353 17.5761 65.7584C19.1661 65.7726 20.8184 65.7636 22.5133 65.6059C23.5157 64.4722 23.9751 62.8576 24.4247 61.5596ZM32.719 65.4075C27.2998 68.5398 21.9271 68.7023 17.5546 68.6634C14.9038 68.6398 12.5975 68.5761 10.8907 68.9588C9.59709 69.249 8.68773 69.6946 7.97991 70.6258C11.925 73.5553 18.059 75.3401 25.4811 72.7442C29.7828 71.2399 31.1981 69.4651 32.0305 67.5752C32.326 66.9042 32.5251 66.1668 32.719 65.4075Z" fill="white" />
                            </svg>
                        </motion.div>

                        <span className="font-goudy text-xs sm:text-sm tracking-widest text-white font-medium">
                            {t.footer.year}
                        </span>
                    </div>

                    <button
                        type="button"
                        onClick={() => scrollToSection('home')}
                        className="font-goudy text-white text-2xl sm:text-3xl hover:opacity-90 transition-opacity"
                    >
                        Brew & Bind
                    </button>
                    <h2 className="font-lateef text-white/90 text-xl sm:text-2xl">{t.footer.tagline}</h2>
                    <div className="w-20 h-[0.5px] bg-white/30 my-1" />
                </motion.div>

                {/* Vertical Divider 2 (Desktop) */}
                <div className="w-[0.5px] h-32 bg-white/30 hidden md:block md:order-4" />

                {/* Desktop Right Links / Mobile Links 2 */}
                <motion.div
                    variants={fadeUpVariants}
                    className="flex flex-wrap justify-center md:flex-col gap-6 md:gap-4 items-center md:items-start text-center md:text-left rtl:md:text-right order-3 md:order-5"
                >
                    <button
                        type="button"
                        onClick={() => scrollToSection('features')}
                        className="font-lateef text-white text-2xl cursor-pointer hover:opacity-80 transition-opacity"
                    >
                        {t.footer.whatsBrewing}
                    </button>
                    <button
                        type="button"
                        onClick={() => scrollToSection('contact')}
                        className="font-lateef text-white text-2xl cursor-pointer hover:opacity-80 transition-opacity"
                    >
                        {t.footer.joinWaitlist}
                    </button>
                </motion.div>
            </motion.div>

            {/* Bottom Coming Soon Bar */}
            <motion.div
                variants={fadeUpVariants}
                className="relative z-10 w-full border-t border-white/20 py-3 px-4 text-center"
            >
                <h2 className="font-lateef text-white text-base sm:text-lg">{t.footer.comingSoon}</h2>
            </motion.div>
        </motion.footer>
    );
}
