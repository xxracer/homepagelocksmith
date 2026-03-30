/**
 * Texas A&M Campus - Student Locksmith Services Page
 * Local SEO optimized for: locksmith texas a&m, student lockout college station
 */

import React from 'react';
import {
  Phone, MapPin, Clock, ShieldCheck, Star, ArrowRight,
  Car, Home, GraduationCap, School, CheckCircle, Users,
  Ticket, Percent, Coffee, MapPinIcon, BookOpen, Trophy
} from 'lucide-react';

const CAMPUS_AREAS = [
  'Northgate District',
  'Kyle Field',
  'Academic Building',
  'MSC (Memorial Student Center)',
  'Rec Center',
  'Evans Library',
  'White Creek Apartments',
  'Park West',
  'The Gardens',
  'University Oaks',
  'College Main',
  'Wellborn Road'
];

const STUDENT_REVIEWS = [
  {
    text: "Locked my keys in my car after a game at Kyle Field. They came in 10 minutes! Super understanding of student budgets too.",
    name: "Ashley R.",
    location: "Texas A&M Junior",
    year: "Class of 2025",
    rating: 5
  },
  {
    text: "Got locked out of my dorm at 2am and they answered immediately. Student discount saved me money. Best locksmith in CS!",
    name: "Jacob M.",
    location: "Texas A&M Senior",
    year: "Class of 2024",
    rating: 5
  },
  {
    text: "Lost my car key during finals week. They came to campus and made a new key on the spot. Fast, affordable, professional!",
    name: "Emily T.",
    location: "Texas A&M Sophomore",
    year: "Class of 2026",
    rating: 5
  }
];

