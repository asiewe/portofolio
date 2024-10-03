import { FiDownload } from "react-icons/fi";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col xl:flex-row items-center justify-between  md:min-h-[95vh]"
    >
      {/* text */}
      <div className="text-center xl:text-left order-2 xl:order-none">
        <div className="mb-6">
          <h1 className="text-4xl text-destructive-foreground">Hi I&apos; m</h1>
          <h1 className="text-accent text-4xl">Armel Siewe</h1>
        </div>
        <p className="max-w-[500px] mb-9 text-center xl:text-left">
          I am dynamic web Developer based in Frankfurt, Germany, with expertise
          in modern web technologies such as React and Angular. With a robust
          background in software development, I specialize in creating
          efficient, user-friendly applications. feel free to reach out to
          discuss potential collaborations!
        </p>
        {/* btn and socials */}
        <div className="flex flex-col items-center gap-y-4">
          <a href="/cv.pdf" download>
            <Button variant="outline">
              <span>Download CV </span>
              <FiDownload />
            </Button>
          </a>

          <div className="mb-8 xl:mb-0">
            <Social
              containerClassNames="flex gap-6"
              iconClassNames="w-4 h-4 border-accent text-xl
                rounded-full flex justify-center items-center text-accent text-base hover:bg-accent text-base hover:bg-accent hover:text-secondary hover:transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* photo */}
      <div className="order-1 xl:order-none">
        <Photo />
      </div>
    </div>
  );
};

export default About;
