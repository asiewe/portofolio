import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

interface SocialProps {
  containerClassNames?: string;
  iconClassNames?: string;
}

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
];

const Social = ({
  containerClassNames,
  iconClassNames,
}: Readonly<SocialProps>) => {
  return (
    <div className={containerClassNames}>
      {socials.map(({ icon, path }, index) => {
        return (
          <Link key={index} href={path} className={iconClassNames}>
            {icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
