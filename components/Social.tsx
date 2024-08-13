import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

interface SocialProps {
  containerClassNames?: string;
  iconClassNames?: string;
}

const socials = [
  { icon: <FaGithub />, path: "https://github.com/asiewe" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/armel-siewe-8770631a1/",
  },
];

const Social = ({
  containerClassNames,
  iconClassNames,
}: Readonly<SocialProps>) => {
  return (
    <div className={containerClassNames}>
      {socials.map(({ icon, path }, index) => {
        return (
          <Link key={index} href={path} target="_blank" className={iconClassNames}>
            {icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
