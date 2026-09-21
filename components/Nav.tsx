"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["Home", "#home"], ["About", "#about"], ["Education", "#education"],
  ["Skills", "#skills"], ["Projects", "#projects"], ["Publications", "#publications"],
  ["Contact", "#contact"]
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function loadPortfolio() {
      const response = await fetch("/api/profile");
      const result = await response.json();

      setData(result);
    }

    loadPortfolio();
  }, []);

  if (!data)
    return null;

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#070a12]/80 backdrop-blur-xl">

      <nav className="container-page flex h-16 items-center justify-between">

        <Link href="#home" className="text-xl font-bold tracking-tight">
          <span className="gradient-text">{data?.profile?.name || "User name"} Portfolio</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) =>
            <Link key={href} href={href} className="text-sm text-slate-300 transition hover:text-white">{label}</Link>)}
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </nav>

      {
        open &&
        <div className="border-t border-white/10 bg-[#070a12] p-4 md:hidden">{
          links.map(([label, href]) =>
            <Link onClick={() => setOpen(false)} key={href} href={href} className="block py-3 text-slate-200">{label}</Link>)}
        </div>
      }

    </header>
  );
}
