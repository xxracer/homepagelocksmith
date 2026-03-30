/**
 * Houston, TX - Locksmith Services Page
 * Local SEO optimized for: locksmith houston tx, 24 hour locksmith houston
 */

import React from 'react';
import {
  Phone, MapPin, Clock, ShieldCheck, Star, ArrowRight,
  Car, Home, Building2, ShieldAlert, Navigation, CheckCircle,
  Building, Trees, Waves, Mountain
} from 'lucide-react';

const AREAS = [
  'Downtown Houston',
  'The Woodlands',
  'Katy',
  'Sugar Land',
  'Cypress',
  'Pearland',
  'Spring',
  'Humble',
  'Kingwood',
  'Conroe'
];

const REVIEWS = [
  {
    text: "Locked my keys in my truck at a job site in The Woodlands. They arrived fast and got me back to work quickly. Great service!",
    name: "Michael T.",
    location: "The Woodlands, TX",
    rating: 5
  },
  {
    text: "Excellent locksmith service in Katy! Programmed a new key for my Mercedes for half the dealership price. Professional and fast.",
    name: "Jennifer W.",
    location: "Katy, TX",
    rating: 5
  },
  {
    text: "Needed my office rekeyed in Downtown Houston. They came after hours and did a thorough job. Highly recommend!",
    name: "Carlos M.",
    location: "Downtown Houston",
    rating: 5
  }
];

