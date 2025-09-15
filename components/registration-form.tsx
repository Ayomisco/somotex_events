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
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-green-50" />
      <div className="absolute inset-0 opacity-5 bg-[url('/nigerian-traditional-cultural-attire-celebration-c.jpg')] bg-cover bg-center" />

      <div className="relative z-10 py-6 px-4">
        <div className="max-w-md mx-auto">
          <Button variant="ghost" onClick={onBack} className="mb-4 text-gray-600 hover:text-gray-800 p-2">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span className="text-sm">Back</span>
          </Button>

          <div className="text-center mb-8">
            <h1 className="text-xl font-bold text-gray-800 mb-1">{"Registration"}</h1>
            <p className="text-xs text-gray-600">{"Fill your details below"}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="fullName" className="flex items-center gap-2 text-sm text-gray-700">
                <User className="h-3 w-3 text-orange-600" />
                Full Name
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className={`border-gray-200 focus:border-orange-500 text-sm ${errors.fullName ? "border-red-400" : ""}`}
              />
              {errors.fullName && <p className="text-xs text-red-500">{errors.fullName}</p>}
            </div>

            <div className="space-y-1">
              <Label htmlFor="businessName" className="flex items-center gap-2 text-sm text-gray-700">
                <Building className="h-3 w-3 text-orange-600" />
                Business Name
              </Label>
              <Input
                id="businessName"
                type="text"
                placeholder="Your business name"
                value={formData.businessName}
                onChange={(e) => handleInputChange("businessName", e.target.value)}
                className={`border-gray-200 focus:border-orange-500 text-sm ${errors.businessName ? "border-red-400" : ""}`}
              />
              {errors.businessName && <p className="text-xs text-red-500">{errors.businessName}</p>}
            </div>

            <div className="space-y-1">
              <Label htmlFor="email" className="flex items-center gap-2 text-sm text-gray-700">
                <Mail className="h-3 w-3 text-orange-600" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`border-gray-200 focus:border-orange-500 text-sm ${errors.email ? "border-red-400" : ""}`}
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>

            <div className="space-y-1">
              <Label htmlFor="phoneNumber" className="flex items-center gap-2 text-sm text-gray-700">
                <Phone className="h-3 w-3 text-orange-600" />
                Phone Number
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="+234 xxx xxx xxxx"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                className={`border-gray-200 focus:border-orange-500 text-sm ${errors.phoneNumber ? "border-red-400" : ""}`}
              />
              {errors.phoneNumber && <p className="text-xs text-red-500">{errors.phoneNumber}</p>}
            </div>

            <div className="space-y-1">
              <Label htmlFor="businessLocation" className="flex items-center gap-2 text-sm text-gray-700">
                <MapPin className="h-3 w-3 text-orange-600" />
                Business Location
              </Label>
              <Select
                value={formData.businessLocation}
                onValueChange={(value) => handleInputChange("businessLocation", value)}
              >
                <SelectTrigger
                  className={`border-gray-200 focus:border-orange-500 text-sm ${errors.businessLocation ? "border-red-400" : ""}`}
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
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-sm font-medium rounded-full mt-8"
            >
              Continue to Attire Selection
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
