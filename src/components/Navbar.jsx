import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { navLinks } from "../data/data";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* BACKDROP */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-2xl border-b border-white/10"></div>

      {/* GLOW */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="relative w-full px-6 md:px-10 lg:px-16 py-5 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.03, letterSpacing: "0.4em" }}
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
              <Link key={link.name} to={link.href} className="relative group">
                <span
                  className={`text-xs md:text-sm uppercase tracking-[0.25em] transition duration-500 ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                >
                  {link.name}
                </span>

                <span
                  className={`absolute -bottom-2 left-0 h-px bg-white transition-all duration-500 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-xl border-t border-white/10"
        >
          <div className="flex flex-col px-6 py-6 gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm uppercase tracking-[0.2em] ${
                    isActive ? "text-white" : "text-gray-400"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;