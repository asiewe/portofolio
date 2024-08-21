import { Button } from "@/components/ui/button";

function Contact() {
  return (
    <div id="contact">
      <h1 className="text-3xl text-destructive-foreground font-bold mb-8">
        <span className="text-accent">05.</span> Get In Touch
      </h1>
      <div>
        I&apos;m always open to new opportunities, collaborations, and
        questions. Whether you have a project in mind, a job opportunity, or
        just want to connect, feel free to reach out. I&apos;ll try my best to
        get back to you!
      </div>
      <div className="mt-10 flex align-middle justify-center">
        <Button>Let&apos;s Connect</Button>
      </div>
    </div>
  );
}

export default Contact;
