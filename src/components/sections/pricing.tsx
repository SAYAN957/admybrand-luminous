"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { PricingCard } from "@/components/ui/pricing-card"
import { PricingCalculator } from "@/components/ui/pricing-calculator"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Calculator, TrendingUp } from "lucide-react"

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

export const PricingSection: React.FC = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = React.useState(false)

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

        {/* FAQ Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Have questions about pricing?
          </p>
          <Button variant="link" className="text-primary font-semibold">
            View Pricing FAQ →
          </Button>
        </motion.div>
      </div>

      {/* Pricing Calculator */}
      <PricingCalculator
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />
    </section>
  )
}