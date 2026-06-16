"use client"

import { User } from "lucide-react"

import { personalInfo, stats } from "@/lib/data"
import { SectionHeading } from "@/components/section-heading"
import {
  FadeIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion-wrapper"

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about building exceptional digital experiences that make a difference."
        />

        <div className="mt-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Avatar */}
          <ScaleIn className="flex justify-center">
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-lg md:h-80 md:w-80">
              <User className="h-24 w-24 text-white md:h-32 md:w-32" />
            </div>
          </ScaleIn>

          {/* Bio & Stats */}
          <div>
            <FadeIn>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {personalInfo.bio}
              </p>
            </FadeIn>

            <StaggerContainer className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="rounded-lg border bg-card p-4 text-center">
                    <p className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
