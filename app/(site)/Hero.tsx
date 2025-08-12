"use client";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
    const { scrollY } = useScroll();
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    // Apple-style parallax effects
    const opacity = useTransform(scrollY, [0, 300, 600], [1, 0.8, 0]);
    const scale = useTransform(scrollY, [0, 600], [1, 1.1]);
    const yTransform = useTransform(scrollY, [0, 600], [0, -150]);
    const textOpacity = useTransform(scrollY, [0, 200, 400], [1, 0.7, 0]);
    const textY = useTransform(scrollY, [0, 400], [0, -100]);

    return (
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-gradient-to-b from-neutral-900 to-neutral-800">
            {/* Background Video/Image with Parallax */}
            <motion.div
                style={{ opacity, scale, y: yTransform }}
                className="absolute inset-0 z-0"
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    onLoadedData={() => setIsVideoLoaded(true)}
                    className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    poster="/hero-poster.jpg"
                >
                    <source src="/hero.mp4" type="video/mp4" />
                </video>

                {/* Fallback Image (professional Indian cuisine) */}
                <Image
                    src="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=1600&auto=format&fit=crop"
                    alt="Restaurant ambiance"
                    fill
                    priority
                    className={`object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'
                        }`}
                />

                {/* Gradient Overlays (darkened for text contrast) */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
            </motion.div>

            {/* Hero Content */}
            <motion.div
                style={{ opacity: textOpacity, y: textY }}
                className="relative z-10 container-grid h-full flex flex-col items-center justify-end text-center pb-20 md:pb-28"
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-[0_6px_24px_rgba(0,0,0,0.65)]">
                        Authentic Indian
                        <br />
                        <span className="text-primary-400">Cuisine Reimagined</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-xl md:text-2xl text-white/95 mb-10 max-w-2xl leading-relaxed drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
                >
                    Experience the finest flavors of India in the heart of Sandpoint
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.1 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <a
                        href="/reservations"
                        className="group relative px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                    >
                        <span className="relative z-10">Reserve Your Table</span>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>

                    <a
                        href="/menu"
                        className="group px-8 py-4 border-2 border-white/80 hover:border-white text-white hover:bg-white hover:text-neutral-900 font-semibold rounded-full transition-all duration-300"
                    >
                        Explore Our Menu
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                style={{ opacity: textOpacity }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
            >
                <div className="flex flex-col items-center text-white/70">
                    <span className="text-sm mb-2">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
                    >
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1 h-2 bg-white/70 rounded-full mt-2"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}