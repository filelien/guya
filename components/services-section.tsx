"use client"

import Image from "next/image"
import Link from "next/link"
import { Compass, HardHat, Home, Zap, Server, CheckCircle2, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

const services = [
  {
    id: "etudes",
    number: "01",
    icon: Compass,
    titleKey: "services.studies",
    descKey: "services.studiesDesc",
    features: ["Études de faisabilité FTTH / FTTO", "Conception et plans APS / APD / DOE", "Cartographie SIG géoréférencée", "Dossiers réglementaires DT / DICT"],
    image: "/images/service-etudes.jpg",
    benefit: "Conception optimisée",
  },
  {
    id: "deploiement",
    number: "02",
    icon: HardHat,
    titleKey: "services.deployment",
    descKey: "services.deploymentDesc",
    features: ["Génie civil : tranchées, fourreaux, chambres", "Réseaux aériens sur poteaux", "Tirage de fibre et soudure par fusion", "Installation PBO / BPE / PM"],
    image: "/images/service-deploiement.jpg",
    benefit: "Infrastructure durable",
  },
  {
    id: "raccordement",
    number: "03",
    icon: Home,
    titleKey: "services.connection",
    descKey: "services.connectionDesc",
    features: ["FTTH particuliers : PTO, ONT, mise en service", "FTTO entreprises : fibre dédiée", "Tests et mesures OTDR", "Validation finale et bon de recette"],
    image: "/images/service-raccordement.jpg",
    benefit: "Mise en service rapide",
  },
  {
    id: "maintenance",
    number: "04",
    icon: Zap,
    titleKey: "services.maintenance",
    descKey: "services.maintenanceDesc",
    features: ["Inspections périodiques et contrôles OTDR", "Localisation de pannes par réflectométrie", "Diagnostic des équipements actifs", "Interventions d'urgence 7j/7"],
    image: "/images/service-maintenance.jpg",
    benefit: "Disponibilité garantie",
  },
  {
    id: "entreprises",
    number: "05",
    icon: Server,
    titleKey: "services.enterprise",
    descKey: "services.enterpriseDesc",
    features: ["Réseaux d'infrastructure interne", "Smart city et projets territoriaux", "Infrastructures publiques", "Accompagnement sur mesure"],
    image: "/images/service-entreprises.jpg",
    benefit: "Sur mesure",
  },
]

export function ServicesSection() {
  const { t, locale } = useLanguage()
  const localized = {
    fr: {
      ctaTitle: "Un projet fibre en Guyane ?",
      features: [
        ["Études de faisabilité FTTH / FTTO", "Conception et plans APS / APD / DOE", "Cartographie SIG géoréférencée", "Dossiers réglementaires DT / DICT"],
        ["Génie civil : tranchées, fourreaux, chambres", "Réseaux aériens sur poteaux", "Tirage de fibre et soudure par fusion", "Installation PBO / BPE / PM"],
        ["FTTH particuliers : PTO, ONT, mise en service", "FTTO entreprises : fibre dédiée", "Tests et mesures OTDR", "Validation finale et bon de recette"],
        ["Inspections périodiques et contrôles OTDR", "Localisation de pannes par réflectométrie", "Diagnostic des équipements actifs", "Interventions d'urgence 7j/7"],
        ["Réseaux d'infrastructure interne", "Smart city et projets territoriaux", "Infrastructures publiques", "Accompagnement sur mesure"],
      ],
      benefits: ["Conception optimisée", "Infrastructure durable", "Mise en service rapide", "Disponibilité garantie", "Sur mesure"],
    },
    en: {
      ctaTitle: "A fiber project in French Guiana?",
      features: [
        ["FTTH / FTTO feasibility studies", "APS / APD / DOE design plans", "Georeferenced GIS mapping", "Regulatory DT / DICT files"],
        ["Civil works: trenches, ducts, chambers", "Aerial networks on poles", "Fiber pulling and fusion splicing", "PBO / BPE / PM installation"],
        ["Residential FTTH: PTO, ONT, activation", "Business FTTO: dedicated fiber", "OTDR testing and measurements", "Final validation and acceptance report"],
        ["Periodic inspections and OTDR checks", "Fault location by reflectometry", "Active equipment diagnostics", "24/7 emergency interventions"],
        ["Internal infrastructure networks", "Smart city and regional projects", "Public infrastructures", "Tailored support"],
      ],
      benefits: ["Optimized design", "Durable infrastructure", "Fast activation", "Guaranteed availability", "Tailored"],
    },
    es: {
      ctaTitle: "¿Un proyecto de fibra en Guayana?",
      features: [
        ["Estudios de viabilidad FTTH / FTTO", "Planos APS / APD / DOE", "Cartografía SIG georreferenciada", "Expedientes reglamentarios DT / DICT"],
        ["Obra civil: zanjas, conductos, cámaras", "Redes aéreas sobre postes", "Tendido de fibra y fusión", "Instalación PBO / BPE / PM"],
        ["FTTH residencial: PTO, ONT, activación", "FTTO empresas: fibra dedicada", "Pruebas y mediciones OTDR", "Validación final y acta de recepción"],
        ["Inspecciones periódicas y controles OTDR", "Localización de fallas por reflectometría", "Diagnóstico de equipos activos", "Intervenciones de emergencia 24/7"],
        ["Redes de infraestructura interna", "Smart city y proyectos territoriales", "Infraestructuras públicas", "Acompañamiento a medida"],
      ],
      benefits: ["Diseño optimizado", "Infraestructura duradera", "Puesta en servicio rápida", "Disponibilidad garantizada", "A medida"],
    },
    pt: {
      ctaTitle: "Um projeto de fibra na Guiana?",
      features: [
        ["Estudos de viabilidade FTTH / FTTO", "Planos APS / APD / DOE", "Cartografia SIG georreferenciada", "Dossiês regulatórios DT / DICT"],
        ["Obra civil: valas, dutos, câmaras", "Redes aéreas em postes", "Lançamento de fibra e fusão", "Instalação PBO / BPE / PM"],
        ["FTTH residencial: PTO, ONT, ativação", "FTTO empresas: fibra dedicada", "Testes e medições OTDR", "Validação final e aceite técnico"],
        ["Inspeções periódicas e controles OTDR", "Localização de falhas por reflectometria", "Diagnóstico de equipamentos ativos", "Intervenções de urgência 24/7"],
        ["Redes de infraestrutura interna", "Smart city e projetos territoriais", "Infraestruturas públicas", "Acompanhamento sob medida"],
      ],
      benefits: ["Projeto otimizado", "Infraestrutura durável", "Ativação rápida", "Disponibilidade garantida", "Sob medida"],
    },
    nl: {
      ctaTitle: "Een glasvezelproject in Guyana?",
      features: [
        ["FTTH / FTTO haalbaarheidsstudies", "APS / APD / DOE plannen", "Gegeorefereerde GIS-cartografie", "Regelgevende DT / DICT dossiers"],
        ["Civiele werken: sleuven, buizen, kamers", "Luchtlijnen op palen", "Vezeltrekken en fusielassen", "Installatie PBO / BPE / PM"],
        ["FTTH residentieel: PTO, ONT, activatie", "FTTO bedrijven: dedicated glasvezel", "OTDR-tests en metingen", "Eindvalidatie en oplevering"],
        ["Periodieke inspecties en OTDR-controles", "Storingslokalisatie met reflectometrie", "Diagnose actieve apparatuur", "24/7 noodinterventies"],
        ["Interne infrastructuurnetwerken", "Smart city en gebiedsprojecten", "Publieke infrastructuren", "Begeleiding op maat"],
      ],
      benefits: ["Geoptimaliseerd ontwerp", "Duurzame infrastructuur", "Snelle ingebruikname", "Gegarandeerde beschikbaarheid", "Op maat"],
    },
    gcr: {
      ctaTitle: "On projé fib an Lagwiyàn?",
      features: [
        ["Étid fèzabilité FTTH / FTTO", "Plan APS / APD / DOE", "Katografi SIG jéyoréféransé", "Dosyé réglementè DT / DICT"],
        ["Jéni sivil: tranché, fouro, chanm", "Rézo aérien anlè poto", "Tiraj fib épi soudaj fusion", "Instalasyon PBO / BPE / PM"],
        ["FTTH patikilyé: PTO, ONT, miz an sèrvis", "FTTO biznis: fib dédiyé", "Tès épi mezi OTDR", "Validasyon final épi bon rékèt"],
        ["Enspeksyon périodik épi kontwòl OTDR", "Lokalizasyon pann pa réfléktométri", "Dyagnostik ekipman aktif", "Entèrvansyon ijans 7j/7"],
        ["Rézo enfrastrikti anndan", "Smart city épi projé téritoryal", "Enfrastrikti piblik", "Akonpayman sou mezi"],
      ],
      benefits: ["Konsépsyon optimizé", "Enfrastrikti dirab", "Miz an sèrvis vit", "Disponibilité garantiy", "Sou mezi"],
    },
    ar: {
      ctaTitle: "هل لديك مشروع ألياف في غويانا؟",
      features: [
        ["دراسات جدوى FTTH / FTTO", "تصاميم وخطط APS / APD / DOE", "خرائط GIS مرجعية جغرافيًا", "ملفات تنظيمية DT / DICT"],
        ["أشغال مدنية: خنادق وقنوات وغرف", "شبكات هوائية على الأعمدة", "سحب الألياف واللحام بالانصهار", "تركيب PBO / BPE / PM"],
        ["FTTH للأفراد: PTO وONT والتفعيل", "FTTO للشركات: ألياف مخصصة", "اختبارات وقياسات OTDR", "التحقق النهائي ومحضر الاستلام"],
        ["فحوصات دورية واختبارات OTDR", "تحديد الأعطال بالانعكاسية", "تشخيص المعدات النشطة", "تدخلات طارئة 24/7"],
        ["شبكات بنية تحتية داخلية", "مشاريع المدن الذكية والمناطق", "بنى تحتية عامة", "مرافقة حسب الحاجة"],
      ],
      benefits: ["تصميم مُحسّن", "بنية تحتية متينة", "تفعيل سريع", "جاهزية مضمونة", "حلول مخصّصة"],
    },
    zh: {
      ctaTitle: "在法属圭亚那有光纤项目吗？",
      features: [
        ["FTTH / FTTO 可行性研究", "APS / APD / DOE 设计图纸", "地理参考 GIS 制图", "DT / DICT 合规文件"],
        ["土建工程：沟槽、管道、井室", "杆路架空网络", "光缆敷设与熔接", "PBO / BPE / PM 安装"],
        ["家庭 FTTH：PTO、ONT 与开通", "企业 FTTO：专线光纤", "OTDR 测试与测量", "最终验收与交付报告"],
        ["周期巡检与 OTDR 复测", "反射法故障定位", "有源设备诊断", "7x24 紧急响应"],
        ["内部基础设施网络", "智慧城市与区域项目", "公共基础设施", "按需定制支持"],
      ],
      benefits: ["优化设计", "耐久基础设施", "快速开通", "可用性保障", "定制方案"],
    },
  } as const
  const content = localized[locale as keyof typeof localized] || localized.fr

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-sm text-primary font-medium mb-5 border border-primary/20">
            {t("nav.services")}
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.id}
                id={service.id}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={t(service.titleKey)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* Badge */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-md">
                      <span>{service.number}</span>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{t(service.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t(service.descKey)}</p>

                  <ul className="flex flex-col gap-2 mb-5 flex-1">
                    {content.features[Number(service.number) - 1].map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Benefit badge */}
                  <div className="flex items-center justify-between border-t border-border pt-4 mt-auto">
                    <span className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                      {content.benefits[Number(service.number) - 1]}
                    </span>
                    <Link
                      href="/devis"
                      className="flex items-center gap-1 text-xs font-semibold text-primary hover:gap-2 transition-all"
                    >
                      {t("nav.quote")} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}

          {/* CTA card */}
          <div className="bg-secondary dark:bg-card rounded-2xl p-8 flex flex-col items-start justify-between border border-border">
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3 text-balance">
                {content.ctaTitle}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {t("contact.subtitle")}
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <Link
                href="/devis"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                {t("nav.quote")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-muted transition-colors"
              >
                {t("common.learnMore")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
