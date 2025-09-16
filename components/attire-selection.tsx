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
    <div className="min-h-screen relative overflow-hidden bg-[#003087]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#003087] via-[#003087] to-[#001f5c]" />

  <div className="relative z-10 py-4 px-4">
        <div className="max-w-sm mx-auto">
          <Button variant="ghost" onClick={onBack} className="mb-4 text-white hover:text-[#e0eaff] p-2">
            <ArrowLeft className="h-4 w-4 mr-1 text-white drop-shadow-lg" />
            <span className="text-sm">Back</span>
          </Button>

          <div className="text-center mb-4">
            <h1 className="text-lg font-bold text-white mb-1 drop-shadow-lg">Choose Your Attire</h1>
            <p className="text-xs text-[#e0eaff]">Swipe left or right to explore</p>
          </div>

          <div
            ref={containerRef}
            className="relative mb-4 flex items-center justify-center"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Left Arrow */}
            <button
              type="button"
              aria-label="Previous attire"
              className="absolute left-2 z-20 bg-[#003087] hover:bg-[#001f5c] text-white rounded-full p-2 shadow-lg transition-all duration-200 disabled:opacity-40 flex items-center justify-center"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
              disabled={currentIndex === 0}
              onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>

            <div className="bg-[#002060] rounded-3xl shadow-xl overflow-hidden border border-[#e0eaff] w-full">
              <div className="relative">
                <img
                  src={currentAttire.image || "/placeholder.svg"}
                  alt={currentAttire.name}
                  className="w-full h-96 object-cover border-b-4 border-[#003087]"
                />

                {selectedAttire?.name === currentAttire.name && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full p-2">
                    <Check className="h-4 w-4" />
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">{currentAttire.name}</h3>
                <p className="text-sm text-[#e0eaff] leading-relaxed mb-6">{currentAttire.description}</p>

                <Button
                  onClick={() => setSelectedAttire(currentAttire)}
                  variant={selectedAttire?.name === currentAttire.name ? "default" : "outline"}
                  className={`w-full text-sm py-3 rounded-full font-bold shadow-[0_4px_24px_0_rgba(255,255,255,0.5)] transition-all duration-300 ${
                    selectedAttire?.name === currentAttire.name
                      ? "bg-[#003087] hover:bg-[#001f5c] text-white"
                      : "border-[#e0eaff] hover:border-[#003087] hover:bg-[#002060] text-[#003087]"
                  }`}
                >
                  {selectedAttire?.name === currentAttire.name ? (
                    <>
                      <Check className="h-4 w-4 mr-2 text-white drop-shadow-lg" />
                      Selected
                    </>
                  ) : (
                    "Select This Attire"
                  )}
                </Button>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              type="button"
              aria-label="Next attire"
              className="absolute right-2 z-20 bg-[#003087] hover:bg-[#001f5c] text-white rounded-full p-2 shadow-lg transition-all duration-200 disabled:opacity-40 flex items-center justify-center"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
              disabled={currentIndex === culturalAttires.length - 1}
              onClick={() => currentIndex < culturalAttires.length - 1 && setCurrentIndex(currentIndex + 1)}
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>

            {/* Dot navigation aligned at the bottom, hidden when selectedAttire exists */}
            {!selectedAttire && (
              <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                {culturalAttires.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-[0_2px_8px_0_rgba(255,255,255,0.3)] ${
                      index === currentIndex ? "bg-[#003087] scale-125" : "bg-[#e0eaff]"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {selectedAttire && (
            <div className="bg-gradient-to-r from-[#003087] to-[#001f5c] rounded-2xl p-6 border border-[#e0eaff] shadow-lg">
              <div className="text-center">
                <p className="text-sm text-white mb-1">Ready to proceed with</p>
                <p className="text-lg font-bold text-[#e0eaff] mb-4">{selectedAttire.name}</p>
                <Button
                  onClick={handleSelect}
                  className="w-full bg-white hover:bg-[#e0eaff] text-[#003087] py-4 text-base font-bold rounded-full shadow-[0_4px_24px_0_rgba(255,255,255,0.5)] transition-all duration-300"
                >
                  <span className="inline-block mr-2 align-middle">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#003087" />
                      <path d="M6 10.5L9 13.5L14 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
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
