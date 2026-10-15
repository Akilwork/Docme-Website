import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PortfolioDetailHeader from '@/components/PortfolioDetailHeader';
import PortfolioDetailContent from '@/components/PortfolioDetailContent';
import { notFound } from 'next/navigation';

// ── Master project data ───────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    slug: 'class-control',
    title: 'Teacher App',
    description: 'Manage attendance, timetable, and fees right from your pocket.',
    overview:
      'Teacher App is a mobile-first school management app that puts attendance tracking, student monitoring, leave approvals, and parent communication right in the hands of teachers.',
    tags: ['MOBILE APP', 'MANAGEMENT'],
    image: '/assets/Teacher app/10 (dark, light, color).jpg',
    client: 'Docme',
    year: '2024',
    role: 'Product Design & Dev',
    features: [
      {
        title: 'Attendance at a tap',
        description:
          'Mark present, absent, or late for every student in seconds. Real-time sync means the office always has the latest data without a single paper register.',
        image: '/assets/Teacher app/014.png',
        imageAlt: 'Teacher App attendance tracking screen',
        reverse: false,
      },
      {
        title: 'Parent communication & call logs',
        description:
          'Log parent phone calls, follow up on student progress or fee updates, and track outcomes seamlessly with instant call history records.',
        image: '/assets/Teacher app/015.png',
        imageAlt: 'Teacher App call reports and communication logs',
        reverse: true,
      },
    ],
    screenshots: [
      { src: '/assets/Teacher app/011.png', alt: 'Teacher App Parent Messaging & Class Feed' },
      { src: '/assets/Teacher app/012.png', alt: 'Teacher App Student Clinic & Movement Tracking' },
      { src: '/assets/Teacher app/013.png', alt: 'Teacher App Leave Requests & Approval Workflow' },
      { src: '/assets/Teacher app/015.png', alt: 'Teacher App Parent Call Reports & Communication Log' },
    ],
    ctaTitle: 'Experience Teacher App by yourself',
    ctaSubtitle: 'School management reimagined for the mobile era.',
    ctaLink: 'docme.in/class-control',
    platforms: ['iOS', 'Android'],
  },
  {
    id: 2,
    slug: 'school-dairy',
    title: 'School Dairy',
    description: 'Learning, academics, and campus life unified in one student app.',
    overview:
      'School Dairy brings together homework, grades, notices, and event calendars into a single intuitive app for students and parents — reducing friction and keeping everyone informed.',
    tags: ['STUDENT PORTAL', 'WEB DESIGN'],
    image: '/assets/School dairy/School Dairy V2.1 1.jpg',
    client: 'Docme',
    year: '2024',
    role: 'UI / UX Design & Dev',
    features: [
      {
        title: 'Your academic life, organised',
        description:
          'Assignments, exam schedules, and result cards all in one place. Students never miss a deadline and parents always know what is coming next.',
        image: '/assets/School dairy/05.png',
        imageAlt: 'School Dairy academic view',
        reverse: false,
      },
      {
        title: 'Campus life beyond the classroom',
        description:
          'Event announcements, club activities, and school notices flow into a single feed so students stay connected to campus life even when off-site.',
        image: '/assets/School dairy/04.png',
        imageAlt: 'School Dairy campus feed',
        reverse: true,
      },
    ],
    screenshots: [
      { src: '/assets/School dairy/01.png', alt: 'School Dairy Chat and Discussions' },
      { src: '/assets/School dairy/02.png', alt: 'School Dairy Fee Payment Details' },
      { src: '/assets/School dairy/03.png', alt: 'School Dairy Digital Wallet and Transactions' },
      { src: '/assets/School dairy/04.png', alt: 'School Dairy Bus Tracking and Route Details' },
    ],
    ctaTitle: 'Experience School Dairy by yourself',
    ctaSubtitle: 'The student companion built for modern campuses.',
    ctaLink: 'docme.in/school-dairy',
    platforms: ['iOS', 'Android', 'Web'],
  },
  {
    id: 3,
    slug: 'bm-canteen',
    title: 'BM Canteen',
    description: 'Real-time order tracking and smart sales management for school cafeterias.',
    overview:
      'BM Canteen digitises the entire cafeteria workflow — from student pre-ordering to kitchen fulfilment and end-of-day financial reporting — eliminating queues and cash handling.',
    tags: ['MANAGEMENT', 'DEVELOPMENT'],
    image: '/assets/Canteen/Canteen.jpg',
    client: 'Docme',
    year: '2023',
    role: 'Product Design & Development',
    features: [
      {
        title: 'Order before you arrive',
        description:
          'Students pre-order from a digital menu each morning. The kitchen sees a live queue, reduces waste, and has meals ready exactly when students arrive.',
        image: '/assets/Canteen/mobile app.png',
        imageAlt: 'BM Canteen order screen',
        reverse: false,
      },
      {
        title: 'Sales insights that drive better menus',
        description:
          'Daily, weekly, and monthly reports surface the most popular items, peak hours, and revenue trends so canteen managers can plan smarter.',
        image: '/assets/Canteen/website.png',
        imageAlt: 'BM Canteen analytics',
        reverse: true,
      },
    ],
    screenshots: [
      { src: '/assets/Canteen/01.png', alt: 'Menu and Ordering Screen' },
      { src: '/assets/Canteen/02.png', alt: 'Sales Dashboard' },
      { src: '/assets/Canteen/03.png', alt: 'Order History and Fulfillment' },
      { src: '/assets/Canteen/website.png', alt: 'Canteen Analytics Portal' },
    ],
    ctaTitle: 'Experience BM Canteen by yourself',
    ctaSubtitle: 'Zero queues. Smarter kitchens. Happier students.',
    ctaLink: 'docme.in/bm-canteen',
    platforms: ['iOS', 'Android', 'Web'],
  },
  {
    id: 4,
    slug: 'smart-dashboard',
    title: 'Smart Dashboard',
    description: 'Unified financial analytics and performance insights at a glance.',
    overview:
      'Smart Dashboard consolidates financial data, attendance trends, and academic performance metrics into a single executive-level view for school leadership teams.',
    tags: ['ANALYTICS', 'WEB DESIGN'],
    image: '/assets/Feature/dash.jpg',
    client: 'Docme',
    year: '2024',
    role: 'Data Visualisation & UI Design',
    features: [
      {
        title: 'Financial clarity in one view',
        description:
          'Fee collection rates, outstanding balances, and monthly revenue curves are presented in clean, scannable charts — no spreadsheet wrangling required.',
        image: '/assets/Feature/dash.jpg',
        imageAlt: 'Smart Dashboard finance view',
        reverse: false,
      },
      {
        title: 'Performance trends across every grade',
        description:
          'Compare class averages, spot declining cohorts early, and celebrate high-performing teachers — all with drill-down detail available in two clicks.',
        image: '/assets/Feature/School Dairy V2.1 1.jpg',
        imageAlt: 'Smart Dashboard performance view',
        reverse: true,
      },
    ],
    screenshots: [
      { src: '/assets/Feature/dash.jpg', alt: 'Overview screen' },
      { src: '/assets/Feature/dash1.jpg', alt: 'Detailed analytics' },
      { src: '/assets/Feature/BM One.jpg', alt: 'Operations portal' },
      { src: '/assets/Feature/10 (dark, light, color).jpg', alt: 'Mobile view' },
    ],
    ctaTitle: 'Experience Smart Dashboard by yourself',
    ctaSubtitle: 'Data-driven decisions for every school leader.',
    ctaLink: 'docme.in/smart-dashboard',
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
export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find(
    (p) => p.slug === slug || (slug === 'teacher-app' && p.slug === 'class-control')
  );
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
