"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { TestimonialItem } from "@/components/ui/testimonial-item"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah Chen",
    company: "TechStart Inc.",
    quote: "ADmyBRAND AI Suite transformed our marketing ROI by 400% in just 6 months. The AI insights are incredibly accurate and have helped us identify new customer segments we never knew existed.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Marcus Rodriguez",
    company: "E-commerce Plus",
    quote: "The automation features saved our team 25 hours per week. We can now focus on strategy while the AI handles optimization. Our conversion rates increased by 180% since implementing the platform.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emily Johnson",
    company: "Global Retail Co.",
    quote: "Customer journey mapping with AI predictions has revolutionized how we approach marketing. We can now anticipate customer needs before they even know them. Truly game-changing technology.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "David Park",
    company: "Innovation Labs",
    quote: "The real-time analytics dashboard is a work of art. Beautiful, intuitive, and incredibly powerful. Our executives love the automated reports that arrive every Monday morning.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Lisa Thompson",
    company: "Digital Agency Pro",
    quote: "As an agency, we needed something that could scale across multiple clients. ADmyBRAND delivers with white-label capabilities and enterprise-grade security. Our clients are thrilled.",
    avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face"
  }
]

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true)

  React.useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Loved by</span>
            <br />
            Marketing Teams
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Join thousands of successful marketing professionals who trust ADmyBRAND AI Suite 
            to drive exceptional results.
          </p>
          
          {/* Rating Display */}
          <div className="flex items-center justify-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-muted-foreground">
            4.9/5 from 2,500+ reviews
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Desktop View - 3 columns */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-12">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialItem {...testimonial} />
              </motion.div>
            ))}
          </div>

          {/* Mobile/Tablet View - 1 column */}
          <div className="lg:hidden mb-12">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="max-w-lg mx-auto"
            >
              <TestimonialItem {...testimonials[currentIndex]} />
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4">
            <Button
              variant="glass"
              size="icon"
              onClick={prevTestimonial}
              className="hover:scale-110 transition-transform"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary scale-110'
                      : 'bg-muted hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="glass"
              size="icon"
              onClick={nextTestimonial}
              className="hover:scale-110 transition-transform"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <p className="text-sm text-muted-foreground">
              {isAutoPlaying ? 'Auto-playing testimonials' : 'Auto-play paused'}
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground mb-8">
            Ready to join thousands of successful marketers?
          </p>
          <Button variant="hero" size="lg">
            Start Your Success Story
          </Button>
        </motion.div>
      </div>
    </section>
  )
}