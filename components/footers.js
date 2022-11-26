import React from "react";

const footers = () => {
  return (
    <div>
      <footer class=" text-center dark:bg-gray-800">
        <div class="mx-auto max-w-screen-xl px-10 pb-6 sm:w-full lg:w-full ">
          <div class="mx-auto max-w-5xl space-y-4  ">
            <nav class="rounded-3xl border-4 border-gray-700 dark:border-teal-900 p-6 bg-gradient-to-r from-pink-300 to-sky-400 hover:from-teal-500 hover:to-cyan-500  ">
              <ul class="flex flex-wrap justify-center gap-6 text-sm font-bold ">
                <li>
                  <a
                    class="text-gray-900 transition hover:text-gray-900/75 dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Website
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-900 transition hover:text-gray-900/75 dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Project
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-900 transition hover:text-gray-900/75 dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Blog
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-900 transition hover:text-gray-900/75 dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </nav>

            <span class="mt-4 block text-xs text-gray-500 dark:text-gray-400 dark:hover:text-white">
              &copy; Made with 🖤 by Tony
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default footers;
