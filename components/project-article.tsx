import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { tagIcons } from "./tag-icon";

interface ProjectArticleProps {
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    demoUrl: string;
}

const ProjectArticle: React.FC<ProjectArticleProps> = ({
    title,
    description,
    tags,
    githubUrl,
    demoUrl,
}) => {
    return (
        <div className="p-5 bg-zinc-100 rounded-xl transition-all duration-300">
            <h3 className="text-3xl font-black text-gray-600">{title}</h3>
            <p className="mt-3 text-sm font-semibold text-slate-700">{description}</p>

            {/* Tag icons */}
            <ul className="flex items-center gap-3 mt-3 flex-wrap text-slate-500">
                {tags.map((tag, index) => {
                    const Icon = tagIcons[tag];
                    return (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.15 }}
                            className="flex items-center gap-2"
                        >
                            {Icon ? (
                                <Icon />
                            ) : (
                                <span className="text-sm font-medium bg-zinc-200 text-zinc-500 px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            )}
                        </motion.li>
                    );
                })}
            </ul>

            {/* Links */}
            <div className="mt-3 flex gap-3">
                <Link
                    href={githubUrl}
                    className="text-lg font-medium text-zinc-500 hover:text-zinc-800 underline transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </Link>
                <Link
                    href={demoUrl}
                    className="text-lg font-medium text-zinc-500 hover:text-zinc-800 underline transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Demo
                </Link>
            </div>
        </div>
    );
};

export default ProjectArticle;
