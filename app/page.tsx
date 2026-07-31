"use client";

import { Link as ScrollLink, Element } from "react-scroll";
import { Chip, LastUpdated, NeuCard, NeuIconTile, SectionLabel } from "./functions";

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

const projectIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h4.6c.4 0 .8.2 1.1.5L11.6 7H19.5A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-11Z" />
  </svg>
);

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <header className="sticky top-0 z-10 bg-background shadow-[0_1px_0_rgba(46,49,56,0.06)]">
        <nav className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4">
          <ScrollLink
            to="about"
            smooth
            duration={400}
            offset={-72}
            className="neu-raised-sm flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-card text-xs font-bold text-accent"
          >
            GM
          </ScrollLink>
          <ul className="flex gap-6 text-sm font-medium text-muted">
            {navLinks.map((link) => (
              <li key={link.to}>
                <ScrollLink
                  to={link.to}
                  smooth
                  duration={400}
                  offset={-72}
                  className="cursor-pointer transition-colors hover:text-foreground"
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <ScrollLink
            to="contact"
            smooth
            duration={400}
            offset={-72}
            className="neu-raised-sm neu-press cursor-pointer rounded-full bg-card px-4 py-1.5 text-xs font-semibold text-foreground"
          >
            Say hello
          </ScrollLink>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-16 px-6 py-16">
        <Element name="about">
          <NeuCard className="items-center gap-6 px-6 py-16 text-center">
            <SectionLabel>Open to new opportunities</SectionLabel>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Greg Mall
            </h1>
            <p className="text-lg font-medium text-accent">
              Software Engineer
            </p>
            <p className="max-w-xl leading-7 text-muted">
              I build things for the web. A life long musician and artist. I
              love to make things.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <ScrollLink
                to="projects"
                smooth
                duration={400}
                offset={-72}
                className="neu-raised-accent neu-press cursor-pointer rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white"
              >
                View my work
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth
                duration={400}
                offset={-72}
                className="neu-raised-sm neu-press cursor-pointer rounded-full bg-card px-6 py-3 text-sm font-semibold text-foreground"
              >
                Get in touch
              </ScrollLink>
            </div>
          </NeuCard>
        </Element>

        <Element name="projects">
          <section className="flex flex-col gap-6">
            <SectionLabel>Projects</SectionLabel>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <NeuCard
                  key={project.name}
                  as="a"
                  href={project.href}
                  external
                  className="gap-4 p-6"
                >
                  <NeuIconTile className="h-11 w-11">
                    {projectIcon}
                  </NeuIconTile>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {project.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-muted">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <Chip key={tech}>{tech}</Chip>
                    ))}
                  </div>
                </NeuCard>
              ))}
            </div>
          </section>
        </Element>

        <Element name="skills">
          <section className="flex flex-col gap-6">
            <SectionLabel>Skills</SectionLabel>
            <div className="grid gap-6 sm:grid-cols-2">
              {skills.map((group) => (
                <NeuCard key={group.category} className="gap-3 p-6">
                  <h3 className="text-sm font-semibold text-foreground">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Chip key={item}>{item}</Chip>
                    ))}
                  </div>
                </NeuCard>
              ))}
            </div>
          </section>
        </Element>

        <Element name="contact">
          <section className="flex flex-col gap-6">
            <SectionLabel>Contact</SectionLabel>
            <NeuCard className="items-center gap-8 px-6 py-14 text-center">
              <p className="max-w-sm leading-6 text-muted">
                Open to new opportunities and interesting projects. Reach out
                through any of the links below.
              </p>
              <div className="flex gap-6">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2"
                  >
                    <NeuIconTile className="neu-press h-14 w-14 rounded-full">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="h-6 w-6"
                      >
                        {social.icon}
                      </svg>
                    </NeuIconTile>
                    <span className="text-xs text-muted">{social.label}</span>
                  </a>
                ))}
              </div>
            </NeuCard>
          </section>
        </Element>

        <footer className="py-6 text-center text-xs text-muted">
          Greg Mall. Software Engineer. <LastUpdated />
        </footer>
      </main>
    </div>
  );
}
