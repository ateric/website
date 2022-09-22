import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { about } from "../constants/metadata";

const About: NextPage = () => {
  return (
    <div
      className={
        "h-screen w-full bg-black flex justify-center items-center flex-col"
      }
    >
      <NextSeo {...about} />
      <h1 className={"text-4xl text-white m-6"}>
        {"I'm still working on this page"}
      </h1>
      <Link href="/">
        <div className={"flex hoverButton mb-6 md:mx-4 lg:mb-8 text-lg"}>
          <p>Go Home</p>
        </div>
      </Link>
    </div>
  );
};

export default About;
