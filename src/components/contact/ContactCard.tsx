import { useTranslation } from "react-i18next";

interface ContactCardProps {
  label: string;
  value: string;
  icon: any;
  link?: string;
}

function ContactCard({ label, value, icon: Icon, link }: ContactCardProps) {
  const { t } = useTranslation();
  const isClickable = link && link !== "#";

  return (
    <a
      href={link}
      target={isClickable ? "_blank" : undefined}
      rel={isClickable ? "noopener noreferrer" : undefined}
      className={`
        group p-6 rounded-2xl flex items-start gap-4 transition-all duration-300
        bg-white dark:bg-[#060010] border border-gray-200 dark:border-gray-700 shadow-sm
        hover:shadow-lg hover:scale-105 ${isClickable ? "cursor-pointer" : ""}
      `}
    >
      <div className="p-3 rounded-full bg-indigo-500/20 shrink-0 transition-transform duration-300 group-hover:scale-110">
        <Icon className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
      </div>
      <div className="flex flex-col overflow-hidden">
        <span className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
          {t(label)}
        </span>
        <span className={`mt-1 text-base font-medium wrap-break-word max-w-full truncate ${isClickable ? "text-indigo-500 dark:text-indigo-400 hover:underline" : "text-gray-900 dark:text-white"}`}>
          {value}
        </span>
      </div>
    </a>
  );
}

export default ContactCard;
