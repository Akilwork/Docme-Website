import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PortfolioDetailHeader from '@/components/PortfolioDetailHeader';
import PortfolioDetailContent from '@/components/PortfolioDetailContent';
import { notFound } from 'next/navigation';

// ── Master project data ───────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    slug: 'radiant-skincare-branding',
    title: 'Radiant Skincare Branding',
    description: 'Radiant skincare is offering a user-centric, ad-free platform.',
    overview:
      'We built a full brand identity system for Radiant—logo, typography, colour palette, packaging guidelines, and a responsive web presence—rooted in clean minimalism and warm, botanical tones that speak directly to an ingredient-conscious audience.',
    tags: ['BRANDING', 'WEB DESIGN'],
    image:
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2070&auto=format&fit=crop',
    client: 'Radiant Co.',
    year: '2024',
    role: 'Brand Strategy & Web Design',
    features: [
      {
        title: 'See your brand come alive across every touch-point',
        description:
          'From editorial typography to packaging mockups, Radiant\'s new identity system was built to look flawless whether it lives on a billboard, an Instagram story, or a product label.',
        image:
          'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=2070&auto=format&fit=crop',
        imageAlt: 'Radiant brand touch-points',
        reverse: false,
      },
      {
        title: 'Packaging that turns heads on the shelf',
        description:
          'We designed a cohesive packaging suite using botanical illustration motifs, matte finishes, and a warm coral-to-cream palette that communicates purity without looking clinical.',
        image:
          'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2070&auto=format&fit=crop',
        imageAlt: 'Radiant skincare packaging',
        reverse: true,
      },
    ],
    screenshots: [
      {
        src: 'https://images.unsplash.com/photo-1570194065650-d99fb4d8b2f0?q=80&w=2070&auto=format&fit=crop',
        alt: 'Brand guidelines overview',
      },
      {
        src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2070&auto=format&fit=crop',
        alt: 'Website homepage design',
      },
      {
        src: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2070&auto=format&fit=crop',
        alt: 'Mobile experience',
      },
      {
        src: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2070&auto=format&fit=crop',
        alt: 'Product detail page',
      },
      {
        src: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?q=80&w=2070&auto=format&fit=crop',
        alt: 'Campaign imagery',
      },
    ],
    ctaTitle: 'Experience Radiant Skincare by yourself',
    ctaSubtitle: 'Discover a brand built for conscious beauty lovers.',
    ctaLink: 'radiantco.com',
    platforms: ['Web', 'iOS', 'Android'],
  },
  {
    id: 2,
    slug: 'apex-clothing-rebrand',
    title: 'Apex Clothing Co. Rebrand',
    description: 'Bold new look for an eco-conscious apparel brand.',
    overview:
      'A full rebrand for Apex Clothing Co., shifting the visual identity toward earthy sustainability cues while keeping the bold confidence the brand is known for.',
    tags: ['BRANDING', 'DEVELOPMENT'],
    image:
      'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=2070&auto=format&fit=crop',
    client: 'Apex Clothing Co.',
    year: '2024',
    role: 'Brand Identity & Dev',
    features: [
      {
        title: 'A bold new identity rooted in sustainability',
        description:
          'We redefined Apex with a grounded earthy palette, bold slab typography, and a logo mark that communicates strength and eco-consciousness in equal measure.',
        image:
          'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
        imageAlt: 'Apex brand identity',
        reverse: false,
      },
      {
        title: 'A storefront built for conversion',
        description:
          'The e-commerce build leverages fast-loading product pages, intuitive filters, and a seamless checkout — increasing average session time and reducing cart abandonment.',
        image:
          'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2070&auto=format&fit=crop',
        imageAlt: 'Apex e-commerce storefront',
        reverse: true,
      },
    ],
    screenshots: [
      {
        src: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070&auto=format&fit=crop',
        alt: 'Product catalogue page',
      },
      {
        src: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop',
        alt: 'Collection hero',
      },
      {
        src: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2070&auto=format&fit=crop',
        alt: 'Mobile app view',
      },
    ],
    ctaTitle: 'Explore the Apex Clothing experience',
    ctaSubtitle: 'Style and sustainability in every thread.',
    ctaLink: 'apexclothing.co',
    platforms: ['Web', 'iOS', 'Android'],
  },
  {
    id: 3,
    slug: 'vero-app-development',
    title: 'Vero App Development',
    description: 'Vero aimed to distinguish itself in a competitive social media landscape.',
    overview:
      "End-to-end product design and front-end build for Vero's mobile-first social experience, focusing on authentic sharing and chronological feeds.",
    tags: ['BRANDING', 'DEVELOPMENT', 'WEB DESIGN'],
    image:
      'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2070&auto=format&fit=crop',
    client: 'Vero Inc.',
    year: '2023',
    role: 'Product Design & Dev',
    features: [
      {
        title: 'See your social world without the algorithm',
        description:
          'Vero serves posts in true chronological order. We designed an interface that puts the feed front and centre, letting content breathe without sponsored noise.',
        image:
          'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2070&auto=format&fit=crop',
        imageAlt: 'Vero social feed',
        reverse: false,
      },
      {
        title: 'Share anything — links, music, film, places',
        description:
          'We built rich content cards for every media type Vero supports, ensuring each post format has a distinct, polished presentation across iOS and Android.',
        image:
          'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
        imageAlt: 'Vero rich content cards',
        reverse: true,
      },
    ],
    screenshots: [
      {
        src: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2070&auto=format&fit=crop',
        alt: 'Onboarding screen',
      },
      {
        src: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2070&auto=format&fit=crop',
        alt: 'Profile view',
      },
      {
        src: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2070&auto=format&fit=crop',
        alt: 'Post creation flow',
      },
    ],
    ctaTitle: 'Experience Vero by yourself',
    ctaSubtitle: 'Social media the way it should be.',
    ctaLink: 'vero.co',
    platforms: ['iOS', 'Android'],
  },
  {
    id: 4,
    slug: 'stoyo-branding',
    title: 'Stoyo Branding',
    description: 'Visual identity and packaging design for a Stoyo brand.',
    overview:
      'Complete visual identity system for Stoyo including logo suite, packaging templates, brand guidelines and art-directed photography direction.',
    tags: ['BRANDING', 'SUPPORT'],
    image:
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2070&auto=format&fit=crop',
    client: 'Stoyo',
    year: '2023',
    role: 'Identity & Packaging',
    features: [
      {
        title: 'A logo that tells the full story',
        description:
          'The Stoyo mark combines geometric precision with organic warmth, reflecting the brand\'s position as a modern yet approachable lifestyle label.',
        image:
          'https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?q=80&w=2070&auto=format&fit=crop',
        imageAlt: 'Stoyo logo design',
        reverse: false,
      },
      {
        title: 'Packaging that sells before it is opened',
        description:
          'Every Stoyo package was designed to communicate quality at a glance — tactile finishes, considered proportions, and a colour story that photographs beautifully.',
        image:
          'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2070&auto=format&fit=crop',
        imageAlt: 'Stoyo packaging mockups',
        reverse: true,
      },
    ],
    screenshots: [
      {
        src: 'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=2070&auto=format&fit=crop',
        alt: 'Brand guideline book',
      },
      {
        src: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=2070&auto=format&fit=crop',
        alt: 'Type system',
      },
      {
        src: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=2070&auto=format&fit=crop',
        alt: 'Colour palette',
      },
    ],
    ctaTitle: 'Discover the Stoyo brand universe',
    ctaSubtitle: 'Where identity meets everyday life.',
    ctaLink: 'stoyo.co',
    platforms: ['Web', 'Desktop'],
  },
  {
    id: 5,
    slug: 'fintech-dashboard-ui',
    title: 'Fintech Dashboard UI',
    description: 'Modern financial analytics interface with dark mode support.',
    overview:
      'A data-rich analytics dashboard designed for a fintech startup—real-time charts, portfolio overviews, and dark-mode-first UI built for clarity under pressure.',
    tags: ['UI DESIGN', 'WEB DESIGN'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    client: 'Finvesta',
    year: '2024',
    role: 'UI / UX Design',
    features: [
      {
        title: 'Monitor your portfolio at a glance',
        description:
          'The main overview screen surfaces your most important KPIs in real time — performance charts, asset allocation rings, and live market tickers all in one view.',
        image:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop',
        imageAlt: 'Finvesta portfolio overview',
        reverse: false,
      },
      {
        title: 'Deep-dive into any asset with one click',
        description:
          'Drill down into individual positions to see historical performance, news sentiment, and risk metrics — all within the same clean interface.',
        image:
          'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop',
        imageAlt: 'Asset detail view',
        reverse: true,
      },
    ],
    screenshots: [
      {
        src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2070&auto=format&fit=crop',
        alt: 'Analytics screen',
      },
      {
        src: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop',
        alt: 'Chart detail',
      },
      {
        src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop',
        alt: 'Dark mode view',
      },
    ],
    ctaTitle: 'Experience Finvesta by yourself',
    ctaSubtitle: 'Smarter investing starts with better data.',
    ctaLink: 'finvesta.io',
    platforms: ['Web', 'Desktop', 'iOS'],
  },
  {
    id: 6,
    slug: 'eco-friendly-packaging',
    title: 'Eco-Friendly Packaging',
    description: 'Sustainable product packaging design for organic brands.',
    overview:
      'Packaging design system that communicates sustainability at a glance—earthy palettes, minimal ink usage, and FSC-certified material specifications built into every deliverable.',
    tags: ['BRANDING', 'PRINT DESIGN'],
    image:
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop',
    client: 'GreenLeaf Organics',
    year: '2024',
    role: 'Packaging Design',
    features: [
      {
        title: 'Sustainable from the inside out',
        description:
          'Every material, finish, and printing process was chosen to minimise environmental impact — soy inks, recycled board, and compostable inner wraps are all part of the spec.',
        image:
          'https://images.unsplash.com/photo-1542601098-8fc114e148e2?q=80&w=2070&auto=format&fit=crop',
        imageAlt: 'Sustainable materials',
        reverse: false,
      },
      {
        title: 'Earthy aesthetics that never compromise clarity',
        description:
          'Warm kraft tones, handcrafted illustration accents, and generous white space combine to create packaging that feels premium but never wasteful.',
        image:
          'https://images.unsplash.com/photo-1535914254981-b5012eebbd15?q=80&w=2070&auto=format&fit=crop',
        imageAlt: 'GreenLeaf packaging range',
        reverse: true,
      },
    ],
    screenshots: [
      {
        src: 'https://images.unsplash.com/photo-1610824352934-c10d87b700cc?q=80&w=2070&auto=format&fit=crop',
        alt: 'Full packaging range',
      },
      {
        src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop',
        alt: 'Label detail',
      },
      {
        src: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2070&auto=format&fit=crop',
        alt: 'Unboxing experience',
      },
    ],
    ctaTitle: 'Experience GreenLeaf by yourself',
    ctaSubtitle: 'Packaging that is as good for the planet as it looks.',
    ctaLink: 'greenleaforganics.com',
    platforms: ['Web', 'Desktop'],
  },
];

// ── Related project gallery ───────────────────────────────────────────────────
function RelatedProjects({ currentSlug }: { currentSlug: string }) {
  const related = projects.filter((p) => p.slug !== currentSlug).slice(0, 3);
  return (
    <section className="w-full bg-white py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-black mb-10">More Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {related.map((p) => (
            <a key={p.slug} href={`/portfolio/${p.slug}`} className="group flex flex-col gap-4">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {p.tags.slice(0, 2).map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                      style={{ color: '#6366f1', background: 'rgba(99,102,241,0.09)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold text-black group-hover:text-[#6366f1] transition-colors duration-200">
                  {p.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function PortfolioDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <main className="relative min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <PortfolioDetailHeader project={project} />
      </div>

      <PortfolioDetailContent
        overview={project.overview}
        features={project.features}
        screenshots={project.screenshots}
        ctaTitle={project.ctaTitle}
        ctaSubtitle={project.ctaSubtitle}
        ctaLink={project.ctaLink}
        platforms={project.platforms}
      />

      <RelatedProjects currentSlug={project.slug} />
      <Footer />
    </main>
  );
}
