import type { NextPage } from "next";
import Image from "next/image";
import { links } from "../../constants/links";

const Links: NextPage<any> = () => {
  return (
    <div>
      {links.map(({ icon, label }) => (
        <Image src={icon} key={label} alt={label} />
      ))}
    </div>
  );
};

export default Links;
