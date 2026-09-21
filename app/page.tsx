import { ContactForm } from "../components/ContactForm";
import {
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Phone
} from "lucide-react";

import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { getPortfolio } from "../services/getPortfolio";

export const dynamic = "force-dynamic";

const socialIcons: Record<string, React.ElementType> = {
  mail: Mail,
  email: Mail,
  gmail: Mail,
  github: FaGithub,
  facebook: FaFacebook,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  x: FaXTwitter,
  instagram: FaInstagram,
  youtube: FaYoutube,
  website: FaGlobe,
};

export default async function Home() {
  const data = await getPortfolio();
  const p = data.profile;

  const thisYear = new Date().getFullYear();

  return (
    <main>
      <section id="home" className="container-page flex min-h-screen items-center pt-16">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[.25em] text-indigo-300">{data.settings.heroBadge || "Welcome to my portfolio"}</p>
          <h1 className="text-5xl font-black tracking-tight sm:text-7xl">Hi, I&apos;m <span className="gradient-text">{p?.name || "Your Name"}</span></h1>
          <p className="mt-5 text-2xl font-semibold text-slate-300">{p?.title || "Developer"}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">{p?.shortBio}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-xl bg-indigo-500 px-5 py-3 font-semibold transition hover:bg-indigo-400">
              {data.settings.heroCta || "Explore my work"}
              <ArrowUpRight className="ml-1 inline h-4 w-4" />
            </a>

            {
              data.resume &&
              <a href={data.resume.fileUrl} target="_blank"
                className="rounded-xl border border-white/15 px-5 py-3 font-semibold hover:bg-white/5">
                <Download className="mr-2 inline h-4 w-4" />View CV
              </a>
            }
          </div>
        </div>
      </section>

      <section id="about" className="section border-t border-white/5">
        <div className="container-page grid gap-10 md:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="text-sm uppercase tracking-widest text-indigo-300">01 / Introduction</p>
            <h2 className="mt-3 text-4xl font-bold">{p?.aboutTitle}</h2>
          </div>
          <p className="text-lg leading-8 text-slate-400">{p?.aboutDescription}</p>
        </div>
      </section>

      <section id="education" className="section">
        <div className="container-page">
          <p className="text-sm uppercase tracking-widest text-indigo-300">02 / Education</p>
          <h2 className="mt-3 text-4xl font-bold">Education</h2>
          <div className="mt-8 grid gap-4">
            {
              data.education.map(e =>
                <article key={e.id} className="glass rounded-2xl p-6">
                  <div className="flex flex-wrap justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold">{e.degree} {e.field && `in ${e.field}`}</h3>
                      <p className="mt-1 text-indigo-300">{e.institution}</p>
                    </div>
                    <p className="text-sm text-slate-500">
                      {e.startDate?.getFullYear()} — {e.endDate?.getFullYear() || "Present"}
                    </p>
                  </div>
                  <p className="mt-4 text-slate-400">{e.description}</p>
                </article>)
            }
          </div>
        </div>
      </section>

      <section id="skills" className="section border-y border-white/5">
        <div className="container-page">
          <p className="text-sm uppercase tracking-widest text-indigo-300">03 / Skills</p>
          <h2 className="mt-3 text-4xl font-bold">Tools I work with</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {
              data.skills.map(s =>
                <div key={s.id} className="glass rounded-xl px-4 py-3">
                  <span className="font-medium">{s.name}</span>
                  {
                    s.category &&
                    <span className="ml-2 text-xs text-slate-500">{s.category}</span>
                  }
                </div>)}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container-page">
          <p className="text-sm uppercase tracking-widest text-indigo-300">04 / Projects</p>
          <h2 className="mt-3 text-4xl font-bold">Selected work</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {
              data.projects.map(x =>
                <article key={x.id} className="glass card-hover rounded-2xl p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold">{x.title}</h3>
                    {
                      x.featured &&
                      <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs text-indigo-300">Featured</span>
                    }
                  </div>
                  <p className="mt-4 min-h-20 text-slate-400">{x.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {
                      x.technologies.map(t =>
                        <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">{t}</span>)
                    }
                  </div>
                  <div className="mt-6 flex gap-3">
                    {
                      x.githubUrl &&
                      <a className="rounded-lg border border-white/10 px-4 py-2 text-sm hover:bg-white/5" href={x.githubUrl}
                        target="_blank">
                        <FaGithub className="mr-2 inline h-4 w-4" />GitHub
                      </a>
                    }
                    {
                      x.liveUrl &&
                      <a className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold hover:bg-indigo-400" href={x.liveUrl}
                        target="_blank">Live Demo
                        <ArrowUpRight className="ml-1 inline h-4 w-4" /></a>
                    }
                  </div>
                </article>
              )
            }
          </div>
        </div>
      </section>

      <section id="publications" className="section border-y border-white/5">
        <div className="container-page">
          <p className="text-sm uppercase tracking-widest text-indigo-300">05 / Publications</p>
          <h2 className="mt-3 text-4xl font-bold">Publications</h2>
          <div className="mt-8 grid gap-4">
            {
              data.publications.length ? data.publications.map(x =>
                <article key={x.id} className="glass rounded-2xl p-6">
                  <h3 className="text-xl font-bold">{x.title}</h3>
                  <p className="mt-2 text-slate-400">{x.description}</p>
                  {
                    x.url &&
                    <a className="mt-4 inline-block text-indigo-300" href={x.url} target="_blank">Read publication →</a>
                  }</article>) :
                <p className="text-slate-500">Publications will appear here.</p>
            }
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-widest text-indigo-300">06 / Contact</p>
            <h2 className="mt-3 text-4xl font-bold">Let&apos;s talk.</h2>
            <p className="mt-4 text-slate-400">Have a project, opportunity or question? Send me a message.</p>
            <div className="mt-7 space-y-3 text-slate-300">
              {
                p?.email &&
                <p><Mail className="mr-3 inline h-5 w-5 text-indigo-300" />{p.email}</p>
              }
              {
                p?.phone &&
                <p><Phone className="mr-3 inline h-5 w-5 text-indigo-300" />{p.phone}</p>
              }
              {
                p?.location &&
                <p><MapPin className="mr-3 inline h-5 w-5 text-indigo-300" />{p.location}</p>
              }
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {
                data.socials.map((s) => {
                  const platform = s.platform?.toLowerCase().trim();

                  const Icon = socialIcons[platform];

                  return (
                    <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm transition hover:bg-white/5">
                      {Icon && <Icon className="h-4 w-4" />}

                      {s.label || s.platform}
                    </a>
                  );
                })}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        <div className="container-page flex flex-row items-center justify-center gap-3">
          <p>
            {data.settings.footerText ||
              `© ${thisYear} ${p?.name || "Your Name"}`}
          </p>

          {
            process.env.PORTFOLIO_GITHUB_LINK && (
              <a
                href={process.env.PORTFOLIO_GITHUB_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-400 transition hover:text-white"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            )
          }
        </div>
      </footer>
    </main>
  );
}
