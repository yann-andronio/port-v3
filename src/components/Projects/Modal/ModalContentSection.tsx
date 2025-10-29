import { MoreHorizontal } from "lucide-react";
import type { ProjectI } from "../../../data/DataProjects";
import ModalLittleImg from "./ModalLittleImg";
import { ImageModal } from "./ImageModal";
import { useState } from "react";
import { cleanCloudinaryUrl } from "../../../utils/cloudinaryUtils";

interface ModalContentSectionProps {
  project: ProjectI;
  accentText: string;
}

export const ModalContentSection = ({
  project,
  accentText,
}: ModalContentSectionProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleImageClick = (src: string) => {
    const highResSrc = cleanCloudinaryUrl(src)
    setSelectedImage(highResSrc);
  };
  const handleModalClose = () => {
    setSelectedImage(null);
  };
  return (
    <>
      <div className="lg:col-span-2 flex flex-col gap-5 sm:gap-7 lg:h-full">
        <div className="shrink-0 h-40 sm:h-64 lg:h-[45vh]">
          <img
            src={`${project.mainImage.url}`}
            alt={project.mainImage.alt}
            className="w-full h-full rounded-xl shadow-2xl border border-gray-300 dark:border-gray-700"
          />
        </div>

        <div className="shrink-0">
          <h3
            className={`text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2 ${accentText} border-b border-gray-200 dark:border-gray-700 pb-2`}
          >
            <MoreHorizontal className="w-5 h-5 sm:w-6 sm:h-6" /> À Propos du
            Projet
          </h3>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
            {project.description}
          </p>
        </div>

        {project.images && project.images.length > 0 && (
          <div className="shrink-0 hidden md:block">
            <h3
              className={`text-xl sm:text-2xl font-bold mb-3 ${accentText} border-b border-gray-200 dark:border-gray-700 pb-2`}
            >
              Captures Additionnelles
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
              {project.images.slice(0, 6).map((img, i) => (
                <ModalLittleImg
                  key={i}
                  src={img.url}
                  alt={img.alt}
                  className="hover:scale-[1.02] cursor-pointer transition-transform duration-300"
                  onClick={handleImageClick}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <ImageModal imageUrl={selectedImage} onClose={handleModalClose} />
    </>
  );
};
