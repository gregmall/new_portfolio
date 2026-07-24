const projects = [
  {
    name: "Wired To Burn",
    description: "This is a webstie for my band where we can post our latest music, post updates and upcoming shows and connect with fans and other bands.",
    tech: ["Next.js", "Tailwind", "Firebase"],
    href: "https://wiredtoburn.com",
  },
  {
    name: "E-Commerce Website",
    description: "This is an e-commerce website I created for my glass art. It utilizes Firebase for auth and as a backend service and database. It integrates Stripe API to take payments. ",
    tech: ["React", "Node.js", "Firebase"],
    href: "https://synthesisglass.com",
  },
  {
    name: "KeeperAI",
    description: "I was part of a team that build an app that showcases soft skills in a work environment, graphically showcasing a personality determined by a series of question answered with images and short statements.  We also created a social media component and affinity groups. ",
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
  { label: "LinkedIn", href: "https://www.linkedin.com/in/greg-mall-he-him-3032771b1/" },
  { label: "Email", href: "mailto:gregmall157@gmail.com" },
];

const navLinks = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4 text-sm">
          <a href="#" className="text-accent">
            ~/greg-mall
          </a>
          <ul className="flex gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-muted transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-24 px-6 py-16">
        <section id="about" className="flex flex-col gap-4">
          <p className="text-accent">
            <span className="text-muted">$</span> whoami
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Greg Mall
            <span className="cursor-blink text-accent">_</span>
          </h1>
          <p className="text-lg text-muted">Software Engineer</p>
          <p className="max-w-xl leading-7 text-foreground/80">
            I build things for the web. A life long musician and artist. I love to make things 
          </p>
        </section>

        <section id="projects" className="flex flex-col gap-6">
          <h2 className="text-accent">
            <span className="text-muted">$</span> ls ./projects
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.href} target="blank_"
                className="flex flex-col gap-3 rounded border border-border p-5 transition-colors hover:border-accent"
              >
                <h3 className="font-semibold text-foreground">{project.name}</h3>
                <p className="text-sm leading-6 text-muted">{project.description}</p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded border border-border px-2 py-0.5 text-xs text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </section>

        <section id="skills" className="flex flex-col gap-6">
          <h2 className="text-accent">
            <span className="text-muted">$</span> cat ./skills.json
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.category} className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-foreground">{group.category}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded border border-border px-2 py-0.5 text-xs text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="flex flex-col gap-4">
          <h2 className="text-accent">
            <span className="text-muted">$</span> contact --me
          </h2>
          <p className="max-w-xl leading-7 text-foreground/80">
            Open to new opportunities and interesting projects. Reach out
            through any of the links below.
          </p>
          <ul className="flex gap-5 text-sm">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href} target="blank_"
                  className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-6 text-center text-xs text-muted">
        Greg Mall, human.  2026
      </footer>
    </div>
  );
}
