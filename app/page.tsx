import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/exprerience";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative pt-36 pb-20 lg:pb-28 lg:pt-52">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" />
      <main className="min-h-screen pl-6 pr-6 max-w-6xl mx-auto">
        <div className="relative">
          <div className="relative z-10">
            <div>
              <div className="mb-1 flex items-center gap-1 text-2xl text-slate-600 md:mb-0 md:gap-2 md:text-4xl dark:text-slate-400">
                hi!
                <div>
                  <img
                    alt="Love-you Gesture"
                    src="https://cdn.iconscout.com/icon/premium/png-256-thumb/hi-2936171-2464029.png"
                    width="48"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    className="w-7 md:w-10"
                  />
                </div>
              </div>
              <span className="text-slate-700 dark:text-slate-300">
                <span className="mb-4 block text-[2.5rem] font-[1000] leading-none md:mb-6 md:text-7xl">
                  I&apos;m{" "}
                  <strong className="text-purple-600 dark:text-purple-500">
                    linX
                  </strong>
                  dev,
                </span>
                <h1 className="block text-base text-slate-600 md:text-xl dark:text-slate-400">
                  <span className="lowercase">A</span>{" "}
                  <strong className="font-bold lowercase text-slate-700 dark:text-slate-300">
                    Front-End Developer
                  </strong>{" "}
                  who loves intuitive,
                  <span className="block">clean and modern UI design.</span>
                </h1>
              </span>
            </div>
          </div>
          <div className="mt-6 md:mt-8">
            <div className="flex gap-2">
              <div
                className="relative z-20"
                style={{ opacity: 1, transform: "none" }}
              >
                <a className="min-w-[128px]" href="/">
                  <button className="hover:shadow-lg text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg ">
                    Get in Touch
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-20 lg:mt-36">
            <div>
              <p className="mb-2.5 text-sm text-slate-600 dark:text-slate-400">
                current favorite tech stack/tools:
              </p>
              <ul className="flex items-center gap-3.5 text-slate-500 dark:text-slate-500">
                <li>
                  <div className="transition duration-200 hover:text-[#3178C6]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="img"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <title>TypeScript Icon</title>
                      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path>
                    </svg>
                  </div>
                </li>
                <li>
                  <div className="transition duration-200 hover:text-[#61DAFB]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="img"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <title>React Icon</title>
                      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path>
                    </svg>
                  </div>
                </li>
                <li>
                  <div className="transition duration-200 hover:text-[#06B6D4]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="img"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <title>Tailwind CSS Icon</title>
                      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                    </svg>
                  </div>
                </li>
                <li>
                  <div className="transition duration-200 hover:text-[#0055FF]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="img"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <title>Framer Motion Icon</title>
                      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"></path>
                    </svg>
                  </div>
                </li>
                <li>
                  <div className="transition duration-200 hover:text-[#000000] dark:hover:text-[#FFFFFF]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="img"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <title>Next.js Icon</title>
                      <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"></path>
                    </svg>
                  </div>
                </li>
                <li>
                  <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"></div>
                </li>
                <li>
                  <div className="transition duration-200 hover:text-[#007ACC]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="img"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <title>Visual Studio Code srcsetIcon</title>
                      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"></path>
                    </svg>
                  </div>
                </li>
                <li>
                  <div className="transition duration-200 hover:text-[#F24E1E]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="img"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <title>Figma Icon</title>
                      <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"></path>
                    </svg>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="pointer-events-none absolute -top-36 right-0 z-0 hidden select-none lg:block">
            <div className="relative h-[590px] w-[603px]">
              <div className="from-accent-400/20 via-accent-400/0 absolute top-0 right-0 h-[590px] w-[375px] rounded-full bg-gradient-to-t dark:from-accent-600/10 dark:via-accent-600/0">
                <div className="absolute right-0 bottom-0 overflow-hidden">
                  <div className="absolute z-[10]"></div>
                  <div className="">
                    <img
                      alt="LinxDev Illustration"
                      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ac03a17e-589d-4ac1-952a-4185d1070994/dfjviyr-6839a997-443b-4819-b969-c068276c000c.png/v1/fit/w_828,h_1304/gotou_hitori__bocchi__render_by_minhchauk1k_dfjviyr-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjAxNiIsInBhdGgiOiJcL2ZcL2FjMDNhMTdlLTU4OWQtNGFjMS05NTJhLTQxODVkMTA3MDk5NFwvZGZqdml5ci02ODM5YTk5Ny00NDNiLTQ4MTktYjk2OS1jMDY4Mjc2YzAwMGMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.BRkK0DITC2KHS5q_d9bMjbsKS9TktxgnpMrwH6Dsucg"
                      width="457"
                      height="526"
                      decoding="async"
                      data-nimg="1"
                      className="hidden max-w-none lg:block dark:brightness-[.82]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="-mt-12 mb-12 md:mt-12 md:mb-24 ">
          <div className="flex items-center justify-center py-8">
            <blockquote className="flex gap-2 pt-2 text-3xl text-slate-500 md:text-4xl lg:pt-0 lg:text-5xl dark:text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                role="img"
                fill="currentColor"
                className="-mt-1 h-10 text-slate-300 md:-mt-3 md:h-16 lg:h-24 dark:text-slate-800"
              >
                <path d="M7.27273 16.3833H0L5.30713 4H10.0737L7.27273 16.3833ZM17.199 16.3833H9.92629L15.2334 4H20L17.199 16.3833Z"></path>
              </svg>
              <span className="flex flex-col">
                <span className="leading-[1.15]">
                  <em>It&apos;s not a bug</em>{" "}
                </span>
                <span className="flex items-center gap-2 leading-[1.15] lg:gap-4">
                  <span className="mt-1 h-0.5 w-8 rounded-full bg-slate-400 lg:h-1 lg:w-24 dark:bg-slate-600"></span>
                  <span>
                    <strong className="font-extrabold text-slate-600 dark:text-slate-300">
                      it&apos;s a
                    </strong>{" "}
                  </span>
                  <strong className="relative font-extrabold text-slate-600 dark:text-slate-300">
                    <span className="absolute -left-0.5 right-0 top-1 bottom-0 z-[-1] rounded-md bg-slate-100 px-1 lg:-left-1.5 lg:-right-0.5 lg:top-2 lg:bottom-0 dark:bg-slate-800"></span>
                    feature.
                  </strong>
                </span>
              </span>
            </blockquote>
          </div>
        </div>
        <About />
        <Experience />

        <Contact />
      </main>
    </section>
  );
}
