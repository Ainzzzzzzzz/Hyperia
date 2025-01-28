"use client"

import type * as React from "react"
import { motion } from "framer-motion"
import { Button, type ButtonProps } from "@/components/ui/button"

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode
}

export function AnimatedButton({ children, ...props }: AnimatedButtonProps) {
  return (
    <Button
      {...props}
      className={`group overflow-hidden bg-blue-600 hover:bg-gray-500 text-white ${props.className || ""}`}
    >
      <motion.div
        initial={{ rotateX: 0 }}
        whileHover={{ rotateX: 180 }}
        transition={{ duration: 0.3 }}
        className="relative w-full h-full"
      >
        <span className="inline-block transition-opacity duration-300 group-hover:opacity-0">{children}</span>
        <span className="absolute left-0 top-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 [transform:rotateX(180deg)]">
          {children}
        </span>
      </motion.div>
    </Button>
  )
}

