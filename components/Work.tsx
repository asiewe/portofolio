import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  stack: string[];
  picture?: string;
  repo?: string;
}

const projects: Project[] = [
  {
    title: "Stephanie & Simplice Wedding Website",
    description:
      "A wedding website featuring a countdown timer and background music, created in my spare time as a gift for close friends.",
    stack: ["Gatsby", "React"],
    picture: "/imgs/wedding-ss.png",
    repo: "https://github.com/asiewe/wedding",
  },
  {
    title: "Upcoming: VSCode extension",
    description:
      "As a daily user of VSCode, I found myself needing better IntelliSense support for a specific library I rely on. To improve my development experience and productivity, I decided to create and integrate this feature into VSCode.",
    picture: "/imgs/vscode.png",
    stack: ["Typescript", "LSP"],
  },
];

const Works = () => {
  return (
    <div id="work">
      <h1 className="text-3xl text-destructive-foreground font-bold mb-8">
        <span className="text-accent">04.</span> My Work
      </h1>

      <div className="flex flex-col gap-10">
        {projects.map((project, index) => {
          return (
            <div key={index} className="">
              <Image
                src={project.picture || ""}
                alt={project.title}
                quality={100}
                width={300}
                height={200}
                className="object-contain relative"
              />
              {/*  Description */}
              <div className="flex flex-col">
                <div className="text-xl">{project.title}</div>
                <div>{project.description}</div>
                <div className="flex mt-2 gap-2">
                  {project.stack.map((item, key) => {
                    return (
                      <Badge key={key} className="bg-accent">
                        {item}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
