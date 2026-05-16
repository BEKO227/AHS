import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import Reveal from './Reveal';

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll
    ? projects
    : projects.slice(0, 3);

  return (
    <section className="w-full py-20">

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <Reveal>
        {/* HEADER */}
        <div className="mb-16">
          <p className="uppercase tracking-[0.3em] text-gray-500 mb-5 text-sm">
            Featured Projects
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Selected Work
          </h2>
        </div>

        </Reveal>

        {/* GRID */}
        <Reveal>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">



          {displayedProjects.map((project, index) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id || index}
              className="group relative overflow-hidden rounded-3xl border border-white/10"
            >

              <img
                src={project.image || project.images?.[0]}
                alt={project.title}
                className="w-full aspect-4/5 object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold">
                  {project.title}
                </h3>
              </div>

            </Link>
          ))}


        </div>
        </Reveal>


        <div className="flex justify-center mt-12">

        <Link
          to="/projects"
          className="px-8 py-3 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white transition"
        >
          Show More
        </Link>

        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;