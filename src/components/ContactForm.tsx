"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

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
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid xl:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">Your Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-transparent focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
            placeholder="John Doe"
            autoComplete="name"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Your Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-transparent focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
            placeholder="john@example.com"
            autoComplete="email"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-transparent focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
          placeholder="How can we help?"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">Message *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-transparent focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all resize-none"
          placeholder="Type your message here..."
          required
        />
      </div>
      {status.message && (
        <p
          role="status"
          className={status.tone === "error" ? "text-sm font-medium text-red-600" : "text-sm font-medium text-brand-dark"}
        >
          {status.message}
        </p>
      )}
      <button
        type="submit"
        className="w-full bg-brand hover:bg-brand-dark text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
      >
        <Send size={18} />
        Send Message
      </button>
    </form>
  );
}
