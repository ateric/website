/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { navLinks } from "../constants/navigationLinks";
import { index } from "../constants/metadata";
import { links } from "../constants/links";

const Home: NextPage = () => {
  return (
    <div
      className={"h-screen w-full bg-black flex justify-center items-center"}
    >
      <NextSeo {...index} />
      <div className="blurGradient"></div>
      <div className="lg:box-50 rounded-2xl gradient_1 flex justify-center items-center movingBlurGradient z-10">
        <div className="lg:box-45 rounded-2xl bg-black flex items-center justify-center flex-col z-0">
          <div className="flex justify-center flex-col">
            <h1 className="text-super-350 text-6xl font-bold">Daniel Miller</h1>
            <div className="w-10/12 h-2 mt-1 ml-1 bg-white rounded-full gradient_2"></div>
          </div>
          <div className="text-neutral-100 flex justify-center items-center h-3/5">
            <div className="flex flex-wrap justify-center">
              {navLinks.map((item) =>
                item.noHomepageDisplay ? (
                  ""
                ) : (
                  <a
                    href={item.url}
                    key={item.name}
                    className={`flex justify-center items-center font-black italic text-7xl mx-10 h-40`}
                  >
                    <div
                      className={`px-7 w-full linkEffect linkEffect--${item.color}`}
                    >
                      <h2 className="">{item.name}</h2>
                    </div>
                  </a>
                )
              )}
            </div>
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
