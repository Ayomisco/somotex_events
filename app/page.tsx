"use client"

import { useState } from "react"
import { LandingPage } from "@/components/landing-page"
import { RegistrationForm } from "@/components/registration-form"
import { AttireSelection } from "@/components/attire-selection"
import { SuccessPage } from "@/components/success-page"

export type RegistrationData = {
  fullName: string
  businessName: string
  email: string
  phoneNumber: string
  businessLocation: string
  selectedAttire?: {
    name: string
    image: string
    description: string
  }
}

export default function () {
  const [currentStep, setCurrentStep] = useState<"landing" | "form" | "attire" | "success">("landing")
  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    fullName: "",
    businessName: "",
    email: "",
    phoneNumber: "",
    businessLocation: "",
  })

  const handleStartRegistration = () => {
    setCurrentStep("form")
  }

  const handleFormSubmit = (data: Omit<RegistrationData, "selectedAttire">) => {
    setRegistrationData((prev) => ({ ...prev, ...data }))
    setCurrentStep("attire")
  }

  const handleAttireSelection = (attire: { name: string; image: string; description: string }) => {
    setRegistrationData((prev) => ({ ...prev, selectedAttire: attire }))
    setCurrentStep("success")
  }

  const handleBackToLanding = () => {
    setCurrentStep("landing")
    setRegistrationData({
      fullName: "",
      businessName: "",
      email: "",
      phoneNumber: "",
      businessLocation: "",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {currentStep === "landing" && <LandingPage onStartRegistration={handleStartRegistration} />}
      {currentStep === "form" && (
        <RegistrationForm onSubmit={handleFormSubmit} onBack={() => setCurrentStep("landing")} />
      )}
      {currentStep === "attire" && (
        <AttireSelection onSelect={handleAttireSelection} onBack={() => setCurrentStep("form")} />
      )}
      {currentStep === "success" && (
        <SuccessPage registrationData={registrationData} onBackToHome={handleBackToLanding} />
      )}
    </div>
  )
}
