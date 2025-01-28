"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, PiggyBank, TrendingUp } from "lucide-react"
import { Carousel } from "@/components/carousel"
import { ImageTicker } from "@/components/image-ticker"
import { AnimatedCTAButton } from "@/components/ui/animated-cta-button"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Home() {
  return (
    <motion.div className="space-y-12" initial="initial" animate="animate" variants={staggerChildren}>
      <motion.section className="text-center" variants={fadeInUp}>
        <h1 className="text-4xl font-bold mb-4">Welcome to Hyperia Finance Consultancy</h1>
        <p className="text-xl mb-8">Expert financial solutions for your business and personal needs</p>
        <AnimatedCTAButton href="/contact">Explore Our Services</AnimatedCTAButton>
      </motion.section>

      <ImageTicker />

      <motion.section variants={fadeInUp}>
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <Carousel />
      </motion.section>

      <motion.section variants={fadeInUp}>
        <h2 className="text-3xl font-semibold mb-6">Why Choose Hyperia?</h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerChildren}>
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart className="mr-2" />
                  Expert Advisors
                </CardTitle>
              </CardHeader>
              <CardContent>
                Our team of experienced financial advisors provides personalized guidance tailored to your unique needs.
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2" />
                  Proven Strategies
                </CardTitle>
              </CardHeader>
              <CardContent>
                We employ time-tested financial strategies to help you achieve your short-term and long-term financial
                goals.
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PiggyBank className="mr-2" />
                  Comprehensive Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                From investment management to retirement planning, we offer a full range of financial services under one
                roof.
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="text-center" variants={fadeInUp}>
        <h2 className="text-3xl font-semibold mb-4">Ready to Take Control of Your Finances?</h2>
        <p className="mb-6">Let our experts guide you towards financial success.</p>
        <AnimatedCTAButton href="/contact">Start Your Journey</AnimatedCTAButton>
      </motion.section>
    </motion.div>
  )
}

