import type { NextPage } from "next";
import { navLinks } from "../../constants/navigationLinks";

// Todo: Make a mobile-optimized navbar

interface Props {
  page?: string;
}

const Navbar: NextPage<Props> = ({ page }) => {
  return (
    <div
      className={
        "flex justify-center items-center w-[90%] md:w-3/5 xl:w-2/5 mt-4 p-1 coloredGradient rounded-full"
      }
    >
      <div
        className={
          "flex justify-between items-center w-full h-12 bg-black rounded-full"
        }
      >
        {navLinks.map(({ name, url }) => (
          <a href={url} key={name} className={"w-full h-full"}>
            <div
              className={
                "flex justify-center items-center cursor-pointer text-white text-xl	almostBlackHover h-full w-full select-none rounded-full"
              }
            >
              <p>{name}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
