import type { NextPage } from "next";

interface Props {
  label: string;
  url: string;
}

const LevitateButton: NextPage<Props> = ({ label, url }, ...props) => {
  return (
    <a href={url} className={"flex hoverButton mb-6 md:mx-4 lg:mb-8 text-lg"}>
      <p>{label}</p>
    </a>
  );
};

export default LevitateButton;