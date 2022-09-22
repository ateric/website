/* eslint-disable @next/next/no-html-link-for-pages */
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Navbar from "../components/Navbar/Navbar";
import { contact } from "../constants/metadata";

const Contact: NextPage = () => {
  return (
    <div
      className={
        "flex items-center justify-center flex-col h-screen w-full bg-black"
      }
    >
      <NextSeo {...contact} />
      <Navbar />
      <div
        className={
          "flex justify-center items-center h-full w-full bg-black flex-col"
        }
      >
        <h1 className={"text-4xl text-white m-6"}>
          {"I'm still working on this page"}
        </h1>
        <a href="/">
          <div className={"flex hoverButton mb-6 md:mx-4 lg:mb-8 text-lg"}>
            <p>Go Home</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
