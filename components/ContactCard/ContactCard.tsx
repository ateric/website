import type { NextPage } from "next";

interface Props {
  data: { label: string; value: string; icon: string; url?: string };
  className?: string;
}

const ContactCard: NextPage<Props> = ({
  data: { label, value, icon, url },
  className,
}) => {
  return (
    <a
      href={url}
      title={label}
      className="flex items-center justify-center mb-5"
    >
      <svg className="w-12 h-12 text-white linkIconHover mr-4">
        <use href={`${icon}#${label.toLowerCase()}`} />
      </svg>
      <p className="text-white text-3xl">{value}</p>
    </a>
  );
};

export default ContactCard;