export default function Houston() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Schema.org for this page */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "CarLocksOut Locksmith - Houston TX",
          "description": "24/7 locksmith services in Houston TX. Car lockouts, home lockouts, key programming, and rekey services. Serving The Woodlands, Katy, Sugar Land, Cypress, and all Houston areas.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Houston",
            "addressRegion": "TX",
            "postalCode": "77001",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "29.7604",
            "longitude": "-95.3698"
          },
          "telephone": "+1-281-989-0245",
          "areaServed": [
            "Houston, TX",
            "The Woodlands, TX",
            "Katy, TX",
            "Sugar Land, TX",
            "Cypress, TX"
          ],
          "priceRange": "$$"
        }
      `}</script>

      {/* Hero Section with Map Background */}
      <section className="relative min-h-[600px] flex items-center pt-20 overflow-hidden">
        {/* Background Map of Texas with Houston Highlighted */}
        <div className="absolute inset-0 z-0">
          <TexasMap highlightedCity="houston" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
              <MapPin className="w-4 h-4" />
              Houston, TX & Surrounding Areas
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-6">
              Houston's Trusted<br />
              <span className="text-primary-container">24/7 Locksmith</span><br />
              Service
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Professional locksmith services for Houston and surrounding areas.
              Car lockouts, home lockouts, key programming, and rekey services.
              Serving The Woodlands, Katy, Sugar Land, Cypress, and all Greater Houston.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4 mb-8">
              <StatBadge icon={<Clock className="w-4 h-4" />} text="20-30 Min Response" />
              <StatBadge icon={<ShieldCheck className="w-4 h-4" />} text="TX Licensed #00104825" />
              <StatBadge icon={<Star className="w-4 h-4" />} text="4.9/5 Stars" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+12819890245"
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
                <div className="text-sm text-on-surface/60">Houston Metro</div>
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
                Greater Houston Area
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

      {/* Service Areas Grid */}
      <section className="py-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black tracking-tighter mb-4">
              Serving All Houston Areas
            </h2>
            <p className="text-on-surface/70 max-w-2xl mx-auto">
              From Downtown Houston to The Woodlands, we cover the entire Greater Houston
              metropolitan area with professional locksmith services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {AREAS.map((area) => (
              <div
                key={area}
                className="bg-surface p-4 rounded-xl border-2 border-surface-container-highest hover:border-primary transition-all group text-center"
              >
                <MapPin className="w-5 h-5 text-primary mb-2 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-sm text-on-surface">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Areas Detail */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* The Woodlands */}
            <div className="bg-surface-container-low p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Trees className="w-6 h-6 text-secondary" />
                <h3 className="text-xl font-bold">The Woodlands</h3>
              </div>
              <p className="text-sm text-on-surface/70 mb-4">
                Premium locksmith services for The Woodlands community. Residential and
                commercial lockouts, rekey services, and high-security installations.
              </p>
              <div className="text-xs font-bold text-primary">15-20 min response</div>
            </div>

            {/* Katy */}
            <div className="bg-surface-container-low p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Home className="w-6 h-6 text-secondary" />
                <h3 className="text-xl font-bold">Katy</h3>
              </div>
              <p className="text-sm text-on-surface/70 mb-4">
                Fast locksmith service in Katy TX. Car key programming, home lockouts,
                and residential rekeying. We serve all Katy neighborhoods.
              </p>
              <div className="text-xs font-bold text-primary">15-20 min response</div>
            </div>

            {/* Sugar Land */}
            <div className="bg-surface-container-low p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Building className="w-6 h-6 text-secondary" />
                <h3 className="text-xl font-bold">Sugar Land</h3>
              </div>
              <p className="text-sm text-on-surface/70 mb-4">
                Professional locksmith services in Sugar Land. Commercial and residential
                security solutions. Master key systems and access control.
              </p>
              <div className="text-xs font-bold text-primary">20-25 min response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black tracking-tighter mb-4">
              Houston Locksmith Services
            </h2>
            <p className="text-on-surface/70 max-w-2xl mx-auto">
              Complete locksmith solutions for Houston homes, vehicles, and businesses.
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
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black tracking-tighter mb-4">
              Houston Area Reviews
            </h2>
            <div className="flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-primary fill-current" />
              ))}
              <span className="ml-2 font-bold text-xl">4.9/5</span>
              <span className="text-on-surface/60">(347 Houston reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <div key={idx} className="bg-surface-container-low p-6 rounded-xl shadow-lg">
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
            Need a Locksmith in Houston?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Available 24/7 throughout Greater Houston. Call now for immediate assistance!
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
      <section className="py-16 bg-surface-container-low">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Professional Locksmith Services in Houston, TX</h2>
          <div className="prose prose-lg text-on-surface/80">
            <p>
              CarLocksOut is Houston's premier mobile locksmith service, providing fast,
              reliable security solutions throughout the Greater Houston metropolitan area.
              From Downtown Houston to The Woodlands, Katy to Sugar Land, our mobile units
              are strategically positioned to reach you quickly.
            </p>
            <p>
              We understand Houston's diverse communities and security needs. Whether you're
              locked out of your car at the Galleria, need your home rekeyed in The Woodlands,
              or require commercial locksmith services in Downtown Houston, we have the
              expertise and equipment to handle any situation.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4">Houston Areas We Serve</h3>
            <p>We provide locksmith services throughout Greater Houston, including:</p>
            <ul className="grid md:grid-cols-2 gap-2 list-disc pl-6">
              <li>Downtown Houston</li>
              <li>The Woodlands</li>
              <li>Katy</li>
              <li>Sugar Land</li>
              <li>Cypress</li>
              <li>Pearland</li>
              <li>Spring</li>
              <li>Humble</li>
              <li>Kingwood</li>
              <li>Conroe</li>
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

// Texas Map Component - Houston
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

        {/* Highlight Houston Area */}
        <circle
          cx="500"
          cy="320"
          r="40"
          fill="#8f4e00"
          className="animate-pulse"
          fillOpacity="0.5"
        />
        <circle
          cx="500"
          cy="320"
          r="60"
          fill="none"
          stroke="#8f4e00"
          strokeWidth="2"
          strokeDasharray="5,5"
        />
      </svg>

      <div
        className="absolute bg-white px-4 py-2 rounded-lg shadow-lg font-bold text-on-surface"
        style={{ top: '52%', left: '58%' }}
      >
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-primary rounded-full" />
          Houston Metro
        </div>
      </div>
    </div>
  );
}
