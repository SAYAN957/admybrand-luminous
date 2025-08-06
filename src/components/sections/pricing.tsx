"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { PricingCard } from "@/components/ui/pricing-card"
import { PricingCalculator } from "@/components/ui/pricing-calculator"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { ContactSupportForm } from "@/components/ui/contact-support-form"
import { Calculator, TrendingUp, HelpCircle, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const pricingPlans = [
  {
    title: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 5,000 contacts",
      "Basic AI insights",
      "Email marketing automation",
      "Social media scheduling",
      "Basic analytics dashboard",
      "24/7 email support"
    ],
    ctaText: "Start Free Trial"
  },
  {
    title: "Professional",
    price: "$99",
    period: "/month",
    description: "Ideal for growing marketing teams",
    features: [
      "Up to 50,000 contacts",
      "Advanced AI predictions",
      "Multi-channel automation",
      "A/B testing suite",
      "Custom reporting",
      "API access",
      "Priority phone support",
      "Custom integrations"
    ],
    popular: true,
    ctaText: "Start Free Trial"
  },
  {
    title: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited contacts",
      "AI model customization",
      "White-label solution",
      "Advanced security features",
      "Dedicated success manager",
      "Custom training sessions",
      "SLA guarantee",
      "On-premise deployment"
    ],
    ctaText: "Contact Sales"
  }
]

const pricingFaqs = [
  {
    question: "What's included in the free trial?",
    answer: "Your 14-day free trial includes full access to all features in your chosen plan. No credit card required, no setup fees, and you can cancel anytime during the trial period."
  },
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly. Upgrades are charged immediately, while downgrades provide credits for your next billing cycle."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise customers. All payments are processed securely through Stripe with enterprise-grade encryption."
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer: "Yes! Save 15% when you choose annual billing. For example, our Professional plan costs $1,009/year instead of $1,188 when billed monthly. The discount is applied automatically at checkout."
  },
  {
    question: "What happens when I reach my usage limits?",
    answer: "We'll notify you when you approach your limits. You can either upgrade your plan or purchase additional usage credits. We never cut off your service abruptly - you'll always have time to adjust your plan."
  },
  {
    question: "Is there a setup fee for Enterprise plans?",
    answer: "No setup fees for any plan, including Enterprise. We include free onboarding, data migration assistance, custom integrations setup, and training sessions for your team at no additional cost."
  }
]

export const PricingSection: React.FC = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = React.useState(false)
  const [isContactFormOpen, setIsContactFormOpen] = React.useState(false)
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient block">Simple Pricing</span>
            <span className="block">for Every Business</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Choose the perfect plan for your business needs. All plans include a 14-day free trial 
            with no credit card required.
          </p>
          
          {/* Interactive Calculator Button */}
          <Button
            variant="glass"
            onClick={() => setIsCalculatorOpen(true)}
            className="mb-8"
          >
            <Calculator className="w-5 h-5 mr-2" />
            Calculate Your ROI
          </Button>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </div>

        {/* ROI Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GlassCard variant="elevated" className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-gradient">Average Customer ROI</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">300%</div>
                <p className="text-muted-foreground">Revenue Increase</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">45%</div>
                <p className="text-muted-foreground">Cost Reduction</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">12 months</div>
                <p className="text-muted-foreground">Payback Period</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Pricing FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <HelpCircle className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-3xl md:text-4xl font-bold">
                <span className="text-gradient">Pricing FAQ</span>
              </h3>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Common questions about our pricing plans and billing.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {pricingFaqs.map((faq, index) => (
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
                    openFaqIndex === index && "ring-2 ring-primary/30"
                  )}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-foreground pr-8 leading-relaxed">
                      {faq.question}
                    </h4>
                    <motion.div
                      animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaqIndex === index ? "auto" : 0,
                      opacity: openFaqIndex === index ? 1 : 0,
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
            className="text-center mt-12"
          >
            <GlassCard variant="subtle" className="max-w-md mx-auto">
              <h4 className="text-xl font-semibold mb-3 text-gradient">
                Still have questions?
              </h4>
              <p className="text-muted-foreground mb-6">
                Our support team is here to help you choose the right plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="flex-1">
                  Live Chat
                </Button>
                <Button 
                  variant="gradient" 
                  className="flex-1"
                  onClick={() => setIsContactFormOpen(true)}
                >
                  Contact Support
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>

      {/* Pricing Calculator */}
      <PricingCalculator
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      {/* Contact Support Form */}
      <ContactSupportForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </section>
  )
}