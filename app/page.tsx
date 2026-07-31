"use client";

import { Link as ScrollLink, Element } from "react-scroll";
import { Panel, PrintDate, SectionHeading, Tag } from "./functions";

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
  {
    label: "GitHub",
    href: "https://github.com/gregmall",
    icon: (
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.44-2.7 5.42-5.27 5.7.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/greg-mall-he-him-3032771b1/",
    icon: (
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM.5 8.75h9v14.75h-9V8.75Zm14.75 0h.16v2.03h.05a3.35 3.35 0 0 1 3.02-1.66c3.23 0 3.82 2.13 3.82 4.9v8.48h-4v-7.52c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.97v7.65h-4V8.75h4.33Z" />
    ),
  },
  {
    label: "Email",
    href: "mailto:gregmall157@gmail.com",
    icon: (
      <path d="M2 4.5h20v15H2v-15Zm1.7 1.7 8.3 6.5 8.3-6.5M3.7 18.2 9.8 12M20.3 18.2 14.2 12" />
    ),
  },
];

const navLinks = [
  { label: "About", to: "about" },
  { label: "Projects", to: "projects" },
  { label: "Skills", to: "skills" },
  { label: "Contact", to: "contact" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-10 border-b-3 border-foreground bg-background">
        <nav className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4">
          <ScrollLink
            to="about"
            smooth
            duration={400}
            offset={-72}
            className="brutal-border flex h-9 w-9 cursor-pointer items-center justify-center bg-foreground font-display text-[11px] text-background"
          >
            GM
          </ScrollLink>
          <ul className="flex gap-6 text-xs font-bold uppercase tracking-widest text-foreground">
            {navLinks.map((link) => (
              <li key={link.to}>
                <ScrollLink
                  to={link.to}
                  smooth
                  duration={400}
                  offset={-72}
                  className="cursor-pointer border-b-2 border-transparent pb-0.5 transition-colors hover:border-accent hover:text-accent"
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-28 px-6 py-24">
        <Element name="about">
          <section className="flex flex-col items-start gap-6">
            <span className="brutal-border inline-flex items-center gap-2 bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-muted">
              <span className="h-2.5 w-2.5 bg-accent" />
              Open to new opportunities
            </span>

            <h1 className="font-display text-4xl leading-tight tracking-tight text-foreground sm:text-6xl">
              Greg Mall
            </h1>
            <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-accent">
              <span className="h-px w-8 bg-accent/60" />
              Software Engineer
              <span className="h-px w-8 bg-accent/60" />
            </p>
            <p className="max-w-xl text-lg leading-8 text-muted">
              I build things for the web. A life long musician and artist. I
              love to make things.
            </p>
            <div className="flex gap-6 pt-4 text-xs font-bold uppercase tracking-widest">
              <ScrollLink
                to="projects"
                smooth
                duration={400}
                offset={-72}
                className="brutal-border brutal-shadow brutal-press cursor-pointer bg-foreground px-6 py-3 text-background"
              >
                View Projects
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth
                duration={400}
                offset={-72}
                className="brutal-border brutal-shadow brutal-press cursor-pointer bg-card px-6 py-3 text-foreground"
              >
                Get in touch
              </ScrollLink>
            </div>
          </section>
        </Element>

        <Element name="projects">
          <section className="flex flex-col gap-10">
            <SectionHeading index="01">Projects</SectionHeading>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, i) => (
                <a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Panel className="brutal-press flex h-full flex-col gap-3 p-6">
                    <span className="font-display text-lg text-accent">
                      N&deg;{String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-bold leading-relaxed text-foreground">
                      {project.name}
                    </h3>
                    <p className="text-sm leading-6 text-muted">
                      {project.description}
                    </p>
                    <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech) => (
                        <li key={tech}>
                          <Tag>{tech}</Tag>
                        </li>
                      ))}
                    </ul>
                  </Panel>
                </a>
              ))}
            </div>
          </section>
        </Element>

        <Element name="skills">
          <section className="flex flex-col gap-10">
            <SectionHeading index="02">Skills</SectionHeading>
            <div className="grid gap-8 sm:grid-cols-2">
              {skills.map((group) => (
                <Panel key={group.category} className="flex flex-col gap-3 p-6">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-accent">
                    {group.category}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item}>
                        <Tag>{item}</Tag>
                      </li>
                    ))}
                  </ul>
                </Panel>
              ))}
            </div>
          </section>
        </Element>

        <Element name="contact">
          <section className="flex flex-col items-center gap-6 text-center">
            <SectionHeading index="03">Contact</SectionHeading>
            <Panel className="flex w-full flex-col items-center gap-6 p-10">
              <h2 className="font-display text-lg tracking-tight sm:text-xl">
                Let&apos;s talk
              </h2>
              <p className="max-w-xl leading-7 text-muted">
                Open to new opportunities and interesting projects. Reach out
                through any of the links below.
              </p>
              <ul className="flex gap-4">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={
                        social.href.startsWith("mailto:")
                          ? undefined
                          : "_blank"
                      }
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="brutal-border brutal-press flex h-11 w-11 items-center justify-center bg-card text-foreground transition-colors hover:bg-foreground hover:text-background"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="h-5 w-5"
                      >
                        {social.icon}
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </Panel>
          </section>
        </Element>
      </main>

      <footer className="flex flex-col items-center gap-1 border-t-3 border-foreground bg-foreground px-6 py-8 text-center text-xs font-bold uppercase tracking-widest text-background">
        <span>Greg Mall &mdash; Software Engineer</span>
        <span className="text-background/60">
          <PrintDate />
        </span>
      </footer>
    </div>
  );
}
