import React from "react";

export const project = (props) => {
  return (
    <div>
      <div class="flex flex-col h-screen bg-center bg-cover bg-no-repeat bg-gray-100">
        <div class="grid place-items-center w-4/5 mx-auto p-10 my-20 sm:my-auto bg-white-600 border-4 border-sky-300 bg-opacity-70 rounded-xl shadow-2xl shadow-blue-500 space-y-5 text-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="h-24 w-24 text-gray-700 "
            viewBox="0 0 16 16"
          >
            <path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z" />
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z" />
          </svg>
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-700 sm:text-5xl sm:leading-none md:text-6xl">
            Coming<span class="text-sky-600">Soon</span>
          </h2>
          <h2 class="text-2xl font-burtons text-gray-600 transition duration-500">
            yagesyaa
          </h2>
          <h2 class="text-sm text-gray-700 transition duration-500">
            Bismillah Jadi Frontend / Software Engineer 🙏 Aamiin
          </h2>
          <div class="grid grid-cols-2  gap-4">
            <a
              href="https://www.linkedin.com/in/tony-aji-palguno-2302b71b5/"
              title="LinkedIn"
              class="md:w-32 tracking-wide font-bold rounded border-2  text-white  bg-sky-600 hover:bg-sky-400 py-2 px-6 inline-flex items-center transition duration-500"
            >
              <span class="mx-auto">LinkedIn</span>
            </a>

            <a
              href="https://github.com/tonyaji19"
              title="Github"
              class="md:w-32 tracking-wide font-bold rounded border-2  text-white  bg-gray-600 hover:bg-gray-400 py-2 px-6 inline-flex items-center transition duration-500"
            >
              <span class="mx-auto">Github</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default project;