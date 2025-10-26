import { Badge } from "./Badge";
import type { DataExperienceI } from "../../../data/DataExperience";

export const TimelineItemContent = ({ item }: { item: DataExperienceI }) => (
  <div className="mt-4 space-y-4 sm:space-y-5 animate-in slide-in-from-top-1 duration-300">
    <div className="space-y-3">
      {item.taches.map((tache, i) => (
        <div key={i} className="flex items-start gap-3">
          <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {tache}
          </p>
        </div>
      ))}
    </div>
    
    <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-200 dark:border-gray-700">
      {item.langage.map((skill, i) => (
        <Badge key={i} variant="secondary">
          {skill}
        </Badge>
      ))}
    </div>

  </div>
);