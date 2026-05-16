import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/data";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed inset-x-0 top-0 z-50"
    >
      {/* BACKDROP */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-xl border-b border-white/10"></div>

      {/* GLOW */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="relative w-full px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/">
          <motion.div
            whileHover={{
              scale: 1.03,
              letterSpacing: "0.4em",
            }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-5xl font-black tracking-[0.3em] text-white cursor-pointer select-none"
          >
            AHS
          </motion.div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 lg:gap-14">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;

            return (
              <Link
                key={link.name}
                to={link.href}
                className="relative group"
              >
                <span
                  className={`text-xs md:text-sm uppercase tracking-[0.25em] transition duration-500 ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                >
                  {link.name}
                </span>

                {/* UNDERLINE */}
                <span
                  className={`absolute -bottom-2 left-0 h-px bg-white transition-all duration-500 ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white z-50"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10"
          >
            <div className="flex flex-col items-center py-8 gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-sm uppercase tracking-[0.3em] transition duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;