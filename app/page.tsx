import { ContactForm } from "../components/ContactForm";
import { ArrowDown, ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { getPortfolio } from "../services/getPortfolio";

export const revalidate = 3600;

const socialIcons: Record<string, React.ElementType> = {
  mail: Mail, email: Mail, gmail: Mail, github: FaGithub, facebook: FaFacebook,
  linkedin: FaLinkedin, twitter: FaTwitter, x: FaXTwitter, instagram: FaInstagram,
  youtube: FaYoutube, website: FaGlobe,
};

const categoryLabel: Record<string, string> = {
  LANGUAGE: "Programming Languages",
  WEB: "Web Technologies",
  SOFTWARE: "Software Frameworks",
  DATABASE: "Database Systems",
  TOOL: "Tools & Platforms",
};

function yearRange(start: Date | null | undefined, end: Date | null | undefined) {
  const from = start ? new Date(start).getFullYear() : "";

  const to = end ? new Date(end).getFullYear() : "Present";

  return `${from} — ${to}`;
}

export default async function Home() {
  const data = await getPortfolio();

  const p = data.profile;

  const skillsByCategory = data.skills.reduce((acc: Record<string, typeof data.skills>, s) => {
    (acc[s.category] ||= []).push(s);
    return acc;
  }, {});

  const projects = [...data.projects].sort((a, b) => (a.sortOrder - b.sortOrder) || Number(b.featured) - Number(a.featured));

  const skillCategories = Object.entries(skillsByCategory) as [string, typeof data.skills][];

  return (
    <main>
      <section id="home" className="container-page flex min-h-screen items-center py-28">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.35fr_.65fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/5 px-3 py-1 text-xs text-cyan-200">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />
              {p?.availability || "Available for opportunities"}
            </div>
            <p className="dir-label">personal / portfolio</p>
            <h1 className="display max-w-4xl text-5xl font-medium leading-[.98] sm:text-7xl lg:text-8xl">
              {p?.name || "Your Name"}
              <span className="blink-cursor" />
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
              {p?.title || "Software Engineer"}
            </p>
            {
              p?.shortBio && <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">{p.shortBio}</p>
            }

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary inline-flex items-center gap-2">{data.settings.heroViewProjectsText ?? ""}
                <ArrowDown size={16} />
              </a>
              {
                data.resume?.map((r) => (
                  <a key={r.id} href={r.fileUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex items-center gap-2 hover:animate-rotate-border" >
                    <Download size={16} />
                    {r.title || "Resume"}
                  </a>
                ))
              }
            </div>
            
            <div className="mt-12 flex flex-wrap gap-3 text-xs text-slate-500">
              <span className="rounded-full border border-white/8 px-3 py-1.5">{data.skills.length} skill{data.skills.length > 1 ? "s" : ""}</span>
              <span className="rounded-full border border-white/8 px-3 py-1.5">{projects.length} project{projects.length > 1 ? "s" : ""}</span>
              <span className="rounded-full border border-white/8 px-3 py-1.5">{data.experience.length} experience{data.experience.length > 1 ? "s" : ""}</span>
              <span className="rounded-full border border-white/8 px-3 py-1.5">{data.publications.length} publication{data.publications.length > 1 ? "s" : ""}</span>
            </div>
          </div>

          {
            p?.imageUrl &&
            <>
              <div className="glass relative mx-auto w-full max-w-sm rounded-4xl p-3">
                <div className="absolute -inset-5 -z-10 rounded-4xl bg-linear-to-br from-violet-500/70 to-cyan-300/70 blur-3xl bg-conic/[from_var(--border-angle)] animate-rotate-border" />
                <img src={p.imageUrl} alt={p.name} className="aspect-4/5 w-full rounded-3xl object-cover" />
              </div>
            </>
          }
        </div>
      </section>

      <section id="about" className="section">
        <div className="container-page grid gap-8 lg:grid-cols-[.35fr_1fr]">
          <div>
            <p className="dir-label">about</p>
            <h2 className="display text-4xl sm:text-5xl">{p?.aboutTitle || "A little about me"}</h2>
          </div>
          <div className="glass rounded-3xl p-6 sm:p-8">
            <p className="max-w-3xl text-sm leading-8 text-slate-300 sm:text-base">{p?.aboutDescription || p?.shortBio}</p>
          </div>
        </div>
      </section>

      {
        data.education.length > 0 &&
        <section id="education" className="section">
          <div className="container-page">
            <p className="dir-label">education</p>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <h2 className="display text-4xl sm:text-5xl">{data.settings.educationHeadingText ?? ""}</h2>
              <p className="max-w-sm text-xs leading-6 text-slate-500">{data.settings.educationDescriptionText ?? ""}</p>
            </div>
            <div className="timeline space-y-8">
              {
                data.education.map(e =>
                  <article key={e.id} className="timeline-item">
                    <span className="timeline-dot" />
                    <div className="glass glass-hover rounded-3xl p-5 sm:p-7">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex gap-4">
                          {
                            e.imageUrl &&
                            <img src={e.imageUrl} alt="" className="hidden h-fit w-60 rounded-2xl object-cover sm:block" />
                          }
                          <div>
                            <p className="timeline-period">{yearRange(e.startDate, e.endDate)}</p>
                            <h3 className="mt-1 text-xl font-semibold">{e.degree}{e.field ? ` in ${e.field}` : ""}{e.major ? ` (Major in ${e.major})` : ""}</h3>
                            <p className="mt-1 text-sm text-violet-200">{e.institution}</p>
                          </div>
                        </div>
                        {
                          e.gpa &&
                          <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300 w-fit max-w-20 whitespace-nowrap">GPA {String(e.gpa)}</span>
                        }
                      </div>
                      {
                        e.description &&
                        <p className="mt-5 text-sm leading-7 text-slate-400">{e.description}</p>
                      }
                    </div>
                  </article>)}
            </div>
          </div>
        </section>
      }

      {
        skillCategories.length > 0 &&
        <section id="skills" className="section">
          <div className="container-page">
            <p className="dir-label">skills</p>
            <h2 className="display mb-10 text-4xl sm:text-5xl">{data.settings.skillHeadingText ?? ""}</h2>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {
                skillCategories.map(([category, items]) =>
                  <div key={category} className="glass glass-hover rounded-3xl p-6">
                    <p className="text-xs uppercase tracking-[.15em] text-cyan-300">{categoryLabel[category] || category}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {
                        items.map(s => <span key={s.id} className="tag">{s.name}{s.level ? ` · ${s.level}%` : ""}</span>)
                      }
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </section>
      }

      {
        projects.length > 0 &&
        <section id="projects" className="section">
          <div className="container-page">
            <p className="dir-label">selected projects</p>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <h2 className="display text-4xl sm:text-5xl">{data.settings.projectHeadingText ?? ""}</h2>
              <span className="text-xs text-slate-500">{data.settings.projectDescriptionText ?? ""}</span>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {
                projects.map(x =>
                  <article key={x.id} className="glass glass-hover overflow-hidden rounded-3xl p-3">
                    {
                      x.imageUrl ?
                        <img src={x.imageUrl} alt={x.title} className="project-image" /> :
                        <div className="project-placeholder">
                          <span className="text-4xl font-black text-white/10">
                            {x.title}
                          </span>
                        </div>
                    }
                    <div className="p-4 sm:p-5">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-xl font-semibold">{x.title}</h3>
                        {
                          x.featured &&
                          <span className="rounded-full bg-violet-500/10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-violet-200">Featured</span>
                        }
                      </div>
                      {
                        x.description &&
                        <p className="mt-3 text-sm leading-7 text-slate-400">{x.description}</p>
                      }
                      {
                        x.technologies?.length > 0 &&
                        <div className="mt-4 flex flex-wrap gap-2">{x.technologies.map(t =>
                          <span key={t} className="tag">{t}</span>)
                        }
                        </div>
                      }
                      <div className="mt-6 flex gap-2">
                        {
                          x.githubUrl &&
                          <a href={x.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex items-center gap-2 px-4! py-2! text-xs">
                            <FaGithub /> Source
                          </a>}
                        {
                          x.liveUrl &&
                          <a href={x.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 px-4! py-2! text-xs">Live demo
                            <ArrowUpRight size={14} />
                          </a>
                        }
                      </div>
                    </div>
                  </article>
                )
              }
            </div>
          </div>
        </section>
      }

      {
        data.experience.length > 0 &&
        <section id="experience" className="section">
          <div className="container-page">
            <p className="dir-label">experience</p>
            <h2 className="display mb-10 text-4xl sm:text-5xl">{data.settings.experienceHeadingText ?? ""}</h2>
            <div className="timeline space-y-8">
              {data.experience.map(x => <article key={x.id} className="timeline-item">
                <span className="timeline-dot" />
                <div className="glass glass-hover rounded-3xl p-5 sm:p-7">
                  <p className="timeline-period">{yearRange(x.startDate, x.endDate)}</p>
                  <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold">{x.role}</h3>
                    <span className="text-sm text-violet-200">{x.company}</span>
                  </div>
                  {x.task && <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">{x.task}</p>}
                </div>
              </article>)}
            </div>
          </div>
        </section>
      }

      {
        data.publications.length > 0 &&
        <section id="publications" className="section">
          <div className="container-page">
            <p className="dir-label">writing</p>
            <h2 className="display mb-10 text-4xl sm:text-5xl">{data.settings.publicationHeadingText ?? ""}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {
                data.publications.map(x =>
                  <article key={x.id} className="glass glass-hover rounded-3xl p-6">
                    {
                      x.imageUrl ?
                        <img src={x.imageUrl} alt={x.title} className="publication-image mb-6 rounded-xl" /> :
                        <div className="publication-placeholder">
                          <span className="text-4xl font-black text-white/10">
                            {x.title}
                          </span>
                        </div>
                    }
                    <div className="flex justify-between gap-3">
                      <h3 className="text-lg font-semibold">{x.title}</h3>
                      <span className="text-xs text-cyan-200">{x.status === "ONGOING" ? "Ongoing" : "Completed"}</span>
                    </div>
                    {
                      x.publisher &&
                      <p className="mt-2 text-xs text-violet-200">{x.publisher}</p>
                    }
                    {
                      x.description &&
                      <p className="mt-4 text-sm leading-7 text-slate-400">{x.description}</p>
                    }
                    {
                      x.url &&
                      <a href={x.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1 text-xs text-cyan-200">Read publication
                        <ArrowUpRight size={14} />
                      </a>
                    }
                  </article>
                )
              }
            </div>
          </div>
        </section>
      }

      <section id="contact" className="section">
        <div className="container-page grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="dir-label">contact</p>
            <h2 className="display text-4xl sm:text-5xl">{data.settings.contactHeadingText ?? ""}</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">{data.settings.contactDescriptionText ?? ""}</p>
            <div className="mt-8 space-y-3 text-sm text-slate-300">
              {p?.email && <p className="flex items-center gap-3"><Mail size={16} className="text-cyan-300" />{p.email}</p>}
              {p?.phone && <p className="flex items-center gap-3"><Phone size={16} className="text-cyan-300" />{p.phone}</p>}
              {p?.location && <p className="flex items-center gap-3"><MapPin size={16} className="text-cyan-300" />{p.location}</p>}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {data.socials.map(s => { const Icon = socialIcons[s.platform?.toLowerCase().trim()]; return <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex items-center gap-2 px-3! py-2! text-xs">{Icon && <Icon size={14} />} {s.platform || s.label}</a>; })}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="container-page flex flex-wrap justify-center gap-x-10 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {p?.name || "Your Name"}</p>
          {
            process.env.PORTFOLIO_GITHUB_LINK &&
            <a href={process.env.PORTFOLIO_GITHUB_LINK} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white">
              <FaGithub size={17} />
            </a>
          }
        </div>
      </footer>
    </main>
  );
}
