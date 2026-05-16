const ContactSection = () => {
    return (
      <section id="contact" className="py-32 px-6 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
  
        <h2 className=" text-black! text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">            
            Let’s create something{" "}
            <span className="font-semibold tracking-tight">timeless.</span>
          </h2>
  
          <p className="text-base my-10 md:text-lg text-zinc-600 leading-relaxed mb-20">
            Collaborate with AHS Architects to transform your vision into elegant architectural reality, shaped by precision and clarity.
          </p>
  
          <button
            className="mt-8 relative bg-zinc-900 text-white px-8 md:px-10 py-4 md:py-5 rounded-full uppercase tracking-[0.25em] text-xs md:text-sm font-medium overflow-hidden transition-all duration-300 hover:bg-black shadow-sm hover:shadow-lg cursor-pointer"
            onClick={() => window.location.href = "/contact"}
          >
            <span className="relative z-10">Start Your Project</span>
  
            <span className="absolute inset-0 bg-linear-to-r from-white/10 via-transparent to-white/10 opacity-0 hover:opacity-100 transition duration-500" />
          </button>
  
        </div>
      </section>
    );
  };
  
  export default ContactSection;