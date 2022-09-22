import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Navbar from "../components/Navbar/Navbar";
import ToolCard from "../components/ToolCard/ToolCard";
import { portfolio } from "../constants/metadata";
import { tools } from "../constants/tools";

const Portfolio: NextPage = () => {
  return (
    <div
      className={
        "flex items-center justify-center flex-col h-full w-full bg-black"
      }
    >
      <NextSeo {...portfolio} />
      <Navbar page="portfolio" />
      <div
        className={"flex items-center h-full w-full bg-black flex-col mt-16"}
      >
        <div className={"w-full lg:w-5/6"}>
          <h2 className={"text-white text-5xl font-bold mb-6 mx-8"}>Skills</h2>
          <div className={"flex justify-center items-center flex-wrap"}>
            {tools.map(({ label, icon, color }) => (
              <ToolCard label={label} icon={icon} color={color} key={label} />
            ))}
          </div>
        </div>
        <div className={"w-full lg:w-5/6 mb-20"}>
          <h2 className={"text-white text-5xl font-bold mb-6"}>Projects</h2>
          <h3 className={"text-white text-2xl"}>Coming soon...</h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
