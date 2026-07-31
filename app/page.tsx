"use client";

import { Link as ScrollLink, Element } from "react-scroll";
import { DateLabel, Dock, DockIcon, MenuBar, Pill, Window } from "./functions";

const projects = [
  {
    name: "Wired To Burn",
    description:
      "This is a webstie for my band where we can post our latest music, post updates and upcoming shows and connect with fans and other bands.",
    tech: ["Next.js", "Tailwind", "Firebase"],
    href: "https://wiredtoburn.com",
    gradient: "linear-gradient(160deg, #5e5ce6, #0a84ff)",
  },
  {
    name: "E-Commerce Website",
    description:
      "This is an e-commerce website I created for my glass art. It utilizes Firebase for auth and as a backend service and database. It integrates Stripe API to take payments. ",
    tech: ["React", "Node.js", "Firebase"],
    href: "https://synthesisglass.com",
    gradient: "linear-gradient(160deg, #ff9f43, #ff6b3d)",
  },
  {
    name: "KeeperAI",
    description:
      "I was part of a team that build an app that showcases soft skills in a work environment, graphically showcasing a personality determined by a series of question answered with images and short statements.  We also created a social media component and affinity groups. ",
    tech: ["React", "Firebase", "Docker"],
    href: "https://keeper-hr-test.web.app/home",
    gradient: "linear-gradient(160deg, #34d399, #30d158)",
  },
];

const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python"],
    gradient: "linear-gradient(160deg, #5ac8fa, #0a84ff)",
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
    gradient: "linear-gradient(160deg, #bf5af2, #5e5ce6)",
  },
  {
    category: "Backend",
    items: ["Node.js", "PostgreSQL", "REST APIs"],
    gradient: "linear-gradient(160deg, #ff9f43, #ff6b3d)",
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Linux"],
    gradient: "linear-gradient(160deg, #8e8e93, #636366)",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/gregmall",
    gradient: "linear-gradient(160deg, #4b4b4b, #1c1c1e)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.44-2.7 5.42-5.27 5.7.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/greg-mall-he-him-3032771b1/",
    gradient: "linear-gradient(160deg, #2f8fe0, #0a66c2)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM.5 8.75h9v14.75h-9V8.75Zm14.75 0h.16v2.03h.05a3.35 3.35 0 0 1 3.02-1.66c3.23 0 3.82 2.13 3.82 4.9v8.48h-4v-7.52c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.97v7.65h-4V8.75h4.33Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:gregmall157@gmail.com",
    gradient: "linear-gradient(160deg, #5ac8fa, #0a84ff)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M2 4.5h20v15H2v-15Zm1.7 1.7 8.3 6.5 8.3-6.5M3.7 18.2 9.8 12M20.3 18.2 14.2 12" />
      </svg>
    ),
  },
];

const projectIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h4.6c.4 0 .8.2 1.1.5L11.6 7H19.5A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-11Z" />
  </svg>
);

const dockItems = [
  {
    to: "about",
    label: "About",
    gradient: "linear-gradient(160deg, #64d2ff, #0a84ff)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-6 w-6">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M4.5 19c1-4 4-6.5 7.5-6.5s6.5 2.5 7.5 6.5" />
      </svg>
    ),
  },
  {
    to: "projects",
    label: "Projects",
    gradient: "linear-gradient(160deg, #5e5ce6, #0a84ff)",
    icon: projectIcon,
  },
  {
    to: "skills",
    label: "Skills",
    gradient: "linear-gradient(160deg, #bf5af2, #af52de)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-6 w-6">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      </svg>
    ),
  },
  {
    to: "contact",
    label: "Contact",
    gradient: "linear-gradient(160deg, #ff9f43, #ff6b3d)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M2 4.5h20v15H2v-15Zm1.7 1.7 8.3 6.5 8.3-6.5M3.7 18.2 9.8 12M20.3 18.2 14.2 12" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-svh flex-1 flex-col pb-28 pt-14">
      <MenuBar />

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-4 py-6 sm:px-6">
        <Element name="about">
          <Window title="About — Finder">
            <div className="flex flex-col items-center gap-5 py-4 text-center">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full text-2xl font-semibold text-white shadow-lg"
                style={{ background: "linear-gradient(160deg, #0a84ff, #af52de)" }}
              >
                GM
              </div>
              <Pill>
                <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#28c840]" />
                Open to new opportunities
              </Pill>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Greg Mall
              </h1>
              <p className="text-base text-muted">Software Engineer</p>
              <p className="max-w-lg leading-7 text-muted">
                I build things for the web. A life long musician and artist.
                I love to make things.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <ScrollLink
                  to="projects"
                  smooth
                  duration={400}
                  offset={-40}
                  className="cursor-pointer rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-transform hover:-translate-y-0.5"
                >
                  View Projects
                </ScrollLink>
                <ScrollLink
                  to="contact"
                  smooth
                  duration={400}
                  offset={-40}
                  className="glass cursor-pointer rounded-full px-6 py-2.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
                >
                  Get In Touch
                </ScrollLink>
              </div>
            </div>
          </Window>
        </Element>

        <Element name="projects">
          <Window title="Projects — Finder">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-3 rounded-2xl bg-white/40 p-5 transition-colors hover:bg-white/60"
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-md"
                    style={{ background: project.gradient }}
                  >
                    {projectIcon}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <p className="text-xs leading-5 text-muted">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/60 px-2 py-0.5 text-[10px] font-medium text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </Window>
        </Element>

        <Element name="skills">
          <Window title="Skills — System Settings">
            <div className="grid gap-3 sm:grid-cols-2">
              {skills.map((group) => (
                <div
                  key={group.category}
                  className="flex items-center gap-3 rounded-2xl bg-white/40 p-4"
                >
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] text-xs font-bold text-white shadow-md"
                    style={{ background: group.gradient }}
                  >
                    {group.category[0]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-foreground">
                      {group.category}
                    </p>
                    <p className="truncate text-xs text-muted">
                      {group.items.join(", ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Window>
        </Element>

        <Element name="contact">
          <Window title="Contact — Messages">
            <div className="flex flex-col items-center gap-6 py-4 text-center">
              <p className="max-w-md leading-6 text-muted">
                Open to new opportunities and interesting projects. Reach out
                through any of the links below.
              </p>
              <div className="flex gap-5">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1.5 transition-transform hover:-translate-y-1"
                  >
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg"
                      style={{ background: social.gradient }}
                    >
                      {social.icon}
                    </span>
                    <span className="text-xs text-muted">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </Window>
        </Element>

        <p className="pb-2 text-center text-[11px] text-muted">
          macOS Tahoe 26 &middot; <DateLabel />
        </p>
      </main>

      <Dock>
        {dockItems.map((item) => (
          <DockIcon
            key={item.to}
            to={item.to}
            label={item.label}
            gradient={item.gradient}
          >
            {item.icon}
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
}
