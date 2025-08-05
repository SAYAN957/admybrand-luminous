"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Play, ArrowRight, Sparkles } from "lucide-react"

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

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="pt-12 flex flex-col items-center space-y-4"
          >
            <p className="text-sm text-muted-foreground">
              Trusted by 50,000+ marketing teams worldwide
            </p>
            <div className="flex items-center space-x-8 opacity-60">
              {/* Placeholder for company logos */}
              <div className="h-8 w-24 bg-gradient-to-r from-muted to-muted/50 rounded animate-pulse" />
              <div className="h-8 w-20 bg-gradient-to-r from-muted to-muted/50 rounded animate-pulse" />
              <div className="h-8 w-28 bg-gradient-to-r from-muted to-muted/50 rounded animate-pulse" />
              <div className="h-8 w-22 bg-gradient-to-r from-muted to-muted/50 rounded animate-pulse" />
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Visual - Demo Video */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mt-20 relative"
        >
          <GlassCard variant="elevated" className="max-w-4xl mx-auto p-8 transform perspective-1000 rotate-x-12">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-lg flex items-center justify-center relative overflow-hidden cursor-pointer group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              
              {/* Demo Video Content */}
              <div className="text-center z-10 group-hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse group-hover:animate-none group-hover:scale-110 transition-all duration-300">
                  <Play className="w-8 h-8 text-primary-foreground group-hover:scale-125 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Watch AI in Action</h3>
                <p className="text-muted-foreground mb-1">See how our dark/light mode adapts</p>
                <p className="text-sm text-primary font-medium">Click to play demo</p>
              </div>

              {/* Interactive Demo Mockup */}
              <div className="absolute inset-4 border border-white/20 rounded-lg bg-background/10 backdrop-blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                <div className="flex items-center justify-between p-3 border-b border-white/10">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-xs text-white/70">ADmyBRAND AI Dashboard</div>
                </div>
                <div className="p-4 space-y-2">
                  <div className="h-2 bg-primary/30 rounded animate-pulse"></div>
                  <div className="h-2 bg-primary-glow/20 rounded animate-pulse delay-100"></div>
                  <div className="h-2 bg-primary/40 rounded animate-pulse delay-200"></div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-primary rounded-full animate-bounce" />
              <div className="absolute top-8 right-8 w-2 h-2 bg-primary-glow rounded-full animate-bounce delay-300" />
              <div className="absolute bottom-6 left-8 w-4 h-4 bg-primary/50 rounded-full animate-bounce delay-500" />
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}