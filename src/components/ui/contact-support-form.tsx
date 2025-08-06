"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { X, Send, Mail, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface ContactSupportFormProps {
  isOpen: boolean
  onClose: () => void
}

export const ContactSupportForm: React.FC<ContactSupportFormProps> = ({
  isOpen,
  onClose
}) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    // Reset form and close
    setFormData({ name: "", email: "", subject: "", message: "" })
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        <GlassCard variant="elevated" className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 z-10"
          >
            <X className="w-5 h-5" />
          </Button>

          <div className="p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-gradient">Contact Support</h2>
              </div>
              <p className="text-muted-foreground">
                We're here to help! Send us a message and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center">
                    <User className="w-4 h-4 mr-2 text-primary" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-primary" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What can we help you with?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Please describe your question or issue in detail..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                  Cancel
                </Button>
                <Button type="submit" variant="gradient" className="flex-1">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-border/20">
              <div className="text-center text-sm text-muted-foreground">
                <p className="mb-2">Need immediate assistance?</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <span>📧 support@admybrand.com</span>
                  <span>📞 +1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  )
}