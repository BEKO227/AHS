const Services = () => {
  const services = [
    {
      title: "Architectural Design",
      description: "Modern residential and commercial architecture solutions.",
      image: "/images/services/1.jpg",
    },
    {
      title: "Interior Design",
      description: "Luxury interior spaces with minimal aesthetics.",
      image: "/images/services/2.jpg",
    },
    {
      title: "Urban Planning",
      description: "Smart city and large-scale infrastructure planning.",
      image: "/images/services/3.jpg",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white py-32 px-6 md:px-16">

      <h1 className="text-5xl font-light text-center mb-16">Services</h1>

      <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">

        {services.map((item, i) => (
          <div key={i} className="group">

            <div className="h-130 rounded-3xl overflow-hidden border border-white/10 bg-white/5 flex flex-col">

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
                  <h2 className="text-lg font-light mb-2">{item.title}</h2>
                  <p className="text-sm text-gray-400 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10"></div>

              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Services;