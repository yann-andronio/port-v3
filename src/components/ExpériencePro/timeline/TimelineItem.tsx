import { ChevronDown } from "lucide-react";
import { Badge } from "./Badge";
import { TimelineItemContent } from "./TimelineItemContent";
import type { DataExperienceI } from "../../../data/DataExperience";

export const TimelineItem = ({ item, expanded, onToggle}: { item: DataExperienceI; expanded: boolean; onToggle: (id: string) => void}) => {
  const Icon = item.icon;
  return (
    <div className="relative group">
      {/*tsipika*/}{" "}
      <div className="hidden sm:block absolute left-6 top-12 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-400 to-transparent" />
      {/* litte circle with little . */}
      <div className="hidden sm:flex absolute left-4 top-6 w-4 h-4 bg-white dark:bg-[#060010] border-2 border-indigo-500 rounded-full items-center justify-center group-hover:bg-indigo-500 transition-colors">
        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full group-hover:bg-white transition-colors" />
      </div>
      <div className="ml-0 sm:ml-12 mb-8 sm:mb-10">
        <div
          className={`bg-white dark:bg-[#060010] rounded-xl border border-gray-200 dark:border-gray-700 transition-all ${
            expanded ? "shadow-lg" : "hover:shadow-md"
          }`}
        >
          <button
            onClick={() => onToggle(item.id)}
            className="w-full flex items-start justify-between p-4 text-left"
          >
            <div className="space-y-2 flex-1 min-w-0 pr-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 dark:bg-gray-900 rounded-md flex-shrink-0">
                  <Icon className="w-5 h-5 text-indigo-500" />
                </div>
            
                <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug truncate sm:whitespace-normal">
                  {item.titre}
                </h3>
              </div>
          
              <div className="flex flex-wrap gap-x-3 gap-y-1 pl-[44px] sm:pl-0 mt-1">
                <Badge variant="outline">{item.type}</Badge>
                <span className="text-xs text-gray-500 dark:text-gray-400 self-center">
                  {item.duree}
                </span>
              </div>
            </div>
         
            <ChevronDown
              className={`w-5 h-5 text-gray-400 dark:text-gray-500 transition-transform duration-200 flex-shrink-0 ml-2 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>

          {expanded && (
            <div className="px-4 pb-4 border-t border-gray-100 dark:border-gray-800">
              <TimelineItemContent item={item} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
