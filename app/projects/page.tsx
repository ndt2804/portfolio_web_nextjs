"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import ProjectCard from "@/components/projectCard";
import ProjectTag from "@/components/protjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Portfolio Website Build on Next Project",
    image: "/images/portfolio.png",
    tag: ["All", "Web", "Typescript", "NextJs"],
    gitUrl: "https://github.com/ndt2804/portfolio_web_nextjs",
  },
  {
    id: 2,
    title: "Elearning Platform",
    description:
      "An eLearning platform is an online learning platform helps consolidate interactive online services, information delivery, support tools, and enhances education delivery and management. A popular type of eLearning platform is a Learning Management System (LMS). ",
    image: "/images/elearning.png",
    tag: ["All", "Typescript", "Web"],
    gitUrl: "https://github.com/ndt2804/elearning-platform",
  },

  {
    id: 3,
    title: "Watch Anime Website",
    description:
      "A website to watch anime website, data take from youtube website",
    image: "/images/animetv.png",
    tag: ["All", "Web", "Javascript"],
    gitUrl: "https://github.com/ndt2804/anime-nodejs-hbs",
  },
  {
    id: 4,
    title: "Wikipedia for Yuri Books",
    description:
      "A website to read information about yuri books, licenses and calendar releases book",
    image: "/images/lili-ours.png",
    tag: ["All", "Typescript", "Web"],
    gitUrl: "https://github.com/ndt2804/yuri-yuri",
  },
  {
    id: 5,
    title: "Calendar Book Release",
    description: "A discord bot notification about the calendar book release",
    image: "/images/bot-discord.png",
    tag: ["All", "Typescript"],
    gitUrl: "https://github.com/ndt2804/calendar-release",
  },
  {
    id: 6,
    title: "Ecommerce Frontend",
    description:
      "A Frontend for ecommerce applications, helping customers and store owners have the most convenient means of buying and selling. ",
    image: "/images/ecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "/",
  },
];

export default function Home() {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: any) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="relative pt-36 pb-20 lg:pb-28 lg:pt-52">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" />
      <main className="min-h-screen pl-6 pr-6 max-w-6xl mx-auto">
        <header className="mb-8">
          <div className="content-wrapper">
            <p className="mb-4 text-3xl font-black text-slate-700 lg:text-4xl dark:text-slate-200">
              Project
            </p>
            <p className="max-w-lg text-slate-600 dark:text-slate-400">
              Someone project i built during my free time and while studying
            </p>
          </div>
        </header>

        <div className="flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Typescript"
            isSelected={tag === "Typescript"}
          />
        </div>

        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
              />
            </motion.li>
          ))}
        </ul>
      </main>
    </section>
  );
}
