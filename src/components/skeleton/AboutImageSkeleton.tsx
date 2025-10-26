import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


interface AboutImageSkeletonProps {
  isDark?: boolean;
}

const AboutImageSkeleton = ({isDark = false}:AboutImageSkeletonProps) => {
  const baseColor = isDark ? "#2c2c2c" : "#e5e5e5";
  const highlightColor = isDark ? "#444" : "#f5f5f5";
  return (
    <div className="order-1 lg:order-none lg:col-span-1 flex justify-center lg:justify-end flex-shrink-0 relative">
      <div className="w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96  overflow-hidden shadow-lg">
        <Skeleton
          baseColor={baseColor}
          highlightColor={highlightColor}
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
};

export default AboutImageSkeleton;
