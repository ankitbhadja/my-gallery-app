import { motion } from "framer-motion";
import { TbBrandNextjs, TbBrandCpp, TbBrandTypescript, TbBrandPython } from "react-icons/tb";
import { SiMongodb, SiPostgresql, SiRedis, SiMysql, SiFirebase } from "react-icons/si";
import { FaNodeJs, FaReact, FaAws } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";

const languages = [
  { name: "C++", icon: <TbBrandCpp className="text-2xl text-blue-500" /> },
  { name: "Python", icon: <TbBrandPython className="text-2xl text-yellow-500" /> },
  { name: "TypeScript", icon: <TbBrandTypescript className="text-2xl text-blue-700" /> },
  { name: "Next.js", icon: <TbBrandNextjs className="text-2xl text-black" /> },
];

const cloud = [
  { name: "AWS", icon: <FaAws className="text-2xl text-yellow-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-2xl text-orange-500" /> },
];

const databases = [
  { name: "MongoDB", icon: <SiMongodb className="text-2xl text-green-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-2xl text-blue-500" /> },
  { name: "Redis", icon: <SiRedis className="text-2xl text-red-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-2xl text-blue-700" /> },
];

const devtools = [
  { name: "Node.js", icon: <FaNodeJs className="text-2xl text-green-600" /> },
  { name: "React", icon: <FaReact className="text-2xl text-blue-400" /> },
  { name: "Netlify", icon: <BiLogoNetlify className="text-2xl text-green-500" /> },
];

const Skill = () => {
  return (
    <section id="skills" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark">Technical Skills</h2>
          <div className="mt-2 flex justify-center">
            <div className="h-1 w-16 bg-primary rounded-full" />
            <div className="h-1 w-8 bg-secondary rounded-full ml-2" />
          </div>
        </div>

        {/* Skill Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md p-6 project-card">
            {/* Languages Section */}
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                <i className="fas fa-code" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-dark">Languages &amp; Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {languages.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-center gap-2 skill-pill bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill.icon}
                  <span className="ml-2 text-sm">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md p-6 project-card">
            {/* Cloud Section */}
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                <i className="fas fa-cloud" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-dark">Cloud &amp; DevOps</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {cloud.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-center gap-2 skill-pill bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill.icon}
                  <span className="ml-2 text-sm">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md p-6 project-card">
            {/* Databases Section */}
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                <i className="fas fa-database" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-dark">Databases</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {databases.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-center gap-2 skill-pill bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill.icon}
                  <span className="ml-2 text-sm">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Clip: DevTools Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md p-6 project-card">
            {/* DevTools Section */}
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                <i className="fas fa-tools" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-dark">DevTools</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {devtools.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-center gap-2 skill-pill bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill.icon}
                  <span className="ml-2 text-sm">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
