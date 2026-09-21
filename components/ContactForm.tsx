"use client";
import { useState } from "react";

export function ContactForm() {
  const [gmail, setGmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setStatus("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ gmail, message })
    });

    const data = await res.json();

    setStatus(data.message || "Something went wrong.");

    if (res.ok) {
      setGmail("");
      setMessage("");
    }

    setBusy(false);
  }

  return (
    <form onSubmit={submit} className="glass rounded-2xl p-6">

      <label className="block text-sm font-medium text-slate-300">Gmail</label>
      <input required type="email" value={gmail}
        onChange={e => setGmail(e.target.value)}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-indigo-400"
        placeholder="you@gmail.com" />

      <label className="mt-5 block text-sm font-medium text-slate-300">Message</label>
      <textarea required minLength={5} value={message}
        onChange={e => setMessage(e.target.value)}
        className="mt-2 min-h-40 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-indigo-400"
        placeholder="Write your message..." />

      <button disabled={busy}
        className="mt-5 w-full rounded-xl bg-indigo-500 py-3 font-semibold disabled:opacity-50">
        {busy ? "Sending..." : "Send message"}</button>

      {status && <p className="mt-3 text-sm text-slate-400">{status}</p>}

    </form>
  )
}
