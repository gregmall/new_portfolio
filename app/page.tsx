"use client";

import { Clock, DesktopIcon, StartFlag, WinWindow } from "./functions";

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

function MyComputerIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-full w-full">
      <rect x="4" y="4" width="24" height="16" rx="1" fill="#c0c0c0" stroke="#000" strokeWidth="1" />
      <rect x="6" y="6" width="20" height="12" fill="#000080" />
      <rect x="12" y="22" width="8" height="3" fill="#808080" />
      <rect x="9" y="25" width="14" height="2" fill="#c0c0c0" stroke="#000" strokeWidth="0.5" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-full w-full">
      <path
        d="M3 9a2 2 0 0 1 2-2h7l3 3h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"
        fill="#ffd54f"
        stroke="#000"
        strokeWidth="1"
      />
      <path
        d="M3 12h26v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V12Z"
        fill="#ffca28"
        stroke="#000"
        strokeWidth="1"
      />
    </svg>
  );
}

function ControlPanelIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-full w-full">
      <rect x="4" y="6" width="24" height="20" rx="1" fill="#c0c0c0" stroke="#000" strokeWidth="1" />
      <circle cx="12" cy="16" r="5" fill="#e0e0e0" stroke="#000" strokeWidth="1" />
      <circle cx="12" cy="16" r="1.5" fill="#000" />
      <rect x="20" y="10" width="5" height="3" fill="#808080" />
      <rect x="20" y="15" width="5" height="3" fill="#808080" />
      <rect x="20" y="20" width="5" height="3" fill="#808080" />
    </svg>
  );
}

function InboxIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-full w-full">
      <rect x="4" y="8" width="24" height="17" fill="#fff" stroke="#000" strokeWidth="1" />
      <path d="M4 8l12 9 12-9" fill="none" stroke="#000" strokeWidth="1" />
      <rect x="4" y="5" width="10" height="3" fill="#c62828" />
    </svg>
  );
}

function RecycleBinIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-full w-full">
      <path
        d="M9 11h14l-1.5 15a2 2 0 0 1-2 1.8h-7a2 2 0 0 1-2-1.8L9 11Z"
        fill="#e0e0e0"
        stroke="#000"
        strokeWidth="1"
      />
      <rect x="7" y="8" width="18" height="3" fill="#9e9e9e" stroke="#000" strokeWidth="1" />
      <rect x="12" y="5" width="8" height="3" fill="#9e9e9e" stroke="#000" strokeWidth="1" />
      <path d="M13 14v10M16 14v10M19 14v10" stroke="#757575" strokeWidth="1" />
    </svg>
  );
}

const taskbarWindows = ["About", "Projects", "Skills", "Contact"];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="relative flex min-h-svh flex-col p-4 pb-14">
        <div className="flex flex-1 flex-col flex-wrap content-start gap-1">
          <DesktopIcon label="My Computer" href="#about">
            <MyComputerIcon />
          </DesktopIcon>
          <DesktopIcon label="Projects" href="#projects">
            <FolderIcon />
          </DesktopIcon>
          <DesktopIcon label="Control Panel" href="#skills">
            <ControlPanelIcon />
          </DesktopIcon>
          <DesktopIcon label="Inbox" href="#contact">
            <InboxIcon />
          </DesktopIcon>
          <DesktopIcon label="Recycle Bin">
            <RecycleBinIcon />
          </DesktopIcon>
        </div>
      </div>

      <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 pb-10">
        <WinWindow title="About Me" icon="🖥️" id="about">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="win-raised flex h-16 w-16 shrink-0 items-center justify-center text-3xl">
              🧑‍💻
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <h1 className="text-lg font-bold">Greg Mall</h1>
                <p className="text-sm font-bold text-[#000080]">Software Engineer</p>
              </div>
              <p className="text-sm leading-6">
                I build things for the web. A life long musician and artist. I
                love to make things.
              </p>
              <div className="win-sunken inline-flex w-fit items-center gap-2 px-2 py-1 text-xs">
                <span className="h-2 w-2 rounded-full bg-green-600" />
                Open to new opportunities
              </div>
            </div>
          </div>
        </WinWindow>

        <div id="projects" className="flex scroll-mt-4 flex-col gap-3 ">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 ">
            {projects.map((project) => (
              <WinWindow key={project.name} title={project.name} icon="📄" bodyClassName="flex h-auto flex-col gap-2 text-xs" >
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="text-[#0000ee] underline">
                  {project.href.replace("https://", "")}
                </a>
                <p className="leading-5">{project.description}</p>
                <ul className="mt-auto flex flex-wrap gap-1 pt-2">
                  {project.tech.map((tech) => (
                    <li key={tech} className="win-raised px-1.5 py-0.5 text-[10px]">
                      {tech}
                    </li>
                  ))}
                </ul>
              </WinWindow>
            ))}
          </div>
        </div>

        <WinWindow title="Control Panel" icon="⚙️" id="skills" className="mt-6">
          <div className="flex flex-col gap-4">
            {skills.map((group) => (
              <div key={group.category} className="flex flex-col gap-1.5">
                <h3 className="text-xs font-bold text-[#000080]">📂 {group.category}</h3>
                <ul className="flex flex-wrap gap-1.5 pl-1">
                  {group.items.map((item) => (
                    <li key={item} className="win-raised px-2 py-1 text-xs">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </WinWindow>

        <WinWindow title="Inbox - Contact" icon="✉️" id="contact">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="max-w-xl text-sm leading-6">
              Open to new opportunities and interesting projects. Reach out
              through any of the links below.
            </p>
            <ul className="flex gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    title={social.label}
                    className="win-raised win-btn flex h-11 w-11 items-center justify-center text-lg"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                      {social.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </WinWindow>

        <div className="win-sunken mx-auto flex w-full items-center justify-between px-2 py-1 text-[11px]">
          <span>Greg Mall, human. 2026</span>
          <span>gregmall157@gmail.com</span>
        </div>
      </main>

      <div className="win-raised fixed inset-x-0 bottom-0 z-10 flex h-10 items-center gap-2 px-1.5">
        <button
          type="button"
          className="win-raised win-btn flex items-center gap-1.5 px-2 py-1.5 text-sm font-bold"
        >
          <StartFlag />
          Start
        </button>
        <span className="win-sunken h-6 w-px" />
        {taskbarWindows.map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            className="win-sunken hidden items-center px-3 py-1 text-xs sm:flex"
          >
            {label}
          </a>
        ))}
        <span className="ml-auto" />
        <span className="win-sunken flex items-center px-2 py-1 text-xs">
          <Clock />
        </span>
      </div>
    </div>
  );
}
