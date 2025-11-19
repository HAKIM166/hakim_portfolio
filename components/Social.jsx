import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaFacebook, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaFacebook />, path: "" },
  { icon: <FaInstagram />, path: "" },
];

export default function Social({containerStyles , iconStyles}) {
  return <div className={containerStyles}>
    {socials.map((item , index)=>{
        return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
    })}
  </div>;
}
