import React from "react";
import userData from "@constants/data";
import { Constant } from "@constants/constants.ts";

export default function Footer() {
  return (
    <div className="bg-[#F1F1F1] dark:bg-gray-900">
      <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
        <div className="h-0.5 w-full bg-white dark:bg-gray-700"></div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
          <div>
            <p>
              &copy; {Constant.nickName}. All Rights Reserved.{" "}
              {new Date().getFullYear()}
            </p>
          </div>
          <div className="space-x-4 flex flex-row items-center">
            <a
              href={Constant.githubUrl}
              className="text-base font-normal text-gray-600 dark:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="bi bi-twitter h-5 w-5"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={Constant.gitlabUrl}
              className="text-base font-normal text-gray-600 dark:text-gray-300"
            >
              <svg
                width="512px"
                height="512px"
                viewBox="0 0 512 512"
                id="Layer_1"
                data-name="Layer 1"
                fill="currentColor"
                className="bi bi-twitter h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M494.07,281.6l-25.18-78.08a11,11,0,0,0-.61-2.1L417.78,44.48a20.08,20.08,0,0,0-19.17-13.82A19.77,19.77,0,0,0,379.66,44.6L331.52,194.15h-152L131.34,44.59a19.76,19.76,0,0,0-18.86-13.94h-.11a20.15,20.15,0,0,0-19.12,14L42.7,201.73c0,.14-.11.26-.16.4L16.91,281.61a29.15,29.15,0,0,0,10.44,32.46L248.79,476.48a11.25,11.25,0,0,0,13.38-.07L483.65,314.07a29.13,29.13,0,0,0,10.42-32.47m-331-64.51L224.8,408.85,76.63,217.09m209.64,191.8,59.19-183.84,2.55-8h86.52L300.47,390.44M398.8,59.31l43.37,134.83H355.35M324.16,217l-43,133.58L255.5,430.14,186.94,217M112.27,59.31l43.46,134.83H69M40.68,295.58a6.19,6.19,0,0,1-2.21-6.9l19-59L197.08,410.27M470.34,295.58,313.92,410.22l.52-.69L453.5,229.64l19,59a6.2,6.2,0,0,1-2.19,6.92" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
