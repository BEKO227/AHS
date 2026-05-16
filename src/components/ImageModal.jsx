import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const ImageModal = ({ isOpen, image, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-9999 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/70 hover:text-white transition"
          >
            <X size={34} />
          </button>

          {/* IMAGE */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full max-w-7xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={image}
              alt="preview"
              className="
                w-full
                max-h-[90vh]
                object-contain
                rounded-3xl
                border border-white/10
              "
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;