import { MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-black text-white py-32 px-6 md:px-16">

      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-light">Contact</h1>
        <p className="text-gray-400 mt-4">
          Let’s build something timeless together
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* MAP */}
        <div className="h-105 rounded-3xl overflow-hidden border border-white/10 bg-white/5">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.609243397258!2d31.108602124992313!3d29.97596052181325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584fb7c5c1be19%3A0x1b85e606337052b4!2sAHS%20Architects!5e1!3m2!1sar!2seg!4v1778781698742!5m2!1sar!2seg"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* INFO */}
        <div className="flex flex-col justify-center gap-6">

          <div className="flex items-center gap-4">
            <Phone className="text-white/60" />
            <span>+2 012 00113599</span>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-white/60" />
            <span>info3.ahs@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-white/60" />
            <span>Giza, Egypt</span>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">

            <a
              href="https://www.instagram.com/ahs_architects/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-white/10 hover:border-white/30 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/AHS.Architects3/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-white/10 hover:border-white/30 transition"
            >
              <FaFacebookF />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;