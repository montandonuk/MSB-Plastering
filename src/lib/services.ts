import { siteConfig } from './site'

type ServiceSlug = typeof siteConfig.services[number]['slug']

interface ServiceFields {
    intro: string
    fullDesc: string
    seoTitle: string
    seoDescription: string
    keywords: string[]
    forWho: string[]
    typical: string[]
    faq: Array<{ q: string; a: string }>
}

export interface ServicePageData {
    slug: ServiceSlug
    title: string
    shortDesc: string
    icon: typeof siteConfig.services[number]['icon']
    intro: string
    fullDesc: string
    seoTitle: string
    seoDescription: string
    keywords: string[]
    forWho: string[]
    typical: string[]
    faq: Array<{ q: string; a: string }>
}

const serviceFields: Record<ServiceSlug, ServiceFields> = {
    plastering: {
        intro: 'Smooth, level walls and ceilings that are ready to decorate.',
        fullDesc: 'Whether you need a fresh skim on new plasterboard or a re-skim over old, tired walls, we deliver smooth, lasting finishes every time. Ideal for renovations, extensions, and complete property refreshes.',
        seoTitle: 'Plastering & Skimming in Tunbridge Wells | MSB Plastering',
        seoDescription: 'Professional plastering and skimming in Tunbridge Wells, Kent, and East Sussex. Clean, reliable finishes for renovations, extensions, and re-skims.',
        keywords: ['plastering tunbridge wells', 'wall skimming kent', 'ceiling skimming service', 'plasterer near me'],
        forWho: ['Homeowners renovating', 'Landlords preparing properties', 'Builders needing a reliable finish'],
        typical: ['Full room skimming', 'New build plastering', 'Re-skims over old plaster', 'Feature walls'],
        faq: [
            { q: 'How long does plastering take to dry?', a: 'Usually 2-5 days depending on room conditions. Wait until the plaster turns fully light pink before painting.' },
            { q: 'Can you plaster over painted walls?', a: 'Yes. Some walls need preparation or a bonding coat first, which we confirm during the quote visit.' },
        ],
    },
    repairs: {
        intro: 'Fast, tidy plaster patch repairs that blend with existing finishes.',
        fullDesc: 'Cracks, holes, water damage, and general wear can all be repaired without a full re-plaster in many cases. We complete clean, neat patch repairs that are ready for decorating.',
        seoTitle: 'Plaster Patch Repairs in Kent | MSB Plastering',
        seoDescription: 'Plaster patch repairs for cracks, holes, and water damage across Tunbridge Wells, Kent, and East Sussex. Quick turnaround and tidy workmanship.',
        keywords: ['plaster repair kent', 'wall crack repair tunbridge wells', 'ceiling patch repair', 'water damage plaster repair'],
        forWho: ['Homeowners with damage to fix', 'Landlords between tenancies', 'Property developers'],
        typical: ['Crack repairs', 'Hole filling', 'Water damage repair', 'Corner damage'],
        faq: [
            { q: 'Can small repairs be done without re-plastering the whole wall?', a: 'Yes. We can patch and blend local damage when surrounding plaster is sound.' },
            { q: 'Will repairs be visible after painting?', a: 'When prepared and painted correctly, repairs should blend in cleanly with the existing surface.' },
        ],
    },
    'dry-lining': {
        intro: 'Plasterboarding and dry lining for clean, straight internal surfaces.',
        fullDesc: 'We install plasterboard for new walls, ceilings, and room layouts, including dot and dab and stud partitions. This gives you a stable, straight base ready for tape and jointing or skim finish.',
        seoTitle: 'Dry Lining & Plasterboarding in Kent | MSB Plastering',
        seoDescription: 'Dry lining and plasterboarding services in Tunbridge Wells, Kent, and East Sussex. Dot and dab, partitions, ceilings, and smooth prep for finishing.',
        keywords: ['dry lining kent', 'plasterboarding tunbridge wells', 'dot and dab installer', 'partition wall plasterboard'],
        forWho: ['Homeowners creating new rooms', 'Developers and builders', 'Commercial fit-outs'],
        typical: ['Partition walls', 'Dot and dab', 'Ceiling plasterboard', 'Tape and jointing'],
        faq: [
            { q: 'Do you supply plasterboard and materials?', a: 'Yes, we can supply materials or work with materials you have already sourced.' },
            { q: 'Can dry lining help uneven walls?', a: 'Yes. Dry lining is often the best route for very uneven masonry or older internal walls.' },
        ],
    },
    rendering: {
        intro: 'External rendering for durable weather protection and cleaner kerb appeal.',
        fullDesc: 'We apply external render systems for homes and small commercial properties, including sand and cement, monocouche, and silicone systems. We also handle render patch repairs.',
        seoTitle: 'External Rendering in Kent | MSB Plastering',
        seoDescription: 'External house rendering in Tunbridge Wells, Kent, and East Sussex. Sand and cement, monocouche, silicone render, plus expert render repairs.',
        keywords: ['rendering kent', 'external rendering tunbridge wells', 'house render repair', 'silicone render installer'],
        forWho: ['Homeowners with external walls', 'Property renovators', 'Commercial premises'],
        typical: ['Full house rendering', 'Extension rendering', 'Render repairs', 'Pebbledash removal'],
        faq: [
            { q: 'Which render system is best for my property?', a: 'It depends on substrate, exposure, finish preference, and budget. We recommend the right system during survey.' },
            { q: 'How long does render take to cure?', a: 'Times vary by product and weather conditions. We provide realistic drying and protection timelines in your quote.' },
        ],
    },
    ceilings: {
        intro: 'Ceiling repairs and re-skims for smooth, modern finishes.',
        fullDesc: 'From cracked ceilings to dated textured coatings, we repair and re-skim ceilings so they are flat, clean, and ready to decorate. We also address localized water damage repairs.',
        seoTitle: 'Ceiling Repairs & Re-skimming in Kent | MSB Plastering',
        seoDescription: 'Ceiling repair and re-skimming services in Tunbridge Wells, Kent, and East Sussex. Artex over-skims, crack repairs, and water-damage restoration.',
        keywords: ['ceiling repair kent', 'artex skim over', 'ceiling plastering tunbridge wells', 'ceiling crack repair'],
        forWho: ['Homeowners with damaged or textured ceilings', 'Landlords updating properties', 'Anyone wanting a cleaner ceiling finish'],
        typical: ['Artex over-skims', 'Ceiling re-skims', 'Crack repairs', 'Water damage repair'],
        faq: [
            { q: 'Can you skim over artex ceilings?', a: 'Yes, in many cases we can prepare and skim over textured ceilings to create a modern smooth finish.' },
            { q: 'Do ceiling repairs create much disruption?', a: 'We protect floors and furnishings and keep disruption low with tidy setup and cleanup routines.' },
        ],
    },
    decorating: {
        intro: 'Painting and decorating completed to a clean, consistent finish.',
        fullDesc: 'We provide interior painting and decorating for homes and small commercial spaces. You can book decorating as a standalone service or combine it with plastering for a complete finish.',
        seoTitle: 'Painting & Decorating in Tunbridge Wells | MSB Plastering',
        seoDescription: 'Interior painting and decorating across Tunbridge Wells, Kent, and East Sussex. Tidy prep, clean lines, and dependable finishing work.',
        keywords: ['decorator tunbridge wells', 'painting and decorating kent', 'interior painter near me', 'home decorating service'],
        forWho: ['Homeowners wanting a complete finish', 'Landlords refreshing properties', 'Anyone needing interior painting'],
        typical: ['Emulsion walls and ceilings', 'Gloss woodwork', 'Feature walls', 'Full room decoration'],
        faq: [
            { q: 'Do you offer decorating without plastering?', a: 'Yes. Decorating can be booked as a standalone service or together with plastering work.' },
            { q: 'Do you do wallpapering?', a: 'Our main focus is painting and finishing. We can recommend a trusted wallpaper specialist if needed.' },
        ],
    },
}

export const servicePages: ServicePageData[] = siteConfig.services.map((service) => ({
    ...service,
    ...serviceFields[service.slug],
}))

export const servicePagesBySlug: Record<ServiceSlug, ServicePageData> = Object.fromEntries(
    servicePages.map((service) => [service.slug, service])
) as Record<ServiceSlug, ServicePageData>

export function getServiceBySlug(slug: string): ServicePageData | null {
    return servicePages.find((service) => service.slug === slug) ?? null
}
