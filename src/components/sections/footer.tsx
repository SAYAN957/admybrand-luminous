"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GlassCard } from "@/components/ui/glass-card"
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Heart
} from "lucide-react"

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "API", href: "/api" },
    { name: "Integrations", href: "/integrations" },
    { name: "Changelog", href: "/changelog" }
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Contact", href: "/contact" }
  ],
  resources: [
    { name: "Documentation", href: "/docs" },
    { name: "Help Center", href: "/help" },
    { name: "Community", href: "/community" },
    { name: "Templates", href: "/templates" },
    { name: "Webinars", href: "/webinars" }
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
    { name: "Security", href: "/security" }
  ]
}

export const Footer: React.FC = () => {
  const [email, setEmail] = React.useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
    // Add toast notification here
  }

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-background via-background/50 to-primary/5">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 border-b border-border/20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GlassCard variant="elevated" className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4 text-gradient">
                Stay Ahead of the Marketing Curve
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get the latest AI marketing insights, tips, and industry trends delivered to your inbox. 
                Join 50,000+ marketing professionals.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="glass border-white/20 bg-white/10 backdrop-blur-md"
                  required
                />
                <Button type="submit" variant="gradient" className="group">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
              
              <p className="text-sm text-muted-foreground mt-4">
                No spam. Unsubscribe anytime. Read our{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </p>
            </GlassCard>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {/* Brand Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gradient">ADmyBRAND</span>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    AI-powered marketing suite that transforms your business growth. 
                    Trusted by 50,000+ marketing teams worldwide.
                  </p>
                </div>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>hello@admybrand.ai</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+91 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Mumbai, India</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4 mt-6">
                  {[
                    { icon: Twitter, href: "https://twitter.com/admybrand", label: "Twitter" },
                    { icon: Linkedin, href: "https://linkedin.com/company/admybrand", label: "LinkedIn" },
                    { icon: Github, href: "https://github.com/admybrand", label: "GitHub" }
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-foreground" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Link Sections */}
              {Object.entries(footerLinks).map(([category, links], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-foreground font-semibold mb-4 capitalize">
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-border/20 py-8"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <span>© 2025 ADmyBRAND AI Suite. All rights reserved.</span>
              </div>
              
              <div className="flex items-center space-x-2 text-muted-foreground">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                <span>by the ADmyBRAND Team</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}