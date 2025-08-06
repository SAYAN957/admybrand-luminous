"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Play, ArrowRight, Sparkles } from "lucide-react"
import heroDashboard from "@/assets/hero-dashboard.jpg"

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary-glow/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-primary/5 via-transparent to-primary-glow/5 rounded-full animate-spin opacity-30" style={{ animationDuration: '60s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex"
          >
            <div className="glass px-6 py-3 rounded-full border border-primary/20 bg-gradient-to-r from-primary/10 to-primary-glow/10">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  Now with AI-Powered Analytics
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
          >
            <span className="text-gradient block">Transform</span>
            <span className="block">Your Marketing</span>
            <span className="text-gradient block">with AI</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4"
          >
            ADmyBRAND AI Suite revolutionizes your marketing strategy with intelligent automation, 
            predictive analytics, and personalized customer experiences. Boost ROI by 300%+ with our 
            cutting-edge AI technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8"
          >
            <Button variant="hero" size="xl" className="min-w-[200px] group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="xl" className="min-w-[200px] group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </motion.div>

        </motion.div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-16 mb-8 flex flex-col items-center space-y-8"
        >
          <p className="text-sm text-muted-foreground">
            Trusted by 50,000+ marketing teams worldwide
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            {/* ROI Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="glass rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-primary-glow/10 border border-primary/20 backdrop-blur-sm text-center"
            >
              <div className="text-3xl font-bold text-gradient mb-2">+247%</div>
              <p className="text-sm text-muted-foreground">Average ROI Increase</p>
              <div className="mt-3 text-xs text-primary font-medium">Verified Results</div>
            </motion.div>

            {/* Teams Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="glass rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-primary-glow/10 border border-primary/20 backdrop-blur-sm text-center"
            >
              <div className="text-3xl font-bold text-gradient mb-2">50K+</div>
              <p className="text-sm text-muted-foreground">Marketing Teams</p>
              <div className="mt-3 text-xs text-primary font-medium">Active Users</div>
            </motion.div>

            {/* AI Optimized Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="glass rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-primary-glow/10 border border-primary/20 backdrop-blur-sm text-center"
            >
              <div className="text-3xl font-bold text-gradient mb-2">AI</div>
              <p className="text-sm text-muted-foreground">Powered Platform</p>
              <div className="mt-3 text-xs text-primary font-medium">Advanced Analytics</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Hero Visual - AI Dashboard Image */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-12 relative"
        >
          <GlassCard variant="elevated" className="max-w-5xl mx-auto p-4 md:p-8 transform perspective-1000">
            <div className="relative overflow-hidden rounded-xl group cursor-pointer">
              <img
                src={heroDashboard}
                alt="ADmyBRAND AI Dashboard"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Stats */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold animate-bounce">
                +247% ROI
              </div>
              
              <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-glow to-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold animate-bounce delay-300">
                AI Optimized
              </div>
              
              {/* Interactive overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-8">
                <div className="text-center text-white">
                  <h3 className="text-xl font-semibold mb-2">Experience AI-Powered Marketing</h3>
                  <p className="text-sm opacity-90">Click to explore our interactive dashboard</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}