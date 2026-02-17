// Site configuration - single source of truth for all site data
// Update these values to change content across the entire site

export const siteConfig = {
    siteUrl: "https://msbplastering.co.uk",
    businessName: "MSB Plastering & Decorating Service",
    tagline: "Tidy plastering and decorating, done properly.",

    // Contact details
    phone: "07887 998 086",
    email: "msb4545@outlook.com",

    // Location
    baseLocation: "Tunbridge Wells, Kent",
    fullAddress: "Tunbridge Wells, Kent, United Kingdom",
    addressLocality: "Tunbridge Wells",
    addressRegion: "Kent",
    addressCountry: "GB",

    // CTAs
    primaryCtaLabel: "Request a quote",
    secondaryCtaLabel: "Call now",

    // Navigation
    navigation: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/projects" },
        { name: "Reviews", href: "/reviews" },
        { name: "Areas", href: "/areas" },
        { name: "Contact", href: "/contact" },
    ],

    // Services
    services: [
        {
            title: "Plastering & Skimming",
            slug: "plastering",
            shortDesc: "Smooth, flawless finishes for walls and ceilings. New builds, renovations, and re-skims.",
            icon: "trowel",
        },
        {
            title: "Patch Repairs",
            slug: "repairs",
            shortDesc: "Fixing cracks, holes, and damaged plaster. Quick turnaround for small jobs.",
            icon: "wrench",
        },
        {
            title: "Dry Lining & Plasterboarding",
            slug: "dry-lining",
            shortDesc: "Plasterboard installation, dot and dab, and partition walls.",
            icon: "layers",
        },
        {
            title: "Rendering",
            slug: "rendering",
            shortDesc: "External rendering and repairs. Monocouche, sand and cement, and silicone finishes.",
            icon: "home",
        },
        {
            title: "Ceiling Repairs",
            slug: "ceilings",
            shortDesc: "Artex removal, ceiling re-skims, and repair work for damaged ceilings.",
            icon: "arrowUp",
        },
        {
            title: "Painting & Decorating",
            slug: "decorating",
            shortDesc: "Interior painting and decorating. Bundle it with plastering or book standalone.",
            icon: "paintbrush",
        },
        {
            title: "External Painting",
            slug: "external-painting",
            shortDesc: "Refresh your property's exterior. High-quality masonry painting for protection and curb appeal.",
            icon: "roller",
        },
        {
            title: "Property Services",
            slug: "property-services",
            shortDesc: "General property maintenance, guttering, and repairs to keep your home in top condition.",
            icon: "hammer",
        },
    ],

    // Locations covered (SEO Pages)
    locations: [
        {
            name: "Tunbridge Wells",
            slug: "tunbridge-wells",
            title: "Plasterer in Tunbridge Wells",
            metaDescription: "Expert plastering and decorating in Tunbridge Wells. Local, reliable team for renovations and repairs.",
            intro: "From Victorian terraces in the Pantiles to modern homes in High Brooms, we provide high-quality plastering across Tunbridge Wells.",
        },
        {
            name: "Tonbridge",
            slug: "tonbridge",
            title: "Plasterer in Tonbridge",
            metaDescription: "Professional plastering services in Tonbridge. Skimming, rendering, and painting for homes and businesses.",
            intro: "Local plasterers serving Tonbridge and surrounding villages. We deliver smooth finishes for extensions, loft conversions, and refurbishments.",
        },
        {
            name: "Sevenoaks",
            slug: "sevenoaks",
            title: "Plasterer in Sevenoaks",
            metaDescription: "High-quality plastering in Sevenoaks. Specialists in period property restoration and modern finishes.",
            intro: "Serving Sevenoaks with care and attention to detail. We understand the specific needs of older properties and modern renovations alike.",
        },
        {
            name: "Maidstone",
            slug: "maidstone",
            title: "Plasterer in Maidstone",
            metaDescription: "Reliable plasterers in Maidstone. Competitive quotes for skimming, dry lining, and decorating.",
            intro: "Quality plastering services across Maidstone. Whether it's a small patch repair or a full house re-skim, we're here to help.",
        },
        {
            name: "Crowborough",
            slug: "crowborough",
            title: "Plasterer in Crowborough",
            metaDescription: "Local plastering and decorating in Crowborough. Tidy, efficient, and fully insured.",
            intro: "Your local Crowborough plasterers. We take pride in clean work and lasting results for your home improvements.",
        },
        {
            name: "East Grinstead",
            slug: "east-grinstead",
            title: "Plasterer in East Grinstead",
            metaDescription: "Expert plastering in East Grinstead. Rendering, skimming, and painting services.",
            intro: "Professional finishes for homes in East Grinstead. We bring decades of experience to every wall and ceiling we touch.",
        },
        {
            name: "Uckfield",
            slug: "uckfield",
            title: "Plasterer in Uckfield",
            metaDescription: "Uckfield plastering specialists. Smooth walls and ceilings for renovations and new builds.",
            intro: "Serving Uckfield with top-tier plastering and decorating. We help turn tired rooms into fresh, modern spaces.",
        },
        {
            name: "Lewes",
            slug: "lewes",
            title: "Plasterer in Lewes",
            metaDescription: "Traditional and modern plastering in Lewes. Skilled tradesmen for your property.",
            intro: "Respected plasterers working in Lewes. We combine traditional skills with modern materials for a perfect finish.",
        },
        {
            name: "Hastings",
            slug: "hastings",
            title: "Plasterer in Hastings",
            metaDescription: "Plastering services in Hastings and St Leonards. External rendering and internal skimming.",
            intro: "Coastal plastering specialists in Hastings, from seafront rendering to internal renovation work.",
        },
        {
            name: "Brighton & Hove",
            slug: "brighton",
            title: "Plasterer in Brighton & Hove",
            metaDescription: "City-wide plastering in Brighton & Hove. Fast, clean, and professional service.",
            intro: "Working across Brighton & Hove to deliver sharp, smooth lines and vibrant decoration for city homes.",
        },
    ],

    // Social links (placeholders)
    socialLinks: {
        facebook: "#",
        instagram: "#",
    },

    // Feature cards for homepage
    features: [
        {
            title: "Plastering + decorating",
            description: "One team for the messy bits and the finishing touches.",
            icon: "sparkles",
        },
        {
            title: "Tidy, respectful work",
            description: "We protect floors, clean as we go, and leave rooms usable.",
            icon: "shield",
        },
        {
            title: "Clear, written quotes",
            description: "No waffle. You'll know what's included before we start.",
            icon: "document",
        },
    ],

    // Trust badges
    trustBadges: [
        {
            title: "Public liability insured",
            description: "Confirm on request",
            icon: "shield",
        },
        {
            title: "Clean, protected work areas",
            description: "Dust sheets and protection as standard",
            icon: "sparkles",
        },
        {
            title: "Clear timelines",
            description: "We turn up when we say we will",
            icon: "clock",
        },
        {
            title: "Guaranteed workmanship",
            description: "We put things right if there's an issue",
            icon: "check",
        },
    ],

    // Placeholder testimonials
    testimonials: [
        {
            name: "Sarah T.",
            location: "Tunbridge Wells",
            quote: "Really impressed with the finish. The team were tidy and professional throughout. Would definitely recommend.",
        },
        {
            name: "James M.",
            location: "Sevenoaks",
            quote: "Great communication from start to finish. The plastering looks fantastic and they cleaned up properly.",
        },
        {
            name: "Emma R.",
            location: "Tonbridge",
            quote: "Used MSB for skimming our living room and hallway. Excellent work, fair price.",
        },
        {
            name: "David H.",
            location: "Brighton",
            quote: "Prompt, polite, and the rendering on our extension looks brilliant. Happy to recommend.",
        },
        {
            name: "Claire B.",
            location: "Crowborough",
            quote: "Fixed some awkward ceiling damage for us. Very neat work and reasonable quote.",
        },
        {
            name: "Mark S.",
            location: "Maidstone",
            quote: "Plastering and decorating done in one go. Saved us having to coordinate two trades. Very smooth result.",
        },
    ],

    // Helper to get simple area list for legacy components if needed, though we should migrate
    get areas() {
        return this.locations.map(l => l.name)
    }
} as const

export type Service = typeof siteConfig.services[number]
export type Testimonial = typeof siteConfig.testimonials[number]
