import { Link } from "react-router-dom";
import { rewards } from "../data/rewards";

const Rewards = () => {
  return (
    <section className="min-h-screen bg-black text-white py-25 px-6 md:px-16">

      {/* HEADER */}
      <div className="relative max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-light tracking-wide">
            Rewards
          </h1>
  
          <p className="mt-6 text-gray-400 leading-relaxed text-sm md:text-base">
            A curated collection of recognition, achievements, and milestones that define our architectural journey.
          </p>
        </div>
      {/* GRID */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">

        {rewards.map((item) => (
          <Link
            key={item.id}
            to={`/rewards/${item.id}`}
            className="group"
          >

            <div className="h-130 rounded-3xl overflow-hidden border border-white/10 bg-white/5 flex flex-col backdrop-blur-xl transition duration-500 group-hover:scale-[1.02]">

              {/* IMAGE */}
              <div className="h-[60%] overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1 justify-between">

                <div>
                  <div className="flex justify-between mb-3">
                    <h2 className="text-lg font-light">{item.title}</h2>
                    <span className="text-xs text-gray-400">{item.year}</span>
                  </div>

                  <p className="text-sm text-gray-400 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-xs tracking-[0.3em] text-white/40 uppercase">
                  View Details →
                </div>

              </div>

            </div>

          </Link>
        ))}

      </div>

    </section>
  );
};

export default Rewards;