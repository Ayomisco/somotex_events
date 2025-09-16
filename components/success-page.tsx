"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Mail, Home, Calendar, Clock, MapPin } from "lucide-react"
import type { RegistrationData } from "@/app/page"

interface SuccessPageProps {
  registrationData: RegistrationData
  onBackToHome: () => void
}

export function SuccessPage({ registrationData, onBackToHome }: SuccessPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#003087] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#003087] via-[#003087] to-[#001f5c] opacity-95" />
      <div className="absolute inset-0 opacity-10 bg-[url('/nigerian-traditional-cultural-attire-celebration-c.jpg')] bg-cover bg-center" />
      <div className="relative z-10 w-full max-w-md mx-auto px-4">
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#002060] to-[#003087] rounded-3xl shadow-2xl border border-[#e0eaff] p-8">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-30 animate-pulse" />
            <div className="relative bg-gradient-to-br from-[#003087] to-[#001f5c] rounded-full p-6 shadow-2xl flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-white drop-shadow-lg" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-lg text-center">Welcome!</h1>
          <p className="text-sm text-[#e0eaff] mb-6 text-center">You're registered for SOMATEX Dealers Meetup 2025</p>

          <div className="w-full mb-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center">
              <h2 className="text-xl font-bold text-white drop-shadow mb-1">{registrationData.fullName}</h2>
              <p className="text-sm text-[#e0eaff] mb-2">{registrationData.businessName}</p>
              {registrationData.selectedAttire && (
                <div className="pt-2 flex flex-col items-center">
                  <div className="inline-flex items-center gap-3 bg-white/20 rounded-2xl p-2">
                    <img
                      src={registrationData.selectedAttire.image || "/placeholder.svg"}
                      alt={registrationData.selectedAttire.name}
                      className="w-10 h-12 object-cover rounded-lg border-2 border-[#003087]"
                    />
                    <span className="text-sm font-semibold text-white drop-shadow">
                      {registrationData.selectedAttire.name}
                    </span>
                  </div>
                </div>
              )}
              <div className="space-y-2 mt-4">
                <div className="flex items-center gap-3 text-white justify-center">
                  <Calendar className="h-5 w-5 text-white drop-shadow-lg" />
                  <span className="text-sm font-medium">October 15, 2025</span>
                </div>
                <div className="flex items-center gap-3 text-white justify-center">
                  <Clock className="h-5 w-5 text-white drop-shadow-lg" />
                  <span className="text-sm font-medium">9:00 AM</span>
                </div>
                <div className="flex items-center gap-3 text-white justify-center">
                  <MapPin className="h-5 w-5 text-white drop-shadow-lg" />
                  <span className="text-sm font-medium">Lagos Convention Centre</span>
                </div>
              </div>
            </div>
          </div>

          <Button
            onClick={onBackToHome}
            className="w-full bg-[#003087] hover:bg-[#001f5c] text-white py-4 text-base font-bold rounded-full shadow-[0_4px_24px_0_rgba(255,255,255,0.5)] border-0 transition-all duration-300 hover:scale-105 mt-2"
          >
            <Home className="h-5 w-5 mr-2 text-white drop-shadow-lg" />
            Back to Home
          </Button>
        </div>
        <div className="flex items-center justify-center gap-2 mt-6 bg-white/10 backdrop-blur-sm rounded-2xl py-3 px-4 w-full">
          <Mail className="h-4 w-4 text-white drop-shadow-lg" />
          <p className="text-sm text-white">Your invitation has been sent to your email</p>
        </div>
      </div>
    </div>
  )
}
