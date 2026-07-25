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
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const chipColors = ["bg-accent text-black", "bg-accent-2 text-white", "bg-background"];

function Box({
  children,
  className = "",
  press = false,
}: {
  children: React.ReactNode;
  className?: string;
  press?: boolean;
}) {
  return (
    <div
      className={`brutal-shadow border-4 border-foreground ${press ? "brutal-press" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-10 border-b-4 border-foreground bg-background">
        <nav className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-black uppercase tracking-tight">
            Greg Mall
          </a>
          <ul className="flex gap-3 text-sm font-bold uppercase">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="brutal-shadow brutal-press inline-block border-2 border-foreground bg-background px-3 py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-24 px-6 py-20">
        <section id="about" className="flex flex-col items-start gap-6">
          <span className="brutal-shadow inline-block border-4 border-foreground bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-black">
            Open to new opportunities
          </span>
          <h1 className="text-6xl font-black uppercase leading-[0.9] tracking-tight sm:text-8xl">
            Greg
            <br />
            Mall
          </h1>
          <p className="inline-block bg-accent-2 px-2 py-1 text-xl font-bold text-white">
            Software Engineer
          </p>
          <p className="max-w-xl text-lg leading-7 text-muted">
            I build things for the web. A life long musician and artist. I
            love to make things.
          </p>
          <div className="flex gap-4 pt-2 text-sm font-bold uppercase">
            <a href="#projects">
              <Box press className="bg-foreground px-6 py-3 text-background">
                View Projects
              </Box>
            </a>
            <a href="#contact">
              <Box press className="bg-background px-6 py-3">
                Get in touch
              </Box>
            </a>
          </div>
        </section>

        <section id="projects" className="flex flex-col gap-8">
          <h2 className="inline-block w-fit border-4 border-foreground bg-foreground px-4 py-2 text-2xl font-black uppercase tracking-tight text-background">
            Projects
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <a key={project.name} href={project.href} target="_blank" rel="noopener noreferrer">
                <Box press className="flex h-full flex-col gap-3 bg-background p-6">
                  <h3 className="flex items-start justify-between gap-2 text-lg font-black uppercase">
                    {project.name}
                    <span aria-hidden className="text-accent-2">
                      &#8599;
                    </span>
                  </h3>
                  <p className="text-sm leading-6 text-muted">
                    {project.description}
                  </p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-2 font-mono text-xs">
                    {project.tech.map((tech, i) => (
                      <li
                        key={tech}
                        className={`border-2 border-foreground px-2 py-1 ${chipColors[i % chipColors.length]}`}
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </Box>
              </a>
            ))}
          </div>
        </section>

        <section id="skills" className="flex flex-col gap-8">
          <h2 className="inline-block w-fit border-4 border-foreground bg-foreground px-4 py-2 text-2xl font-black uppercase tracking-tight text-background">
            Skills
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((group, i) => (
              <Box key={group.category} className="flex flex-col gap-3 bg-background p-6">
                <h3
                  className={`inline-block w-fit border-2 border-foreground px-2 py-1 text-xs font-bold uppercase tracking-wide ${chipColors[i % chipColors.length]}`}
                >
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-2 border-foreground px-3 py-1 font-mono text-xs"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Box>
            ))}
          </div>
        </section>

        <section id="contact" className="flex flex-col items-center gap-6 text-center">
          <Box className="flex w-full flex-col items-center gap-6 bg-accent p-10">
            <h2 className="text-3xl font-black uppercase tracking-tight text-black sm:text-4xl">
              Let&apos;s work together
            </h2>
            <p className="max-w-xl text-lg leading-7 text-black">
              Open to new opportunities and interesting projects. Reach out
              through any of the links below.
            </p>
            <ul className="flex gap-4">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={
                      social.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Box
                      press
                      className="flex h-12 w-12 items-center justify-center bg-background"
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
                    </Box>
                  </a>
                </li>
              ))}
            </ul>
          </Box>
        </section>
      </main>

      <footer className="border-t-4 border-foreground px-6 py-8 text-center text-xs font-bold uppercase tracking-wide text-muted">
        Greg Mall, human. 2026
      </footer>
    </div>
  );
}
