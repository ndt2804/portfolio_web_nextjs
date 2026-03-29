import React from "react";
import Link from "next/link";
import { Folder, Github, ExternalLink } from "lucide-react";
import { getIconForTag } from "./tag-icon";

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
        <div className="group relative flex flex-col justify-between h-full p-6 md:p-8 bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden z-10 w-full">
            {/* Background decorative gradient */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-fuchsia-400/20 to-purple-500/0 rounded-full blur-[40px] -mr-16 -mt-16 transition-all duration-700 group-hover:bg-fuchsia-400/30 group-hover:scale-150 z-[-1]" />
            
            <div className="flex-1">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-fuchsia-50 dark:bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 rounded-2xl shadow-sm border border-fuchsia-100 dark:border-fuchsia-500/20">
                        <Folder className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    <div className="flex gap-4">
                        {githubUrl && (
                            <Link
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <Github className="w-6 h-6" />
                            </Link>
                        )}
                        {demoUrl && demoUrl !== githubUrl && (
                            <Link
                                href={demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <ExternalLink className="w-6 h-6" />
                            </Link>
                        )}
                    </div>
                </div>

                <Link href={demoUrl || githubUrl || "#"} target="_blank" rel="noopener noreferrer" className="group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors duration-300">
                    <h3 className="text-2xl font-black text-slate-800 dark:text-slate-100 mb-3 line-clamp-2">
                        {title}
                    </h3>
                </Link>
                
                <p className="text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-3 mb-8">
                    {description || "No description provided."}
                </p>
            </div>

            <ul className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-slate-100 dark:border-slate-800/60">
                {tags.slice(0, 4).map((tag, index) => {
                    const Icon = getIconForTag(tag);
                    return (
                        <li
                            key={index}
                            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750 transition-colors"
                        >
                            {Icon && <span className="w-4 h-4 flex items-center justify-center opacity-80"><Icon /></span>}
                            {tag}
                        </li>
                    );
                })}
                {tags.length > 4 && (
                    <li className="flex items-center px-2 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-transparent">
                        +{tags.length - 4}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default ProjectArticle;
