export const projectsData: Project[] = [
    {
        id: 1,
        title: "NextJS Portfolio Website",
        description: "Portfolio Website Build on Next Project",
        gitUrl: "https://github.com/ndt2804/portfolio_web_nextjs",
        demoUrl: "https://www.tannd.me/",
        tags: ["Next.js", "React", "Tailwindcss", "Typescript"],
    },
    {
        id: 2,
        title: "Elearning Platform",
        description:
            "A website to watch anime, data taken from YouTube website",
        gitUrl: "https://github.com/ndt2804/elearning-platform",
        demoUrl: "https://elearning-platform-beige.vercel.app/",
        tags: ["NextJS", "ReactJS", "Tailwindcss", "Elearning"],
    },
    {
        id: 3,
        title: "Watch Anime Website",
        description:
            "An eLearning platform is an online learning platform helps consolidate interactive online services, information delivery, support tools, and enhances education delivery and management. A popular type of eLearning platform is a Learning Management System (LMS).",
        gitUrl: "https://github.com/ndt2804/anime-nodejs-hbs",
        demoUrl: "https://github.com/ndt2804/anime-nodejs-hbs",
        tags: ["NodeJS", "ExpressJS", "Restful API", "MVC"],
    },
    {
        id: 4,
        title: "Wikipedia for Yuri Books",
        description:
            "A website to read information about yuri books, licenses, and calendar releases.",
        gitUrl: "https://github.com/ndt2804/yuri-yuri",
        demoUrl: "https://github.com/ndt2804/yuri-yuri",
        tags: ["VueJS", "Nuxt 3", "Typescript"],
    },
    {
        id: 5,
        title: "Calendar Book Release",
        description: "A Discord bot notification about the calendar book release",
        gitUrl: "https://github.com/ndt2804/calendar-release",
        demoUrl: "https://github.com/ndt2804/calendar-release",
        tags: ["Bun", "DiscordJS", "Bot"],
    },
    {
        id: 6,
        title: "Ecommerce Frontend",
        description:
            "A Frontend for ecommerce applications, helping customers and store owners have the most convenient means of buying and selling.",
        gitUrl: "https://github.com/ndt2804/e-commerce-nuxt",
        demoUrl: "https://github.com/ndt2804/e-commerce-nuxt",
        tags: ["Vue", "Nuxt"],
    },
];
export type Project = {
    id: number;
    title: string;
    description: string;
    gitUrl: string;
    demoUrl: string; // Make sure demoUrl is included
    tags: string[];  // 'tags' is an array of strings
};
