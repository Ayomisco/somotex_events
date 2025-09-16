"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

interface LandingPageProps {
  onStartRegistration: () => void
}

export function LandingPage({ onStartRegistration }: LandingPageProps) {
  return (
    // <div className="min-h-screen relative overflow-hidden bg-gray-900">
    <div className="min-h-screen relative overflow-hidden ">
      <div className="absolute inset-0">
        {/* Mobile background */}
        <img
          src="/main_bg.png"
          alt="Cultural celebration"
          className="block md:hidden absolute top-0 left-0 w-screen h-screen object- "
        />
        {/* Desktop background */}
        <img
          src="/Somotex_desktop.png"
          alt="Somotex desktop background"
          className="hidden md:block w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center
        md:items-center md:text-center md:pl-35 md:max-w-lg">
        {/* <div className="mb-8">
          <img src="/somotex_logo2.jpg" alt="somotex Nigeria" className="mx-auto h-12 w-auto mb-6 opacity-90" />
        </div> */}

        {/* <h1
          className="text-2xl md:text-4xl font-bold mt-18 text-white mb-3 text-balance drop-shadow-2xl"
          style={{ color: "#ffffff" }}
        >
          {"SOMATEX Dealers Meetup 2025"}
        </h1> */}
      <br /> <br /> <br /> <br /><br />  <br /> <br />    <br /> <br /> <br /> <br /><br />


        <p className="text-sm md:text-base mb-2 mt-6 font-light drop-shadow-xl" style={{ color: "#f3f4f6" }}>
          {"October 15, 2025 • Lagos"}
        </p>
          
        <p className="text-xs md:text-sm mb-4  drop-shadow-xl" style={{ color: "#e5e7eb" }}>
          {"Celebrating Nigerian Heritage & Business Excellence"}
        </p>

        <Button
          onClick={onStartRegistration}
          size="lg"
          className="bg-[#003087] hover:bg-[#001f5c] text-white px-8 py-2 text-base font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          style={{ boxShadow: "0 4px 24px 0 rgba(255,255,255,0.5)" }}
        >
          Register Now
          <Sparkles className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* <div className="absolute bottom-8 left-4 right-4 z-10">
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
      </div> */}
    </div>
  )
}
