export const Badge = ({ children, variant = "default"}: { children: React.ReactNode; variant?: "default" | "secondary" | "outline";}) => {
  const variants = {
    default: "bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold",
    secondary:"bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2.5 py-0.5 rounded-md text-xs font-medium",
    outline:"border border-gray-300 dark:border-gray-600 px-2 py-0.5 rounded-md text-xs font-medium",
  };
  return <span className={variants[variant]}>{children}</span>;
};
