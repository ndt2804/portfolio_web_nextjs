const Header = () => {
  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-[1000] fm:absolute body-font ">
        <div className=" mx-auto relative z-50 flex h-16 items-center justify-between px-2 text-sm md:px-4 ">
          <nav className="flex md:gap-2">
            <a
              className="flex h-9 items-center gap-2 rounded-xl px-2"
              aria-label="Home"
              href="/"
            >
              <div className="flex items-center gap-1.5 font-[1000] leading-none">
                <div className="-mt-1 hidden text-2xl sm:block">
                  <span className="text-slate-900 dark:text-slate-200">
                    <strong className="text-purple-600 dark:text-purple-500">
                      linX
                    </strong>
                    dev
                  </span>
                </div>
              </div>
            </a>

          </nav>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <ul className="flex items-center md:gap-1 ">
              <li className="flex mr-5 items-center space-x-2 text-gray-800 font-black hover:text-zinc-800 relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-zinc-800 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-0 hover:after:scale-x-100 after:origin-left">
                <a className="nav-link" href="/projects">
                  Projects
                </a>
              </li>

              <li className="mr-5 flex items-center space-x-2 text-gray-800 font-black hover:text-zinc-800 relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-zinc-800 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-0 hover:after:scale-x-100 after:origin-left">
                <a className="nav-link" href="/blogs">
                  Blogs
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
