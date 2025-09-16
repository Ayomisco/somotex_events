"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, User, Building, Mail, Phone, MapPin } from "lucide-react"
import type { RegistrationData } from "@/app/page"

interface RegistrationFormProps {
  onSubmit: (data: Omit<RegistrationData, "selectedAttire">) => void
  onBack: () => void
}

const nigerianStates = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
]

export function RegistrationForm({ onSubmit, onBack }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phoneNumber: "",
    businessLocation: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = "Business name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required"
    }

    if (!formData.businessLocation) {
      newErrors.businessLocation = "Business location is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#003087]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#003087] via-[#003087] to-[#001f5c]" />
      <div className="absolute inset-0 opacity-10 bg-[url('/nigerian-traditional-cultural-attire-celebration-c.jpg')] bg-cover bg-center" />

      <div className="relative z-10 py-6 px-4">
        <div className="max-w-md mx-auto">
          <Button variant="ghost" onClick={onBack} className="mb-4 text-white hover:text-[#e0eaff] p-2">
            <ArrowLeft className="h-4 w-4 mr-1 text-white drop-shadow-lg" />
            <span className="text-sm">Back</span>
          </Button>

          <div className="text-center mb-8">
            <h1 className="text-xl font-bold text-white mb-1 drop-shadow-lg">{"Registration"}</h1>
            <p className="text-xs text-[#e0eaff]">{"Fill your details below"}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="fullName" className="flex items-center gap-2 text-sm text-white drop-shadow">
                <User className="h-4 w-4 text-white drop-shadow-lg" />
                Full Name
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className={`border-[#e0eaff] focus:border-white text-sm bg-[#002060] text-white placeholder:text-[#e0eaff] ${errors.fullName ? "border-red-400" : ""}`}
              />
              {errors.fullName && <p className="text-xs text-red-500">{errors.fullName}</p>}
            </div>

            <div className="space-y-1">
              <Label htmlFor="businessName" className="flex items-center gap-2 text-sm text-white drop-shadow">
                <Building className="h-4 w-4 text-white drop-shadow-lg" />
                Business Name
              </Label>
              <Input
                id="businessName"
                type="text"
                placeholder="Your business name"
                value={formData.businessName}
                onChange={(e) => handleInputChange("businessName", e.target.value)}
                className={`border-[#e0eaff] focus:border-white text-sm bg-[#002060] text-white placeholder:text-[#e0eaff] ${errors.businessName ? "border-red-400" : ""}`}
              />
              {errors.businessName && <p className="text-xs text-red-500">{errors.businessName}</p>}
            </div>

            <div className="space-y-1">
              <Label htmlFor="email" className="flex items-center gap-2 text-sm text-white drop-shadow">
                <Mail className="h-4 w-4 text-white drop-shadow-lg" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`border-[#e0eaff] focus:border-white text-sm bg-[#002060] text-white placeholder:text-[#e0eaff] ${errors.email ? "border-red-400" : ""}`}
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>

            <div className="space-y-1">
              <Label htmlFor="phoneNumber" className="flex items-center gap-2 text-sm text-white drop-shadow">
                <Phone className="h-4 w-4 text-white drop-shadow-lg" />
                Phone Number
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="+234 xxx xxx xxxx"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                className={`border-[#e0eaff] focus:border-white text-sm bg-[#002060] text-white placeholder:text-[#e0eaff] ${errors.phoneNumber ? "border-red-400" : ""}`}
              />
              {errors.phoneNumber && <p className="text-xs text-red-500">{errors.phoneNumber}</p>}
            </div>

            <div className="space-y-1">
              <Label htmlFor="businessLocation" className="flex items-center gap-2 text-sm text-white drop-shadow">
                <MapPin className="h-4 w-4 text-white drop-shadow-lg" />
                Business Location
              </Label>
              <Select
                value={formData.businessLocation}
                onValueChange={(value) => handleInputChange("businessLocation", value)}
              >
                <SelectTrigger
                  className={`w-full border-[#e0eaff] focus:border-white text-sm bg-[#002060] text-white placeholder:text-[#003087] ${errors.businessLocation ? "border-red-400" : ""}`}
                >
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {nigerianStates.map((state) => (
                    <SelectItem key={state} value={state} className="text-sm">
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.businessLocation && <p className="text-xs text-red-500">{errors.businessLocation}</p>}
            </div>

            <Button
              type="submit"
              className="w-full bg-[#003087] hover:bg-[#001f5c] text-white py-3 text-sm font-bold rounded-full mt-8 shadow-[0_4px_24px_0_rgba(255,255,255,0.5)] transition-all duration-300"
            >
              <span className="inline-block mr-2 align-middle">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="white" />
                  <path d="M6 10.5L9 13.5L14 8.5" stroke="#003087" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              Continue to Attire Selection
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
