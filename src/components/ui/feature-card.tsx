import * as React from "react"
import { cn } from "@/lib/utils"
import { GlassCard } from "./glass-card"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className
}) => {
  return (
    <GlassCard 
      variant="elevated" 
      className={cn(
        "text-center hover:scale-105 transition-all duration-300 group cursor-pointer",
        className
      )}
    >
      <div className="mb-4 flex justify-center">
        <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-primary-glow/20 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-gradient transition-all duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </GlassCard>
  )
}