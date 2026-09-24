"use client";
import { useEffect, useState } from "react";
import { Send, CheckCircle2, CircleX } from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
  const [gmail, setGmail] = useState("");
  const [message, setMessage] = useState("");
  const [gmailError, setGmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [status, setStatus] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [busy, setBusy] = useState(false);

  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const response = await fetch("/api/setting");

        if (!response.ok) {
          toast.error("Failed to load contact texts!");
          return;
        }

        const data = await response.json();

        setSettings(data);
      }
      catch (error) {
        console.error("Failed to load settings:", error);
      }
    };
    loadSettings();
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    if (!gmail || !message) {
      if (!gmail)
        setGmailError("Please let me know who wants to be in touch!");

      if (!message)
        setMessageError("Oops! You forgot to type your actual message!");

      setIsSent(false);
      setStatus("You missed something!");

      setTimeout(() => {
        setStatus("");
      }, 2000);

      return;
    }

    if (message && message.trim().length <= 5) {
      setMessageError("Are you sure you have stated your purpose in just 5 letters?");

      setIsSent(false);
      setStatus("You may wanna recheck!");

      setTimeout(() => {
        setStatus("");
      }, 2000);

      return;
    }

    setBusy(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gmail, message })
      });

      const data = await res.json();

      if (res.ok) {
        setIsSent(true);
        setStatus(data.message);
        setGmail("");
        setMessage("");
        setGmailError("");
        setMessageError("");
      } else {
        setIsSent(false);
        setStatus(data.message || "Something went wrong.");
      }

      setTimeout(() => {
        setIsSent(false);
        setStatus("");
      }, 2000);
    }
    catch {
      setIsSent(false);
      setStatus("Unable to send your message right now.");
    }
    finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="glass rounded-3xl p-5 sm:p-7">
      <div className="mb-7">
        <p className="text-xs uppercase tracking-[.18em] text-cyan-300">{settings?.contactFormHeadingText ?? ""}</p>
        <h3 className="mt-2 font-(--font-display) text-2xl">{settings?.contactFormDescriptionText ?? ""}</h3>
      </div>

      <label className="block text-xs font-medium text-slate-300">Your email</label>
      <input type="email" value={gmail} onChange={e => {
        setGmail(e.target.value);
        setGmailError("");
      }}
        className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/60"
        placeholder="you@example.com" />
      <p className="text-red-400">{gmailError}</p>

      <label className="mt-5 block text-xs font-medium text-slate-300">Message</label>
      <textarea value={message} onChange={e => {
        setMessage(e.target.value);
        setMessageError("");
      }}
        className="mt-2 min-h-40 w-full resize-y rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/60"
        placeholder="Tell me what you're thinking..." />
      <p className="text-red-400">{messageError}</p>

      <button disabled={busy} className="btn-primary mt-5 inline-flex w-full items-center justify-center gap-2 disabled:opacity-50">
        {busy ? "Sending..." : <>Send message <Send size={15} /></>}
      </button>

      {
        status &&
        <p className="mt-4 flex items-start gap-2 text-xs text-slate-300">
          {
            isSent ? <CheckCircle2 size={15} className="mt-0.5 text-cyan-300" /> : <CircleX className="text-red-500" size={15} />
          }{status}
        </p>
      }
    </form>
  );
}
