export default function Home() {
  return (

    <section className="relative flex items-center justify-center pt-24">
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" />
      <main className="max-w-7xl mx-auto flex items-center justify-between gap-10">
        <div className="w-full lg:w-2/3">
          <div className="relative z-10 text-left">
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
              <span className="text-slate-700 dark:text-slate-300 ">
                <span className="mb-4 block text-[2.5rem] font-[1000] leading-none md:mb-6 md:text-7xl">
                  I&apos;m{" "}
                  <strong className="text-purple-600 dark:text-purple-500">
                    linX
                  </strong>
                  dev,
                </span>
                <h1 className="block text-xl  text-slate-600 md:text-xl dark:text-slate-400 max-w-4xl word-wrap break-word leading-loose">
                  <span className="lowercase leading-loose">I'm</span>{" "}
                  <strong className="font-bold lowercase text-slate-700 dark:text-slate-300 leading-loose">
                    Nguyen Duy Tan
                  </strong>{" "}
                  , a passionate{" "}
                  <strong className="font-bold lowercase text-slate-700 dark:text-slate-300 leading-loose">
                    Web Developer
                  </strong>{" "}
                  <span className="block leading-loose">who specializes in creating intuitive, clean, and modern UI design.
                  </span>
                  <span className="block leading-loose">With extensive experience in coding and software development,</span>
                  <span className="block leading-loose">I focus on crafting elegant solutions and seamless user experiences.</span>
                </h1>
              </span>

            </div>
          </div>
          <div className="mt-32 lg:mt-36">
            <p className="text-gray-800 mb-2  block font-black lg:mb-4 text-base mt-4">Contact me on</p>
            <div className="flex items-center flex-wrap gap-5 mt-3">
              <a className="flex items-center space-x-2 text-zinc-500 font-medium hover:text-zinc-800 relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-zinc-800 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-0 hover:after:scale-x-100 after:origin-left" href="https://github.com/ndt2804" target="_blank" rel="noopener noreferrer">
                <span className="text-2xl">
                  <svg stroke="currentColor" fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                </span>
                <span className="text-base">Github</span>
              </a>
              <a className="flex items-center space-x-2 text-zinc-500 font-medium hover:text-zinc-800 relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-zinc-800 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-0 hover:after:scale-x-100 after:origin-left" href="https://linkedin.com/in/nduytan" target="_blank" rel="noopener noreferrer">
                <span className="text-2xl">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zm-11 20h-3v-11h3v11zm-1.5-12.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.5h-3v-5.5c0-1.379-.05-3.156-2-3.156-2 0-2.309 1.515-2.309 3.047v5.609h-3v-11h2.859v1.5h.041c.398-.75 1.369-1.5 2.818-1.5 3.012 0 3.572 1.984 3.572 4.563v6.437z"></path>
                  </svg>
                </span>
                <span className="text-base">LinkedIn</span>
              </a>

            </div>
            <p className="text-gray-600 mt-4 font-black text-base ">
              If you have any question, don't hesitate to email me at <a href="mailto:nduytan@gmail.com" className="transition-all duration-300 text-gray-800  hover:text-gray-800 relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-zinc-500 after:transition-all after:duration-300 hover:after:bg-zinc-800 after:ease-in-out after:transform after:scale-x-100 after:origin-left">
                nduytan@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="relative ">
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
      </main>
    </section>
  );
}
