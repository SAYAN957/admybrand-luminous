"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { X, Calculator, Users, DollarSign, Zap, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface PricingCalculatorProps {
  isOpen: boolean
  onClose: () => void
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({
  isOpen,
  onClose
}) => {
  const [teamMembers, setTeamMembers] = React.useState([5])
  const [adSpend, setAdSpend] = React.useState([10000])
  const [campaigns, setCampaigns] = React.useState([50])
  const [addOns, setAddOns] = React.useState({
    analytics: false,
    integrations: false,
    whiteLabel: false,
    support: false
  })

  const basePrice = React.useMemo(() => {
    let price = 29 // Starter base price
    
    // Team members pricing
    if (teamMembers[0] <= 5) {
      price = 29
    } else if (teamMembers[0] <= 20) {
      price = 99
    } else {
      price = 299
    }
    
    // Additional costs based on usage
    const adSpendMultiplier = Math.max(1, adSpend[0] / 10000)
    const campaignMultiplier = Math.max(1, campaigns[0] / 50)
    
    price *= (adSpendMultiplier * 0.3 + campaignMultiplier * 0.2 + 0.5)
    
    return Math.round(price)
  }, [teamMembers, adSpend, campaigns])

  const addOnPrices = {
    analytics: 49,
    integrations: 29,
    whiteLabel: 99,
    support: 199
  }

  const totalAddOnPrice = Object.entries(addOns)
    .filter(([_, enabled]) => enabled)
    .reduce((sum, [addon]) => sum + addOnPrices[addon as keyof typeof addOnPrices], 0)

  const totalPrice = basePrice + totalAddOnPrice
  const annualPrice = Math.round(totalPrice * 12 * 0.85) // 15% annual discount

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto"
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
                <Calculator className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-gradient">Pricing Calculator</h2>
              </div>
              <p className="text-muted-foreground">
                Customize your plan and see real-time pricing based on your needs
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Configuration Panel */}
              <div className="space-y-8">
                {/* Team Members */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-primary" />
                    <Label className="text-lg font-semibold">Team Members</Label>
                  </div>
                  <div className="px-4">
                    <Slider
                      value={teamMembers}
                      onValueChange={setTeamMembers}
                      max={100}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-2">
                      <span>1</span>
                      <span className="font-semibold text-primary">{teamMembers[0]} members</span>
                      <span>100+</span>
                    </div>
                  </div>
                </div>

                {/* Monthly Ad Spend */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <Label className="text-lg font-semibold">Monthly Ad Spend</Label>
                  </div>
                  <div className="px-4">
                    <Slider
                      value={adSpend}
                      onValueChange={setAdSpend}
                      max={100000}
                      min={1000}
                      step={1000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-2">
                      <span>$1K</span>
                      <span className="font-semibold text-primary">${(adSpend[0] / 1000).toFixed(0)}K</span>
                      <span>$100K+</span>
                    </div>
                  </div>
                </div>

                {/* AI Campaigns */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-primary" />
                    <Label className="text-lg font-semibold">AI Campaigns per Month</Label>
                  </div>
                  <div className="px-4">
                    <Slider
                      value={campaigns}
                      onValueChange={setCampaigns}
                      max={500}
                      min={10}
                      step={10}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-2">
                      <span>10</span>
                      <span className="font-semibold text-primary">{campaigns[0]} campaigns</span>
                      <span>500+</span>
                    </div>
                  </div>
                </div>

                {/* Add-ons */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Plus className="w-5 h-5 text-primary" />
                    <Label className="text-lg font-semibold">Optional Add-ons</Label>
                  </div>
                  <div className="space-y-4">
                    {Object.entries(addOnPrices).map(([addon, price]) => (
                      <div key={addon} className="flex items-center justify-between p-4 glass rounded-lg">
                        <div>
                          <Label className="capitalize font-medium">
                            {addon === 'whiteLabel' ? 'White Label' : addon}
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            {addon === 'analytics' && 'Advanced analytics dashboard'}
                            {addon === 'integrations' && 'Premium integrations'}
                            {addon === 'whiteLabel' && 'White-label solution'}
                            {addon === 'support' && 'Priority support'}
                          </p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-semibold">+${price}/mo</span>
                          <Switch
                            checked={addOns[addon as keyof typeof addOns]}
                            onCheckedChange={(checked) =>
                              setAddOns(prev => ({ ...prev, [addon]: checked }))
                            }
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing Summary */}
              <div className="space-y-6">
                <GlassCard variant="elevated" className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-gradient">Your Custom Plan</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span>Base Plan</span>
                      <span>${basePrice}/mo</span>
                    </div>
                    {Object.entries(addOns)
                      .filter(([_, enabled]) => enabled)
                      .map(([addon]) => (
                        <div key={addon} className="flex justify-between text-sm">
                          <span className="capitalize">
                            {addon === 'whiteLabel' ? 'White Label' : addon}
                          </span>
                          <span>+${addOnPrices[addon as keyof typeof addOnPrices]}/mo</span>
                        </div>
                      ))}
                    <hr className="border-border" />
                    <div className="flex justify-between font-semibold">
                      <span>Monthly Total</span>
                      <span className="text-primary">${totalPrice}/mo</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Annual (15% off)</span>
                      <span>${annualPrice}/year</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button variant="hero" size="lg" className="w-full">
                      Start Free Trial
                    </Button>
                    <Button variant="outline" size="lg" className="w-full">
                      Contact Sales
                    </Button>
                  </div>
                </GlassCard>

                <div className="space-y-4 text-sm text-muted-foreground">
                  <h4 className="font-semibold text-foreground">What's Included:</h4>
                  <ul className="space-y-2">
                    <li>• 14-day free trial</li>
                    <li>• No setup fees</li>
                    <li>• Cancel anytime</li>
                    <li>• 24/7 email support</li>
                    <li>• SOC 2 compliance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  )
}