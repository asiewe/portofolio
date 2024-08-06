import clsx from "clsx";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

function Expertise({ className }: Readonly<{ className?: string }>) {
  return (
    <div className={clsx(className)}>
      <h1 className="text-3xl text-destructive-foreground font-bold mb-8">
        <span className="text-accent">02.</span> My Expertise
      </h1>
      <div className="grid xl:grid-cols-2 gap-5">
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-secondary-foreground">
                Frontend Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                With over 7 years of experience, I specialize in crafting
                seamless and interactive user interfaces using modern frontend
                technologies. My expertise includes:
              </p>
              <br />

              <ul>
                <li>
                  <span className="text-secondary-foreground font-bold">
                    Frameworks
                  </span>
                  : Proficient in
                  <span className="text-accent"> React</span> and
                  <span className="text-accent"> Angular</span>, ensuring
                  dynamic and responsive web applications.
                </li>
                <li>
                  <span className="text-secondary-foreground font-bold">
                    Design
                  </span>
                  : Skilled in translating design concepts into fully functional
                  websites with a focus on user experience and accessibility.
                </li>
                <li>
                  <span className="text-secondary-foreground font-bold">
                    Optimization
                  </span>
                  : Dedicated to optimizing performance and load times for
                  enhanced user satisfaction.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-secondary-foreground">
                Backend Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                In addition to my frontend skills, I am well-versed in backend
                technologies:
              </p>
              <br />
              <ul>
                <li>
                  <span className="text-secondary-foreground font-bold">
                    Technologies
                  </span>
                  : Experienced with{" "}
                  <span className="text-accent">Node.js</span> and
                  <span className="text-accent">Spring</span>, enabling robust
                  and scalable backend solutions.
                </li>
                <li>
                  <span className="text-secondary-foreground font-bold">
                    Integration
                  </span>
                  : Proficient in integrating frontend and backend systems for a
                  seamless user experience.
                </li>
                <li>
                  <span className="text-secondary-foreground font-bold">
                    Security
                  </span>
                  : Committed to implementing secure coding practices to protect
                  user data and maintain system integrity.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
