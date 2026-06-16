"use client";

import { useState, type FormEvent } from "react";
import { Send, Mail, MapPin } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn, SlideIn } from "@/components/motion-wrapper";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const socialIconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Linkedin: LinkedinIcon,
  Github: GithubIcon,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    alert("Message sent!");
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Get In Touch"
          subtitle="I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!"
          className="mb-12"
        />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left column — contact info */}
          <FadeIn>
            <div className="flex flex-col gap-6">
              <p className="text-muted-foreground">
                I&apos;d love to hear from you. Feel free to drop me a message
                using the form or reach out through any of the channels below.
              </p>

              {/* Email card */}
              <Link
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-4 rounded-lg border p-4 transition-colors hover:border-primary hover:bg-muted/50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">
                    {personalInfo.email}
                  </p>
                </div>
              </Link>

              {/* Location card */}
              {personalInfo.location && (
                <div className="flex items-center gap-4 rounded-lg border p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              )}

              {/* Social links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = socialIconMap[social.icon];
                  return (
                    <Link
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="flex h-12 w-12 items-center justify-center rounded-lg border transition-colors hover:border-primary hover:bg-muted/50 hover:text-primary"
                    >
                      {Icon && <Icon className="h-5 w-5" />}
                    </Link>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          {/* Right column — contact form */}
          <SlideIn direction="right">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 rounded-lg border p-6"
            >
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button
                type="submit"
                className="gradient-bg w-full rounded-full text-white"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
