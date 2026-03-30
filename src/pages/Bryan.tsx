/**
 * Bryan, TX - Locksmith Services Page
 * Local SEO optimized for: locksmith bryan tx, car lockout bryan
 */

import React from 'react';
import {
  Phone, MapPin, Clock, ShieldCheck, Star, ArrowRight,
  Car, Home, Building2, ShieldAlert, Navigation, CheckCircle,
  TreePine, Building, Castle, Store, Trees
} from 'lucide-react';
import ChatWidget from '../components/ChatWidget';

const NEIGHBORHOODS = [
  'Downtown Bryan',
  'Castle Heights',
  'Woodlake',
  'Briarcrest',
  'Brazos Country',
  'Meadowbrook',
  'Hunterwood',
  'Bonita Springs'
];

const REVIEWS = [
  {
    text: "Excellent service! Locked out of my house in Castle Heights and they arrived in 15 minutes. Very professional and affordable.",
    name: "Robert H.",
    location: "Castle Heights, Bryan",
    rating: 5
  },
  {
    text: "Needed my business rekeyed in Downtown Bryan. They came after hours and did a great job. Will definitely use again!",
    name: "Maria G.",
    location: "Downtown Bryan",
    rating: 5
  },
  {
    text: "Lost my car keys at the park. They made a new key on the spot and programmed it. Super fast service in Woodlake area.",
    name: "David L.",
    location: "Woodlake, Bryan",
    rating: 5
  }
];

