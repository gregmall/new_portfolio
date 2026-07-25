"use client";

import { useEffect, useState } from "react";

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
  { label: "GitHub", href: "https://github.com/gregmall", icon: "🐙" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/greg-mall-he-him-3032771b1/",
    icon: "💼",
  },
  { label: "Email", href: "mailto:gregmall157@gmail.com", icon: "✉️" },
];

const navLinks = [
  { label: "About", href: "#about", icon: "🏠" },
  { label: "Projects", href: "#projects", icon: "📁" },
  { label: "Skills", href: "#skills", icon: "🛠️" },
  { label: "Contact", href: "#contact", icon: "✉️" },
];

function TitleBarButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="win-raised win-btn flex h-[18px] w-[18px] items-center justify-center text-[10px] font-bold leading-none text-black"
    >
      {children}
    </button>
  );
}

function StartFlag() {
  return (
    <span className="grid h-3 w-3 grid-cols-2 grid-rows-2 gap-[1px]">
      <span className="bg-red-600" />
      <span className="bg-green-600" />
      <span className="bg-blue-600" />
      <span className="bg-yellow-400" />
    </span>
  );
}

function Clock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  return <span>{time ?? "--:--"}</span>;
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 items-start justify-center p-2 pb-14 sm:items-center sm:p-6 sm:pb-16">
        <div className="win-raised w-full max-w-4xl">
          <div className="flex items-center justify-between gap-2 bg-linear-to-r from-titlebar-from to-titlebar-to px-1.5 py-1">
            <div className="flex items-center gap-1.5 text-titlebar-text">
              <span>🖥️</span>
              <span className="text-xs font-bold sm:text-sm">
                Greg Mall - Portfolio.exe
              </span>
            </div>
            <div className="flex gap-1">
              <TitleBarButton>_</TitleBarButton>
              <TitleBarButton>▢</TitleBarButton>
              <TitleBarButton>✕</TitleBarButton>
            </div>
          </div>

          <div className="flex gap-3 border-b border-face-dark bg-face px-2 py-1 text-xs">
            {["File", "Edit", "View", "Favorites", "Help"].map((m) => (
              <span
                key={m}
                className="cursor-default px-1 hover:bg-titlebar-from hover:text-titlebar-text"
              >
                {m}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-1 border-b border-face-dark bg-face p-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="win-raised win-btn flex items-center gap-1.5 px-2 py-1 text-xs"
              >
                <span>{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>

          <div className="win-sunken m-2 flex flex-col gap-10 overflow-hidden bg-white p-4 text-black sm:p-6">
            <section id="about" className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="win-raised flex h-16 w-16 shrink-0 items-center justify-center text-3xl">
                  🧑‍💻
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Greg Mall</h1>
                  <p className="text-sm font-bold text-[#000080]">
                    Software Engineer
                  </p>
                </div>
              </div>
              <div className="win-sunken inline-flex w-fit items-center gap-2 px-2 py-1 text-xs">
                <span className="h-2 w-2 rounded-full bg-green-600" />
                Open to new opportunities
              </div>
              <p className="max-w-xl text-sm leading-6">
                I build things for the web. A life long musician and artist. I
                love to make things.
              </p>
              <div className="flex gap-3 pt-1 text-xs font-bold">
                <a
                  href="#projects"
                  className="win-raised win-btn px-4 py-1.5"
                >
                  View Projects
                </a>
                <a href="#contact" className="win-raised win-btn px-4 py-1.5">
                  Get in touch
                </a>
              </div>
            </section>

            <section id="projects" className="flex flex-col gap-3">
              <h2 className="flex items-center gap-2 text-sm font-bold">
                📁 Projects
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <a
                    key={project.name}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="win-raised flex h-full flex-col">
                      <div className="flex items-center justify-between gap-1 bg-linear-to-r from-titlebar-from to-titlebar-to px-1.5 py-1 text-titlebar-text">
                        <span className="flex min-w-0 items-center gap-1 truncate text-xs font-bold">
                          <span>📄</span>
                          <span className="truncate">{project.name}</span>
                        </span>
                        <span className="win-raised flex h-[14px] w-[14px] shrink-0 items-center justify-center text-[9px] font-bold leading-none text-black">
                          ✕
                        </span>
                      </div>
                      <div className="win-sunken m-1.5 flex flex-1 flex-col gap-2 bg-white p-2.5 text-xs">
                        <p className="leading-5">{project.description}</p>
                        <ul className="mt-auto flex flex-wrap gap-1 pt-2">
                          {project.tech.map((tech) => (
                            <li
                              key={tech}
                              className="win-raised px-1.5 py-0.5 text-[10px]"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            <section id="skills" className="flex flex-col gap-3">
              <h2 className="flex items-center gap-2 text-sm font-bold">
                🛠️ Skills
              </h2>
              <div className="win-sunken flex flex-col gap-4 bg-white p-3">
                {skills.map((group) => (
                  <div key={group.category} className="flex flex-col gap-1.5">
                    <h3 className="flex items-center gap-1.5 text-xs font-bold text-[#000080]">
                      📂 {group.category}
                    </h3>
                    <ul className="flex flex-wrap gap-1.5 pl-1">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="win-raised px-2 py-1 text-xs"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section id="contact" className="flex flex-col">
              <div className="win-raised">
                <div className="flex items-center gap-1.5 bg-linear-to-r from-titlebar-from to-titlebar-to px-1.5 py-1 text-titlebar-text">
                  <span>✉️</span>
                  <span className="text-xs font-bold">Contact Properties</span>
                </div>
                <div className="flex flex-col items-center gap-4 p-6 text-center">
                  <p className="max-w-xl text-sm leading-6">
                    Open to new opportunities and interesting projects. Reach
                    out through any of the links below.
                  </p>
                  <ul className="flex gap-3">
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
                          title={social.label}
                          className="win-raised win-btn flex h-11 w-11 items-center justify-center text-lg"
                        >
                          {social.icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="win-sunken mx-2 mb-2 flex items-center justify-between px-2 py-1 text-[11px]">
            <span>Greg Mall, human. 2026</span>
            <span>gregmall157@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="win-raised fixed inset-x-0 bottom-0 z-10 flex h-10 items-center gap-2 px-1.5">
        <button
          type="button"
          className="win-raised win-btn flex items-center gap-1.5 px-2 py-1.5 text-sm font-bold"
        >
          <StartFlag />
          Start
        </button>
        <span className="win-sunken h-6 w-px" />
        <button
          type="button"
          className="win-sunken flex items-center gap-1.5 px-2 py-1 text-xs"
        >
          🖥️ Greg Mall - Portfolio
        </button>
        <span className="ml-auto" />
        <span className="win-sunken flex items-center px-2 py-1 text-xs">
          <Clock />
        </span>
      </div>
    </div>
  );
}
