import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export function CTABanner() {
  return (
    <section
      className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4))",
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 30% 50%, oklch(0.65 0.13 180 / 0.4), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container-wide text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 text-balance">
          Prêt à connecter votre projet fibre{" "}
          <span className="text-primary">avec les meilleurs du terrain ?</span>
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto text-pretty">
          GUYA FIBRE transforme les défis les plus complexes en solutions fiables et performantes. Déploiement complet, maintenance 24/7, expertise locale incomparable. Devis gratuit, sans engagement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/30"
          >
            Demander une prise de contact
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="tel:+594 694435484"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
          >
            <Phone className="w-5 h-5" />
            Appeler directement
          </a>
        </div>
      </div>
    </section>
  )
}