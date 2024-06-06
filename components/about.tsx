"use client";
import { useState } from "react";
import Logo from "@/public/images/about_me.jpg";
import Image from "next/image";

const About = () => {
  const [SelectedButton, setSelectedButton] = useState("");
  const handleSelect = (tab: string) => {
    setSelectedButton(tab);
  };
  return (
    <>
      <header className="mb-8">
        <div className="content-wrapper">
          <h2 className="text-violet-600 mb-2 block font-black lg:mb-4 dark:text-violet-400">
            Something about me
          </h2>
          <p className="mb-4 text-3xl font-black text-slate-700 lg:text-4xl dark:text-slate-200">
            Hobbies, lifestyle and &amp; personality.
          </p>
          <p className="max-w-lg text-slate-600 dark:text-slate-400">
            Keep the User Interface clean with a modern touch without
            compromising the User Experience.
          </p>
        </div>
      </header>
      <div className="mt-20 border-t border-divider-light dark:border-divider-dark">
        <div className="content-wrapper pb-20">
          <div className="flex lg:gap-12">
            <div className="-mt-8 hidden flex-1 flex-col gap-3 lg:flex">
              <button
                onClick={() => handleSelect("Tab1")}
                type="button"
                className="flex flex-1 items-center gap-4 rounded-2xl border-2 bg-white px-4 py-4 text-left dark:bg-slate-900 focus-within:text-violet-600  focus:border-violet-400 hover:text-violet-400 hover:border-violet-400 border-divider-light  dark:border-divider-dark"
              >
                <span className="hidden w-24 shrink-0 justify-center text-center text-7xl font-black xl:flex dark:text-slate-600">
                  1
                </span>
                <span className="flex-1">
                  <span className="block font-bold">Introduce</span>
                  <span className="mt-1 block text-sm text-slate-600 dark:text-slate-400">
                    What is your name, where are you from?
                  </span>
                </span>
              </button>
              <button
                onClick={() => handleSelect("Tab2")}
                type="button"
                className="flex flex-1 items-center gap-4 rounded-2xl border-2 bg-white px-4 py-4 text-left dark:bg-slate-900 focus-within:text-violet-600  focus:border-violet-400 hover:text-violet-400 hover:border-violet-400   border-divider-light  dark:border-divider-dark"
              >
                <span className="hidden w-24 shrink-0 justify-center text-center text-7xl font-black xl:flex  dark:text-slate-600">
                  2
                </span>
                <span className="flex-1">
                  <span className="block font-bold dark:text-slate-200">
                    Techology
                  </span>
                  <span className="mt-1 block text-sm text-slate-600 dark:text-slate-400">
                    Someone tech i use in projects like
                  </span>
                </span>
              </button>
              <button
                onClick={() => handleSelect("Tab3")}
                type="button"
                className="flex flex-1 items-center gap-4 rounded-2xl border-2 bg-white px-4 py-4 text-left dark:bg-slate-900 focus-within:text-violet-600  focus:border-violet-400 hover:text-violet-400 hover:border-violet-400  border-divider-light  dark:border-divider-dark"
              >
                <span className="hidden w-24 shrink-0 justify-center text-center text-7xl font-black xl:flex  dark:text-slate-600">
                  3
                </span>
                <span className="flex-1">
                  <span className="block font-bold  dark:text-slate-200">
                    Lifestyle
                  </span>
                  <span className="mt-1 block text-sm text-slate-600 dark:text-slate-400">
                    lifestyle for developers
                  </span>
                </span>
              </button>
              <button
                onClick={() => handleSelect("Tab4")}
                type="button"
                className="flex flex-1 items-center gap-4 rounded-2xl border-2 bg-white px-4 py-4 text-left dark:bg-slate-900 focus-within:text-violet-600  focus:border-violet-400 hover:text-violet-400 hover:border-violet-400  border-divider-light  dark:border-divider-dark"
              >
                <span className="hidden w-24 shrink-0 justify-center text-center text-7xl font-black xl:flex  dark:text-slate-400">
                  4
                </span>
                <span className="flex-1">
                  <span className="block font-bold  dark:text-slate-400">
                    Hobby
                  </span>
                  <span className="mt-1 block text-sm text-slate-600 dark:text-slate-400">
                    I really love taking photos, so this some picture i took
                  </span>
                </span>
              </button>
            </div>

            <div className="relative flex flex-1 items-center justify-center">
              <div className="-mt-8 flex gap-4 md:gap-6 lg:top-8 lg:mt-0">
                <div>
                  <div
                    className="pointer-events-none w-full select-none border p-6  rounded-xl  text-sm border-divider-light bg-white dark:border-divider-dark dark:bg-slate-900"
                    role="presentation"
                  >
                    {SelectedButton === "Tab1" && (
                      <div className="mb-1 text-lg font-bold text-slate-700 dark:text-slate-300">
                        My name is Nguyen Duy Tan. I&apos;m from in Ho Chi Minh
                        City. Now I&apos;m 24 years old, and I&apos;m a software
                        developer with extensive experience in coding and
                        software development.{" "}
                      </div>
                    )}
                    {SelectedButton === "Tab2" && (
                      <div className="mb-1 text-lg font-bold text-slate-700 dark:text-slate-300">
                        I have experience working with JavaScript, Typescript,
                        NuxtJS, VueJS NodeJS (ExpressJS), HTML/CSS, Docker and
                        Git. I&apos;m passionate about creating innovative
                        solutions, and I&apos;m dedicated to my craft. With my
                        creativity, I&apos;m confident I can help you find the
                        best software solution for your needs. I look forward to
                        working with you to create great apps{" "}
                        <div className="mt-12 lg:mt-24">
                          <div>
                            <p className="mb-2.5 text-sm text-slate-600 dark:text-slate-400">
                              current favorite tech stack/tools:
                            </p>
                            <ul className="flex items-center gap-3.5 text-slate-500 dark:text-slate-500">
                              <li>
                                <svg viewBox="0 0 128 128" className="h-6 w-6">
                                  <title>TypeScript Icon</title>
                                  <path
                                    fill="#fff"
                                    d="M22.67 47h99.67v73.67H22.67z"
                                  ></path>
                                  <path
                                    data-name="original"
                                    fill="#007acc"
                                    d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                                  ></path>
                                </svg>
                              </li>
                              <li>
                                <svg viewBox="0 0 128 128" className="h-6 w-6">
                                  <title>Javascript Icon</title>
                                  <path
                                    fill="#F0DB4F"
                                    d="M1.408 1.408h125.184v125.185H1.408z"
                                  ></path>
                                  <path
                                    fill="#323330"
                                    d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                                  ></path>
                                </svg>
                              </li>
                              <li>
                                <svg viewBox="0 0 128 128 " className="h-6 w-6">
                                  <title>React Icon</title>

                                  <g fill="#61DAFB">
                                    <circle cx="64" cy="64" r="11.4"></circle>

                                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                                  </g>
                                </svg>
                              </li>
                              <li>
                                <svg viewBox="0 0 128 128" className="h-6 w-6">
                                  <path
                                    d="M0 8.934l49.854.158 14.167 24.47 14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02-38.476 66.053L25.691 9.592.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168-15.053 24.647L49.216 9.73l-22.794-.168 37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01"
                                    fill="none"
                                  ></path>
                                  <path
                                    d="M25.997 9.393l23.002.009L64.035 34.36 79.018 9.404 102 9.398 64.15 75.053z"
                                    fill="#35495e"
                                  ></path>
                                  <path
                                    d="M.91 9.569l25.067-.172 38.15 65.659L101.98 9.401l25.11.026-62.966 108.06z"
                                    fill="#41b883"
                                  ></path>
                                </svg>
                              </li>
                              <li>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  role="img"
                                  className="h-6 w-6"
                                >
                                  <title>Next.js Icon</title>
                                  <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"></path>
                                </svg>
                              </li>
                              <li>
                                <svg viewBox="0 0 128 128" className="h-6 w-6">
                                  <path
                                    d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                                    fill="#38bdf8"
                                  ></path>
                                </svg>
                              </li>
                              <li>
                                <svg viewBox="0 0 128 128" className="h-6 w-6">
                                  <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"></path>
                                </svg>
                              </li>
                              <li>
                                <svg viewBox="0 0 128 128" className="h-6 w-6">
                                  <path
                                    d="M39.267 108.97l-.284-.567c-.567-1.135-.567-2.27-.283-3.689H8.059L53.454 24.14l19.009 34.33 6.241-4.54L59.695 19.6c-.283-.567-2.553-3.971-6.241-3.971-1.703 0-4.256.567-6.242 4.255L1.25 101.31c-.284.852-2.27 4.54-.568 7.66 1.135 1.703 2.838 3.405 6.81 3.405h38.585c-3.972 0-5.958-1.702-6.81-3.404z"
                                    fill="#00c58e"
                                  ></path>
                                  <path
                                    d="M126.65 101.59L89.767 35.201c-.567-.567-2.553-4.256-6.242-4.256-1.702 0-4.255.851-6.241 4.256l-4.823 7.944v15.321l11.065-19.009 36.599 65.254h-13.902a6.525 6.525 0 01-.568 3.972l-.284.284c-1.702 3.12-5.958 3.404-6.525 3.404h21.562c.851 0 4.823-.283 6.809-3.404.851-1.419 1.419-3.972-.567-7.377z"
                                    fill="#108775"
                                  ></path>
                                  <path
                                    d="M106.51 108.97v-.284l.284-.567c.283-1.135.567-2.27.283-3.405l-1.134-3.404-28.938-50.501-4.256-7.66h-.284l-4.256 7.66-28.938 50.5-1.134 3.405a6.81 6.81 0 00.567 4.256c1.135 1.702 2.837 3.405 6.809 3.405h53.906c.851 0 5.107-.284 7.093-3.405zM72.464 58.469l26.386 46.245H46.079z"
                                    fill="#2f495e"
                                  ></path>
                                </svg>
                              </li>
                              <li>
                                <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"></div>
                              </li>
                              <li>
                                <div className="transition duration-200 text-[#007ACC]">
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
                                <svg viewBox="0 0 128 128" className="h-6 w-6">
                                  <g fill="#181616">
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                                    ></path>
                                    <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                                  </g>
                                </svg>
                              </li>
                              <li>
                                <svg viewBox="0 0 128 128" className="h-6 w-6">
                                  <path
                                    d="M124.8 52.1c-4.3-2.5-10-2.8-14.8-1.4-.6-5.2-4-9.7-8-12.9l-1.6-1.3-1.4 1.6c-2.7 3.1-3.5 8.3-3.1 12.3.3 2.9 1.2 5.9 3 8.3-1.4.8-2.9 1.9-4.3 2.4-2.8 1-5.9 2-8.9 2H79V49H66V24H51v12H26v13H13v14H1.8l-.2 1.5c-.5 6.4.3 12.6 3 18.5l1.1 2.2.1.2c7.9 13.4 21.7 19 36.8 19 29.2 0 53.3-13.1 64.3-40.6 7.4.4 15-1.8 18.6-8.9l.9-1.8-1.6-1zM28 39h10v11H28V39zm13.1 44.2c0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7.1 3.1 1.4 3.1 3.1zM28 52h10v11H28V52zm-13 0h11v11H15V52zm27.7 50.2c-15.8-.1-24.3-5.4-31.3-12.4 2.1.1 4.1.2 5.9.2 1.6 0 3.2 0 4.7-.1 3.9-.2 7.3-.7 10.1-1.5 2.3 5.3 6.5 10.2 14 13.8h-3.4zM51 63H40V52h11v11zm0-13H40V39h11v11zm13 13H53V52h11v11zm0-13H53V39h11v11zm0-13H53V26h11v11zm13 26H66V52h11v11zM38.8 81.2c-.2-.1-.5-.2-.8-.2-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2c0-.3-.1-.6-.2-.8-.2.3-.4.5-.8.5-.5 0-.9-.4-.9-.9.1-.4.3-.7.5-.8z"
                                    fill="#019BC6"
                                  ></path>
                                </svg>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                    {SelectedButton === "Tab3" && (
                      <div className="mb-1 text-lg font-bold text-slate-700 dark:text-slate-300">
                        <iframe
                          src="https://giphy.com/embed/USV0ym3bVWQJJmNu3N"
                          width="480"
                          height="360"
                          frameBorder="0"
                          className="giphy-embed"
                          allowFullScreen
                        ></iframe>
                        <p></p>
                      </div>
                    )}
                    {SelectedButton === "Tab4" && (
                      <div className="mb-1 text-lg font-bold text-slate-700 dark:text-slate-300">
                        <section className="text-gray-600 body-font">
                          <div className="px-5 py-4 mx-auto flex flex-wrap">
                            <div className="flex flex-wrap md:-m-2 -m-1">
                              <div className="flex flex-wrap w-1/2">
                                <div className="md:p-2 p-1 w-1/2">
                                  <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block"
                                    src="https://dummyimage.com/500x300"
                                  />
                                </div>
                                <div className="md:p-2 p-1 w-1/2">
                                  <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block"
                                    src="https://dummyimage.com/501x301"
                                  />
                                </div>
                                <div className="md:p-2 p-1 w-full">
                                  <img
                                    alt="gallery"
                                    className="w-full h-full object-cover object-center block"
                                    src="https://dummyimage.com/600x360"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-wrap w-1/2">
                                <div className="md:p-2 p-1 w-full">
                                  <img
                                    alt="gallery"
                                    className="w-full h-full object-cover object-center block"
                                    src="https://dummyimage.com/601x361"
                                  />
                                </div>
                                <div className="md:p-2 p-1 w-1/2">
                                  <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block"
                                    src="https://dummyimage.com/502x302"
                                  />
                                </div>
                                <div className="md:p-2 p-1 w-1/2">
                                  <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block"
                                    src="https://dummyimage.com/503x303"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    )}
                    {SelectedButton === "" && (
                      <div className="mb-1 text-lg font-bold text-slate-700 dark:text-slate-300">
                        <Image alt="logo" width="380" height="240" src={Logo} />
                        <p></p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
