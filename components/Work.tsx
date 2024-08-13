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
    picture: "wedding-ss.png",
    repo: "https://github.com/asiewe/wedding",
  },
];

const Works = () => {
  return (
    <div id="work" className="container mx-auto">
      <h1 className="text-3xl text-destructive-foreground font-bold mb-8">
        <span className="text-accent">03.</span> My Work
      </h1>

      {projects.map((project, index) => {
        return (
          <div key={index} className="w-[700px] flex gap-8">
            <Image
              src="/imgs/wedding-ss.png"
              alt={project.title}
              quality={100}
              width={300}
              height={200}
              className="object-contain relative"
            />
            {/*  Description */}
            <div className="flex flex-col gap-5">
              <div className="text-xl">{project.title}</div>
              <div className="mb-3">{project.description}</div>
              <div className="flex gap-3">
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
  );
};

export default Works;
