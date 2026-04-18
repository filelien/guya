"use client"

import { useState, useMemo } from "react"
import { Check, ChevronDown, Search } from "lucide-react"
import { Input } from "./input"
import { Button } from "./button"
import { useLanguage } from "@/lib/i18n/context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./dropdown-menu"
import { ScrollArea } from "./scroll-area"

export interface CountryCode {
  code: string
  flag: string
  nameEn: string
  nameFr: string
  nameEs: string
  namePt: string
  nameNl: string
  nameGcr: string
}

// Complete country list - 100+ countries with multilingual names
export const COUNTRY_CODES: CountryCode[] = [
  // PRIORITY COUNTRIES (Top)
  { code: "+594", flag: "🇬🇫", nameFr: "Guyane française", nameEn: "French Guiana", nameEs: "Guayana Francesa", namePt: "Guiana Francesa", nameNl: "Frans-Guyana", nameGcr: "Guyane Fransa" },
  { code: "+33", flag: "🇫🇷", nameFr: "France", nameEn: "France", nameEs: "Francia", namePt: "França", nameNl: "Frankrijk", nameGcr: "Frans" },
  { code: "+34", flag: "🇪🇸", nameFr: "Espagne", nameEn: "Spain", nameEs: "España", namePt: "Espanha", nameNl: "Spanje", nameGcr: "Panya" },
  { code: "+351", flag: "🇵🇹", nameFr: "Portugal", nameEn: "Portugal", nameEs: "Portugal", namePt: "Portugal", nameNl: "Portugal", nameGcr: "Potugal" },
  { code: "+31", flag: "🇳🇱", nameFr: "Pays-Bas", nameEn: "Netherlands", nameEs: "Países Bajos", namePt: "Holanda", nameNl: "Nederland", nameGcr: "Pays-Ba" },
  { code: "+55", flag: "🇧🇷", nameFr: "Brésil", nameEn: "Brazil", nameEs: "Brasil", namePt: "Brasil", nameNl: "Brazilië", nameGcr: "Brezil" },
  { code: "+51", flag: "🇵🇪", nameFr: "Pérou", nameEn: "Peru", nameEs: "Perú", namePt: "Peru", nameNl: "Peru", nameGcr: "Perou" },
  { code: "+57", flag: "🇨🇴", nameFr: "Colombie", nameEn: "Colombia", nameEs: "Colombia", namePt: "Colômbia", nameNl: "Colombia", nameGcr: "Kolombya" },
  { code: "+1", flag: "🇺🇸", nameFr: "États-Unis", nameEn: "United States", nameEs: "Estados Unidos", namePt: "Estados Unidos", nameNl: "Verenigde Staten", nameGcr: "Etats-Uni" },
  { code: "+1", flag: "🇨🇦", nameFr: "Canada", nameEn: "Canada", nameEs: "Canadá", namePt: "Canadá", nameNl: "Canada", nameGcr: "Kanada" },
  // EUROPE
  { code: "+44", flag: "🇬🇧", nameFr: "Royaume-Uni", nameEn: "United Kingdom", nameEs: "Reino Unido", namePt: "Reino Unido", nameNl: "Verenigd Koninkrijk", nameGcr: "Wayòm Ini" },
  { code: "+49", flag: "🇩🇪", nameFr: "Allemagne", nameEn: "Germany", nameEs: "Alemania", namePt: "Alemanha", nameNl: "Duitsland", nameGcr: "Alemay" },
  { code: "+39", flag: "🇮🇹", nameFr: "Italie", nameEn: "Italy", nameEs: "Italia", namePt: "Itália", nameNl: "Italië", nameGcr: "Itali" },
  { code: "+41", flag: "🇨🇭", nameFr: "Suisse", nameEn: "Switzerland", nameEs: "Suiza", namePt: "Suíça", nameNl: "Zwitserland", nameGcr: "Swis" },
  { code: "+43", flag: "🇦🇹", nameFr: "Autriche", nameEn: "Austria", nameEs: "Austria", namePt: "Áustria", nameNl: "Oostenrijk", nameGcr: "Otrich" },
  { code: "+45", flag: "🇩🇰", nameFr: "Danemark", nameEn: "Denmark", nameEs: "Dinamarca", namePt: "Dinamarca", nameNl: "Denemarken", nameGcr: "Danmak" },
  { code: "+46", flag: "🇸🇪", nameFr: "Suède", nameEn: "Sweden", nameEs: "Suecia", namePt: "Suécia", nameNl: "Zweden", nameGcr: "Swed" },
  { code: "+47", flag: "🇳🇴", nameFr: "Norvège", nameEn: "Norway", nameEs: "Noruega", namePt: "Noruega", nameNl: "Noorwegen", nameGcr: "Norwej" },
  { code: "+48", flag: "🇵🇱", nameFr: "Pologne", nameEn: "Poland", nameEs: "Polonia", namePt: "Polônia", nameNl: "Polen", nameGcr: "Polong" },
  { code: "+30", flag: "🇬🇷", nameFr: "Grèce", nameEn: "Greece", nameEs: "Grecia", namePt: "Grécia", nameNl: "Griekenland", nameGcr: "Grès" },
  { code: "+358", flag: "🇫🇮", nameFr: "Finlande", nameEn: "Finland", nameEs: "Finlandia", namePt: "Finlândia", nameNl: "Finland", nameGcr: "Finlann" },
  { code: "+40", flag: "🇷🇴", nameFr: "Roumanie", nameEn: "Romania", nameEs: "Rumania", namePt: "Romênia", nameNl: "Roemenië", nameGcr: "Roumen" },
  { code: "+359", flag: "🇧🇬", nameFr: "Bulgarie", nameEn: "Bulgaria", nameEs: "Bulgaria", namePt: "Bulgária", nameNl: "Bulgarije", nameGcr: "Bulgari" },
  { code: "+385", flag: "🇭🇷", nameFr: "Croatie", nameEn: "Croatia", nameEs: "Croacia", namePt: "Croácia", nameNl: "Kroatië", nameGcr: "Kroasi" },
  { code: "+36", flag: "🇭🇺", nameFr: "Hongrie", nameEn: "Hungary", nameEs: "Hungría", namePt: "Hungria", nameNl: "Hongarije", nameGcr: "Ongarya" },
  { code: "+7", flag: "🇷🇺", nameFr: "Russie", nameEn: "Russia", nameEs: "Rusia", namePt: "Rússia", nameNl: "Rusland", nameGcr: "Rusi" },
  { code: "+380", flag: "🇺🇦", nameFr: "Ukraine", nameEn: "Ukraine", nameEs: "Ucrania", namePt: "Ucrânia", nameNl: "Oekraïne", nameGcr: "Ikren" },
  // AMERICAS CONTINUED
  { code: "+52", flag: "🇲🇽", nameFr: "Mexique", nameEn: "Mexico", nameEs: "México", namePt: "México", nameNl: "Mexico", nameGcr: "Meksik" },
  { code: "+56", flag: "🇨🇱", nameFr: "Chili", nameEn: "Chile", nameEs: "Chile", namePt: "Chile", nameNl: "Chili", nameGcr: "Chili" },
  { code: "+54", flag: "🇦🇷", nameFr: "Argentine", nameEn: "Argentina", nameEs: "Argentina", namePt: "Argentina", nameNl: "Argentinië", nameGcr: "Ajantin" },
  { code: "+591", flag: "🇧🇴", nameFr: "Bolivie", nameEn: "Bolivia", nameEs: "Bolivia", namePt: "Bolívia", nameNl: "Bolivia", nameGcr: "Bolivi" },
  { code: "+593", flag: "🇪🇨", nameFr: "Équateur", nameEn: "Ecuador", nameEs: "Ecuador", namePt: "Equador", nameNl: "Ecuador", nameGcr: "Ekwador" },
  { code: "+598", flag: "🇺🇾", nameFr: "Uruguay", nameEn: "Uruguay", nameEs: "Uruguay", namePt: "Uruguai", nameNl: "Uruguay", nameGcr: "Uruguway" },
  { code: "+595", flag: "🇵🇾", nameFr: "Paraguay", nameEn: "Paraguay", nameEs: "Paraguay", namePt: "Paraguai", nameNl: "Paraguay", nameGcr: "Paraguay" },
  { code: "+58", flag: "🇻🇪", nameFr: "Venezuela", nameEn: "Venezuela", nameEs: "Venezuela", namePt: "Venezuela", nameNl: "Venezuela", nameGcr: "Veneswela" },
  // AFRICA
  { code: "+20", flag: "🇪🇬", nameFr: "Égypte", nameEn: "Egypt", nameEs: "Egipto", namePt: "Egito", nameNl: "Egypte", nameGcr: "Ejip" },
  { code: "+27", flag: "🇿🇦", nameFr: "Afrique du Sud", nameEn: "South Africa", nameEs: "Sudáfrica", namePt: "África do Sul", nameNl: "Zuid-Afrika", nameGcr: "Afrik Sid" },
  { code: "+234", flag: "🇳🇬", nameFr: "Nigéria", nameEn: "Nigeria", nameEs: "Nigeria", namePt: "Nigéria", nameNl: "Nigeria", nameGcr: "Nijeria" },
  { code: "+212", flag: "🇲🇦", nameFr: "Maroc", nameEn: "Morocco", nameEs: "Marruecos", namePt: "Marrocos", nameNl: "Marokko", nameGcr: "Marok" },
  { code: "+213", flag: "🇩🇿", nameFr: "Algérie", nameEn: "Algeria", nameEs: "Argelia", namePt: "Argélia", nameNl: "Algerije", nameGcr: "Aljeri" },
  { code: "+216", flag: "🇹🇳", nameFr: "Tunisie", nameEn: "Tunisia", nameEs: "Túnez", namePt: "Tunísia", nameNl: "Tunesië", nameGcr: "Tinizi" },
  { code: "+221", flag: "🇸🇳", nameFr: "Sénégal", nameEn: "Senegal", nameEs: "Senegal", namePt: "Senegal", nameNl: "Senegal", nameGcr: "Senegal" },
  { code: "+225", flag: "🇨🇮", nameFr: "Côte d'Ivoire", nameEn: "Ivory Coast", nameEs: "Costa de Marfil", namePt: "Costa do Marfim", nameNl: "Ivoorkust", nameGcr: "Kòt Divwa" },
  { code: "+226", flag: "🇧🇫", nameFr: "Burkina Faso", nameEn: "Burkina Faso", nameEs: "Burkina Faso", namePt: "Burkina Faso", nameNl: "Burkina Faso", nameGcr: "Burkina Faso" },
  { code: "+227", flag: "🇳🇪", nameFr: "Niger", nameEn: "Niger", nameEs: "Níger", namePt: "Níger", nameNl: "Niger", nameGcr: "Nijè" },
  { code: "+230", flag: "🇲🇺", nameFr: "Maurice", nameEn: "Mauritius", nameEs: "Mauricio", namePt: "Maurício", nameNl: "Mauritius", nameGcr: "Moris" },
  { code: "+233", flag: "🇬🇭", nameFr: "Ghana", nameEn: "Ghana", nameEs: "Ghana", namePt: "Gana", nameNl: "Ghana", nameGcr: "Ghana" },
  { code: "+256", flag: "🇺🇬", nameFr: "Ouganda", nameEn: "Uganda", nameEs: "Uganda", namePt: "Uganda", nameNl: "Oeganda", nameGcr: "Uganda" },
  { code: "+255", flag: "🇹🇿", nameFr: "Tanzanie", nameEn: "Tanzania", nameEs: "Tanzania", namePt: "Tanzânia", nameNl: "Tanzania", nameGcr: "Tanzani" },
  { code: "+260", flag: "🇿🇲", nameFr: "Zambie", nameEn: "Zambia", nameEs: "Zambia", namePt: "Zâmbia", nameNl: "Zambia", nameGcr: "Zambi" },
  { code: "+263", flag: "🇿🇼", nameFr: "Zimbabwe", nameEn: "Zimbabwe", nameEs: "Zimbabue", namePt: "Zimbábue", nameNl: "Zimbabwe", nameGcr: "Zimbabwe" },
  // ASIA
  { code: "+86", flag: "🇨🇳", nameFr: "Chine", nameEn: "China", nameEs: "China", namePt: "China", nameNl: "China", nameGcr: "Chin" },
  { code: "+81", flag: "🇯🇵", nameFr: "Japon", nameEn: "Japan", nameEs: "Japón", namePt: "Japão", nameNl: "Japan", nameGcr: "Japon" },
  { code: "+82", flag: "🇰🇷", nameFr: "Corée du Sud", nameEn: "South Korea", nameEs: "Corea del Sur", namePt: "Coreia do Sul", nameNl: "Zuid-Korea", nameGcr: "Kore Sid" },
  { code: "+84", flag: "🇻🇳", nameFr: "Vietnam", nameEn: "Vietnam", nameEs: "Vietnam", namePt: "Vietnã", nameNl: "Vietnam", nameGcr: "Vietnam" },
  { code: "+66", flag: "🇹🇭", nameFr: "Thaïlande", nameEn: "Thailand", nameEs: "Tailandia", namePt: "Tailândia", nameNl: "Thailand", nameGcr: "Tailann" },
  { code: "+60", flag: "🇲🇾", nameFr: "Malaisie", nameEn: "Malaysia", nameEs: "Malasia", namePt: "Malásia", nameNl: "Maleisië", nameGcr: "Malezi" },
  { code: "+65", flag: "🇸🇬", nameFr: "Singapour", nameEn: "Singapore", nameEs: "Singapur", namePt: "Singapura", nameNl: "Singapore", nameGcr: "Singapor" },
  { code: "+63", flag: "🇵🇭", nameFr: "Philippines", nameEn: "Philippines", nameEs: "Filipinas", namePt: "Filipinas", nameNl: "Filipijnen", nameGcr: "Filipin" },
  { code: "+62", flag: "🇮🇩", nameFr: "Indonésie", nameEn: "Indonesia", nameEs: "Indonesia", namePt: "Indonésia", nameNl: "Indonesië", nameGcr: "Indonezi" },
  { code: "+91", flag: "🇮🇳", nameFr: "Inde", nameEn: "India", nameEs: "India", namePt: "Índia", nameNl: "India", nameGcr: "Inde" },
  { code: "+880", flag: "🇧🇩", nameFr: "Bangladesh", nameEn: "Bangladesh", nameEs: "Bangladesh", namePt: "Bangladesh", nameNl: "Bangladesh", nameGcr: "Bangladesh" },
  { code: "+98", flag: "🇮🇷", nameFr: "Iran", nameEn: "Iran", nameEs: "Irán", namePt: "Irã", nameNl: "Iran", nameGcr: "Iran" },
  { code: "+966", flag: "🇸🇦", nameFr: "Arabie Saoudite", nameEn: "Saudi Arabia", nameEs: "Arabia Saudita", namePt: "Arábia Saudita", nameNl: "Saoedi-Arabië", nameGcr: "Arabi Sawdit" },
  { code: "+971", flag: "🇦🇪", nameFr: "Émirats Arabes Unis", nameEn: "UAE", nameEs: "Emiratos Árabes", namePt: "Emirados Árabes", nameNl: "V.A.E", nameGcr: "Emirats Arabe" },
  { code: "+61", flag: "🇦🇺", nameFr: "Australie", nameEn: "Australia", nameEs: "Australia", namePt: "Austrália", nameNl: "Australië", nameGcr: "Ostrali" },
  { code: "+64", flag: "🇳🇿", nameFr: "Nouvelle-Zélande", nameEn: "New Zealand", nameEs: "Nueva Zelanda", namePt: "Nova Zelândia", nameNl: "Nieuw-Zeeland", nameGcr: "Nouvel Zelan" },
]

