"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    title: "Financial Planning",
    description: "Comprehensive financial planning tailored to your goals and circumstances.",
  },
  {
    title: "Investment Management",
    description: "Expert investment strategies to grow and protect your wealth.",
  },
  {
    title: "Retirement Planning",
    description: "Secure your future with our comprehensive retirement planning services.",
  },
  {
    title: "Tax Consulting",
    description: "Navigate complex tax laws and minimize your tax liability with our expert guidance.",
  },
]

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }
  },
}

export function Carousel() {
  const [[page, direction], setPage] = React.useState([0, 0])

  const paginate = (newDirection: number) => {
    setPage(([currentPage, _]) => {
      const newPage = (currentPage + newDirection + slides.length) % slides.length
      return [newPage, newDirection]
    })
  }

  const currentIndex = React.useMemo(() => {
    return ((page % slides.length) + slides.length) % slides.length
  }, [page])

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center justify-center w-full h-64">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full"
          >
            <Card className="w-full">
              <CardContent className="flex flex-col items-center justify-center p-6 h-64">
                <h3 className="text-2xl font-semibold mb-2">{slides[currentIndex].title}</h3>
                <p className="text-center text-muted-foreground">{slides[currentIndex].description}</p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-2 transform -translate-y-1/2"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-2 transform -translate-y-1/2"
        onClick={() => paginate(1)}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div key={index} className={cn("w-2 h-2 rounded-full", currentIndex === index ? "bg-primary" : "bg-muted")} />
        ))}
      </div>
    </div>
  )
}

