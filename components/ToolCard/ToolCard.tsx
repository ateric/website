/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

interface Props {
  label: string;
  icon: string;
  color: string;
}

const ToolCard: NextPage<Props> = ({ label, icon, color }) => {
  return (
    <div className={"mx-4 mb-10 w-36 toolCardBackground rounded-xl"}>
      <div
        className={"flex justify-center items-center h-36 w-36 rounded-xl"}
        style={{ backgroundColor: color }}
      >
        <img className={"h-16 w-16 select-none"} src={icon} key={label} alt={label} />
      </div>
      <div
        className={
          "flex items-center w-full h-12 px-3 toolCardBackground rounded-b-xl"
        }
      >
        <p className={"text-white text-2xl leading-5"}>{label}</p>
      </div>
    </div>
  );
};

export default ToolCard;
