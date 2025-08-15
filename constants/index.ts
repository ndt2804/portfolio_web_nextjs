export const projectsData: Project[] = [
    {
        id: 1,
        title: "NextJS Portfolio Website",
        description: "Portfolio Website Build on Next Project",
        gitUrl: "https://github.com/ndt2804/portfolio_web_nextjs",
        demoUrl: "https://tannd.is-a.dev/",
        tags: ["NextJS", "React", "Tailwindcss", "TypeScript"],
    },

    {
        id: 2,
        title: "Readora - Book Review Platform",
        description: "Track your reading, discover new books, and connect with fellow readers ",
        gitUrl: "https://github.com/ndt2804/readora-ui",
        demoUrl: "https://tannd.is-a.dev/",
        tags: ["NextJS", "React", "Tailwindcss", "JavaScript", "ExpressJS"],
    },

    {
        id: 3,
        title: "Ticket Booking System",
        description: "Ticket booking system with features like seat selection, payment integration, and user authentication.",
        gitUrl: "https://github.com/ndt2804/event-management-fe",
        demoUrl: "https://tannd.is-a.dev/",
        tags: ["NextJS", "React", "Tailwindcss", "TypeScript", "NestJS"],
    },
    {
        id: 4,
        title: "Diggram Social Media",
        description: "Portfolio Website Build on Next Project",
        gitUrl: "https://github.com/ndt2804/diggram-social",
        demoUrl: "https://tannd.is-a.dev/",
        tags: ["React", "Tailwindcss", "TypeScript", "Vite", "ExpressJS"],
    },

    {
        id: 5,
        title: "Elearning Platform",
        description:
            "Elearning platform with features like course management, user authentication, and a responsive design.",
        gitUrl: "https://github.com/ndt2804/elearning-platform",
        demoUrl: "https://elearning-platform-beige.vercel.app/",
        tags: ["NextJS", "ReactJS", "Tailwindcss"],
    },
    {
        id: 6,
        title: "Watch Anime Website",
        description: "Website to watch anime, data taken from YouTube website",
        gitUrl: "https://github.com/ndt2804/anime-nodejs-hbs",
        demoUrl: "https://tannd.is-a.dev/",
        tags: ["ExpressJS", "Tailwindcss"],
    },

    {
        id: 7,
        title: "Calendar Book Release",
        description: "A Discord bot notification about the calendar book release",
        gitUrl: "https://github.com/ndt2804/calendar-release",
        demoUrl: "https://tannd.is-a.dev/",
        tags: ["BunJS", "TypeScript"],
    },

];
export type Project = {
    id: number;
    title: string;
    description: string;
    gitUrl: string;
    demoUrl: string;
    tags: string[];
};


export const GITHUB = {
    username: "ndt2804",
    topic: "featured"
}