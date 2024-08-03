import React from "react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/TheBawMan" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/thebawman/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/thebawman/" },
  { icon: <FaTwitter />, path: "https://twitter.com/thebawman" },
];

const Social = ({ containerStyles, iconStyle }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyle}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
