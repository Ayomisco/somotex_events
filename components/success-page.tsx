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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/nigerian-traditional-cultural-attire-celebration-c.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 via-transparent to-amber-900/20" />
      </div>

      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-orange-600/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-red-600/10 to-transparent" />

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-sm mx-auto">
          <div className="text-center mb-8">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-30 animate-pulse" />
              <div className="relative bg-gradient-to-br from-green-400 to-emerald-500 rounded-full p-6 shadow-2xl">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent mb-2">
              Welcome!
            </h1>
            <p className="text-sm text-gray-600">You're registered for somotex 2025</p>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-3xl" />
            <div className="relative bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-sm rounded-3xl p-6 border border-white/30 shadow-xl">
              <div className="text-center space-y-3">
                <h2 className="text-xl font-bold text-gray-800">{registrationData.fullName}</h2>
                <p className="text-sm text-gray-600">{registrationData.businessName}</p>

                {registrationData.selectedAttire && (
                  <div className="pt-4">
                    <div className="inline-flex items-center gap-3 bg-white/50 rounded-2xl p-3">
                      <img
                        src={registrationData.selectedAttire.image || "/placeholder.svg"}
                        alt={registrationData.selectedAttire.name}
                        className="w-10 h-12 object-cover rounded-lg border-2 border-orange-300/50"
                      />
                      <span className="text-sm font-semibold text-gray-800">
                        {registrationData.selectedAttire.name}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mb-8 bg-orange-100/60 backdrop-blur-sm rounded-full py-3 px-6">
            <Mail className="h-4 w-4 text-orange-600" />
            <p className="text-sm text-orange-800">Confirmation sent to your email</p>
          </div>

          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-gray-700">
              <Calendar className="h-5 w-5 text-orange-600" />
              <span className="text-sm font-medium">October 15, 2025</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Clock className="h-5 w-5 text-orange-600" />
              <span className="text-sm font-medium">9:00 AM</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="h-5 w-5 text-orange-600" />
              <span className="text-sm font-medium">Lagos Convention Centre</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-full blur-lg opacity-30" />
            <Button
              onClick={onBackToHome}
              className="relative w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 text-base font-semibold rounded-full shadow-2xl border-0 transition-all duration-300 hover:scale-105"
            >
              <Home className="h-5 w-5 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