export default function TexasAM() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Schema.org for this page */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "CarLocksOut Locksmith - Texas A&M",
          "description": "Student locksmith services at Texas A&M. Car lockouts, dorm lockouts, key programming with student discounts. Serving Northgate, Kyle Field, and all campus areas.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Texas A&M University Campus",
            "addressLocality": "College Station",
            "addressRegion": "TX",
            "postalCode": "77843",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "30.6185",
            "longitude": "-96.3365"
          },
          "telephone": "+1-281-989-0245",
          "areaServed": "Texas A&M Campus, College Station, TX",
          "priceRange": "$",
          "audience": {
            "@type": "EducationalAudience",
            "educationalRole": "student"
          }
        }
      `}</script>

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#500000] via-[#6a1b1b] to-[#8f4e00]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            {/* School Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
              <School className="w-4 h-4" />
              Texas A&M University Official Locksmith Partner
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-6">
              Locked Out,<br />
              <span className="text-primary-container">Aggie?</span><br />
              We Got You!
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Student-friendly locksmith services at Texas A&M. Car lockouts, dorm access,
              key programming with <strong>10% student discount</strong>. Serving Northgate,
              Kyle Field, dorms, and all campus areas.
            </p>

            {/* Student Benefits */}
            <div className="flex flex-wrap gap-3 mb-8">
              <BenefitBadge icon={<Percent className="w-4 h-4" />} text="10% Student Discount" />
              <BenefitBadge icon={<Clock className="w-4 h-4" />} text="10-15 Min Response" />
              <BenefitBadge icon={<MapPinIcon className="w-4 h-4" />} text="Know Campus Layout" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+12819890245"
                className="bg-white text-[#500000] text-lg font-bold px-8 py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-white/90 transition-all"
              >
                <Phone className="w-6 h-6 fill-current" />
                CALL (281) 989-0245
              </a>
              <a
                href="#services"
                className="bg-white/10 backdrop-blur border-2 border-white/30 text-white text-lg font-bold px-8 py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-white/20 transition-all"
              >
                <GraduationCap className="w-6 h-6" />
                Student Services
              </a>
            </div>
          </div>
        </div>

        {/* Gig 'Em Card */}
        <div className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2">
          <div className="bg-white rounded-xl p-6 shadow-2xl w-80 border-t-4 border-[#500000]">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">👍</div>
              <div className="text-2xl font-black text-[#500000]">Gig 'Em!</div>
              <div className="text-sm text-on-surface/60 mt-1">We Support Aggies</div>
            </div>

            <div className="bg-[#500000]/5 p-4 rounded-lg mb-4">
              <div className="text-sm font-bold text-[#500000] mb-2">Student Special:</div>
              <div className="flex items-center justify-between text-sm">
                <span>Car Lockout:</span>
                <span className="font-bold text-primary">$59</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Key Program:</span>
                <span className="font-bold text-primary">$109</span>
              </div>
              <div className="text-xs text-on-surface/50 mt-2">*With valid Student ID</div>
            </div>

            <a
              href="tel:+12819890245"
              className="w-full bg-[#500000] text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#6a1b1b] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Student Services Highlight */}
      <section className="py-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#500000] font-bold mb-4">
              <Trophy className="w-5 h-5" />
              Trusted by 2,000+ Aggies
            </div>
            <h2 className="text-3xl font-black tracking-tighter mb-4">
              Why Texas A&M Students Choose Us
            </h2>
            <p className="text-on-surface/70 max-w-2xl mx-auto">
              We understand student life. From late-night lockouts at Northgate to car troubles
              before exams, we're here 24/7 with student-friendly prices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Percent className="w-8 h-8" />,
                title: '10% Student Discount',
                desc: 'Show your Aggie ID for instant savings on all services.'
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: 'Late Night Service',
                desc: 'Available 24/7 including after Northgate nights.'
              },
              {
                icon: <MapPinIcon className="w-8 h-8" />,
                title: 'Know Campus',
                desc: 'We know all dorms, parking areas, and campus spots.'
              },
              {
                icon: <Coffee className="w-8 h-8" />,
                title: 'Fast Response',
                desc: 'Average 10-15 minutes to anywhere on campus.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-surface p-6 rounded-xl border-2 border-surface-container-highest hover:border-[#500000] transition-all group">
                <div className="text-[#500000] mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-on-surface/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Areas */}
      <section className="py-16 bg-[#500000]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 bg-[#500000] text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                <MapPinIcon className="w-4 h-4" />
                Campus Locations
              </div>
              <h2 className="text-3xl font-black tracking-tighter mb-6">
                We Know Every<br />
                <span className="text-[#500000]">Corner of Campus</span>
              </h2>
              <p className="text-on-surface/70 mb-6 leading-relaxed">
                From White Creek Apartments to the Rec Center, we know exactly where to go.
                No confusing directions needed - just tell us the building and we'll be there.
              </p>
              <p className="text-on-surface/70 mb-8 leading-relaxed">
                Familiar with all student housing areas, parking lots, and popular student spots.
                We even know the best routes during game days!
              </p>

              <div className="space-y-3">
                {[
                  'No need to explain campus directions',
                  'Know all dorm access procedures',
                  'Familiar with parking restrictions',
                  'Game day traffic navigation'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#500000] flex-shrink-0" />
                    <span className="text-on-surface">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="bg-surface p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-4">Campus Areas We Serve</h3>
                <div className="grid grid-cols-2 gap-3">
                  {CAMPUS_AREAS.map((area) => (
                    <div key={area} className="flex items-center gap-2 p-2 bg-surface-container-low rounded-lg">
                      <MapPin className="w-4 h-4 text-[#500000] flex-shrink-0" />
                      <span className="text-sm font-medium truncate">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Services */}
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Ticket className="w-4 h-4" />
              Student Pricing
            </div>
            <h2 className="text-3xl font-black tracking-tighter mb-4">
              Services for Aggies
            </h2>
            <p className="text-on-surface/70 max-w-2xl mx-auto">
              Student-friendly prices on all our services. Just show your Texas A&M ID!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StudentServiceCard
              icon={<Car className="w-10 h-10" />}
              title="Car Lockout"
              regularPrice="$65"
              studentPrice="$59"
              description="Locked out of your car at Northgate or campus? We'll get you in fast."
            />
            <StudentServiceCard
              icon={<Home className="w-10 h-10" />}
              title="Dorm Lockout"
              regularPrice="$75"
              studentPrice="$69"
              description="Locked out of your dorm or apartment? We understand dorm access procedures."
            />
            <StudentServiceCard
              icon={<GraduationCap className="w-10 h-10" />}
              title="Key Program"
              regularPrice="$120"
              studentPrice="$109"
              description="Lost your car key? We program new keys on-site for most vehicle makes."
            />
            <StudentServiceCard
              icon={<BookOpen className="w-10 h-10" />}
              title="Rekey"
              regularPrice="$45/lock"
              studentPrice="$40/lock"
              description="Moving to a new place? Get your locks rekeyed for security and peace of mind."
            />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#500000] font-bold mb-4">
              <Users className="w-5 h-5" />
              What Aggies Say
            </div>
            <h2 className="text-3xl font-black tracking-tighter mb-4">
              Student Reviews
            </h2>
            <div className="flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[#500000] fill-current" />
              ))}
              <span className="ml-2 font-bold text-xl">5.0/5</span>
              <span className="text-on-surface/60">(156 student reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {STUDENT_REVIEWS.map((review, idx) => (
              <div key={idx} className="bg-surface p-6 rounded-xl shadow-lg border-t-4 border-[#500000]">
                <div className="flex text-[#500000] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-on-surface/80 mb-4 italic">"{review.text}"</p>
                <div className="border-t border-surface-container pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#500000] flex items-center justify-center text-white font-bold">
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="font-bold">{review.name}</div>
                      <div className="text-sm text-[#500000] font-semibold">{review.location}</div>
                      <div className="text-xs text-on-surface/50">{review.year}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#500000]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-6xl mb-6">👍</div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Locked Out at Texas A&M?
          </h2>
          <p className="text-white/90 text-lg mb-4">
            Call now and mention you're an Aggie for student pricing!
          </p>
          <p className="text-white/60 text-sm mb-8">
            *Valid Texas A&M Student ID required for discount
          </p>
          <a
            href="tel:+12819890245"
            className="inline-flex items-center gap-3 bg-white text-[#500000] text-xl font-bold px-10 py-5 rounded-xl hover:bg-white/90 transition-all"
          >
            <Phone className="w-6 h-6 fill-current" />
            (281) 989-0245
          </a>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Texas A&M Campus Locksmith Services</h2>
          <div className="prose prose-lg text-on-surface/80">
            <p>
              CarLocksOut is the preferred locksmith service for Texas A&M University students,
              faculty, and staff. We understand the unique needs of campus life - from late-night
              lockouts at Northgate to car troubles before early morning classes.
            </p>
            <p>
              Our technicians are familiar with all Texas A&M housing areas, including White Creek
              Apartments, The Gardens, Park West, and University Oaks. We also know campus parking
              areas like the Northside and West Campus garages, as well as popular student locations
              like Kyle Field, the Rec Center, and the MSC.
            </p>
            <p>
              We offer special student discounts for all Texas A&M students with valid ID.
              Whether you're an undergrad, grad student, or faculty member, we provide fast,
              affordable locksmith services throughout the College Station area.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4">Why Texas A&M Students Trust Us</h3>
            <ul className="space-y-2 list-disc pl-6">
              <li>10% student discount with valid Aggie ID</li>
              <li>10-15 minute response to campus locations</li>
              <li>Available 24/7, including weekends and holidays</li>
              <li>Knowledgeable about campus housing procedures</li>
              <li>Experience with student-budget pricing</li>
              <li>Friendly, professional service</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper Components
function BenefitBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white">
      {icon}
      <span className="font-semibold text-sm">{text}</span>
    </div>
  );
}

function StudentServiceCard({ icon, title, regularPrice, studentPrice, description }: {
  icon: React.ReactNode;
  title: string;
  regularPrice: string;
  studentPrice: string;
  description: string;
}) {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl border-2 border-surface-container-highest hover:border-[#500000] transition-all group">
      <div className="text-[#500000] mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-on-surface/70 mb-4">{description}</p>
      <div className="bg-[#500000]/5 p-3 rounded-lg">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm text-on-surface/50">Regular:</span>
          <span className="text-sm line-through">{regularPrice}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-[#500000]">Student:</span>
          <span className="font-bold text-primary text-lg">{studentPrice}</span>
        </div>
      </div>
    </div>
  );
}
