"use client";

import { Link as ScrollLink, Element } from "react-scroll";
import { DateLabel, PromptBar, StatusBar, Tag, TerminalWindow } from "./functions";

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
  { category: "languages", items: ["TypeScript", "JavaScript", "Python"] },
  { category: "frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { category: "backend", items: ["Node.js", "PostgreSQL", "REST APIs"] },
  { category: "tools", items: ["Git", "Docker", "Linux"] },
];

const socials = [
  {
    label: "github",
    value: "gregmall",
    href: "https://github.com/gregmall",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.44-2.7 5.42-5.27 5.7.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
      </svg>
    ),
  },
  {
    label: "linkedin",
    value: "greg-mall",
    href: "https://www.linkedin.com/in/greg-mall-he-him-3032771b1/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM.5 8.75h9v14.75h-9V8.75Zm14.75 0h.16v2.03h.05a3.35 3.35 0 0 1 3.02-1.66c3.23 0 3.82 2.13 3.82 4.9v8.48h-4v-7.52c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.97v7.65h-4V8.75h4.33Z" />
      </svg>
    ),
  },
  {
    label: "email",
    value: "gregmall157@gmail.com",
    href: "mailto:gregmall157@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M2 4.5h20v15H2v-15Zm1.7 1.7 8.3 6.5 8.3-6.5M3.7 18.2 9.8 12M20.3 18.2 14.2 12" />
      </svg>
    ),
  },
];

function slug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function Home() {
  return (
    <div className="relative flex min-h-svh flex-1 flex-col pb-10 pt-14">
      <PromptBar />

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-5 px-4 py-6 sm:px-6">
        <Element name="about">
          <TerminalWindow title="about.sh">
            <div className="space-y-4 text-sm leading-6">
              <p className="text-muted">
                <span className="text-accent">$</span> whoami
              </p>
              <p>guest</p>
              <p className="pt-2 text-muted">
                <span className="text-accent">$</span> cat about.md
              </p>
              <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
                Greg Mall<span className="cursor-blink text-accent">_</span>
              </h1>
              <p className="text-accent-2">&gt; Software Engineer</p>
              <p className="max-w-lg text-muted">
                I build things for the web. A life long musician and artist.
                I love to make things.
              </p>
              <Tag>open_to_work: true</Tag>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-sm">
                <ScrollLink
                  to="projects"
                  smooth
                  duration={400}
                  offset={-56}
                  className="cursor-pointer text-accent transition-colors hover:text-foreground"
                >
                  ./view-projects.sh
                </ScrollLink>
                <ScrollLink
                  to="contact"
                  smooth
                  duration={400}
                  offset={-56}
                  className="cursor-pointer text-accent-2 transition-colors hover:text-foreground"
                >
                  ./get-in-touch.sh
                </ScrollLink>
              </div>
            </div>
          </TerminalWindow>
        </Element>

        <Element name="projects">
          <TerminalWindow title="projects.json">
            <p className="pb-4 text-sm text-muted">
              <span className="text-accent">$</span> ls ./projects
            </p>
            <div className="flex flex-col gap-3">
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-2 rounded border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-accent/40 hover:bg-white/[0.05]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm text-accent-2">
                      ./{slug(project.name)}
                    </span>
                    <span className="text-xs text-muted opacity-0 transition-opacity group-hover:opacity-100">
                      open -&gt;
                    </span>
                  </div>
                  <p className="text-xs leading-5 text-muted">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </TerminalWindow>
        </Element>

        <Element name="skills">
          <TerminalWindow title="skills.json">
            <pre className="overflow-x-auto text-xs leading-6 sm:text-sm">
              <code>
                <span className="text-muted">{"{"}</span>
                {"\n"}
                {skills.map((group, i) => (
                  <span key={group.category}>
                    {"  "}
                    <span className="text-accent-2">&quot;{group.category}&quot;</span>
                    <span className="text-muted">: [</span>
                    {group.items.map((item, j) => (
                      <span key={item}>
                        <span className="text-string">&quot;{item}&quot;</span>
                        {j < group.items.length - 1 ? (
                          <span className="text-muted">, </span>
                        ) : null}
                      </span>
                    ))}
                    <span className="text-muted">
                      ]{i < skills.length - 1 ? "," : ""}
                    </span>
                    {"\n"}
                  </span>
                ))}
                <span className="text-muted">{"}"}</span>
              </code>
            </pre>
          </TerminalWindow>
        </Element>

        <Element name="contact">
          <TerminalWindow title="contact.md">
            <p className="pb-4 text-sm text-muted">
              <span className="text-accent">$</span> contact --list
            </p>
            <p className="pb-4 max-w-md text-sm leading-6 text-muted">
              Open to new opportunities and interesting projects. Reach out
              through any of the channels below.
            </p>
            <div className="flex flex-col gap-1">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={
                    social.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded px-2 py-2.5 text-sm transition-colors hover:bg-white/[0.04]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-white/10 bg-white/[0.03] text-accent">
                    {social.icon}
                  </span>
                  <span className="w-16 shrink-0 text-muted">
                    {social.label}
                  </span>
                  <span className="truncate text-accent-2 group-hover:underline">
                    {social.value}
                  </span>
                </a>
              ))}
            </div>
          </TerminalWindow>
        </Element>

        <p className="pb-2 text-center text-[11px] text-muted">
          # build <DateLabel /> &middot; portfolio.tsx
        </p>
      </main>

      <StatusBar />
    </div>
  );
}
