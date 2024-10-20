import { RiReactjsLine } from "react-icons/ri";
import { RiJavaFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaAws } from "react-icons/fa"; // AWS
import { SiFirebase } from "react-icons/si"; // Firebase
import { SiDocker } from "react-icons/si"; // Docker
import { FaGitAlt } from "react-icons/fa"; // Git
import { FaPhp } from "react-icons/fa"; // PHP
import { SiTailwindcss } from "react-icons/si"; // Tailwind CSS
import { SiTypescript } from "react-icons/si"; // TypeScript
import { SiBootstrap } from "react-icons/si"; // Bootstrap
import { motion } from "framer-motion";
import { useState } from "react";

// Static duration for each icon
const iconsVariants = (duration) => ({
    initial: { y: -5 },
    animate: {
        y: [5, -5],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
    whileHover: { scale: 1.2 }, // Hover effect: scale the icon
});

function Technologies() {
    const [hoveredTech, setHoveredTech] = useState("");

    const handleMouseEnter = (tech) => {
        setHoveredTech(tech);
    };

    const handleMouseLeave = () => {
        setHoveredTech("");
    };

    return (
        <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
        className="pb-24 border-b border-neutral-800">
            <h2 className="my-20 text-4xl text-center">Technologies</h2>

            {/* Toast message to display the name of the hovered technology */}
            {hoveredTech && (
                <div className="fixed z-50 px-4 py-2 text-white transform -translate-x-1/2 bg-gray-800 border-dotted rounded-lg bottom-7 sadow-lg left-1/2">
                    {hoveredTech}
                </div>
            )}

            <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: +100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconsVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    whileHover="whileHover"
                    onMouseEnter={() => handleMouseEnter("ReactJS")}
                    onMouseLeave={handleMouseLeave}
                    className="p-4 border-4 rounded-2xl border-neutral-800"
                >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconsVariants(3.0)}
                    initial="initial"
                    animate="animate"
                    whileHover="whileHover"
                    onMouseEnter={() => handleMouseEnter("Next.js")}
                    onMouseLeave={handleMouseLeave}
                    className="p-4 border-4 rounded-2xl border-neutral-800"
                >
                    <TbBrandNextjs className="text-7xl" />
                </motion.div>
                <motion.div
                    variants={iconsVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    whileHover="whileHover"
                    onMouseEnter={() => handleMouseEnter("MongoDB")}
                    onMouseLeave={handleMouseLeave}
                    className="p-4 border-4 rounded-2xl border-neutral-800"
                >
                    <SiMongodb className="text-green-500 text-7xl" />
                </motion.div>
                <motion.div
                    variants={iconsVariants(2.8)}
                    initial="initial"
                    animate="animate"
                    whileHover="whileHover"
                    onMouseEnter={() => handleMouseEnter("Redis")}
                    onMouseLeave={handleMouseLeave}
                    className="p-4 border-4 rounded-2xl border-neutral-800"
                >
                    <DiRedis className="text-red-700 text-7xl" />
                </motion.div>
                <motion.div
                    variants={iconsVariants(3.2)}
                    initial="initial"
                    animate="animate"
                    whileHover="whileHover"
                    onMouseEnter={() => handleMouseEnter("Node.js")}
                    onMouseLeave={handleMouseLeave}
                    className="p-4 border-4 rounded-2xl border-neutral-800"
                >
                    <FaNodeJs className="text-green-500 text-7xl" />
                </motion.div>
                <motion.div
                    variants={iconsVariants(3.7)}
                    initial="initial"
                    animate="animate"
                    whileHover="whileHover"
                    onMouseEnter={() => handleMouseEnter("Java")}
                    onMouseLeave={handleMouseLeave}
                    className="p-4 border-4 rounded-2xl border-neutral-800"
                >
                    <RiJavaFill className="text-orange-600 text-7xl" />
                </motion.div>
                <motion.div
                    variants={iconsVariants(2.9)}
                    initial="initial"
                    animate="animate"
                    whileHover="whileHover"
                    onMouseEnter={() => handleMouseEnter("Python")}
                    onMouseLeave={handleMouseLeave}
                    className="p-4 border-4 rounded-2xl border-neutral-800"
                >
                    <SiPython className="text-7xl" />
                </motion.div>
                <motion.div
                    variants={iconsVariants(3.3)}
                    initial="initial"
                    animate="animate"
                    whileHover="whileHover"
                    onMouseEnter={() => handleMouseEnter("MySQL")}
                    onMouseLeave={handleMouseLeave}
                    className="p-4 border-4 rounded-2xl border-neutral-800"
                >
                    <SiMysql className="text-7xl text-sky-500" />
                </motion.div>
                <motion.div
                    variants={iconsVariants(2.6)}
                    initial="initial"
                    animate="animate"
                    whileHover="whileHover"
                    onMouseEnter={() => handleMouseEnter("AWS")}
                    onMouseLeave={handleMouseLeave}
                    className="p-4 border-4 rounded-2xl border-neutral-800"
                >
                    <FaAws className="text-orange-500 text-7xl" />
                </motion.div>
                <motion.div
                    variants={iconsVariants(3.0)}
                    initial="initial"
                    animate="animate"
                    whileHover="whileHover"
                    onMouseEnter={() => handleMouseEnter("Firebase")}
                    onMouseLeave={handleMouseLeave}
                    className="p-4 border-4 rounded-2xl border-neutral-800"
                >
                    <SiFirebase className="text-yellow-500 text-7xl" />
                </motion.div>
                <motion.div
                    variants={iconsVariants(3.4)}
                    initial="initial"
                    animate="animate"
                    whileHover="whileHover"
                    onMouseEnter={() => handleMouseEnter("Docker")}
                    onMouseLeave={handleMouseLeave}
                    className="p-4 border-4 rounded-2xl border-neutral-800"
                >
                    <SiDocker className="text-blue-600 text-7xl" />
                </motion.div>
                <motion.div
                    variants={iconsVariants(2.7)}
                    initial="initial"
                    animate="animate"
                    whileHover="whileHover"
                    onMouseEnter={() => handleMouseEnter("Git")}
                    onMouseLeave={handleMouseLeave}
                    className="p-4 border-4 rounded-2xl border-neutral-800"
                >
                    <FaGitAlt className="text-orange-600 text-7xl" />
                </motion.div>
                <motion.div
                    variants={iconsVariants(3.1)}
                    initial="initial"
                    animate="animate"
                    whileHover="whileHover"
                    onMouseEnter={() => handleMouseEnter("PHP")}
                    onMouseLeave={handleMouseLeave}
                    className="p-4 border-4 rounded-2xl border-neutral-800"
                >
                    <FaPhp className="text-indigo-700 text-7xl" />
                </motion.div>
                <motion.div
                    variants={iconsVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    whileHover="whileHover"
                    onMouseEnter={() => handleMouseEnter("Tailwind CSS")}
                    onMouseLeave={handleMouseLeave}
                    className="p-4 border-4 rounded-2xl border-neutral-800"
                >
                    <SiTailwindcss className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconsVariants(2.9)}
                    initial="initial"
                    animate="animate"
                    whileHover="whileHover"
                    onMouseEnter={() => handleMouseEnter("TypeScript")}
                    onMouseLeave={handleMouseLeave}
                    className="p-4 border-4 rounded-2xl border-neutral-800"
                >
                    <SiTypescript className="text-blue-500 text-7xl" />
                </motion.div>
                <motion.div
                    variants={iconsVariants(3.6)}
                    initial="initial"
                    animate="animate"
                    whileHover="whileHover"
                    onMouseEnter={() => handleMouseEnter("Bootstrap")}
                    onMouseLeave={handleMouseLeave}
                    className="p-4 border-4 rounded-2xl border-neutral-800"
                >
                    <SiBootstrap className="text-purple-600 text-7xl" />
                </motion.div>
            </motion.div >
        </motion.div>
    );
}

export default Technologies;
