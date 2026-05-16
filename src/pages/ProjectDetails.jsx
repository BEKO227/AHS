import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Project not found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white pt-32 px-6 md:px-16 relative overflow-hidden">

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 left-1/2 w-96 h-96 bg-white/5 blur-[120px] rounded-full -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 blur-[140px] rounded-full"></div>
      </div>

      {/* ================= BACK BUTTON ================= */}
      <div className="max-w-6xl mx-auto mb-10">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-white/50 hover:text-white transition"
        >
          <ArrowLeft
            size={18}
            className="transition group-hover:-translate-x-1"
          />
          Back
        </button>
      </div>

      {/* ================= HEADER ================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center mb-20"
      >
        <p className="uppercase tracking-[0.4em] text-white/40 text-xs mb-4">
          Project
        </p>

        <h1 className="text-4xl md:text-6xl font-light tracking-wide leading-tight">
          {project.title}
        </h1>

        <p className="mt-6 text-gray-400 leading-relaxed text-sm md:text-base">
          {project.description}
        </p>
      </motion.div>

      {/* ================= INSTAGRAM STYLE GALLERY ================= */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-5">

        {project.images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.03,
              ease: "easeOut",
            }}
            className={`
              group overflow-hidden rounded-2xl border border-white/10 bg-white/5
              hover:border-white/20 transition duration-500
              ${
                index % 5 === 0
                  ? "aspect-3/4"
                  : index % 4 === 0
                  ? "aspect-square"
                  : "aspect-4/5"
              }
            `}
          >
            <img
              src={img}
              alt={project.title}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110"
            />
          </motion.div>
        ))}

      </div>

      {/* ================= SPACING ================= */}
      <div className="h-28"></div>

    </section>
  );
};

export default ProjectDetails;