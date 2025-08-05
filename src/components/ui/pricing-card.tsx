import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { GlassCard } from "./glass-card"
import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  period?: string
  description: string
  features: string[]
  popular?: boolean
  ctaText?: string
  className?: string
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period = "/month",
  description,
  features,
  popular = false,
  ctaText = "Get Started",
  className
}) => {
  return (
    <div className={cn("relative", className)}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </span>
        </div>
      )}
      
      <GlassCard 
        variant={popular ? "elevated" : "default"}
        className={cn(
          "h-full transition-all duration-300 hover:scale-105",
          popular && "ring-2 ring-primary/50 shadow-2xl shadow-primary/20"
        )}
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex items-baseline justify-center">
            <span className="text-4xl font-bold text-gradient">{price}</span>
            <span className="text-muted-foreground ml-1">{period}</span>
          </div>
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <Button 
          variant={popular ? "hero" : "outline"} 
          size="lg" 
          className="w-full"
        >
          {ctaText}
        </Button>
      </GlassCard>
    </div>
  )
}