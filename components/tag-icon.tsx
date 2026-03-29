// src/data/tag-icons.ts
import {
    JavaScriptIcon,
    TypeScriptIcon,
    ReactIcon,
    NextIcon,
    VueIcon,
    ExpressIcon,
    NuxtIcon,
    TailwindIcon,
    VscodeIcon,
    GithubIcon,
    DockerIcon,
    SupabaseIcon,
    MongoDBIcon,
    BunIcon,
    NestIcon,
    ViteIcon
} from "@/components/icons";

const rawTagIcons: Record<string, React.FC> = {
    JavaScript: JavaScriptIcon,
    TypeScript: TypeScriptIcon,
    React: ReactIcon,
    ReactJS: ReactIcon,
    "Next.js": NextIcon,
    NextJS: NextIcon,
    Vue: VueIcon,
    VueJS: VueIcon,
    Express: ExpressIcon,
    ExpressJS: ExpressIcon,
    Nuxt: NuxtIcon,
    "Nuxt 3": NuxtIcon,
    Tailwind: TailwindIcon,
    Tailwindcss: TailwindIcon,
    Vscode: VscodeIcon,
    Github: GithubIcon,
    Docker: DockerIcon,
    Supabase: SupabaseIcon,
    MongoDB: MongoDBIcon,
    BunJS: BunIcon,
    NestJS: NestIcon,
    Vite: ViteIcon,
};

// Create a lowercased map for case-insensitive matching
export const tagIcons: Record<string, React.FC> = Object.keys(rawTagIcons).reduce(
    (acc, key) => {
        // Also remove spaces and hyphens for better matching
        const normalizedKey = key.toLowerCase().replace(/[\s-.]/g, '');
        acc[normalizedKey] = rawTagIcons[key];
        // Keep the original key just in case
        acc[key] = rawTagIcons[key];
        return acc;
    },
    {} as Record<string, React.FC>
);

export const getIconForTag = (tag: string): React.FC | undefined => {
    const normalizedTag = tag.toLowerCase().replace(/[\s-.]/g, '');
    return tagIcons[normalizedTag];
};
