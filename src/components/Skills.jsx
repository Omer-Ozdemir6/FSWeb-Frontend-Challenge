import React from "react"
import { useSelector } from "react-redux";
import { useLanguage } from "../context/LanguageContext";



const Skills = () => {
const { language, toggleLanguage, texts } = useLanguage()
const skills = useSelector((state) => state.skillsState.data);
return (
    <section id= "skills" className="py-20">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-400 mb-12">
            Skills
        </h2>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {skills.map((skill) => (
          <div key={skill.id} className="space-y-4">
            <h3 className="text-2xl font-medium text-purple-700 dark:text-purple-400">
              {skill.details[language].title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {skill.details[language].description}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-700 mt-20"></div>
    </section>
)
}
export default Skills;