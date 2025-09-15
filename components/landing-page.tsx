"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

interface LandingPageProps {
  onStartRegistration: () => void
}

export function LandingPage({ onStartRegistration }: LandingPageProps) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="/nigerian-traditional-cultural-attire-celebration-c.jpg"
          alt="Cultural celebration"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="mb-8">
          <img src="/somotex_logo2.jpg" alt="somotex Nigeria" className="mx-auto h-12 w-auto mb-6 opacity-90" />
        </div>

        <h1
          className="text-2xl md:text-4xl font-bold text-white mb-3 text-balance drop-shadow-2xl"
          style={{ color: "#ffffff" }}
        >
          {"somotex Cultural Conference"}
        </h1>

        <p className="text-sm md:text-base mb-2 font-light drop-shadow-xl" style={{ color: "#f3f4f6" }}>
          {"October 15, 2025 • Lagos"}
        </p>

        <p className="text-xs md:text-sm mb-12 max-w-xs text-balance drop-shadow-xl" style={{ color: "#e5e7eb" }}>
          {"Celebrating Nigerian Heritage & Business Excellence"}
        </p>

        <Button
          onClick={onStartRegistration}
          size="lg"
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-base font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Register Now
          <Sparkles className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="absolute bottom-8 left-4 right-4 z-10">
        <div className="flex justify-center space-x-4 opacity-60">
          <div className="w-12 h-12 rounded-full bg-orange-500/30 backdrop-blur-sm border border-white/30 flex items-center justify-center">
            <span className="text-white text-xs font-bold">YOR</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-green-500/30 backdrop-blur-sm border border-white/30 flex items-center justify-center">
            <span className="text-white text-xs font-bold">IGO</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-red-500/30 backdrop-blur-sm border border-white/30 flex items-center justify-center">
            <span className="text-white text-xs font-bold">HAU</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-blue-500/30 backdrop-blur-sm border border-white/30 flex items-center justify-center">
            <span className="text-white text-xs font-bold">FUL</span>
          </div>
        </div>
        <p className="text-center text-xs mt-2 font-light drop-shadow-xl" style={{ color: "#d1d5db" }}>
          {"Choose your cultural attire"}
        </p>
      </div>
    </div>
  )
}
