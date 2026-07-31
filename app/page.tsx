"use client";

import { Link as ScrollLink, Element } from "react-scroll";
import { IndexRow, IssueStamp, Kicker, SkillLine } from "./functions";

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
  { label: "Work", to: "projects" },
  { label: "Skills", to: "skills" },
  { label: "Contact", to: "contact" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="border-b border-border">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 px-6 py-10 text-center">
          <ScrollLink
            to="about"
            smooth
            duration={400}
            offset={-40}
            className="cursor-pointer font-serif text-2xl tracking-[0.2em] text-foreground"
          >
            GREG MALL
          </ScrollLink>
          <nav className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            {navLinks.map((link, i) => (
              <span key={link.to} className="flex items-center gap-3">
                {i > 0 && <span className="text-border">·</span>}
                <ScrollLink
                  to={link.to}
                  smooth
                  duration={400}
                  offset={-40}
                  className="cursor-pointer transition-colors hover:text-accent"
                >
                  {link.label}
                </ScrollLink>
              </span>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        <Element name="about">
          <section className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-16">
            <Kicker>Issue No. 01 — Profile</Kicker>
            <h1 className="font-serif text-5xl leading-[1.05] text-foreground sm:text-6xl">
              Software Engineer,{" "}
              <span className="italic text-accent">occasional</span>{" "}
              musician.
            </h1>
            <p className="drop-cap max-w-2xl text-lg leading-8 text-muted">
              I build things for the web. A life long musician and artist. I
              love to make things. Currently{" "}
              <span className="text-foreground">
                open to new opportunities
              </span>{" "}
              and interesting collaborations.
            </p>
            <div className="flex gap-8 pt-2 text-sm font-semibold uppercase tracking-widest">
              <ScrollLink
                to="projects"
                smooth
                duration={400}
                offset={-40}
                className="cursor-pointer border-b-2 border-accent pb-1 text-foreground"
              >
                View the work
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth
                duration={400}
                offset={-40}
                className="cursor-pointer pb-1 text-muted transition-colors hover:text-foreground"
              >
                Get in touch →
              </ScrollLink>
            </div>
          </section>
        </Element>

        <Element name="projects">
          <section className="mx-auto flex w-full max-w-3xl flex-col gap-2 border-t border-border px-6 py-16">
            <Kicker>Selected Work</Kicker>
            <div className="mt-4 flex flex-col divide-y divide-border">
              {projects.map((project, i) => (
                <IndexRow
                  key={project.name}
                  index={String(i + 1).padStart(2, "0")}
                  title={project.name}
                  meta={project.tech.join(" / ")}
                  description={project.description}
                  href={project.href}
                />
              ))}
            </div>
          </section>
        </Element>

        <Element name="skills">
          <section className="mx-auto flex w-full max-w-3xl flex-col gap-2 border-t border-border px-6 py-16">
            <Kicker>Skills &amp; Tools</Kicker>
            <div className="mt-4 flex flex-col divide-y divide-border">
              {skills.map((group) => (
                <SkillLine
                  key={group.category}
                  category={group.category}
                  items={group.items}
                />
              ))}
            </div>
          </section>
        </Element>

        <Element name="contact">
          <section className="mx-auto flex w-full max-w-3xl flex-col gap-6 border-t border-border px-6 py-16 text-center">
            <Kicker>Get In Touch</Kicker>
            <p className="font-serif text-3xl italic leading-snug text-foreground sm:text-4xl">
              &ldquo;Open to new opportunities and interesting
              projects.&rdquo;
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-semibold uppercase tracking-widest">
              {socials.map((social, i) => (
                <span key={social.label} className="flex items-center gap-3">
                  {i > 0 && <span className="text-border">/</span>}
                  <a
                    href={social.href}
                    target={
                      social.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel="noopener noreferrer"
                    className="text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
                  >
                    {social.label}
                  </a>
                </span>
              ))}
            </div>
          </section>
        </Element>
      </main>

      <footer className="border-t border-border px-6 py-10 text-center text-xs uppercase tracking-widest text-muted">
        Greg Mall — Software Engineer &middot; <IssueStamp />
      </footer>
    </div>
  );
}
