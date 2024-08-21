import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Expertise from "@/components/Expertise";
import Work from "@/components/Work";

const Home = () => {
  return (
    <section className="h-full flex flex-col gap-16">
      <About />
      <Expertise />
      <Experience />
      <Work />
      <Contact />
    </section>
  );
};

export default Home;
