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

export function Nav() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/profile", {
      cache: "no-store"
    })
      .then(r => r.json())
      .then(setData)
      .catch(() => { });
  }, []);

  const initials = (data?.profile?.name || "").split(" ").map((x: string) => x[0]).slice(0, 10).join("").toUpperCase();

  const shouldShowLink = (key: string) => {
    if (!data)
      return false;

    if (key === "home")
      return true;
    
    if (key === "contact")
      return true;

    const value = data[key];

    if (key === "profile")
      return !!value;

    return Array.isArray(value) && value.length > 0;
  };

  return (
    <header className="fixed top-0 z-50 w-full px-3 pt-3">
      <nav className="glass mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl px-4 sm:px-5">
        <Link href="#home" className="flex items-center gap-2.5 font-semibold" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/10 text-xs text-cyan-200">{initials}</span>
          <span className="hidden sm:inline">{(data?.profile?.name || process.env.USER_NAME!) + " Portfolio"}</span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {
            links.map(([label, href, key]) => {
              if (!shouldShowLink(key))
                return null;

              return (
                <Link key={href} href={href}
                  className="rounded-xl px-3 py-2 text-xs text-slate-300 transition hover:bg-white/7 hover:text-white" >
                  {label}
                </Link>
              );
            })
          }
        </div>
        <Link href="#contact" className="hidden items-center gap-1 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1.5 text-xs text-violet-200 sm:flex">
          Let&apos;s talk <ArrowUpRight size={14} />
        </Link>
        <button className="text-slate-200 md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && <div className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-2 md:hidden">
        {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm text-slate-200 hover:bg-white/7">{label}</Link>)}
      </div>}
    </header>
  );
}
