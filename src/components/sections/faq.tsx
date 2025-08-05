"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { ChevronDown, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "How quickly can I see results with ADmyBRAND AI Suite?",
    answer: "Most customers see significant improvements within the first 30 days. Our AI algorithms begin optimizing your campaigns immediately, with noticeable ROI improvements typically visible within 2-4 weeks. Full optimization and maximum results are usually achieved within 90 days."
  },
  {
    question: "Is my data secure with ADmyBRAND?",
    answer: "Absolutely. We maintain SOC 2 Type II compliance, use end-to-end encryption, and follow enterprise-grade security protocols. Your data is stored in secure, geographically distributed data centers with 99.9% uptime guarantee. We never share or sell your data to third parties."
  },
  {
    question: "Can I integrate ADmyBRAND with my existing marketing tools?",
    answer: "Yes! We offer 200+ native integrations including Salesforce, HubSpot, Google Analytics, Facebook Ads, LinkedIn, Slack, and many more. Our robust API also allows custom integrations. Our technical team provides free setup assistance for enterprise customers."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer 24/7 email support for all plans, priority phone support for Professional plans, and dedicated success managers for Enterprise customers. Our support team has an average response time of 2 hours and a 98% customer satisfaction rating."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time with no cancellation fees. We offer a 14-day free trial, and if you're not completely satisfied within the first 30 days, we provide a full money-back guarantee. No questions asked."
  },
  {
    question: "How does the AI learn and improve over time?",
    answer: "Our AI uses machine learning algorithms that continuously analyze your campaign performance, customer behavior, and market trends. The more data it processes, the better it becomes at predicting outcomes and optimizing strategies. The system updates its models daily to ensure peak performance."
  },
  {
    question: "Is there a setup fee or hidden costs?",
    answer: "No setup fees or hidden costs. What you see in our pricing is what you pay. We include free onboarding, training sessions, and migration assistance. The only additional costs would be for premium add-ons or custom enterprise features, which are always optional."
  },
  {
    question: "What happens to my data if I decide to leave?",
    answer: "You retain full ownership of your data. We provide easy data export tools and will help you migrate your information to your preferred platform. We also offer a 90-day grace period where your data remains accessible (but not processed) in case you decide to return."
  }
]

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="text-gradient">Frequently Asked</span>
              <br className="hidden sm:block" />
              <span className="text-gradient"> Questions</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about ADmyBRAND AI Suite. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard 
                variant="elevated"
                className={cn(
                  "cursor-pointer transition-all duration-300 hover:scale-[1.02]",
                  openIndex === index && "ring-2 ring-primary/30"
                )}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground pr-8 leading-relaxed">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-primary" />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-border/20 mt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <GlassCard variant="subtle" className="max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-3 text-gradient">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="glass text-foreground px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 flex-1">
                Live Chat
              </button>
              <button className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-6 py-3 rounded-lg font-medium hover:scale-105 transition-all duration-300 flex-1">
                Contact Support
              </button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}