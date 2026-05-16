import { services } from "../data/data";
import { motion } from "framer-motion";

const serviceImages = [
  "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1974&auto=format&fit=crop",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ServicesSection = () => {
  return (
    <section className="w-full py-28 bg-linear-to-b from-black via-[#0a0a0a] to-black text-white relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">

        <div className="absolute -top-50 left-1/2 w-150 h-150 bg-white/5 blur-[140px] rounded-full -translate-x-1/2"></div>

        <div className="absolute -bottom-50 right-1/3 w-125 h-125 bg-white/5 blur-[160px] rounded-full"></div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >

          <p className="uppercase tracking-[0.4em] text-white/40 mb-5 text-xs">
            Creating Solid Dreams
          </p>

          <h2 className="text-4xl pt-5 md:text-6xl lg:text-7xl font-light tracking-wide leading-tight">
            Architecture &nbsp; &nbsp; Interior &nbsp;&nbsp; Visualization
          </h2>

        </motion.div>

        {/* SERVICES GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
        >

          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl aspect-3/4 border border-white/10 bg-white/5 backdrop-blur-xl"
            >

              {/* IMAGE */}
              <img
                src={serviceImages[index]}
                alt={service}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/10" />

              {/* NUMBER */}
              <div className="absolute top-6 left-6 text-4xl md:text-5xl font-black text-white/20 tracking-wider">
                0{index + 1}
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-6 left-6 right-6">

                <div className="mb-3 h-px w-12 bg-white/30"></div>

                <h3 className="text-xl md:text-2xl font-semibold text-white leading-snug">
                  {service}
                </h3>

              </div>

            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;