"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3" role="region" aria-label="Contact rapide">
      {hovered && (
        <div className="bg-card text-foreground text-sm font-medium px-4 py-2 rounded-lg shadow-lg whitespace-nowrap animate-in slide-in-from-right-2 duration-200 border border-border">
          Contactez-nous sur WhatsApp
        </div>
      )}
      <a
        href="https://wa.me/594694435484?text=Bonjour%2C%20je%20souhaite%20avoir%20des%20informations%20sur%20vos%20services%20GUYA%20FIBRE."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter GUYA FIBRE sur WhatsApp - +594 6 94 43 54 84"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#1fba59] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-none" aria-hidden="true" />
      </a>
    </div>
  )
}
