import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import ContactCard from "../components/ContactCard/ContactCard";
import Navbar from "../components/Navbar/Navbar";
import { contact_links } from "../constants/contact_links";
import { contact } from "../constants/metadata";

const Contact: NextPage = () => {
  return (
    <div className="flex items-center flex-col h-screen w-full">
      <NextSeo {...contact} />
      <Navbar />
      <div className="flex justify-center items-center flex-col h-screen">
        {contact_links.map(({ label, value, icon, url }) => (
          <ContactCard key={label} data={{ label, value, icon, url }} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
