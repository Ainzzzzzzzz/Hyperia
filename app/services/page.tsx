"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BarChart, Calculator, PiggyBank, TrendingUp } from "lucide-react"

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

export default function Services() {
  return (
    <motion.div className="space-y-12" initial="initial" animate="animate" variants={staggerChildren}>
      <motion.section variants={fadeInUp}>
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-xl mb-8">Comprehensive financial solutions tailored to your needs</p>
      </motion.section>

      <motion.section className="grid gap-6" variants={staggerChildren}>
        <motion.div variants={fadeInUp}>
          <Card id="financial-planning">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <BarChart className="mr-2" />
                Financial Planning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Our financial planning service provides a comprehensive roadmap to achieve your financial goals. We
                analyze your current financial situation, identify areas for improvement, and develop strategies to help
                you build and preserve wealth.
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card id="investment-management">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <TrendingUp className="mr-2" />
                Investment Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Our investment management service is designed to help you grow and protect your wealth. We create
                diversified portfolios tailored to your risk tolerance and financial objectives, actively managing your
                investments to maximize returns while minimizing risk.
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card id="retirement-planning">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <PiggyBank className="mr-2" />
                Retirement Planning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Secure your future with our retirement planning services. We help you determine your retirement needs,
                develop savings strategies, and create a sustainable withdrawal plan to ensure you can enjoy your
                retirement years with financial peace of mind.
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card id="tax-consulting">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Calculator className="mr-2" />
                Tax Consulting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Our tax consulting services help you navigate complex tax laws and regulations. We work to minimize your
                tax liability through strategic planning and ensure compliance with all relevant tax requirements,
                whether for personal or business purposes.
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      <motion.section variants={fadeInUp}>
        <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is financial planning?</AccordionTrigger>
            <AccordionContent>
              Financial planning is the process of setting and achieving financial goals through proper management of
              your finances. It involves analyzing your current financial situation, identifying your goals, and
              creating a strategy to reach those goals. This may include budgeting, saving, investing, tax planning, and
              risk management.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How often should I review my investment portfolio?</AccordionTrigger>
            <AccordionContent>
              It's generally recommended to review your investment portfolio at least once a year. However, major life
              events such as marriage, divorce, birth of a child, or a significant change in your financial situation
              may warrant more frequent reviews. Regular reviews ensure your portfolio remains aligned with your
              financial goals and risk tolerance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>When should I start planning for retirement?</AccordionTrigger>
            <AccordionContent>
              The best time to start planning for retirement is as early as possible, ideally when you first start
              earning income. The earlier you begin, the more time your money has to grow through compound interest.
              However, it's never too late to start. If you're closer to retirement age, a financial advisor can help
              you develop a strategy to maximize your retirement savings in the time you have left.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How can tax consulting benefit me?</AccordionTrigger>
            <AccordionContent>
              Tax consulting can benefit you in several ways. A tax consultant can help you understand complex tax laws,
              identify potential deductions and credits you may be eligible for, and develop strategies to minimize your
              tax liability. They can also assist with tax planning throughout the year, not just during tax season, to
              help you make financial decisions that are tax-efficient. This can potentially save you money and help you
              avoid costly mistakes or penalties.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.section>
    </motion.div>
  )
}