export default function Bryan() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Schema.org for this page */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "CarLocksOut Locksmith - Bryan TX",
          "description": "24/7 locksmith services in Bryan TX. Car lockouts, home lockouts, key programming, and rekey services. Serving Downtown Bryan, Castle Heights, and all Bryan neighborhoods.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bryan",
            "addressRegion": "TX",
            "postalCode": "77801",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "30.6744",
            "longitude": "-96.3699"
          },
          "telephone": "+1-281-989-0245",
          "areaServed": "Bryan, TX",
          "priceRange": "$$"
        }
      `}</script>

      {/* Hero Section with Map Background */}
      <section className="relative min-h-[600px] flex items-center pt-20 overflow-hidden">
        {/* Background Map of Texas with Bryan Highlighted */}
        <div className="absolute inset-0 z-0">
          <TexasMap highlightedCity="bryan" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
              <MapPin className="w-4 h-4" />
              Bryan, TX
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-6">
              Locksmith in<br />
              <span className="text-primary-container">Bryan</span><br />
              Fast & Reliable
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Professional locksmith services for Bryan residents and businesses.
              Car lockouts, home lockouts, key programming, and rekey services.
              Serving Downtown Bryan, Castle Heights, and all Bryan neighborhoods.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4 mb-8">
              <StatBadge icon={<Clock className="w-4 h-4" />} text="15-20 Min Response" />
              <StatBadge icon={<ShieldCheck className="w-4 h-4" />} text="TX Licensed #00104825" />
              <StatBadge icon={<Star className="w-4 h-4" />} text="4.9/5 Stars" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+19792173663"
                className="kinetic-gradient text-on-primary text-lg font-bold px-8 py-5 rounded-xl flex items-center justify-center gap-3 hover:brightness-110 transition-all"
              >
                <Phone className="w-6 h-6 fill-current" />
                CALL (281) 989-0245
              </a>
            </div>
          </div>
        </div>

        {/* Map Pin Card */}
        <div className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2">
          <div className="bg-white rounded-xl p-6 shadow-2xl w-72">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 kinetic-gradient rounded-full flex items-center justify-center text-white font-black text-xl">
                C
              </div>
              <div>
                <div className="font-bold text-on-surface">CarLocksOut</div>
                <div className="text-sm text-on-surface/60">Bryan, TX</div>
              </div>
            </div>
            <div className="h-32 bg-surface-container rounded-lg mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-secondary/10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
                  <div className="w-4 h-4 bg-primary rounded-full absolute top-0 animate-ping" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2 text-xs font-bold text-on-surface/70">
                Bryan Service Area
              </div>
            </div>
            <a
              href="tel:+12819890245"
              className="w-full kinetic-gradient text-on-primary font-bold py-3 rounded-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black tracking-tighter mb-4">
              Serving All Bryan Neighborhoods
            </h2>
            <p className="text-on-surface/70 max-w-2xl mx-auto">
              From historic Downtown Bryan to suburban Castle Heights, we cover every
              neighborhood with fast response times.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {NEIGHBORHOODS.map((hood) => (
              <div
                key={hood}
                className="bg-surface p-6 rounded-xl border-2 border-surface-container-highest hover:border-primary transition-all group"
              >
                <MapPin className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-on-surface">{hood}</h3>
                <p className="text-sm text-on-surface/60 mt-1">15-20 min response</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historic Downtown Section */}
      <section className="py-16 bg-secondary/5 border-y border-secondary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Castle className="w-4 h-4" />
                Historic Downtown Bryan
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">
                Serving Historic<br />
                <span className="text-secondary">Downtown Bryan</span>
              </h2>
              <p className="text-on-surface/70 mb-6 leading-relaxed">
                Downtown Bryan is home to historic buildings, local businesses, and
                beautiful homes. We understand the unique challenges of working with
                older locks and security systems while preserving the historic character
                of these properties.
              </p>
              <p className="text-on-surface/70 mb-8 leading-relaxed">
                Our technicians are experienced with vintage lock systems, antique
                hardware, and modern security integration for historic properties.
              </p>

              <div className="space-y-3">
                {[
                  'Experience with vintage locks',
                  'Historic building expertise',
                  'Business lockout specialists',
                  'Antique hardware restoration'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-on-surface">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-surface p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold mb-6">Popular Bryan Locations We Serve</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Downtown Bryan Historic', icon: <Building className="w-5 h-5" /> },
                    { name: 'Castle Heights', icon: <Castle className="w-5 h-5" /> },
                    { name: 'Brazos County Courthouse', icon: <Store className="w-5 h-5" /> },
                    { name: 'Woodlake Subdivision', icon: <Trees className="w-5 h-5" /> },
                    { name: 'Briarcrest Estates', icon: <Home className="w-5 h-5" /> },
                    { name: 'Brazos Country', icon: <TreePine className="w-5 h-5" /> },
                  ].map((loc) => (
                    <div key={loc.name} className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="text-secondary">{loc.icon}</div>
                        <span className="font-medium">{loc.name}</span>
                      </div>
                      <span className="text-xs text-primary font-bold">15 min</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black tracking-tighter mb-4">
              Locksmith Services in Bryan, TX
            </h2>
            <p className="text-on-surface/70 max-w-2xl mx-auto">
              Complete locksmith solutions for Bryan homes, vehicles, and businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<Car className="w-10 h-10" />}
              title="Car Lockout"
              description="Fast vehicle entry for all makes and models. No damage guaranteed."
              price="From $65"
            />
            <ServiceCard
              icon={<Home className="w-10 h-10" />}
              title="Home Lockout"
              description="Residential entry without damaging your door or lock. 24/7 available."
              price="From $75"
            />
            <ServiceCard
              icon={<Building2 className="w-10 h-10" />}
              title="Commercial Lockout"
              description="Business and office lockouts with priority response."
              price="From $85"
            />
            <ServiceCard
              icon={<ShieldAlert className="w-10 h-10" />}
              title="Safe Lockout"
              description="Safe opening for homes and businesses. Professional techniques."
              price="From $95"
            />
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Navigation className="w-8 h-8" />}
              title="Residential Rekey"
              description="Change your locks to work with new keys. Perfect for new homeowners."
              price="From $45/lock"
            />
            <ServiceCard
              icon={<Navigation className="w-8 h-8" />}
              title="Commercial Rekey"
              description="Master key systems and business security solutions."
              price="From $55/lock"
            />
            <ServiceCard
              icon={<Car className="w-8 h-8" />}
              title="Car Key Programming"
              description="Transponder keys, smart keys, and remote programming on-site."
              price="From $120"
            />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black tracking-tighter mb-4">
              Bryan Customer Reviews
            </h2>
            <div className="flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-primary fill-current" />
              ))}
              <span className="ml-2 font-bold text-xl">4.9/5</span>
              <span className="text-on-surface/60">(89 Bryan reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <div key={idx} className="bg-surface p-6 rounded-xl shadow-lg">
                <div className="flex text-primary mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-on-surface/80 mb-4 italic">"{review.text}"</p>
                <div className="border-t border-surface-container pt-4">
                  <div className="font-bold">{review.name}</div>
                  <div className="text-sm text-primary">{review.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Need a Locksmith in Bryan?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Available 24/7 with 15-20 minute response time. Call now for immediate assistance!
          </p>
          <a
            href="tel:+12819890245"
            className="inline-flex items-center gap-3 bg-white text-primary text-xl font-bold px-10 py-5 rounded-xl hover:bg-white/90 transition-all"
          >
            <Phone className="w-6 h-6 fill-current" />
            (281) 989-0245
          </a>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Professional Locksmith Services in Bryan, TX</h2>
          <div className="prose prose-lg text-on-surface/80">
            <p>
              CarLocksOut provides comprehensive locksmith services throughout Bryan, Texas,
              and the surrounding Brazos Valley area. As a locally owned and operated business,
              we understand the security needs of Bryan residents and businesses.
            </p>
            <p>
              From the historic homes in Downtown Bryan to the modern developments in Castle
              Heights, our experienced locksmiths are equipped to handle any lock and key
              situation. We specialize in both traditional lock systems and modern electronic
              security solutions.
            </p>
            <p>
              Our Bryan locksmith team is available 24/7 for emergencies, with an average
              response time of 15-20 minutes. We understand that lockouts don't follow a
              schedule, which is why we're always ready to help.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4">Areas We Serve in Bryan</h3>
            <p>We provide locksmith services throughout Bryan and surrounding areas, including:</p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Downtown Bryan Historic District</li>
              <li>Castle Heights</li>
              <li>Woodlake</li>
              <li>Briarcrest</li>
              <li>Brazos Country</li>
              <li>Meadowbrook</li>
              <li>Hunterwood</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper Components
function StatBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white">
      {icon}
      <span className="font-semibold text-sm">{text}</span>
    </div>
  );
}

function ServiceCard({ icon, title, description, price }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
}) {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl border border-surface-container-highest hover:border-primary transition-all group">
      <div className="text-secondary mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-on-surface/70 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-primary font-bold">{price}</span>
        <a
          href="tel:+12819890245"
          className="text-sm font-bold text-secondary hover:text-primary transition-colors flex items-center gap-1"
        >
          Call Now <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

// Texas Map Component - Bryan
function TexasMap({ highlightedCity }: { highlightedCity: string }) {
  return (
    <div className="absolute inset-0 bg-secondary/20">
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full opacity-30"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M 400 50 L 550 60 L 580 200 L 750 220 L 720 350 L 680 450 L 600 520 L 500 550 L 350 530 L 200 500 L 100 450 L 80 350 L 100 250 L 120 150 L 150 100 L 250 80 L 350 60 Z"
          fill="#246293"
          stroke="#1a4a6e"
          strokeWidth="3"
        />

        {/* Highlight Bryan Area */}
        <circle
          cx="510"
          cy="270"
          r="25"
          fill="#8f4e00"
          className="animate-pulse"
        />
        <circle
          cx="510"
          cy="270"
          r="40"
          fill="none"
          stroke="#8f4e00"
          strokeWidth="2"
          strokeDasharray="5,5"
          className="animate-spin"
          style={{ animationDuration: '3s' }}
        />
      </svg>

      <div
        className="absolute bg-white px-4 py-2 rounded-lg shadow-lg font-bold text-on-surface"
        style={{ top: '43%', left: '62%' }}
      >
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-primary rounded-full" />
          Bryan, TX
        </div>
      </div>
    </div>
  );
}
