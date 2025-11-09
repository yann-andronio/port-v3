import React from "react";
import ReactDOM from "react-dom";
import { Info } from "lucide-react";
import { useTranslation } from "react-i18next";

interface LinkUnavailableModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "live" | "code";
  projectText: string;
}

export const LinkUnavailableModal: React.FC<LinkUnavailableModalProps> = ({
  isOpen,
  onClose,
  type,
  projectText,
}) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  const title =
    type === "live"
      ? t("modal.live_title")
      : t("modal.code_title");

  const message =
    type === "live"
      ? t("modal.live_message", { project: projectText })
      : t("modal.code_message", { project: projectText });

  const modalContent = (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-9999 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-gray-200 dark:border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
          <Info className="w-5 h-5 text-yellow-500" /> {title}
        </h4>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          {message}
        </p>
        <button
          onClick={onClose}
          className="mt-5 w-full py-2.5 px-4 rounded-lg font-semibold bg-linear-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90 transition-all"
        >
          {t("modal.close")}
        </button>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};
