"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    toast({
      title: "Form submitted!",
      description: "We'll get back to you as soon as possible.",
    })
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <motion.div className="space-y-12" initial="initial" animate="animate" variants={staggerChildren}>
      <motion.section variants={fadeInUp}>
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl mb-8">Get in touch with our expert team</p>
      </motion.section>

      <motion.div variants={fadeInUp}>
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>We'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                  />
                </div>
              </div>
              <CardFooter className="flex justify-between mt-4 p-0">
                <Button type="submit">Send message</Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      <motion.section className="max-w-md mx-auto text-center" variants={fadeInUp}>
        <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
        <p className="mb-2">Email: info@hyperia.com</p>
        <p className="mb-2">Phone: (123) 456-7890</p>
        <p>Address: 123 Finance Street, New York, NY 10001</p>
      </motion.section>
    </motion.div>
  )
}

