/* eslint-disable @next/next/no-img-element */
import type { NextComponentType, NextPage } from "next";
import Link from "next/link";
import { Project } from "../../constants/types";

interface Props {
  project: Project;
}

const name_styles =
  "text-white text-2xl underline underline-offset-4 hover:text-gray-300 active:text-gray-400 transition-all";

const ProjectCard: NextPage<Props> = ({
  project: {
    name,
    demo_url,
    repo_url,
    tools,
    description,
    start_date,
    end_date,
  },
}) => {
  return (
    // have glowing border or something
    <div className="flex mx-5 my-5 w-10/12 md:w-5/12 text-white ">
      <div className="flex flex-col justify-between bg-zinc-900 w-full rounded-xl p-5">
        <div className="mb-3">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="text-xl">
              {start_date} - {end_date}
            </p>
          </div>
          <div className="flex flex-wrap items-center w-full md:w-9/12 mt-3">
            {tools.map((tool, i) => (
              <div className="flex mr-3" key={tool}>
                <p className="text-zinc-300 text-xl mr-3">{tool}</p>
                {i !== tools.length - 1 && (
                  <span className="text-zinc-500 text-xl">/</span>
                )}
              </div>
            ))}
          </div>
          <h2 className="text-xl mt-3 w-full md:w-9/12">{description}</h2>
        </div>
        <div className="flex justify-center md:justify-start">
          {repo_url && (
            <a href={repo_url} className="mr-3">
              <svg className="w-10 h-10 text-white linkIconHover">
                <use href={`/icons/code.svg#code`} />
              </svg>
            </a>
          )}
          {demo_url && (
            <a href={demo_url}>
              <svg className="w-10 h-10 text-white linkIconHover">
                <use href={`/icons/globe.svg#globe`} />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
