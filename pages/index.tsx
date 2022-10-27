/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { navLinks } from "../constants/navigationLinks";
import { index } from "../constants/metadata";
import { links } from "../constants/links";

const Home: NextPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black text-center">
      <NextSeo {...index} />
      <div
        className="invisible md:visible
        blurGradient text-left max-w-full max-h-full 
        h-0 w-0
        md:h-[50rem] md:w-[50rem] 
        before:h-0 before:w-0
        after:h-0 after:w-0 
        md:before:h-[20rem] md:before:w-[50rem] 
        md:after:h-[50rem] md:after:w-[50rem]
        absolute before:absolute after:absolute"
      ></div>
      <div className="flex justify-center items-center gradient_1 movingBlurGradient z-10 max-w-full w-[50rem] max-h-full h-[50rem] rounded-2xl p-5">
        <div className="max-w-full w-[46.5rem] max-h-full h-[46.5rem] z-0 col-span-full row-span-full flex flex-col items-center justify-evenly rounded-2xl bg-black">
          <div className="flex justify-center flex-col">
            <h1 className="text-super-350 text-6xl font-bold text-fluid-lg">Daniel Miller</h1>
            <div className="gradient_2 mt-1 ml-1 h-2 w-10/12 rounded-full bg-white"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1vw] text-neutral-100 text-fluid">
            {navLinks.map((item) =>
              item.noHomepageDisplay ? (
                ""
              ) : (
                <div
                  key={item.name}
                  className={`flex justify-center items-center font-black italic text-7xl mx-10 h-24 sm:h-40`}
                >
                  <a href={item.url}>
                    <div
                      className={`px-7 w-full linkEffect linkEffect--${item.color}`}
                    >
                      <h2 className="">{item.name}</h2>
                    </div>
                  </a>
                </div>
              )
            )}
          </div>
          <div className="flex justify-center w-full">
            {links.map(({ label, id, url, icon }) => (
              <a key={id} href={url} title={label} className="mx-3">
                <svg className="w-14 h-14 text-white linkIconHover">
                  <use href={`${icon}#${id}`} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
