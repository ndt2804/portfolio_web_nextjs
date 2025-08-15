"use client";
import React, { useRef } from "react";
import ProjectArticle from "@/components/project-article"
import { projectsData } from "@/constants";
import { motion, useInView } from "framer-motion";
import { ViteIcon, BunIcon, NestIcon, JavaScriptIcon, TypeScriptIcon, NextIcon, NuxtIcon, ExpressIcon, ReactIcon, VueIcon, VscodeIcon, SupabaseIcon, GithubIcon, DockerIcon, TailwindIcon, MongoDBIcon } from "@/components/icons";
import GithubContributions from "@/components/github";

type TechItem =
  | { icon: React.FC; delay: number; separator?: false }
  | { separator: true; delay: number; icon?: undefined };

const techItems: TechItem[] = [
  { icon: JavaScriptIcon, delay: 0 },
  { icon: TypeScriptIcon, delay: 0.2 },
  { icon: ReactIcon, delay: 0.4 },
  { icon: NextIcon, delay: 0.6 },
  { icon: VueIcon, delay: 0.8 },
  { icon: BunIcon, delay: 1.0 },
  { icon: NestIcon, delay: 1.2 },
  { icon: ExpressIcon, delay: 1.4 },
  { icon: NuxtIcon, delay: 1.6 },
  { icon: TailwindIcon, delay: 1.8 },
  { separator: true, delay: 2.0 },
  { icon: VscodeIcon, delay: 2.2 },
  { icon: GithubIcon, delay: 2.4 },
  { icon: DockerIcon, delay: 2.6 },
  { icon: SupabaseIcon, delay: 2.8 },
  { icon: MongoDBIcon, delay: 3.0 },
  { icon: ViteIcon, delay: 3.0 },


];
export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section className="relative pt-36 pb-20 lg:pb-28 lg:pt-52">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" />
      <main className="min-h-screen pl-6 pr-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="content-wrapper">
            <p className="mb-4 text-3xl font-black text-slate-700 lg:text-4xl dark:text-slate-200">
              Skills
            </p>

          </div>
        </div>
        <div className="mt-4 lg:mt-4">
          <div>
            <p className="mb-2.5 text-sm text-slate-600 dark:text-slate-400">
              current favorite tech stack/tools:
            </p>
            <ul className="flex items-center gap-3.5 text-slate-500 dark:text-slate-500">
              {techItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: item.delay }}
                >
                  {item.separator ? (
                    <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"></div>
                  ) : (
                    <item.icon />
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-8 mt-12">
          <div className="content-wrapper">
            <p className="mb-4 text-3xl font-black text-slate-700 lg:text-4xl dark:text-slate-200">
              Activity
            </p>
            <p className="max-w-lg text-slate-600 dark:text-slate-400">
              Activity on GitHub, contributions, pull requests, and issues.
            </p>
          </div>
        </div>
        <GithubContributions />

        <div className="mb-8 mt-12">
          <div className="content-wrapper">
            <p className="mb-4 text-3xl font-black text-slate-700 lg:text-4xl dark:text-slate-200">
              Project
            </p>
            <p className="max-w-lg text-slate-600 dark:text-slate-400">
              Someone project i built during my free time and while studying
            </p>
          </div>
        </div>

        <ul ref={ref} className="mt-10 grid grid-cols-1 gap-10">
          {projectsData.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectArticle
                title={project.title}
                description={project.description}
                tags={project.tags || []}
                githubUrl={project.gitUrl}
                demoUrl={project.demoUrl || project.gitUrl}
              />
            </motion.li>
          ))}
        </ul>
      </main>
    </section >
  );
}
