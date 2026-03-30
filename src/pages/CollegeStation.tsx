/**
 * College Station, TX - Locksmith Services Page
 * Local SEO optimized for: locksmith college station tx, car lockout college station
 */

import React from 'react';
import {
  Phone, MapPin, Clock, ShieldCheck, Star, ArrowRight,
  Car, Home, Building2, ShieldAlert, Navigation, CheckCircle,
  Users, School, Beer, TreePine, Camera
} from 'lucide-react';
// ChatWidget temporarily disabled - focusing on local SEO and direct calls
// import ChatWidget from '../components/ChatWidget';

const NEIGHBORHOODS = [
  'Northgate',
  'Southwood Valley',
  'Peach Creek',
  'Carter Creek',
  'Wolf Pen Creek',
  'Castlegate',
  'Edelweiss',
  'Barracks'
];

const REVIEWS = [
  {
    text: "Locked out of my apartment at Northgate at 1am. They arrived in 10 minutes! Super friendly and fast service.",
    name: "Jessica M.",
    location: "Northgate, College Station",
    rating: 5
  },
  {
    text: "Got my car key programmed for my Honda after losing it at the rec center. Way cheaper than the dealership and they came to me!",
    name: "Tyler K.",
    location: "Texas A&M Student",
    rating: 5
  },
  {
    text: "Needed my house rekeyed after moving to Southwood Valley. Professional, quick, and great price. Highly recommend!",
    name: "Amanda R.",
    location: "Southwood Valley",
    rating: 5
  }
];

