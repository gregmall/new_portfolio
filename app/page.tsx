"use client";

import { Link as ScrollLink, Element } from "react-scroll";
import {
  Byline,
  DoubleRule,
  EditionDate,
  Kicker,
  PullQuote,
  SectionBanner,
} from "./functions";

const projects = [
  {
    name: "Wired To Burn",
    description:
      "This is a webstie for my band where we can post our latest music, post updates and upcoming shows and connect with fans and other bands.",
    tech: ["Next.js", "Tailwind", "Firebase"],
    href: "https://wiredtoburn.com",
  },
  {
    name: "E-Commerce Website",
    description:
      "This is an e-commerce website I created for my glass art. It utilizes Firebase for auth and as a backend service and database. It integrates Stripe API to take payments. ",
    tech: ["React", "Node.js", "Firebase"],
    href: "https://synthesisglass.com",
  },
  {
    name: "KeeperAI",
    description:
      "I was part of a team that build an app that showcases soft skills in a work environment, graphically showcasing a personality determined by a series of question answered with images and short statements.  We also created a social media component and affinity groups. ",
    tech: ["React", "Firebase", "Docker"],
    href: "https://keeper-hr-test.web.app/home",
  },
];

const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "PostgreSQL", "REST APIs"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Linux"],
  },
];

const socials = [
  { label: "GitHub", href: "https://github.com/gregmall" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/greg-mall-he-him-3032771b1/",
  },
  { label: "Email", href: "mailto:gregmall157@gmail.com" },
];

const navLinks = [
  { label: "About", to: "about" },
  { label: "Projects", to: "projects" },
  { label: "Skills", to: "skills" },
  { label: "Contact", to: "contact" },
];

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-5xl px-6 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] uppercase tracking-widest text-muted">
          <span>
            <EditionDate />
          </span>
          <span>Vol. I &middot; No. 01</span>
          <span>Online Edition</span>
        </div>
        <div className="py-5 text-center">
          <ScrollLink
            to="about"
            smooth
            duration={400}
            offset={-20}
            className="cursor-pointer font-display text-4xl font-black tracking-tight text-foreground sm:text-6xl"
          >
            The Greg Mall Times
          </ScrollLink>
          <p className="mt-2 font-display text-sm italic text-muted">
            Software Engineering &amp; Other Dispatches
          </p>
        </div>
        <DoubleRule />
        <nav className="flex flex-wrap items-center justify-center gap-3 py-3 text-xs uppercase tracking-[0.2em] text-foreground">
          {navLinks.map((link, i) => (
            <span key={link.to} className="flex items-center gap-3">
              {i > 0 && <span className="text-muted">&middot;</span>}
              <ScrollLink
                to={link.to}
                smooth
                duration={400}
                offset={-20}
                className="cursor-pointer transition-colors hover:text-accent"
              >
                {link.label}
              </ScrollLink>
            </span>
          ))}
        </nav>
        <DoubleRule />
      </div>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-14 px-6 py-10">
        <Element name="about">
          <section>
            <Kicker>Profile</Kicker>
            <h1 className="pt-2 font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-6xl">
              Software Engineer Builds Things For The Web
            </h1>
            <div className="mt-3 border-b border-foreground pb-3">
              <Byline>By Greg Mall — Staff Writer</Byline>
            </div>
            <div
              className="mt-6 columns-1 gap-8 sm:columns-2"
              style={{ columnRule: "1px solid var(--border)" }}
            >
              <p className="drop-cap mb-4 text-justify text-[15px] leading-7 text-foreground">
                I build things for the web. A life long musician and artist.
                I love to make things. Currently open to new opportunities
                and interesting collaborations, this correspondent reports a
                keen interest in shipping thoughtful, well-crafted software
                for clients and bands alike.
              </p>
            </div>
            <PullQuote>
              &ldquo;Open to new opportunities and interesting
              projects.&rdquo;
            </PullQuote>
            <div className="mt-6 flex flex-wrap gap-4">
              <ScrollLink
                to="projects"
                smooth
                duration={400}
                offset={-20}
                className="cursor-pointer border-2 border-foreground bg-foreground px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-background transition-colors hover:bg-background hover:text-foreground"
              >
                Continued: Projects
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth
                duration={400}
                offset={-20}
                className="cursor-pointer border-2 border-foreground px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Letters To The Editor
              </ScrollLink>
            </div>
          </section>
        </Element>

        <Element name="projects">
          <section className="flex flex-col gap-6">
            <SectionBanner>Technology</SectionBanner>
            <div className="grid gap-8 sm:grid-cols-3 sm:divide-x sm:divide-foreground">
              {projects.map((project, i) => (
                <a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-2 sm:px-6 sm:first:pl-0 sm:last:pr-0"
                >
                  <Kicker>{i === 0 ? "Lead Story" : "Wire Report"}</Kicker>
                  <h3 className="font-display text-xl font-bold leading-snug text-foreground">
                    {project.name}
                  </h3>
                  <p className="text-xs italic text-muted">
                    {project.tech.join(" · ")}
                  </p>
                  <p className="text-justify text-sm leading-6 text-foreground">
                    {project.description}
                  </p>
                </a>
              ))}
            </div>
          </section>
        </Element>

        <Element name="skills">
          <section className="flex flex-col gap-6">
            <div className="border-2 border-foreground">
              <SectionBanner>Skills Index</SectionBanner>
              <div className="divide-y divide-foreground/30 sm:grid sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                {skills.map((group) => (
                  <div key={group.category} className="flex flex-col gap-1 px-6 py-4">
                    <span className="font-display text-sm font-bold uppercase tracking-wide text-foreground">
                      {group.category}
                    </span>
                    <span className="text-sm italic text-muted">
                      {group.items.join(", ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Element>

        <Element name="contact">
          <section className="flex flex-col gap-6">
            <div className="border-2 border-dashed border-foreground p-8 text-center">
              <Kicker>Classifieds</Kicker>
              <h2 className="pt-1 font-display text-2xl font-bold text-foreground">
                Wanted: New Opportunities
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted">
                Open to new opportunities and interesting projects. Reach out
                through any of the channels below.
              </p>
              <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm uppercase tracking-widest">
                {socials.map((social, i) => (
                  <li key={social.label} className="flex items-center gap-4">
                    {i > 0 && <span className="text-muted">&middot;</span>}
                    <a
                      href={social.href}
                      target={
                        social.href.startsWith("mailto:")
                          ? undefined
                          : "_blank"
                      }
                      rel="noopener noreferrer"
                      className="border-b-2 border-foreground font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </Element>
      </main>

      <footer className="border-t-2 border-foreground px-6 py-6 text-center text-[11px] uppercase tracking-widest text-muted">
        &copy; The Greg Mall Times &middot; All Rights Reserved &middot;{" "}
        <EditionDate />
      </footer>
    </div>
  );
}
