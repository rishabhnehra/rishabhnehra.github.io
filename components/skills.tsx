"use client"

import { Code2, GitBranch, Server, type LucideIcon } from "lucide-react"

import { skills } from "@/lib/data"
import { SectionHeading } from "@/components/section-heading"
import { SlideIn } from "@/components/motion-wrapper"
import { Badge } from "@/components/ui/badge"

const categoryIcons: Record<string, LucideIcon> = {
  Frontend: Code2,
  Backend: Server,
  "DevOps & Tools": GitBranch,
}

const slideConfig: { direction?: "left" | "right"; delay: number }[] = [
  { direction: "left", delay: 0 },
  { delay: 0.1 },
  { direction: "right", delay: 0.2 },
]

export function Skills() {
  return (
    <section id="skills" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {skills.map((category, index) => {
            const Icon = categoryIcons[category.category]
            const config = slideConfig[index] ?? slideConfig[0]

            return (
              <SlideIn
                key={category.category}
                direction={config.direction}
                delay={config.delay}
              >
                <div className="rounded-xl border bg-card p-6">
                  <div className="mb-4 flex items-center gap-2">
                    {Icon && (
                      <Icon className="h-5 w-5 text-indigo-500" />
                    )}
                    <h3 className="text-lg font-semibold">
                      {category.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="transition-transform hover:scale-105"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </SlideIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
