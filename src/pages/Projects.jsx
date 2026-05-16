import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="min-h-screen bg-black text-white py-28 px-6 md:px-16">

      {/* ================= TITLE ================= */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-light text-center mb-20"
      >
        Projects
      </motion.h1>

      {/* ================= GRID ================= */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">

        {projects.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.06,
              ease: "easeOut",
            }}
          >

            <Link to={`/projects/${item.id}`} className="group block">

              {/* ================= CARD ================= */}
              <div className="relative h-130 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col transition duration-500">

                {/* ================= IMAGE ================= */}
                <div className="h-[58%] overflow-hidden relative">

                  <img
                    src={item.images?.[0]}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                </div>

                {/* ================= CONTENT ================= */}
                <div className="flex flex-col flex-1 p-6">

                  {/* TOP */}
                  <div className="flex-1">

                    <div className="flex items-start justify-between gap-4 mb-3">

                      <h2 className="text-lg md:text-xl font-light tracking-wide leading-snug">
                        {item.title}
                      </h2>

                      {item.year && (
                        <span className="text-[11px] text-gray-400 tracking-[0.25em] whitespace-nowrap">
                          {item.year}
                        </span>
                      )}

                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>

                  </div>

                  {/* ================= FOOTER (LOCKED) ================= */}
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">

                    <span className="text-[11px] tracking-[0.3em] text-white/40 uppercase">
                      View Project
                    </span>

                    <span className="text-white/40 group-hover:text-white transition transform group-hover:translate-x-1">
                      →
                    </span>

                  </div>

                </div>

              </div>

            </Link>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Projects;