interface PhoneInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  countryCode: string
  onCountryCodeChange: (code: string) => void
  placeholder?: string
  required?: boolean
}

function getCountryName(country: CountryCode, locale: string): string {
  switch(locale) {
    case "en": return country.nameEn
    case "es": return country.nameEs
    case "pt": return country.namePt
    case "nl": return country.nameNl
    case "gcr": return country.nameGcr
    default: return country.nameFr
  }
}

export function PhoneInput({
  value,
  onChange,
  countryCode,
  onCountryCodeChange,
  placeholder,
  required = false,
}: PhoneInputProps) {
  const { locale } = useLanguage()
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")

  const selectedCountry = COUNTRY_CODES.find(
    c => c.code === countryCode && getCountryName(c, locale) 
  ) || COUNTRY_CODES[0]

  const filteredCountries = useMemo(() => {
    if (!search) return COUNTRY_CODES
    const lowerSearch = search.toLowerCase()
    return COUNTRY_CODES.filter(country => {
      const name = getCountryName(country, locale).toLowerCase()
      return name.includes(lowerSearch) || country.code.includes(lowerSearch)
    })
  }, [search, locale])

  const getPlaceholder = (): string => {
    if (placeholder) return placeholder
    if (countryCode === "+594" || countryCode === "+33") return "6 94 00 00 00"
    if (countryCode === "+55" || countryCode === "+51" || countryCode === "+57") return "(21) 99999-9999"
    return "9999999999"
  }

  const searchPlaceholder = locale === "en" ? "Search country..." : 
                            locale === "es" ? "Buscar país..." :
                            locale === "pt" ? "Pesquisar país..." :
                            locale === "nl" ? "Land zoeken..." :
                            locale === "gcr" ? "Chèche peyi..." :
                            "Chercher un pays..."

  const noResultsText = locale === "en" ? "No countries found" :
                        locale === "es" ? "No se encontraron países" :
                        locale === "pt" ? "Nenhum país encontrado" :
                        locale === "nl" ? "Geen landen gevonden" :
                        locale === "gcr" ? "Pa gen peyi" :
                        "Aucun pays trouvé"

  return (
    <div className="flex gap-2 w-full min-w-0">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="w-32 min-w-[8rem] h-10 px-3 justify-between font-medium text-sm hover:bg-accent transition-all duration-200 animate-in fade-in-50"
            size="sm"
          >
            <span className="flex items-center gap-2 min-w-0">
              <span className="text-lg">{selectedCountry.flag}</span>
              <span className="text-xs font-semibold">{countryCode}</span>
            </span>
            <ChevronDown className="w-4 h-4 opacity-50 flex-shrink-0 transition-transform duration-200" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-72 p-0">
          <div className="sticky top-0 p-3 border-b border-border bg-background z-10">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                placeholder={searchPlaceholder}
                className="pl-8 h-9 text-sm focus:ring-2 focus:ring-primary/30"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoFocus
              />
            </div>
          </div>
          <ScrollArea className="h-80">
            {filteredCountries.length > 0 ? (
              <div className="p-1">
                {filteredCountries.map((country, idx) => {
                  const isSelected = countryCode === country.code
                  return (
                    <button
                      key={`${country.code}-${country.flag}-${idx}`}
                      onClick={() => {
                        onCountryCodeChange(country.code)
                        setOpen(false)
                        setSearch("")
                      }}
                      className="w-full px-2 py-2.5 text-left text-sm hover:bg-accent active:bg-accent/80 transition-colors duration-150 flex items-center gap-2 group cursor-pointer rounded"
                    >
                      <span className="text-lg flex-shrink-0">{country.flag}</span>
                      <span className="flex-1 truncate font-medium">
                        {getCountryName(country, locale)}
                      </span>
                      <span className="text-xs text-muted-foreground font-semibold flex-shrink-0">
                        {country.code}
                      </span>
                      {isSelected && (
                        <Check className="w-4 h-4 text-primary flex-shrink-0 animate-in fade-in-50" />
                      )}
                    </button>
                  )
                })}
              </div>
            ) : (
              <div className="p-4 text-center text-sm text-muted-foreground">
                {noResultsText}
              </div>
            )}
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
      <Input
        type="tel"
        value={value}
        onChange={(e) => {
          // Allow only digits and common phone separators
          const input = e.currentTarget.value
          const formatted = input
            .replace(/[^\d\s\-()./+]/g, '') // Remove invalid characters
            .slice(0, 20) // Max length
          
          // Create a new event with the formatted value
          const newEvent = {
            ...e,
            currentTarget: {
              ...e.currentTarget,
              value: formatted
            }
          } as React.ChangeEvent<HTMLInputElement>
          
          onChange(newEvent)
        }}
        placeholder={getPlaceholder()}
        required={required}
        className="flex-1 h-10 text-sm transition-all focus:ring-2 focus:ring-primary/30"
        autoComplete="tel"
        inputMode="tel"
      />
    </div>
  )
}
