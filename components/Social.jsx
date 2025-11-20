import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaFacebook, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/HAKIM166" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/ahmed-hakem-34b3b3350/" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/ahmed.a.hakim.148" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/ahmed.hakem2/" },
];

export default function Social({containerStyles , iconStyles}) {
  return <div className={containerStyles}>
    {socials.map((item , index)=>{
        return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
    })}
  </div>;
}
