import Link from "next/link";
import { FaCaretRight } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { clsx } from "clsx";

const experiences = [
  {
    company: "Capgemini",
    companySiteUrl: "https://www.capgemini.com/",
    role: "Lead Software Engineer",
    period: "2023 - Present",
    description: [
      "Led the development of a web application within a team of 10 members.",
      "Performed technical code reviews to ensure quality and adherence to best practices.",
      "Facilitated knowledge transfer among team members, enhancing team capabilities.",
      "Conducted Angular training sessions for Capgemini colleagues, contributing to skill development within the organization.",
    ],
    stack: ["TypeScript", "Angular", "PrimeNg", "Testcafe", "Java"],
  },
  {
    company: "DQS Holding",
    companySiteUrl: "https://www.dqsglobal.com/de-de/",
    role: "Software Engineer",
    period: "2020 - 2023",
    description: [
      "Led and managed the full software development lifecycle (SDLC) of multiple projects, ensuring timely and efficient delivery.",
      "Collaborated closely with cross-functional teams to identify and resolve complex software issues, enhancing overall system performance.",
      "Designed and implemented user-friendly, aesthetically appealing websites, significantly improving user engagement and experience.",
      "Actively addressed and resolved queries from non-technical audiences, simplifying complex technical concepts for better understanding.",
      "Maintained and enhanced existing software systems using CI/CD best practices, resulting in improved reliability and faster release cycles.",
    ],
    stack: ["TypeScript", "React", "ExpressJS", "Ant Design", "SQL", "MongoDB"],
  },
  {
    company: "Empolis Intelligent Views",
    companySiteUrl: "https://www.empolis.com/",
    role: "Frontend Developer (Working Student)",
    period: "2017 - 2020",
    description: [
      "Maintained and further developed the company’s own CMS system.",
      "Assisted with maintenance and upkeep of front end applications.",
      "Evaluated new technologies, frameworks, and libraries to support high-level products.",
    ],
    stack: [
      "NodeJS",
      "RactiveJS",
      "TypeScript",
      "AngularJS",
      "React",
      "CSS",
      "HTML",
      "REST",
    ],
  },
  {
    company: "Hottinger Brüel & Kjaer",
    companySiteUrl:
      "https://www.hbm.com/de/9724/die-hottinger-bruel-kjaer-gmbh/",
    role: "Frontend Developer (Working Student)",
    period: "2016 - 2017",
    description: [
      "Collaborated in a dynamic team environment to develop a sophisticated web application for test monitoring and control, significantly improving the operational efficiency of the product testing team.",
      "Proactively engaged in problem-solving and debugging to maintain high software quality and reliability.",
      "Contributed to continuous improvement by suggesting and implementing enhancements to the application, resulting in improved user experience and performance.",
    ],
    stack: ["React", "Redux", "HTML", "CSS", "NodeJS", "ExpressJS", "SQL"],
  },
];

export const Experience = (className: Readonly<{ className?: string }>) => {
  return (
    <section id="experience">
      <h1 className="text-3xl text-destructive-foreground font-bold mb-8">
        <span className="text-accent">03.</span> My Career Path
      </h1>
      <div className={clsx(className, "flex flex-col gap-10")}>
        {experiences.map(
          ({ description, role, companySiteUrl, company, period, stack }) => {
            return (
              <div key={company} className="grid grid-cols-[1fr_5fr] gap-5">
                <div className="">
                  <h3 className="text-lg">{period}</h3>
                </div>
                <div className="">
                  <div className="">
                    <h2 className="text-xl">
                      <span className="text-destructive-foreground ">
                        {role}
                      </span>
                      <Link
                        target="_blank"
                        className="text-accent"
                        href={companySiteUrl}
                      >
                        {""} @ {company}
                      </Link>
                    </h2>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {description.map((item, company) => {
                      return (
                        <li key={company}>
                          <FaCaretRight className="inline text-accent mr-3" />
                          <span>{item}</span>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="flex gap-3 mt-2 flex-wrap">
                    {stack.map((item, key) => {
                      return (
                        <Badge
                          key={key}
                          className="bg-accent-foreground text-accent"
                        >
                          {item}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Experience;
