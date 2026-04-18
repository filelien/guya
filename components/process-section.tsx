import { ClipboardList, Compass, HardHat, Cable, ShieldCheck } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Audit & Diagnostic",
    description: "Visite terrain complète, analyse des besoins, étude du périmètre géographique. Définition clara des objectifs techniques et budgétaires.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Conception Réseau",
    description: "Relevés topographiques précis, modélisation 3D, plans APS/APD/DOE. Conception optimisée adaptée au terrain guyanais (forêt, fleuve, zones urbaines).",
  },
  {
    number: "03",
    icon: HardHat,
    title: "Déploiement Complet",
    description: "Génie civil (tranchées, fourreaux, chambres), tirage fibre optique, soudure par fusion, installation équipements PBO/BPE. Respect calendrier strict.",
  },
  {
    number: "04",
    icon: Cable,
    title: "Qualification & Tests",
    description: "Tests OTDR complets, mesures niveaux optiques, certification conformité normes. Livrables documentés (rapports, schémas, bon de recette).",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Mise en Service Opérationnelle",
    description: "Activation réseau, formation utilisateurs, démarrage maintenance contractuelle 24/7. Support technique permanent garanti.",
  },
]

export function ProcessSection() {
  return (
    <section className="section-padding bg-secondary dark:bg-card">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-sm text-primary font-medium mb-5 border border-primary/20">
            Notre méthode
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            De la conception à la mise en service
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
            Un processus rigoureux en 5 étapes, de la première prise de contact jusqu&apos;à l&apos;activation de votre réseau.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line (desktop) */}
          <div
            className="hidden lg:block absolute top-[3.25rem] left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="flex flex-col items-center text-center relative">
                  {/* Circle */}
                  <div className="relative mb-5">
                    <div className="w-14 h-14 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center relative z-10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-[9px] font-bold text-primary-foreground">{step.number}</span>
                    </div>
                  </div>

                  <h3 className="font-display text-base font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