export default function CollegeStation() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Schema.org for this page */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "CarLocksOut Locksmith - College Station",
          "description": "24/7 locksmith services in College Station TX. Car lockouts, home lockouts, key programming, and rekey services. Serving Northgate, Texas A&M, and all College Station neighborhoods.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "College Station",
            "addressRegion": "TX",
            "postalCode": "77840",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "30.6280",
            "longitude": "-96.3344"
          },
          "telephone": "+1-281-989-0245",
          "areaServed": "College Station, TX",
          "priceRange": "$$"
        }
      `}</script>

      {/* Hero Section with Map Background */}
      <section className="relative min-h-[600px] flex items-center pt-20 overflow-hidden">
        {/* Background Map of Texas with College Station Highlighted */}
        <div className="absolute inset-0 z-0">
          <TexasMap highlightedCity="college-station" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
              <MapPin className="w-4 h-4" />
              College Station, TX
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-6">
              Locksmith in<br />
              <span className="text-primary-container">College Station</span><br />
              15-Min Response
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Professional locksmith services for College Station residents and Texas A&M students.
              Fast, affordable lockouts, key programming, and rekey services. Serving Northgate,
              Southwood Valley, and all CS neighborhoods.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4 mb-8">
              <StatBadge icon={<Clock className="w-4 h-4" />} text="15-Min Response" />
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
              <a
                href="#services"
                className="bg-white/10 backdrop-blur border-2 border-white/30 text-white text-lg font-bold px-8 py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-white/20 transition-all"
              >
                View Services
                <ArrowRight className="w-5 h-5" />
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
                <div className="text-sm text-on-surface/60">College Station</div>
              </div>
            </div>
            <div className="h-32 bg-surface-container rounded-lg mb-4 relative overflow-hidden">
              {/* Mini Map */}
              <div className="absolute inset-0 bg-secondary/10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
                  <div className="w-4 h-4 bg-primary rounded-full absolute top-0 animate-ping" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2 text-xs font-bold text-on-surface/70">
                You Are Here
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
              Serving All College Station Neighborhoods
            </h2>
            <p className="text-on-surface/70 max-w-2xl mx-auto">
              From Northgate bars to Southwood Valley homes, we cover every corner of College Station
              with fast 15-minute response times.
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
                <p className="text-sm text-on-surface/60 mt-1">15-min response</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Texas A&M Section */}
      <section className="py-16 bg-secondary/5 border-y border-secondary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                <School className="w-4 h-4" />
                Texas A&M Students
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">
                Locked Out at Texas A&M?<br />
                <span className="text-secondary">We Got You, Aggie!</span>
              </h2>
              <p className="text-on-surface/70 mb-6 leading-relaxed">
                As your local locksmith, I understand the unique needs of Texas A&M students. Whether you're locked out of
                your dorm after a night at Northgate, lost your keys at Kyle Field, or need your
                car opened in a campus parking lot, I'm here to help personally.
              </p>
              <p className="text-on-surface/70 mb-8 leading-relaxed">
                <strong>Show your student ID for special discounts!</strong> We offer 10% off all
                services for active Texas A&M students.
              </p>

              <div className="space-y-3">
                {[
                  'Student discounts with valid ID',
                  'Fast response to dorms & apartments',
                  'We know campus parking areas',
                  'Late-night service for Northgate'
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
                <h3 className="text-xl font-bold mb-6">Popular A&M Locations We Serve</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Northgate District', icon: <Beer className="w-5 h-5" /> },
                    { name: 'Kyle Field Area', icon: <School className="w-5 h-5" /> },
                    { name: 'White Creek Apartments', icon: <Home className="w-5 h-5" /> },
                    { name: 'Park West', icon: <Car className="w-5 h-5" /> },
                    { name: 'The Gardens', icon: <TreePine className="w-5 h-5" /> },
                    { name: 'University Oaks', icon: <Home className="w-5 h-5" /> },
                  ].map((loc) => (
                    <div key={loc.name} className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="text-secondary">{loc.icon}</div>
                        <span className="font-medium">{loc.name}</span>
                      </div>
                      <span className="text-xs text-primary font-bold">10-15 min</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black tracking-tighter mb-4">
              Locksmith Services in College Station
            </h2>
            <p className="text-on-surface/70 max-w-2xl mx-auto">
              Complete locksmith solutions for College Station homes, vehicles, and businesses.
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
              description="Business and office lockouts with priority response for commercial clients."
              price="From $85"
            />
            <ServiceCard
              icon={<ShieldAlert className="w-10 h-10" />}
              title="Safe Lockout"
              description="Safe opening for homes and businesses. Professional techniques used."
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
              College Station Customer Reviews
            </h2>
            <div className="flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-primary fill-current" />
              ))}
              <span className="ml-2 font-bold text-xl">4.9/5</span>
              <span className="text-on-surface/60">(127 College Station reviews)</span>
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
            Need a Locksmith in College Station?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Available 24/7 with 15-minute average response time. Call now for immediate assistance!
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

      {/* Photo Gallery Section - Your Local Locksmith */}
      <section className="py-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black tracking-tighter mb-4">
              Meet Your Local Locksmith
            </h2>
            <p className="text-on-surface/70 max-w-2xl mx-auto">
              Professional, licensed, and dedicated to serving College Station and Houston with
              fast, reliable locksmith services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Photo 1 - Locksmith at Work */}
            <div className="bg-surface rounded-xl overflow-hidden shadow-lg group">
              <div className="aspect-[4/3] bg-surface-container relative overflow-hidden">
                {/* Replace src with actual locksmith photo */}
                <img
                  src="/photos/locksmith-working.jpg"
                  alt="Professional locksmith providing car lockout service in College Station"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%238f4e00" width="400" height="300"/%3E%3Ctext fill="white" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle" font-size="16"%3ELocksmith Photo 1%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-on-surface">Car Lockout Service</h3>
                <p className="text-sm text-on-surface/60 mt-1">Fast, damage-free vehicle entry</p>
              </div>
            </div>

            {/* Photo 2 - Service Van */}
            <div className="bg-surface rounded-xl overflow-hidden shadow-lg group">
              <div className="aspect-[4/3] bg-surface-container relative overflow-hidden">
                {/* Replace src with actual service van photo */}
                <img
                  src="/photos/service-van.jpg"
                  alt="Mobile locksmith service van serving Houston and College Station areas"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23246293" width="400" height="300"/%3E%3Ctext fill="white" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle" font-size="16"%3EService Van Photo%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-on-surface">Fully Equipped Mobile Unit</h3>
                <p className="text-sm text-on-surface/60 mt-1">Same-day service at your location</p>
              </div>
            </div>

            {/* Photo 3 - Key Programming */}
            <div className="bg-surface rounded-xl overflow-hidden shadow-lg group">
              <div className="aspect-[4/3] bg-surface-container relative overflow-hidden">
                {/* Replace src with actual key programming photo */}
                <img
                  src="/photos/key-programming.jpg"
                  alt="Car key programming service for all vehicle makes and models"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%238f4e00" width="400" height="300"/%3E%3Ctext fill="white" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle" font-size="16"%3EKey Programming Photo%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-on-surface">Key Programming Expert</h3>
                <p className="text-sm text-on-surface/60 mt-1">Transponder &amp; smart key specialists</p>
              </div>
            </div>
          </div>

          {/* Additional Photos Row */}
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            {/* Photo 4 */}
            <div className="bg-surface rounded-xl overflow-hidden shadow-lg group">
              <div className="aspect-square bg-surface-container relative overflow-hidden">
                <img
                  src="/photos/residential-service.jpg"
                  alt="Residential locksmith service - home lockout and rekey specialist"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"%3E%3Crect fill="%23246293" width="300" height="300"/%3E%3Ctext fill="white" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle" font-size="14"%3EResidential Photo%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              <div className="p-3">
                <h3 className="font-bold text-sm text-on-surface">Home Services</h3>
              </div>
            </div>

            {/* Photo 5 */}
            <div className="bg-surface rounded-xl overflow-hidden shadow-lg group">
              <div className="aspect-square bg-surface-container relative overflow-hidden">
                <img
                  src="/photos/commercial-service.jpg"
                  alt="Commercial locksmith services for businesses in Houston TX"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"%3E%3Crect fill="%238f4e00" width="300" height="300"/%3E%3Ctext fill="white" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle" font-size="14"%3ECommercial Photo%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              <div className="p-3">
                <h3 className="font-bold text-sm text-on-surface">Business Security</h3>
              </div>
            </div>

            {/* Photo 6 */}
            <div className="bg-surface rounded-xl overflow-hidden shadow-lg group">
              <div className="aspect-square bg-surface-container relative overflow-hidden">
                <img
                  src="/photos/safe-service.jpg"
                  alt="Safe lockout and opening services in College Station"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"%3E%3Crect fill="%23246293" width="300" height="300"/%3E%3Ctext fill="white" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle" font-size="14"%3ESafe Service Photo%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              <div className="p-3">
                <h3 className="font-bold text-sm text-on-surface">Safe Services</h3>
              </div>
            </div>

            {/* Photo 7 - Licensed Badge */}
            <div className="bg-primary/10 rounded-xl overflow-hidden shadow-lg border-2 border-primary/30 flex flex-col items-center justify-center p-6">
              <ShieldCheck className="w-12 h-12 text-primary mb-3" />
              <h3 className="font-bold text-on-surface text-center">Licensed &amp; Insured</h3>
              <p className="text-xs text-on-surface/60 text-center mt-1">Texas State Certified</p>
            </div>
          </div>

          {/* CTA after gallery */}
          <div className="text-center mt-10">
            <a
              href="tel:+12819890245"
              className="inline-flex items-center gap-3 kinetic-gradient text-on-primary text-lg font-bold px-8 py-4 rounded-xl hover:brightness-110 transition-all"
            >
              <Phone className="w-5 h-5 fill-current" />
              Call (281) 989-0245 for Immediate Service
            </a>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Professional Locksmith Services in College Station, TX</h2>
          <div className="prose prose-lg text-on-surface/80">
            <p>
              When you need a reliable locksmith in College Station, Texas, CarLocksOut is your
              trusted local partner. We've been serving the College Station community for over 11
              years, providing fast, professional locksmith services to residents, students, and
              businesses throughout the area.
            </p>
            <p>
              I specialize in emergency lockouts, car key programming, residential rekeying, and
              commercial security solutions. Whether you're locked out of your car at Northgate,
              need your dorm room opened, or require
              commercial rekeying for your business, we have the expertise and equipment to handle
              any situation.
            </p>
            <p>
              We understand the unique needs of College Station residents, including Texas A&M
              students who may be dealing with lockouts at all hours. My 24/7 availability means
              I'm always here when you need me, with an average response time of just 15 minutes
              anywhere in College Station and Houston.
            </p>
            <h3 className="text-xl font-bold mt-8 mb-4">Why Choose Our College Station Locksmith?</h3>
            <ul className="space-y-2 list-disc pl-6">
              <li>Licensed and insured in Texas</li>
              <li>15-minute average response time</li>
              <li>Local College Station technicians</li>
              <li>Upfront, honest pricing</li>
              <li>Student discounts available</li>
              <li>Latest key programming technology</li>
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

// Texas Map Component
function TexasMap({ highlightedCity }: { highlightedCity: string }) {
  return (
    <div className="absolute inset-0 bg-secondary/20">
      {/* Stylized Texas Map SVG */}
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full opacity-30"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Texas Outline */}
        <path
          d="M 400 50 L 550 60 L 580 200 L 750 220 L 720 350 L 680 450 L 600 520 L 500 550 L 350 530 L 200 500 L 100 450 L 80 350 L 100 250 L 120 150 L 150 100 L 250 80 L 350 60 Z"
          fill="#246293"
          stroke="#1a4a6e"
          strokeWidth="3"
        />

        {/* Highlight College Station Area */}
        <circle
          cx="520"
          cy="280"
          r="25"
          fill="#8f4e00"
          className="animate-pulse"
        />
        <circle
          cx="520"
          cy="280"
          r="40"
          fill="none"
          stroke="#8f4e00"
          strokeWidth="2"
          strokeDasharray="5,5"
          className="animate-spin"
          style={{ animationDuration: '3s' }}
        />
      </svg>

      {/* City Label */}
      <div
        className="absolute bg-white px-4 py-2 rounded-lg shadow-lg font-bold text-on-surface"
        style={{ top: '45%', left: '63%' }}
      >
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-primary rounded-full" />
          College Station
        </div>
      </div>

      {/* Chat Widget - temporarily disabled */}
      {/* <ChatWidget /> */}
    </div>
  );
}
