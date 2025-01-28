"use client"

import React from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function AnimatedBackground() {
  const { theme } = useTheme()

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{
          background:
            theme === "dark"
              ? [
                  "radial-gradient(circle at 0% 0%, #1a202c 0%, #2d3748 50%, #1a202c 100%)",
                  "radial-gradient(circle at 100% 100%, #1a202c 0%, #2d3748 50%, #1a202c 100%)",
                ]
              : [
                  "radial-gradient(circle at 0% 0%, #f7fafc 0%, #edf2f7 50%, #f7fafc 100%)",
                  "radial-gradient(circle at 100% 100%, #f7fafc 0%, #edf2f7 50%, #f7fafc 100%)",
                ],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          duration: 20,
        }}
      />
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03]" />
    </div>
  )
}

