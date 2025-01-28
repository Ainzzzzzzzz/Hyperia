"use client"

import { motion } from "framer-motion"

const terms = [
  "Financial Planning",
  "Investment Management",
  "Retirement Planning",
  "Tax Consulting",
  "Wealth Management",
  "Risk Assessment",
  "Estate Planning",
  "Budgeting",
]

export function ImageTicker() {
  return (
    <div className="w-full overflow-hidden bg-muted py-6">
      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...terms, ...terms].map((term, index) => (
          <div key={index} className="flex items-center justify-center mx-4 px-4 whitespace-nowrap">
            <motion.span
              className="text-lg font-semibold text-primary"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {term}
            </motion.span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

