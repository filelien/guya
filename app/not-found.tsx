import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Visual */}
          <div className="relative mb-8">
            <div className="text-[150px] md:text-[200px] font-display font-bold text-secondary leading-none select-none" aria-hidden="true">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                <Search className="w-10 h-10 md:w-14 md:h-14 text-primary" />
              </div>
            </div>
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Page introuvable
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
            Oups ! La page que vous recherchez semble avoir été déconnectée du réseau. 
            Pas de panique, nos techniciens n&apos;ont pas coupé la fibre !
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Retour à l&apos;accueil
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="border-border text-foreground hover:bg-card"
            >
              <Link href="/contact">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Contactez-nous
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Pages populaires :</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { href: "/services", label: "Nos services" },
                { href: "/offres", label: "Nos offres" },
                { href: "/contact", label: "Demander une prise de contact" },
                { href: "/projets", label: "Nos réalisations" },
              ].map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className="text-primary hover:text-primary/80 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
