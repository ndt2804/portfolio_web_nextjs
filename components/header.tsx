const Header = () => {
  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-[1000] fm:absolute body-font bg-gray-200 border-b-2 ">
        <div className="fixed inset-0 h-16 fm:hidden"></div>
        <div className="h-2"></div>
        <div className="container mx-auto relative z-50 flex h-16 items-center justify-between px-2 text-sm md:px-4 ">
          <nav className="flex md:gap-2">
            <a
              className="flex h-9 items-center gap-2 rounded-xl px-2"
              aria-label="Home"
              href="/"
            >
              <div className="flex items-center gap-1.5 font-[1000] leading-none">
                <div className="-mt-1 hidden text-xl sm:block">
                  <span className="text-slate-900 dark:text-slate-200">
                    <strong className="text-purple-600 dark:text-purple-500">
                      linX
                    </strong>
                    dev
                  </span>
                </div>
              </div>
            </a>
            <ul className="flex items-center md:gap-1">
              <li>
                <a className="nav-link" href="/projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="nav-link" href="/blog">
                  Blog
                </a>
              </li>
            </ul>
          </nav>

          <button className="hover:shadow-lg text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg ">
            Mời Coffee
          </button>
        </div>
      </header>
    </>
  );
};
export default Header;
