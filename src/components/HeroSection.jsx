import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >

      {/* BACKGROUND */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >

        <img
          src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2070&auto=format&fit=crop"
          alt="Architecture"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />

      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-5xl mt-16 md:mt-20">

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="uppercase tracking-[0.3em] text-gray-300 mb-6 text-xs md:text-sm"
        >
          Architecture • Interiors • Luxury Spaces
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="text-5xl sm:text-7xl md:text-[9rem] font-black tracking-[0.2em] leading-none mb-6"
        >
          AHS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-gray-300 text-base md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Elegant architectural experiences crafted through minimalism,
          sophistication, and timeless design.
        </motion.p>

      </div>
    </section>
  );
};

export default HeroSection;