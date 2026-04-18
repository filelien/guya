import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

const faqs = [
  {
    q: "Quel est votre délai de déploiement standard ?",
    a: "Dépend du projet : un raccordement résidentiel simple = 3-5 jours. Un déploiement multi-zones = 4-12 semaines. L'étude de faisabilité (2-3 semaines) détermine le calendrier exact. Nous respectons rigoureusement les délais contractuels.",
  },
  {
    q: "Vous intervenez vraiment en zone isolée de l'Intérieur ?",
    a: "Oui, c'est notre spécialité. Nous avons réalisé 15+ projets en forêt amazonienne. Accès par pirogue, hélicoptère si nécessaire, équipes mobiles, logistique adaptée. Pas de site impossible pour GUYA FIBRE.",
  },
  {
    q: "FTTH ou FTTO ? Quelle différence concrète ?",
    a: "FTTH = fibre à votre domicile (particuliers, débit partagé mutualisé). FTTO = fibre dédiée à votre entreprise (garantie SLA 99.9%, débit garanti, documentation complète). Prix différents selon besoins.",
  },
  {
    q: "Quel est votre SLA (garantie disponibilité) ?",
    a: "Pour FTTO entreprises : 99.9% uptime garanti. Pour FTTH résidentiels : maintenance préventive régulière + intervention d'urgence 24h. Pour opérateurs : contrats sur mesure avec pénalités.",
  },
  {
    q: "Combien coûte une fibre optique en Guyane vs métropole ?",
    a: "Plus cher (+20-40%) en raison terrain complexe, logistique, expertise climat. Mais moins cher que faire intervenir prestataire métropole (+100-150%). GUYA FIBRE = meilleur ROI local.",
  },
  {
    q: "Proposez-vous maintenance après installation ?",
    a: "Bien sûr. Maintenance préventive contractuelle, inspections OTDR mensuelles, rapports visite, astreinte 24/7/365, intervention d'urgence guaranteed. Maintenance = part essentielle de nos services.",
  },
]

export function FAQSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — header */}
          <div className="lg:sticky lg:top-28 self-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-sm text-primary font-medium mb-5 border border-primary/20">
              Questions fréquentes
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Vos questions, nos réponses
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
              Vous ne trouvez pas la réponse à votre question ? N&apos;hésitez pas à nous contacter directement.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-card transition-colors"
            >
              Poser une question
            </Link>
          </div>

          {/* Right — accordion */}
          <div>
            <Accordion type="single" collapsible className="flex flex-col gap-2">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card/80 dark:bg-secondary/60 border border-border/60 rounded-xl px-5 overflow-hidden hover:border-border hover:bg-card dark:hover:bg-secondary transition-all data-[state=open]:border-primary/50 data-[state=open]:bg-card dark:data-[state=open]:bg-secondary data-[state=open]:shadow-lg"
                >
                  <AccordionTrigger className="text-sm font-semibold text-foreground text-left py-4 hover:no-underline hover:text-primary transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
