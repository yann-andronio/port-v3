import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface ProjectCardSkeletonProps {
  isDark?: boolean;
}

export const ProjectCardSkeleton = ({
  isDark = false,
}: ProjectCardSkeletonProps) => {
  const baseColor = isDark ? "#2c2c2c" : "#e5e5e5";
  const highlightColor = isDark ? "#444" : "#f5f5f5";

  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-3xl cursor-pointer
                    shadow-xl transition-all duration-500
                    bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 p-6
                    animate-skeleton-shimmer`}
    >
      {/* Image */}
      <Skeleton
        height={224}
        className="rounded-3xl shadow-inner shadow-gray-300/20 dark:shadow-black/20"
        baseColor={baseColor}
        highlightColor={highlightColor}
      />

      {/* Title */}
      <div className="mt-4">
        <Skeleton
          height={28}
          width="60%"
          className="rounded-md"
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
      </div>

      {/* Description */}
      <div className="mt-2 space-y-2">
        <Skeleton
          height={16}
          className="rounded-md"
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
        <Skeleton
          height={16}
          width="90%"
          className="rounded-md"
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
      </div>

      {/* Badges */}
      <div className="flex gap-2 mt-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton
            key={i}
            width={60}
            height={24}
            className="rounded-full"
            baseColor={baseColor}
            highlightColor={highlightColor}
          />
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 mt-4">
        <Skeleton
          width={60}
          height={20}
          className="rounded-md"
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
        <Skeleton
          width={60}
          height={20}
          className="rounded-md"
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
      </div>
    </div>
  );
};
