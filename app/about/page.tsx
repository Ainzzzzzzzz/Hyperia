"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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

export default function About() {
  return (
    <motion.div className="space-y-12" initial="initial" animate="animate" variants={staggerChildren}>
      <motion.section variants={fadeInUp}>
        <h1 className="text-4xl font-bold mb-4">About Hyperia Finance Consultancy</h1>
        <p className="text-xl mb-8">Your trusted partner in financial success</p>
      </motion.section>

      <motion.section variants={fadeInUp}>
        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
        <p className="text-lg mb-4">
          At Hyperia Finance Consultancy, our mission is to empower individuals and businesses to achieve their
          financial goals through expert guidance, innovative strategies, and personalized solutions. We are committed
          to delivering unparalleled financial advice that creates lasting value for our clients.
        </p>
      </motion.section>

      <motion.section variants={fadeInUp}>
        <h2 className="text-3xl font-semibold mb-6">Our Team</h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerChildren}>
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <Avatar className="w-24 h-24 mx-auto">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="John Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <CardTitle className="text-center mt-4">John Doe</CardTitle>
                <CardDescription className="text-center">Founder & CEO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center">
                  With over 20 years of experience in finance, John leads our team with vision and expertise.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <Avatar className="w-24 h-24 mx-auto">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Jane Smith" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <CardTitle className="text-center mt-4">Jane Smith</CardTitle>
                <CardDescription className="text-center">Senior Financial Advisor</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center">
                  Jane's expertise in investment strategies has helped countless clients achieve their financial goals.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <Avatar className="w-24 h-24 mx-auto">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Mike Johnson" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <CardTitle className="text-center mt-4">Mike Johnson</CardTitle>
                <CardDescription className="text-center">Tax Specialist</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center">
                  Mike's deep knowledge of tax laws ensures our clients maximize their tax efficiency.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section variants={fadeInUp}>
        <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Integrity: We uphold the highest ethical standards in all our dealings.</li>
          <li>Excellence: We strive for excellence in every aspect of our service.</li>
          <li>Client-Centric: Our clients' best interests are at the heart of everything we do.</li>
          <li>Innovation: We continuously seek innovative solutions to complex financial challenges.</li>
          <li>Collaboration: We believe in the power of teamwork and partnership with our clients.</li>
        </ul>
      </motion.section>
    </motion.div>
  )
}

