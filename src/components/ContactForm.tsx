"use client";

import { FormEvent, useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

type Status = {
  tone: "idle" | "success" | "error";
  message: string;
};

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({
    tone: "idle",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "Website enquiry").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus({
        tone: "error",
        message: "Please add your name, email, and message before sending.",
      });
      return;
    }

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const mailto = `mailto:info@hiramaa.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus({
      tone: "success",
      message: "Your email app is opening with the message ready to review.",
    });
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid xl:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
            Your Name <span className="text-emerald-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white hover:border-slate-300 focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-[border-color,box-shadow] duration-160 ease-[cubic-bezier(0.23,1,0.32,1)] text-slate-900 placeholder:text-slate-400 text-sm"
            placeholder="John Doe"
            autoComplete="name"
            required
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
            Your Email <span className="text-emerald-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white hover:border-slate-300 focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-[border-color,box-shadow] duration-160 ease-[cubic-bezier(0.23,1,0.32,1)] text-slate-900 placeholder:text-slate-400 text-sm"
            placeholder="john@example.com"
            autoComplete="email"
            required
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <label htmlFor="subject" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white hover:border-slate-300 focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-[border-color,box-shadow] duration-160 ease-[cubic-bezier(0.23,1,0.32,1)] text-slate-900 placeholder:text-slate-400 text-sm"
          placeholder="How can we help?"
        />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
          Message <span className="text-emerald-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white hover:border-slate-300 focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-[border-color,box-shadow] duration-160 ease-[cubic-bezier(0.23,1,0.32,1)] text-slate-900 placeholder:text-slate-400 text-sm resize-none"
          placeholder="Type your message here..."
          required
        />
      </div>
      {status.message && (
        <div
          role="status"
          className={`flex items-center gap-2.5 p-3.5 rounded-xl text-xs font-semibold ${
            status.tone === "error"
              ? "bg-red-50 text-red-700 border border-red-200"
              : "bg-emerald-50 text-emerald-800 border border-emerald-200"
          }`}
        >
          {status.tone === "error" ? <AlertCircle size={16} /> : <CheckCircle2 size={16} />}
          <span>{status.message}</span>
        </div>
      )}
      <button
        type="submit"
        className="w-full bg-brand hover:bg-brand-dark text-white font-semibold py-3.5 rounded-xl transition-[background-color,transform,box-shadow] duration-160 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-sm hover:shadow-md active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
      >
        <Send size={16} />
        <span>Send Message</span>
      </button>
    </form>
  );
}
