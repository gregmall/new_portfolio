import {
  AppIcon,
  Chevron,
  DynamicIsland,
  GroupedCard,
  SectionLabel,
  StatusBar,
} from "./functions";

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
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.44-2.7 5.42-5.27 5.7.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
      </svg>
    ),
    gradient: "linear-gradient(160deg, #4b4b4b, #1c1c1e)",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/greg-mall-he-him-3032771b1/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM.5 8.75h9v14.75h-9V8.75Zm14.75 0h.16v2.03h.05a3.35 3.35 0 0 1 3.02-1.66c3.23 0 3.82 2.13 3.82 4.9v8.48h-4v-7.52c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.97v7.65h-4V8.75h4.33Z" />
      </svg>
    ),
    gradient: "linear-gradient(160deg, #2f8fe0, #0a66c2)",
  },
  {
    label: "Email",
    href: "mailto:gregmall157@gmail.com",
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
    gradient: "linear-gradient(160deg, #5ac8fa, #0a84ff)",
  },
];

const apps = [
  {
    label: "About",
    href: "#about",
    gradient: "linear-gradient(160deg, #ff9f43, #ff6b3d)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <circle cx="12" cy="8" r="3.5" />
        <path d="M4.5 19c1-4 4-6.5 7.5-6.5s6.5 2.5 7.5 6.5" />
      </svg>
    ),
  },
  {
    label: "Projects",
    href: "#projects",
    gradient: "linear-gradient(160deg, #5e5ce6, #0a84ff)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h4.6c.4 0 .8.2 1.1.5L11.6 7H19.5A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-11Z" />
      </svg>
    ),
  },
  {
    label: "Skills",
    href: "#skills",
    gradient: "linear-gradient(160deg, #8e8e93, #636366)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="h-7 w-7"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      </svg>
    ),
  },
  {
    label: "Contact",
    href: "#contact",
    gradient: "linear-gradient(160deg, #34d399, #30d158)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-8Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/gregmall",
    external: true,
    gradient: "linear-gradient(160deg, #4b4b4b, #1c1c1e)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.44-2.7 5.42-5.27 5.7.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/greg-mall-he-him-3032771b1/",
    external: true,
    gradient: "linear-gradient(160deg, #2f8fe0, #0a66c2)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM.5 8.75h9v14.75h-9V8.75Zm14.75 0h.16v2.03h.05a3.35 3.35 0 0 1 3.02-1.66c3.23 0 3.82 2.13 3.82 4.9v8.48h-4v-7.52c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.97v7.65h-4V8.75h4.33Z" />
      </svg>
    ),
  },
  {
    label: "Mail",
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
        className="h-7 w-7"
      >
        <path d="M2 4.5h20v15H2v-15Zm1.7 1.7 8.3 6.5 8.3-6.5M3.7 18.2 9.8 12M20.3 18.2 14.2 12" />
      </svg>
    ),
  },
  {
    label: "Music",
    href: "https://wiredtoburn.com",
    external: true,
    gradient: "linear-gradient(160deg, #ff5f6d, #fc636b)",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7">
        <circle cx="7" cy="18" r="2.4" fill="currentColor" />
        <circle cx="16" cy="16" r="2.4" fill="currentColor" />
        <path
          d="M9.4 18V7.5L18.4 5.8V15.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const dockApps = apps.filter((a) =>
  ["Projects", "Skills", "Contact", "Mail"].includes(a.label)
);

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-[#1c1c1e]">
      <div
        className="relative mx-auto flex min-h-svh w-full flex-col overflow-hidden sm:my-10 sm:min-h-0 sm:w-95 sm:rounded-[3rem] sm:shadow-2xl sm:ring-10 sm:ring-neutral-950"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 20% 0%, #6a5ce8 0%, transparent 55%), radial-gradient(ellipse 90% 70% at 90% 30%, #ff6bcb 0%, transparent 50%), radial-gradient(ellipse 100% 80% at 50% 100%, #0a84ff 0%, transparent 60%), #1a1440",
        }}
      >
        <DynamicIsland className="hidden sm:block" />

        <StatusBar />

        <div className="mx-5 mt-2 flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl">
          <div>
            <p className="text-base font-semibold text-white">Greg Mall</p>
            <p className="text-xs text-white/70">Software Engineer</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-medium text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
            Open to work
          </span>
        </div>

        <div className="mt-6 grid grow grid-cols-4 gap-x-2 gap-y-5 px-5">
          {apps.map((app) => (
            <AppIcon
              key={app.label}
              label={app.label}
              href={app.href}
              gradient={app.gradient}
              external={app.external}
            >
              {app.icon}
            </AppIcon>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
        </div>

        <div className="mx-4 mb-4 mt-3 flex items-center justify-around rounded-4xl border border-white/15 bg-white/10 px-3 py-3 backdrop-blur-xl">
          {dockApps.map((app) => (
            <AppIcon
              key={app.label}
              href={app.href}
              gradient={app.gradient}
              external={app.external}
              size="dock"
            >
              {app.icon}
            </AppIcon>
          ))}
        </div>
      </div>

      <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-8 px-5 py-10">
        <section id="about" className="flex flex-col items-center gap-4 rounded-3xl bg-card px-6 py-8 text-center">
          <div
            className="flex h-20 w-20 items-center justify-center rounded-full text-2xl font-semibold text-white shadow-lg"
            style={{ background: "linear-gradient(160deg, #ff9f43, #ff6b3d)" }}
          >
            GM
          </div>
          <div>
            <h1 className="text-xl font-semibold">Greg Mall</h1>
            <p className="text-sm text-muted">Software Engineer</p>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted">
            I build things for the web. A life long musician and artist. I
            love to make things.
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-background px-3 py-1 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
            Open to new opportunities
          </span>
        </section>

        <section id="projects" className="flex flex-col gap-3">
          <SectionLabel>Projects</SectionLabel>
          <div className="flex flex-col gap-3">
            {projects.map((project) => (
              <div
                key={project.name}
                className="flex flex-col gap-3 rounded-2xl bg-card p-4"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[22%] text-white"
                    style={{ background: project.gradient }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                      <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h4.6c.4 0 .8.2 1.1.5L11.6 7H19.5A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-11Z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">
                      {project.name}
                    </p>
                    <p className="truncate text-xs text-muted">
                      {project.tech.join(" · ")}
                    </p>
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-full bg-border px-4 py-1.5 text-xs font-semibold text-accent"
                  >
                    OPEN
                  </a>
                </div>
                <p className="text-sm leading-6 text-muted">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="flex flex-col gap-3">
          <SectionLabel>Skills</SectionLabel>
          <GroupedCard>
            {skills.map((group) => (
              <div key={group.category} className="flex items-center gap-3 p-4">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white"
                  style={{ background: group.gradient }}
                >
                  <span className="text-xs font-bold">
                    {group.category[0]}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{group.category}</p>
                  <p className="truncate text-xs text-muted">
                    {group.items.join(", ")}
                  </p>
                </div>
                <Chevron />
              </div>
            ))}
          </GroupedCard>
        </section>

        <section id="contact" className="flex flex-col gap-3">
          <SectionLabel>Contact</SectionLabel>
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-card px-6 py-8 text-center">
            <p className="max-w-sm text-sm leading-6 text-muted">
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
                  className="flex flex-col items-center gap-1.5 transition-transform active:scale-95"
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg"
                    style={{ background: social.gradient }}
                  >
                    {social.icon}
                  </div>
                  <span className="text-xs text-muted">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-6 text-center text-xs text-muted">
          Greg Mall. Software Engineer. Version 2026.1
        </footer>
      </main>
    </div>
  );
}
