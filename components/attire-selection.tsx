"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check } from "lucide-react"

interface AttireSelectionProps {
  onSelect: (attire: { name: string; image: string; description: string }) => void
  onBack: () => void
}

const culturalAttires = [
  {
    name: "Yoruba Agbada",
    image: "/yoruba-agbada-traditional-nigerian-flowing-robe.jpg",
    description: "Traditional flowing robe symbolizing dignity and cultural pride.",
  },
  {
    name: "Igbo Isiagu",
    image: "/igbo-isiagu-traditional-nigerian-shirt-with-lion-h.jpg",
    description: "Traditional shirt with lion patterns representing strength.",
  },
  {
    name: "Hausa Babban Riga",
    image: "/hausa-babban-riga-traditional-nigerian-grand-robe.jpg",
    description: "Grand robe featuring intricate embroidery and elegant design.",
  },
  {
    name: "Fulani Attire",
    image: "/fulani-traditional-nigerian-attire-with-colorful-p.jpg",
    description: "Colorful traditional attire known for vibrant patterns.",
  },
  {
    name: "Yoruba Gele & Buba",
    image: "/yoruba-gele-headwrap-and-buba-traditional-nigerian.jpg",
    description: "Traditional women's attire with iconic Gele headwrap.",
  },
  {
    name: "Igbo George Wrapper",
    image: "/igbo-george-wrapper-traditional-nigerian-women-att.jpg",
    description: "Elegant wrapper representing grace and cultural heritage.",
  },
]

export function AttireSelection({ onSelect, onBack }: AttireSelectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAttire, setSelectedAttire] = useState<(typeof culturalAttires)[0] | null>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && currentIndex < culturalAttires.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  const handleSelect = () => {
    if (selectedAttire) {
      onSelect(selectedAttire)
    }
  }

  const currentAttire = culturalAttires[currentIndex]

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-white to-green-50" />

      <div className="relative z-10 py-4 px-4">
        <div className="max-w-sm mx-auto">
          <Button variant="ghost" onClick={onBack} className="mb-4 text-gray-600 hover:text-gray-800 p-2">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span className="text-sm">Back</span>
          </Button>

          <div className="text-center mb-4">
            <h1 className="text-lg font-bold text-gray-800 mb-1">Choose Your Attire</h1>
            <p className="text-xs text-gray-500">Swipe left or right to explore</p>
          </div>

          <div
            ref={containerRef}
            className="relative mb-4"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="relative">
                <img
                  src={currentAttire.image || "/placeholder.svg"}
                  alt={currentAttire.name}
                  className="w-full h-96 object-cover"
                />

                {selectedAttire?.name === currentAttire.name && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full p-2">
                    <Check className="h-4 w-4" />
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{currentAttire.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">{currentAttire.description}</p>

                <Button
                  onClick={() => setSelectedAttire(currentAttire)}
                  variant={selectedAttire?.name === currentAttire.name ? "default" : "outline"}
                  className={`w-full text-sm py-3 rounded-full font-medium ${
                    selectedAttire?.name === currentAttire.name
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "border-gray-200 hover:border-orange-500 hover:bg-orange-50"
                  }`}
                >
                  {selectedAttire?.name === currentAttire.name ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Selected
                    </>
                  ) : (
                    "Select This Attire"
                  )}
                </Button>
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {culturalAttires.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-orange-600 scale-125" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {selectedAttire && (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
              <div className="text-center">
                <p className="text-sm text-green-700 mb-1">Ready to proceed with</p>
                <p className="text-lg font-bold text-green-800 mb-4">{selectedAttire.name}</p>
                <Button
                  onClick={handleSelect}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-base font-semibold rounded-full shadow-lg"
                >
                  Complete Registration
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
