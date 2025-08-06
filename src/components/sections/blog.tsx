"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, TrendingUp } from "lucide-react"

const blogPosts = [
  {
    title: "The Future of AI in Marketing: 2024 Trends and Predictions",
    excerpt: "Discover the latest trends in AI-powered marketing and how leading brands are leveraging artificial intelligence to drive unprecedented growth.",
    author: "Sarah Chen",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "AI Trends",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop",
    featured: true
  },
  {
    title: "How to Increase Your ROI by 300% with Predictive Analytics",
    excerpt: "Learn the proven strategies that helped 500+ companies dramatically improve their marketing ROI using predictive analytics and machine learning.",
    author: "Marcus Rodriguez",
    date: "Dec 12, 2024", 
    readTime: "6 min read",
    category: "Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop"
  },
  {
    title: "Customer Journey Mapping with AI: A Complete Guide",
    excerpt: "Master the art of AI-powered customer journey mapping to create personalized experiences that convert at every touchpoint.",
    author: "Emily Johnson",
    date: "Dec 10, 2024",
    readTime: "10 min read", 
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop"
  },
  {
    title: "Marketing Automation Best Practices for 2024",
    excerpt: "Unlock the power of marketing automation with our comprehensive guide featuring real-world examples and actionable strategies.",
    author: "David Park",
    date: "Dec 8, 2024",
    readTime: "7 min read",
    category: "Automation", 
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop"
  },
  {
    title: "Personalization at Scale: AI-Driven Customer Experiences",
    excerpt: "Discover how leading brands use AI to deliver personalized experiences to millions of customers while maintaining authenticity.",
    author: "Lisa Zhang",
    date: "Dec 5, 2024",
    readTime: "9 min read",
    category: "Personalization",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=200&fit=crop"
  },
  {
    title: "The ROI of Voice Marketing: Optimizing for Audio Platforms",
    excerpt: "Learn how to leverage voice search and audio advertising to reach customers in the growing audio-first ecosystem.",
    author: "Michael Torres",
    date: "Dec 3, 2024",
    readTime: "6 min read",
    category: "Voice Marketing",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=200&fit=crop"
  }
]

export const BlogSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center mb-6">
            <TrendingUp className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient">Latest Insights</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with expert insights, industry trends, and actionable strategies 
            from our marketing AI specialists.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard variant="elevated" className="group cursor-pointer hover:scale-[1.02] transition-all duration-300 h-full flex flex-col">
                <div className="aspect-video relative overflow-hidden rounded-t-2xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {post.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-3">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300 leading-tight flex-shrink-0">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{post.author}</span>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="group/btn">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="group">
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}