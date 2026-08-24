import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

const initialForm = { name: "", email: "", phone: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      "",
      form.message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section-shell section-alt">
      <div className="wrap grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <SectionHeading
            number="07"
            eyebrow="Contact"
            title="Have a role or project in mind?"
            description="The form opens your email app with a prepared message. You can also reach me directly using the details below."
          />

          <div className="mt-8 space-y-4">
            <a href={`mailto:${profile.email}`} className="contact-link">
              <Mail size={19} aria-hidden="true" />
              {profile.email}
            </a>
            <a href={`tel:${profile.phoneHref}`} className="contact-link">
              <Phone size={19} aria-hidden="true" />
              {profile.phone}
            </a>
            <p className="contact-link">
              <MapPin size={19} aria-hidden="true" />
              {profile.location}
            </p>
          </div>

          <div className="mt-8 flex gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" className="social-button" aria-label="GitHub profile">
              <GitHubIcon size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-button" aria-label="LinkedIn profile">
              <LinkedInIcon size={20} />
            </a>
          </div>
        </Reveal>

        <Reveal>
          <form onSubmit={handleSubmit} className="contact-form p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="form-field">
                <span>Full name</span>
                <input name="name" value={form.name} onChange={updateField} autoComplete="name" required />
              </label>
              <label className="form-field">
                <span>Email address</span>
                <input name="email" type="email" value={form.email} onChange={updateField} autoComplete="email" required />
              </label>
              <label className="form-field">
                <span>Phone number <em>(optional)</em></span>
                <input name="phone" type="tel" value={form.phone} onChange={updateField} autoComplete="tel" />
              </label>
              <label className="form-field">
                <span>Subject</span>
                <input name="subject" value={form.subject} onChange={updateField} required />
              </label>
              <label className="form-field sm:col-span-2">
                <span>Message</span>
                <textarea name="message" rows="6" value={form.message} onChange={updateField} required />
              </label>
            </div>
            <button type="submit" className="primary-button mt-6 w-full sm:w-auto">
              <Send size={18} aria-hidden="true" />
              Prepare email
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
