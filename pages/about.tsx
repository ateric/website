import type { NextPage } from "next";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <div
      className={
        "h-full w-full bg-black flex justify-center items-center flex-col"
      }
    >
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
