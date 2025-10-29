
import React, { useEffect, useState } from 'react'; 
interface ImageModalProps {
  imageUrl: string | null; 
  onClose: () => void;   
}

export const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, onClose }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (imageUrl) {
        setIsLoaded(false); 
    }
  }, [imageUrl]);


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (imageUrl) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [imageUrl, onClose]);

  if (!imageUrl) return null;

  return (
    <div
      className="fixed inset-0 z-100 bg-black bg-opacity-90 flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
      onClick={onClose} 
    >
      <button
        className="absolute top-4 right-4 text-white text-4xl font-light p-2 z-101 transition opacity-80 hover:opacity-100"
        onClick={onClose}
        aria-label="Fermer l'image agrandie"
      >
        &times;
      </button>

      {!isLoaded && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
        </div>
      )}

      <div 
        className="relative max-w-full max-h-full transition-transform duration-300"
        onClick={(e) => e.stopPropagation()} 
      >
        <img
          src={imageUrl}
          alt="Image agrandie du projet"
          onLoad={() => setIsLoaded(true)} 
          className={`
            max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl transition-opacity duration-500
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
          `}
          style={{ visibility: isLoaded ? 'visible' : 'hidden' }}
        />
      </div>
    </div>
  );
};