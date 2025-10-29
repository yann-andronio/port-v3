// ModalLittleImg.tsx

import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface ModalLittleImgProps {
  src: string;
  alt: string;
  className?: string;
}

const ModalLittleImg: React.FC<ModalLittleImgProps> = ({ src, alt, className}) => {
  const [loaded, setLoaded] = useState(false);

  const baseClasses ="w-full h-32 rounded-lg  dark:border-gray-700 cursor-zoom-in";

  return (
    <div className={`relative ${className} ${baseClasses}`}>
      {!loaded && <Skeleton className="absolute h-full inset-0 rounded-lg" />}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full rounded-lg transition-opacity duration-500 object-cover cursor-pointer ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
        style={{ display: loaded ? "block" : "none" }}
      />
    </div>
  );
};

export default ModalLittleImg;
