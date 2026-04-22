"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

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
  const { locale } = useLanguage()
  const projectI18n: Record<string, Partial<Record<string, { title: string; location?: string; scope?: string; tags?: string[] }>>> = {
    "ftth-cayenne": {
      en: { title: "FTTH rollout — Cayenne Center expansion", scope: "1,200 residential lines" },
      es: { title: "Despliegue FTTH — Expansión Cayena Centro", scope: "1 200 tomas residenciales" },
      pt: { title: "Implantação FTTH — Expansão Cayenne Centro", scope: "1 200 pontos residenciais" },
      nl: { title: "FTTH-uitrol — uitbreiding Cayenne centrum", scope: "1.200 residentiële aansluitingen" },
      gcr: { title: "Déplwayman FTTH — Kayèn sant", scope: "1 200 priz rezidans" },
      ar: { title: "نشر FTTH — توسعة وسط كايين", scope: "1200 خط سكني" },
      zh: { title: "FTTH 部署 — 卡宴中心扩展", scope: "1200 户接入" },
    },
    "lycee-melkior": {
      en: { title: "Education network — Lycée Melkior-Garré", scope: "Inter-building network 1Gbps" },
      es: { title: "Red educativa — Lycée Melkior-Garré", scope: "Red entre edificios 1Gbps" },
      pt: { title: "Rede educação — Lycée Melkior-Garré", scope: "Rede inter-edifícios 1Gbps" },
      nl: { title: "Onderwijsnetwerk — Lycée Melkior-Garré", scope: "Inter-gebouw netwerk 1Gbps" },
      gcr: { title: "Rézo édikasyon — Lycée Melkior-Garré", scope: "Rézo ant-batiman 1Gbps" },
      ar: { title: "شبكة تعليمية — Lycée Melkior-Garré", scope: "شبكة بين المباني 1Gbps" },
      zh: { title: "教育网络 — Melkior-Garré 高中", scope: "楼宇互联 1Gbps" },
    },
    "communes-ouest": {
      en: { title: "Rural development — West communes", scope: "45 km aerial fiber multi-zones" },
      es: { title: "Desarrollo rural — Comunas del Oeste", scope: "45 km de fibra aérea" },
      pt: { title: "Desenvolvimento rural — Comunas do Oeste", scope: "45 km de fibra aérea" },
      nl: { title: "Plattelandsproject — Westelijke gemeenten", scope: "45 km luchtglasvezel" },
      gcr: { title: "Projé riral — Komin lòwès", scope: "45 km fib aérien" },
      ar: { title: "تطوير ريفي — بلديات الغرب", scope: "45 كم ألياف هوائية" },
      zh: { title: "农村覆盖 — 西部市镇", scope: "45 公里架空光纤" },
    },
    "port-degrad": {
      en: { title: "Dedicated enterprise link — Port Dégrad", scope: "Dedicated fiber 10Gbps (SLA 99.9%)" },
      es: { title: "Enlace empresarial dedicado — Port Dégrad", scope: "Fibra dedicada 10Gbps (SLA 99.9%)" },
      pt: { title: "Link empresarial dedicado — Port Dégrad", scope: "Fibra dedicada 10Gbps (SLA 99,9%)" },
      nl: { title: "Dedicated bedrijfslink — Port Dégrad", scope: "Dedicated glasvezel 10Gbps (SLA 99,9%)" },
      gcr: { title: "Lyézon biznis dédiyé — Port Dégrad", scope: "Fib dédiyé 10Gbps (SLA 99.9%)" },
      ar: { title: "وصلة أعمال مخصصة — Port Dégrad", scope: "ألياف مخصصة 10Gbps (SLA 99.9%)" },
      zh: { title: "企业专线 — Port Dégrad", scope: "10Gbps 专线（SLA 99.9%）" },
    },
    "maintenance-operateur": {
      en: { title: "National support contract — Telecom operator", location: "All French Guiana", scope: "Preventive maintenance + 24/7 on-call" },
      es: { title: "Contrato de soporte — Operador telecom", location: "Toda la Guayana", scope: "Mantenimiento + guardia 24/7" },
      pt: { title: "Contrato de suporte — Operadora telecom", location: "Toda a Guiana", scope: "Manutenção + plantão 24/7" },
      nl: { title: "Supportcontract — Telecomoperator", location: "Heel Frans-Guyana", scope: "Preventief onderhoud + 24/7 wachtdienst" },
      gcr: { title: "Kontra sipò — Opreratè télékom", location: "Tout Lagwiyàn", scope: "Antrétyenn + astreynt 24/7" },
      ar: { title: "عقد دعم — مشغّل اتصالات", location: "كامل غويانا الفرنسية", scope: "صيانة + دعم 24/7" },
      zh: { title: "运维支持合同 — 电信运营商", location: "法属圭亚那全境", scope: "预防性维护 + 7x24 值守" },
    },
    "village-aps": {
      en: { title: "Remote connectivity — Inland villages", location: "Amazon inland", scope: "Fiber service to remote site (pirogue)" },
      es: { title: "Conectividad aislada — Pueblos del interior", location: "Interior amazónico", scope: "Fibra a sitio aislado (pirogua)" },
      pt: { title: "Conectividade isolada — Vilas do interior", location: "Interior amazônico", scope: "Fibra para local isolado (pirogue)" },
      nl: { title: "Geïsoleerde connectiviteit — Binnenland dorpen", location: "Amazone binnenland", scope: "Glasvezel naar afgelegen site (pirogue)" },
      gcr: { title: "Konèktivité izolé — Vilaj andidan", location: "Anndan amazòn", scope: "Fib pou koté izolé (pirog)" },
      ar: { title: "اتصال معزول — قرى الداخل", location: "داخل الأمازون", scope: "ألياف لموقع معزول (قارب)" },
      zh: { title: "偏远接入 — 内陆村落", location: "亚马逊内陆", scope: "偏远站点接入（独木舟）" },
    },
  }

  const getProjectText = (p: (typeof projects)[number]) => {
    const localized = projectI18n[p.id]?.[locale]
    const tagLabels: Record<string, Record<string, string>> = {
      FTTH: { fr: "FTTH", en: "FTTH", es: "FTTH", pt: "FTTH", nl: "FTTH", gcr: "FTTH", ar: "FTTH", zh: "FTTH" },
      FTTO: { fr: "FTTO", en: "FTTO", es: "FTTO", pt: "FTTO", nl: "FTTO", gcr: "FTTO", ar: "FTTO", zh: "FTTO" },
      "Génie civil": { fr: "Génie civil", en: "Civil works", es: "Obra civil", pt: "Obra civil", nl: "Civiele werken", gcr: "Jéni sivil", ar: "أشغال مدنية", zh: "土建工程" },
      "Soudure fusion": { fr: "Soudure fusion", en: "Fusion splicing", es: "Fusión", pt: "Fusão", nl: "Fusielassen", gcr: "Fusion", ar: "لحام انصهاري", zh: "熔接" },
      Éducation: { fr: "Éducation", en: "Education", es: "Educación", pt: "Educação", nl: "Onderwijs", gcr: "Edikasyon", ar: "تعليم", zh: "教育" },
      "Haute performance": { fr: "Haute performance", en: "High performance", es: "Alto rendimiento", pt: "Alto desempenho", nl: "Hoge prestaties", gcr: "Wo performans", ar: "أداء عالٍ", zh: "高性能" },
      Aérien: { fr: "Aérien", en: "Aerial", es: "Aéreo", pt: "Aéreo", nl: "Lucht", gcr: "Aérien", ar: "هوائي", zh: "架空" },
      "Zone rurale": { fr: "Zone rurale", en: "Rural", es: "Rural", pt: "Rural", nl: "Landelijk", gcr: "Kanpay", ar: "ريفي", zh: "乡村" },
      Logistique: { fr: "Logistique", en: "Logistics", es: "Logística", pt: "Logística", nl: "Logistiek", gcr: "Logistik", ar: "لوجستيات", zh: "物流" },
      Entreprise: { fr: "Entreprise", en: "Business", es: "Empresa", pt: "Empresa", nl: "Bedrijf", gcr: "Biznis", ar: "أعمال", zh: "企业" },
      Critique: { fr: "Critique", en: "Critical", es: "Crítico", pt: "Crítico", nl: "Kritiek", gcr: "Kritik", ar: "حرِج", zh: "关键" },
      Maintenance: { fr: "Maintenance", en: "Maintenance", es: "Mantenimiento", pt: "Manutenção", nl: "Onderhoud", gcr: "Antrétyenn", ar: "صيانة", zh: "运维" },
      Support: { fr: "Support", en: "Support", es: "Soporte", pt: "Suporte", nl: "Support", gcr: "Sipò", ar: "دعم", zh: "支持" },
      Nationwide: { fr: "Territoire", en: "Territory-wide", es: "Territorio", pt: "Território", nl: "Gebied", gcr: "Téritwa", ar: "على الإقليم", zh: "全域" },
      "Zone isolée": { fr: "Zone isolée", en: "Remote", es: "Aislado", pt: "Isolado", nl: "Afgelegen", gcr: "Izolé", ar: "معزول", zh: "偏远" },
      Pirogue: { fr: "Pirogue", en: "Pirogue", es: "Canoa", pt: "Canoa", nl: "Pirogue", gcr: "Pirog", ar: "قارب", zh: "独木舟" },
    }
    const displayTag = (tag: string) => tagLabels[tag]?.[locale] || tag
    return {
      title: localized?.title ?? p.title,
      location: localized?.location ?? p.location,
      scope: localized?.scope ?? p.scope,
      tags: (localized?.tags ?? p.tags).map(displayTag),
    }
  }
  const labels = {
    fr: { badge: "Nos réalisations", title: "Des projets concrets sur tout le territoire", subtitle: "De Cayenne aux communes de l'intérieur, nos équipes interviennent partout où la fibre est nécessaire.", cta: "Voir tous les projets" },
    en: { badge: "Our projects", title: "Real projects across the territory", subtitle: "From Cayenne to inland towns, our teams deploy fiber wherever needed.", cta: "See all projects" },
    es: { badge: "Nuestros proyectos", title: "Proyectos concretos en todo el territorio", subtitle: "De Cayena a las comunas del interior, intervenimos donde la fibra es necesaria.", cta: "Ver todos los proyectos" },
    pt: { badge: "Nossos projetos", title: "Projetos concretos em todo o território", subtitle: "De Caiena ao interior, nossas equipes atuam onde a fibra é necessária.", cta: "Ver todos os projetos" },
    nl: { badge: "Onze projecten", title: "Concrete projecten in het hele gebied", subtitle: "Van Cayenne tot het binnenland werken onze teams overal waar glasvezel nodig is.", cta: "Alle projecten bekijken" },
    gcr: { badge: "Travay nou", title: "Projé konkré toutpatou", subtitle: "Soti Kayèn jis andidan péyi-a, lékip nou ka entèvni patou fib-la ni bézwen.", cta: "Wè tout projé" },
    ar: { badge: "إنجازاتنا", title: "مشاريع واقعية في كامل الإقليم", subtitle: "من كايين إلى المناطق الداخلية، نتدخل أينما كانت الألياف مطلوبة.", cta: "عرض جميع المشاريع" },
    zh: { badge: "我们的案例", title: "覆盖全境的真实项目", subtitle: "从卡宴到内陆地区，我们在所有需要光纤的地方实施交付。", cta: "查看全部项目" },
  } as const
  const text = labels[locale as keyof typeof labels] || labels.fr
  return (
    <section id="realisations" className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-sm text-primary font-medium mb-5 border border-primary/20">
              {text.badge}
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">
              {text.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
              {text.subtitle}
            </p>
          </div>
          <Link
            href="/projets"
            className="flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all shrink-0"
          >
            {text.cta} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => {
            const p = getProjectText(project)
            return (
            <article
              key={project.id}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display font-semibold text-foreground text-base mb-2 leading-snug">{p.title}</h3>

                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  {p.location} — {p.scope}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
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
          )})}
        </div>
      </div>
    </section>
  )
}
