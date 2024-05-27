const Header = () => {
  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-[1000] fm:absolute container mx-auto body-font bg-gray-200 border-b-2 ">
        <div className="fixed inset-0 h-16 fm:hidden"></div>
        <div className="h-2"></div>
        <div className="relative z-50 flex h-16 items-center justify-between px-2 text-sm md:px-4 ">
          <nav className="flex md:gap-2">
            <a
              className="flex h-9 items-center gap-2 rounded-xl px-2"
              aria-label="Home"
              href="/"
            >
              <div className="flex items-center gap-1.5 font-[1000] leading-none">
                <div className="border-box flex h-8 w-8 items-center justify-center rounded-xl border-2 sm:h-6 sm:w-6 sm:rounded-lg border-accent-600 bg-accent-600 dark:border-accent-500 dark:bg-accent-500">
                  <svg
                    height="800px"
                    width="800px"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 64 64"
                    xmlSpace="preserve"
                  >
                    <style type="text/css">
                      {
                        "\n\t.st0{fill:#76C2AF;}\n\t.st1{opacity:0.2;}\n\t.st2{fill:#231F20;}\n\t.st3{fill:#FFFFFF;}\n"
                      }
                    </style>
                    <g id="Layer_1">
                      <g>
                        <circle className="st0" cx={32} cy={32} r={32} />
                      </g>
                      <g className="st1">
                        <g>
                          <g>
                            <path
                              className="st2"
                              d="M42.5,44c-0.7,0-1.3-0.3-1.7-1c-0.6-0.9-0.3-2.2,0.7-2.8l10.1-6.2c0,0,0,0,0-0.1s0,0,0-0.1l-10.1-6.2 c-0.9-0.6-1.2-1.8-0.7-2.8c0.6-0.9,1.8-1.2,2.8-0.7l10.6,6.6l0.2,0.2c0.8,0.8,1.2,1.9,1.2,3c0,1.1-0.4,2.2-1.2,3l-0.2,0.2 l-10.6,6.6C43.2,43.9,42.8,44,42.5,44z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              className="st2"
                              d="M21.5,44c-0.4,0-0.7-0.1-1-0.3L9.9,37.1L9.7,37c-0.8-0.8-1.2-1.9-1.2-3c0-1.1,0.4-2.2,1.2-3l0.2-0.2 l10.6-6.6c0.9-0.6,2.2-0.3,2.8,0.7c0.6,0.9,0.3,2.2-0.7,2.8l-10.1,6.2c0,0,0,0,0,0.1s0,0,0,0.1l10.1,6.2 c0.9,0.6,1.2,1.8,0.7,2.8C22.9,43.7,22.2,44,21.5,44z"
                            />
                          </g>
                        </g>
                      </g>
                      <g className="st1">
                        <g>
                          <path
                            className="st2"
                            d="M25.5,53c-0.2,0-0.5,0-0.7-0.1c-1-0.4-1.5-1.6-1.2-2.6l13-34c0.4-1,1.6-1.5,2.6-1.2c1,0.4,1.5,1.6,1.2,2.6 l-13,34C27.1,52.5,26.3,53,25.5,53z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            className="st3"
                            d="M42.5,42c-0.7,0-1.3-0.3-1.7-1c-0.6-0.9-0.3-2.2,0.7-2.8l10.1-6.2c0,0,0-0.1,0-0.1l-10.1-6.2 c-0.9-0.6-1.2-1.8-0.7-2.8c0.6-0.9,1.8-1.2,2.8-0.7l10.6,6.6l0.2,0.2c1.6,1.6,1.6,4.3,0,6l-0.2,0.2l-10.6,6.6 C43.2,41.9,42.8,42,42.5,42z"
                          />
                        </g>
                        <g>
                          <path
                            className="st3"
                            d="M21.5,42c-0.4,0-0.7-0.1-1-0.3L9.9,35.1L9.7,35c-1.6-1.6-1.6-4.3,0-6l0.2-0.2l10.6-6.6 c0.9-0.6,2.2-0.3,2.8,0.7c0.6,0.9,0.3,2.2-0.7,2.8l-10.1,6.2c0,0,0,0.1,0,0.1l10.1,6.2c0.9,0.6,1.2,1.8,0.7,2.8 C22.9,41.7,22.2,42,21.5,42z"
                          />
                        </g>
                      </g>
                      <g>
                        <path
                          className="st3"
                          d="M25.5,51c-0.2,0-0.5,0-0.7-0.1c-1-0.4-1.5-1.6-1.2-2.6l13-34c0.4-1,1.6-1.5,2.6-1.2c1,0.4,1.5,1.6,1.2,2.6 l-13,34C27.1,50.5,26.3,51,25.5,51z"
                        />
                      </g>
                    </g>
                    <g id="Layer_2" />
                  </svg>
                </div>
                <div className="-mt-1 hidden text-xl sm:block">
                  <span className="text-slate-900 dark:text-slate-200">
                    linX
                  </span>
                  <span className="text-accent-600 dark:text-accent-500">
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
          <button className="cursor-pointer w-44 h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-lg  group ease-in-out">
            <span className="">Mời Coffee</span>
          </button>
        </div>
      </header>
    </>
  );
};
export default Header;
