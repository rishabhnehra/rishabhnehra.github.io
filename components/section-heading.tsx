"use client"

import { motion } from "motion/react"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col items-center text-center ${className ?? ""}`}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="mt-3 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="mt-4 max-w-2xl text-muted-foreground"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
