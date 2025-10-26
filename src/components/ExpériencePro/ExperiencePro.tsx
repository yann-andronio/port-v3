import{ useState, useCallback } from "react";
import { TimelineItem } from "./timeline/TimelineItem";
import { DataExperience } from "../../data/DataExperience";

export default function ExperiencePro() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set(["exp-1"]));

  const onToggle = useCallback((id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  return (
    <section
      id="experience"
      className="py-12 sm:py-16 md:py-24 lg:py-32 text-gray-900 dark:text-white transition-colors bg-white dark:bg-[#060010]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 md:mb-20">
          
          <p className="text-base font-medium tracking-wide text-gray-600 dark:text-gray-400">
            Tracer mon parcours, de la formation aux réalisations concrètes.
          </p>
          
          <h2 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Ma{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-500 to-indigo-700">
              Trajectoire
            </span>{" "}
            Professionnelle
          </h2>
        </div>

        <div className="relative">
          {DataExperience.map((item) => (
            <TimelineItem
              key={item.id}
              item={item}
              expanded={expanded.has(item.id)}
              onToggle={onToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}