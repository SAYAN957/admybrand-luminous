"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { FeatureCard } from "@/components/ui/feature-card"
import { 
  Brain, 
  Target, 
  BarChart3, 
  Zap, 
  Users, 
  Shield,
  Smartphone,
  Globe
} from "lucide-react"

const features = [
  {
    icon: <Brain className="w-8 h-8 text-primary" />,
    title: "AI-Powered Insights",
    description: "Advanced machine learning algorithms analyze your data to provide actionable insights and predict customer behavior with 95% accuracy."
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Precision Targeting",
    description: "Reach your ideal customers with laser-focused targeting based on demographics, behavior, and purchase intent."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
    title: "Real-time Analytics",
    description: "Monitor campaign performance in real-time with beautiful dashboards and automated reporting that saves 10+ hours per week."
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Automation Engine",
    description: "Automate your entire marketing funnel from lead generation to conversion with intelligent workflows and triggers."
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Customer Journey Mapping",
    description: "Visualize and optimize every touchpoint in your customer's journey to maximize engagement and conversions."
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance, data encryption, and privacy controls to protect your sensitive information."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: "Mobile-First Design",
    description: "Optimized for mobile with responsive design and native mobile apps for iOS and Android platforms."
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "Global Scalability",
    description: "Scale globally with multi-language support, local compliance, and region-specific optimization features."
  }
]

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl" />
      
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
            <span className="text-gradient block">Powerful Features</span>
            <span className="block">for Modern Marketing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how our AI-powered suite transforms your marketing strategy with 
            cutting-edge technology and intelligent automation.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-lg text-muted-foreground mb-8">
            Ready to supercharge your marketing with AI?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Explore All Features
            </button>
            <button className="glass text-foreground px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}