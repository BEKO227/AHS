import { useParams, useNavigate } from "react-router-dom";
import { rewards } from "../data/rewards";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import ImageModal from "../components/Imagemodal";

const RewardDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);

  const reward = rewards.find((r) => r.id === id);

  if (!reward) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Reward not found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white py-32 px-6 md:px-16">

      {/* BACK */}
      <div className="max-w-5xl mx-auto mb-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/50 hover:text-white"
        >
          <ArrowLeft size={18} />
          Back
        </button>
      </div>

      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-white/40 tracking-[0.3em] uppercase text-xs">
          Reward
        </p>

        <h1 className="text-4xl md:text-6xl font-light mt-4">
          {reward.title}
        </h1>

        <p className="text-gray-400 mt-6 leading-relaxed">
          {reward.fullDescription}
        </p>
      </div>

      {/* GALLERY */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">

        {reward.gallery.map((img, i) => (
          <div
            key={i}
            onClick={() => setSelectedImage(img)}
            className="
              cursor-pointer
              rounded-2xl
              overflow-hidden
              border border-white/10
              aspect-4/5
              group
            "
          >
            <img
              src={img}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
        ))}

      </div>

      {/* MODAL */}
      <ImageModal
        isOpen={!!selectedImage}
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

    </section>
  );
};

export default RewardDetails;