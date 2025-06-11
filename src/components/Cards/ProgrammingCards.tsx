// components/ProgrammingLanguageCard.tsx

import React from "react";

interface ProgrammingLanguage {
  id: string;
  name: string;
  logoUrl: string;
  proficiency: number;
  color: string;
  description: string;
}

interface ProficiencyInfo {
  level: string;
  color: string;
}

interface Props {
  language: ProgrammingLanguage;
  index: number;
  getProficiencyLevel: (proficiency: number) => ProficiencyInfo;
}

const ProgrammingLanguageCard: React.FC<Props> = ({ language, index, getProficiencyLevel }) => {
  const proficiencyInfo = getProficiencyLevel(language.proficiency);

  return (
    <div
      key={language.id}
      className="
        group relative 
        bg-white/70 dark:bg-gray-800/70 
        backdrop-blur-sm rounded-2xl p-6 
        shadow-lg border border-white/20 dark:border-gray-700 
        transition-all duration-500 
        hover:scale-105 hover:shadow-2xl hover:bg-white/90 dark:hover:bg-gray-900/90
      "
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div
        className={`
          absolute inset-0 bg-gradient-to-r ${language.color} 
          rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300
        `}
      ></div>

      <div className="flex items-center justify-center mb-6 relative">
        <div className="relative p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
          <img
            src={language.logoUrl}
            alt={`${language.name} logo`}
            className="h-12 w-auto group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-center mb-2 text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white">
        {language.name}
      </h3>

      <div className="flex justify-center mb-4">
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${proficiencyInfo.color} bg-gray-100 dark:bg-gray-700`}>
          {proficiencyInfo.level}
        </span>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Proficiency</span>
          <span className="text-sm font-bold text-gray-900 dark:text-gray-100">{language.proficiency}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${language.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
            style={{
              width: `${language.proficiency}%`,
              animationDelay: `${index * 200}ms`,
            }}
          />
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed line-clamp-4 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
        {language.description}
      </p>

      <div
        className={`
          absolute -inset-0.5 bg-gradient-to-r ${language.color} 
          rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10
        `}
      ></div>
    </div>
  );
};


export default ProgrammingLanguageCard;
