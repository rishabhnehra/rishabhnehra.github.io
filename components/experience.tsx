"use client";

import { Briefcase, Calendar } from "lucide-react";

import { experiences } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { SlideIn } from "@/components/motion-wrapper";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Work Experience"
          subtitle="A timeline of my professional journey, the teams I've worked with, and the impact I've made along the way."
        />

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 hidden h-full w-0.5 bg-gradient-to-b from-indigo-500 to-cyan-400 max-md:block" />
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-indigo-500 to-cyan-400 md:block" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => {
              const isOdd = index % 2 === 0;
              const delay = index * 0.15;

              return (
                <div key={exp.company} className="relative">
                  {/* Timeline dot — mobile */}
                  <div className="absolute left-5 top-6 z-10 size-3 -translate-x-1/2 rounded-full border-2 border-indigo-500 bg-primary md:hidden" />

                  {/* Timeline dot — desktop */}
                  <div className="absolute left-1/2 top-6 z-10 hidden size-3 -translate-x-1/2 rounded-full border-2 border-indigo-500 bg-primary md:block" />

                  {/* Desktop grid */}
                  <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-8">
                    {isOdd ? (
                      <>
                        {/* Card on left */}
                        <SlideIn direction="left" delay={delay}>
                          <ExperienceCard experience={exp} />
                        </SlideIn>

                        {/* Center spacer for the line */}
                        <div className="w-0.5" />

                        {/* Date on right */}
                        <SlideIn direction="right" delay={delay}>
                          <div className="flex items-center gap-2 pt-5 text-sm text-muted-foreground">
                            <Calendar className="size-4" />
                            {exp.period}
                          </div>
                        </SlideIn>
                      </>
                    ) : (
                      <>
                        {/* Date on left */}
                        <SlideIn direction="left" delay={delay}>
                          <div className="flex items-center justify-end gap-2 pt-5 text-sm text-muted-foreground">
                            {exp.period}
                            <Calendar className="size-4" />
                          </div>
                        </SlideIn>

                        {/* Center spacer for the line */}
                        <div className="w-0.5" />

                        {/* Card on right */}
                        <SlideIn direction="right" delay={delay}>
                          <ExperienceCard experience={exp} />
                        </SlideIn>
                      </>
                    )}
                  </div>

                  {/* Mobile layout */}
                  <div className="pl-12 md:hidden">
                    <SlideIn direction="right" delay={delay}>
                      <ExperienceCard experience={exp} />
                    </SlideIn>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  experience,
}: {
  experience: (typeof experiences)[number];
}) {
  return (
    <div className="rounded-lg border bg-card p-5 transition-shadow hover:shadow-lg">
      <h3 className="text-lg font-semibold">{experience.company}</h3>

      <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
        <Briefcase className="size-4 shrink-0" />
        {experience.role}
      </div>

      <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground md:hidden">
        <Calendar className="size-4 shrink-0" />
        {experience.period}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {experience.description}
      </p>

      <ul className="mt-3 space-y-1.5 text-sm">
        {experience.achievements.map((achievement) => (
          <li key={achievement} className="flex gap-2">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-indigo-500" />
            <span className="text-muted-foreground">{achievement}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {experience.technologies.map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}
