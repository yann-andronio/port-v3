import React from "react";
import { Info } from "lucide-react";

interface LinkUnavailableModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "live" | "code";
  projectText: string;
}

export const LinkUnavailableModal: React.FC<LinkUnavailableModalProps> = ({ isOpen, onClose, type, projectText}) => {
  if (!isOpen) return null;

  const title =
    type === "live"
      ? "Projet non hébergé (Live)"
      : "Code Privé ou Indisponible";
  const message =
    type === "live"
      ? `Le projet **${projectText}** n'est pas actuellement hébergé en ligne. Vous pouvez consulter le code si disponible.`
      : `Le code source de **${projectText}** est privé ou non disponible publiquement sur GitHub.`;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
          <Info className="w-5 h-5 text-yellow-500" /> {title}
        </h4>
        <p className="text-gray-700 dark:text-gray-300 text-sm">{message}</p>
        <button
          onClick={onClose}
          className={`mt-4 w-full py-2 px-4 rounded font-semibold transition-colors bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600`}
        >
          Fermer
        </button>
      </div>
    </div>
  );
};
