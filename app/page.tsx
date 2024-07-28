import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Expertise from "@/components/Expertise";
import Work from "@/components/Work";

const Home = () => {
  return (
    <section className="h-full">
      <About />
      <Expertise/>
      <Experience />
      <Work/>
      <Contact/>
    </section>
  );
};

export default Home;
