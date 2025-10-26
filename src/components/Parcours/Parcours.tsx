"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, Globe2 } from "lucide-react";

const parcours = [
  {
    id: 1,
    annee: "2019",
    titre: "Baccalauréat Série D",
    etablissement: "Lycée Saint Michel, Antananarivo",
    description: "Obtention du baccalauréat scientifique avec mention.",
    icon: GraduationCap,
  },
  {
    id: 2,
    annee: "2021",
    titre: "DELF & DALF B1 - B2",
    etablissement: "Alliance Française de Madagascar",
    description: "Certification officielle en langue française, niveaux B1 et B2.",
    icon: Globe2,
  },
  {
    id: 3,
    annee: "2023",
    titre: "Licence en Informatique",
    etablissement: "Université d’Antananarivo",
    description:
      "Spécialisation en développement web, design d’interfaces et technologies modernes.",
    icon: BookOpen,
  },
  {
    id: 4,
    annee: "2024",
    titre: "Formation MERN Stack",
    etablissement: "IT Training Center Madagascar",
    description:
      "Formation complète et certifiante sur le développement web full-stack (MongoDB, Express, React, Node.js).",
    icon: Award,
  },
];

export default function Parcours() {
  return (
    <section className="py-24 bg-white dark:bg-[#060010] transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        {/* ----- TITRE ----- */}
       <div className="text-center mb-20">
  <h2 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
    Mon{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-purple-500">
      Parcours
    </span>{" "}
    Académique
  </h2>

  <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed text-gray-600 dark:text-gray-400">
    Un chemin d’apprentissage progressif, entre curiosité, rigueur et passion
    pour le numérique — retraçant les étapes qui ont forgé ma vision et mes
    compétences d’aujourd’hui.
  </p>
</div>


        {/* ----- TIMELINE ----- */}
        <div className="relative">
          {/* Ligne centrale */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-indigo-400 via-purple-400 to-cyan-400 opacity-60 rounded-full" />

          <div className="space-y-20">
            {parcours.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isLeft ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Point sur la ligne */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full border-4 border-white dark:border-[#060010] shadow-md z-10" />

                  {/* Carte */}
                  <div
                    className={`w-full sm:w-1/2 mt-10 sm:mt-0 ${
                      isLeft ? "sm:pr-14" : "sm:pl-14"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="relative bg-white dark:bg-[#060010] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all"
                    >
                      {/* Icône */}
                      <div className="absolute -top-6 left-6 w-12 h-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-md">
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Contenu */}
                      <div className="mt-4">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {item.titre}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-2">
                          {item.etablissement}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                          {item.description}
                        </p>
                        <span className="text-sm text-indigo-600 dark:text-cyan-400 font-semibold mt-3 block">
                          {item.annee}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
