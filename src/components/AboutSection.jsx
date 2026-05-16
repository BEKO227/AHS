import Reveal from "./Reveal";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full max-w-7xl mx-auto py-20 md:py-28 px-6 md:px-10 lg:px-16 border-t border-white/10"
    >

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <Reveal>

          <div>

            <p className="uppercase tracking-[0.3em] text-gray-500 mb-5 text-sm">
              About Studio
            </p>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Minimal architecture with timeless elegance.
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              AHS Architects creates luxurious architectural environments through
              precision, geometry, and refined modern aesthetics.
            </p>

          </div>

        </Reveal>

        <Reveal delay={0.2}>

          <div className="overflow-hidden rounded-3xl">

            <img
              src="/About.jpg"
              alt="Studio"
              className="w-full aspect-4/5 object-cover hover:scale-105 transition duration-1000"
            />

          </div>

        </Reveal>

      </div>

    </section>
  );
};

export default AboutSection;