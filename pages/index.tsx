import type { NextPage } from "next";
import SmoothCorner from "../components/SmoothCorner/SmoothCorner";
import { navLinks } from "../constants/navigationLinks";

const Home: NextPage = () => {
  return (
    <div className={"h-screen w-full bg-black flex justify-center items-center"}>
      <div className="blurGradient"></div>
      <SmoothCorner className="box-50 gradient_1 flex justify-center items-center movingBlurGradient z-10">
        <SmoothCorner className="box-45 bg-black flex items-center justify-center flex-col z-0">
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
                    className={`font-black italic text-7xl px-7 mx-10 mb-20 linkEffect linkEffect--${item.color}`}
                  >
                    <h2>{item.name}</h2>
                  </a>
                )
              )}
            </div>
          </div>
        </SmoothCorner>
      </SmoothCorner>
    </div>
  );
};

export default Home;
