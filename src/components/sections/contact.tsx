"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GlassCard } from "@/components/ui/glass-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Send, Calendar, Users, Zap } from "lucide-react"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  teamSize: z.string().min(1, "Please select your team size"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

const teamSizes = [
  "1-10 employees",
  "11-50 employees", 
  "51-200 employees",
  "201-1000 employees",
  "1000+ employees"
]

export const ContactSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log("Form submitted:", data)
      
      // Show success message (you can add toast here)
      alert("Thank you! We'll get back to you within 24 hours.")
      reset()
    } catch (error) {
      console.error("Failed to submit form:", error)
      alert("Something went wrong. Please try again.")
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gradient">Get a</span>
                <br />
                Custom Demo
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                See how ADmyBRAND AI Suite can transform your marketing strategy. 
                Book a personalized demo with our experts and discover your ROI potential.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              {[
                {
                  icon: <Calendar className="w-6 h-6 text-primary" />,
                  title: "30-minute personalized demo",
                  description: "Tailored to your specific use case and industry"
                },
                {
                  icon: <Users className="w-6 h-6 text-primary" />,
                  title: "Expert guidance",
                  description: "Learn best practices from our marketing AI specialists"
                },
                {
                  icon: <Zap className="w-6 h-6 text-primary" />,
                  title: "Quick implementation",
                  description: "Get started with our proven onboarding process"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-primary-glow/20">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <GlassCard variant="subtle" className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-gradient mb-1">24h</div>
                <p className="text-sm text-muted-foreground">Response Time</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-1">98%</div>
                <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassCard variant="elevated" className="max-w-lg mx-auto">
              <h3 className="text-2xl font-bold text-gradient mb-6 text-center">
                Schedule Your Demo
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <Label htmlFor="name" className="text-foreground">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    {...register("name")}
                    className="glass border-white/20 bg-white/10 backdrop-blur-md mt-2"
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-foreground">
                    Business Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="glass border-white/20 bg-white/10 backdrop-blur-md mt-2"
                    placeholder="your.email@company.com"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <Label htmlFor="company" className="text-foreground">
                    Company Name *
                  </Label>
                  <Input
                    id="company"
                    {...register("company")}
                    className="glass border-white/20 bg-white/10 backdrop-blur-md mt-2"
                    placeholder="Your company name"
                  />
                  {errors.company && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.company.message}
                    </p>
                  )}
                </div>

                {/* Team Size */}
                <div>
                  <Label className="text-foreground">
                    Team Size *
                  </Label>
                  <Select onValueChange={(value) => setValue("teamSize", value)}>
                    <SelectTrigger className="glass border-white/20 bg-white/10 backdrop-blur-md mt-2">
                      <SelectValue placeholder="Select your team size" />
                    </SelectTrigger>
                    <SelectContent>
                      {teamSizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.teamSize && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.teamSize.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-foreground">
                    Tell us about your marketing goals *
                  </Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    className="glass border-white/20 bg-white/10 backdrop-blur-md mt-2 min-h-[120px]"
                    placeholder="What marketing challenges are you looking to solve? What are your main goals?"
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Scheduling Demo..."
                  ) : (
                    <>
                      Schedule Demo
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our{" "}
                  <a href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}