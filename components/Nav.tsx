"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["Home", "#home", "home"],
  ["About", "#about", "profile"],
  ["Education", "#education", "education"],
  ["Skills", "#skills", "skills"],
  ["Projects", "#projects", "projects"],
  ["Experience", "#experience", "experience"],
  ["Publications", "#publications", "publications"],
  ["Contact", "#contact", "contact"],
];

type NavData = {
  profile: {
    name: string;
  } | null;

  education: boolean;
  skills: boolean;
  projects: boolean;
  experience: boolean;
  publications: boolean;
};

export function Nav({ data }: { data: NavData }) {
  const [open, setOpen] = useState(false);

  const initials = (data?.profile?.name || "").split(" ").map((x: string) => x[0]).slice(0, 10).join("").toUpperCase();

  const shouldShowLink = (key: string) => {
    if (key === "home") {
      return true;
    }

    if (key === "contact") {
      return true;
    }

    if (key === "profile") {
      return !!data.profile;
    }

    return !!data[key as keyof NavData];
  };

  return (
    <header className="fixed top-0 z-50 w-full px-3 pt-3">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl px-4 sm:px-5 bg-black/40 border-violet-400/50 border backdrop-blur-md">
        <Link href="#home" className="flex items-center gap-2.5 font-semibold" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/10 text-xs text-cyan-200 hover:scale-110 transition">{initials}</span>
          <span className="hidden sm:inline hover:scale-105 transition">{(data?.profile?.name || process.env.USER_NAME!) + " Portfolio"}</span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {
            links.map(([label, href, key]) => {
              if (!shouldShowLink(key))
                return null;

              return (
                <Link key={href} href={href}
                  className="rounded-xl px-3 py-2 text-xs text-slate-300 transition hover:bg-white/7 hover:text-white hover:scale-110" >
                  {label}
                </Link>
              );
            })
          }

        </div>

        <Link href="#contact"
          className="hidden items-center gap-1 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1.5 text-xs text-violet-200 sm:flex hover:bg-violet-500/20 hover:text-violet-100 hover:scale-110 transition-all">
          Let&apos;s talk <ArrowUpRight size={14} />
        </Link>

        <button className="text-slate-200 md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {
            open ? <X size={20} /> : <Menu size={20} />
          }
        </button>

      </nav>
      {
        open &&
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl p-2 md:hidden bg-black/40 border-violet-400/50 border backdrop-blur-md">
          {
            links.map(([label, href]) =>
              <Link key={href} href={href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm text-slate-200 hover:bg-white/7 transition">{label}
              </Link>
            )
          }
        </div>
      }
    </header>
  );
}
