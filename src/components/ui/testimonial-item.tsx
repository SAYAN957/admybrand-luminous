import * as React from "react"
import { cn } from "@/lib/utils"
import { GlassCard } from "./glass-card"

interface TestimonialItemProps {
  name: string
  company: string
  quote: string
  avatar: string
  className?: string
}

export const TestimonialItem: React.FC<TestimonialItemProps> = ({
  name,
  company,
  quote,
  avatar,
  className
}) => {
  return (
    <GlassCard variant="elevated" className={cn("max-w-md mx-auto", className)}>
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
        />
        <div>
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
      </div>
      <blockquote className="text-muted-foreground italic leading-relaxed">
        "{quote}"
      </blockquote>
    </GlassCard>
  )
}