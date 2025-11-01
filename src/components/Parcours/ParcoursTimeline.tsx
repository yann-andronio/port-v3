import { motion } from "framer-motion";
import ParcoursCard from "./ParcoursCard";
import type { DataParcoursI } from "../../data/DataParcours";

interface ParcoursTimelineProps {
  data: DataParcoursI[];
}

export default function ParcoursTimeline({ data }:ParcoursTimelineProps) {
  return (
    <div className="relative mt-16">
      {/* Ligne center */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-indigo-400 via-purple-400 to-cyan-400 opacity-60 rounded-full" />

      <div className="space-y-20">
        {data.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col sm:flex-row items-center ${
                isLeft ? "sm:flex-row-reverse" : ""
              }`}
            >
              {/* Point center */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-linear-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full border-4 border-white dark:border-[#060010] shadow-md z-10" />

             
              <div className={`w-full sm:w-1/2 mt-10 sm:mt-0 ${isLeft ? "sm:pr-14" : "sm:pl-14"}`}>
                <ParcoursCard item={item} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
