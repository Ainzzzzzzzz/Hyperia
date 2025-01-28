"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function MovingBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }
    window.addEventListener("mousemove", updateMousePosition)
    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#93c5fd]">
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)",
        }}
        animate={{
          x: mousePosition.x * 0.05,
          y: mousePosition.y * 0.05,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 100 }}
      />
      <motion.div
        className="absolute rounded-full w-96 h-96 opacity-20 blur-3xl bg-white"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />
    </div>
  )
}

