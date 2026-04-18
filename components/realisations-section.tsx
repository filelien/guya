import Image from "next/image"
import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"

const projects = [
  {
    id: "ftth-cayenne",
    title: "Déploiement FTTH — Expansion Cayenne Centre",
    location: "Cayenne",
    scope: "1 200 prises résidentielles",
    tags: ["FTTH", "Génie civil", "Soudure fusion"],
    image: "/images/project-cayenne.jpg",
  },
  {
    id: "lycee-melkior",
    title: "Infrastructure Éducation — Lycée Melkior-Garré",
    location: "Cayenne",
    scope: "Réseaux inter-bâtiments 1Gbps",
    tags: ["FTTO", "Éducation", "Haute performance"],
    image: "/images/project-lycee.jpg",
  },
  {
    id: "communes-ouest",
    title: "Aménagement Rural — Communes Ouest",
    location: "Saint-Laurent-du-Maroni",
    scope: "45 km fibre aérien multi-zones",
    tags: ["Aérien", "Zone rurale", "Logistique"],
    image: "/images/project-rural.jpg",
  },
  {
    id: "port-degrad",
    title: "Liaison Entreprise Dédiée — Port Dégrad",
    location: "Rémire-Montjoly",
    scope: "Fibre dédiée 10 Gbps SLA 99.9%",
    tags: ["FTTO", "Entreprise", "Critique"],
    image: "/images/project-port.jpg",
  },
  {
    id: "maintenance-operateur",
    title: "Contrat Support National — Opérateur Télécom",
    location: "Toute la Guyane",
    scope: "Maintenance préventive + astreinte 24/7",
    tags: ["Maintenance", "Support", "Nationwide"],
    image: "/images/project-maintenance.jpg",
  },
  {
    id: "village-aps",
    title: "Connectivité Isolée — Villages Intérieur",
    location: "Intérieur amazonien",
    scope: "Desserte fibre site isolé (pirogue)",
    tags: ["Zone isolée", "Pirogue", "FTTH"],
    image: "/images/project-village.jpg",
  },
]

export function RealisationsSection() {
  return (
    <section id="realisations" className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-sm text-primary font-medium mb-5 border border-primary/20">
              Nos réalisations
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">
              Des projets concrets sur tout le territoire
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
              De Cayenne aux communes de l&apos;intérieur, nos équipes interviennent partout où la fibre est nécessaire.
            </p>
          </div>
          <Link
            href="/projets"
            className="flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all shrink-0"
          >
            Voir tous les projets <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display font-semibold text-foreground text-base mb-2 leading-snug">{project.title}</h3>

                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  {project.location} — {project.scope}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
