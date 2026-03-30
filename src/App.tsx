/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import {
  Phone, Shield, ShieldCheck, Clock, Key,
  Car, Home, Building2, Cpu, ArrowRight, Banknote,
  Truck, MapPin, Star, ChevronDown, Users,
  Menu, X, CheckCircle,
  MessageCircle, Bell, Siren, AlertTriangle
} from 'lucide-react';

// Import Interactive Components
import AvailabilityCounter from './components/AvailabilityCounter';
import EmergencyForm from './components/EmergencyForm';
import AnimatedSection from './components/AnimatedSection';

// Lazy-load area pages — only downloaded when user navigates to that route
const CollegeStation = lazy(() => import('./pages/CollegeStation'));
const Houston        = lazy(() => import('./pages/Houston'));
const TexasAM        = lazy(() => import('./pages/TexasAM'));

// SEO Local Data
const SERVICE_AREAS = [
  { name: 'Houston, TX', priority: 'primary', zip: '77001', slug: 'houston' },
  { name: 'Harris County, TX', priority: 'primary', zip: '77002', slug: 'houston' },
  { name: 'College Station, TX', priority: 'primary', zip: '77840', slug: 'college-station' },
  { name: 'Texas A&M Campus', priority: 'primary', zip: '77843', slug: 'texas-am' },
  { name: 'The Woodlands, TX', priority: 'secondary', zip: '77380', slug: 'the-woodlands' },
  { name: 'Katy, TX', priority: 'secondary', zip: '77449', slug: 'katy' },
  { name: 'Sugar Land, TX', priority: 'secondary', zip: '77478', slug: 'sugar-land' },
  { name: 'Cypress, TX', priority: 'secondary', zip: '77429', slug: 'cypress' },
];

// Core Services
const SERVICES = [
  { id: 'car', title: 'Car Lockout', desc: 'Fast, damage-free entry for all vehicles.', icon: <Car className="w-10 h-10" /> },
  { id: 'home', title: 'Home Lockout', desc: 'Safe residential entry. No drilled locks.', icon: <Home className="w-10 h-10" /> },
  { id: 'prog', title: 'Key Programming', desc: 'Transponder chips & smart keys cut on-site.', icon: <Cpu className="w-10 h-10" /> },
  { id: 'rekey', title: 'Lock Rekeying', desc: 'Secure your property with new keys immediately.', icon: <Key className="w-10 h-10" /> }
];

// Main App Component with Router
export default function App() {
  return (
    <LazyMotion features={domAnimation}>
      <Suspense fallback={<div className="min-h-screen bg-surface" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/college-station" element={<CollegeStation />} />
          <Route path="/houston" element={<Houston />} />
          <Route path="/texas-am" element={<TexasAM />} />
        </Routes>
      </Suspense>
    </LazyMotion>
  );
}

// Home Page Component
function HomePage() {
  return (
    <div className="min-h-screen bg-surface pb-24 md:pb-0">
      <Navbar />
      <Hero />
      <TrustBar />
      <InteractiveFeatures />
      <LocalSEOSection />
      <ServicesHub />
      <WhyChooseUs />
      <ServiceArea />
      <Reviews />
      <FAQ />
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      animate={{
        backgroundColor: scrolled ? 'color-mix(in srgb, var(--color-surface) 98%, transparent)' : 'color-mix(in srgb, var(--color-surface) 85%, transparent)',
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(8px)',
        boxShadow: scrolled ? `0 1px 0 color-mix(in srgb, var(--color-on-surface) 8%, transparent)` : 'none',
      }}
      transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
      className="fixed top-0 w-full z-50"
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://static.wixstatic.com/media/c5947c_f208df5d881c4d819eb8bb218b913033~mv2.jpg"
            alt="CarLocksOut Logo"
            className="h-12 w-auto object-contain border-2 border-black shadow-[4px_4px_0px_#000]"
          />
          <div className="flex flex-col">
            <div className="text-xl font-black text-on-surface tracking-tighter uppercase leading-none">
              carlocksout
            </div>
            <span className="text-[10px] text-primary font-bold tracking-tight uppercase">
              Houston & College Station
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`font-bold tracking-tight uppercase text-sm transition-colors duration-300 ${location.pathname === '/' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface/80 hover:text-primary'}`}>
            Home
          </Link>
          <a href="#services" className="font-bold tracking-tight uppercase text-sm text-on-surface/80 hover:text-primary transition-colors duration-300">
            Services
          </a>
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="font-bold tracking-tight uppercase text-sm text-on-surface/80 hover:text-primary transition-colors duration-300 flex items-center gap-1"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onKeyDown={(e) => { if (e.key === 'Escape') setDropdownOpen(false); }}
            >
              Areas <ChevronDown className="w-4 h-4" />
            </button>
            <div
              className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-none shadow-[8px_8px_0px_#000] border-4 border-black transition-all ${dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
              onFocus={() => setDropdownOpen(true)}
              onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setDropdownOpen(false); }}
            >
              <div className="p-2 space-y-1">
                <Link to="/houston" className="block px-4 py-2 text-sm font-bold text-black bg-white hover:bg-black hover:text-white rounded-none border-2 border-transparent hover:border-black transition-colors" onClick={() => setDropdownOpen(false)}>
                  Houston, TX
                </Link>
                <Link to="/college-station" className="block px-4 py-2 text-sm font-bold text-black bg-white hover:bg-black hover:text-white rounded-none border-2 border-transparent hover:border-black transition-colors" onClick={() => setDropdownOpen(false)}>
                  College Station, TX
                </Link>
                <Link to="/texas-am" className="block px-4 py-2 text-sm font-bold text-black bg-white hover:bg-black hover:text-white rounded-none border-2 border-transparent hover:border-black transition-colors" onClick={() => setDropdownOpen(false)}>
                  Texas A&M Campus
                </Link>
              </div>
            </div>
          </div>
          <a href="#reviews" className="font-bold tracking-tight uppercase text-sm text-on-surface/80 hover:text-primary transition-colors duration-300">
            Reviews
          </a>
        </div>

        <motion.a
          href="tel:+12819890245"
          whileHover={{ scale: 1.05, y: -4, x: -4, boxShadow: '8px 8px 0px var(--color-primary-container)' }}
          whileTap={{ scale: 0.95, y: 0, x: 0, boxShadow: '0px 0px 0px var(--color-primary-container)' }}
          className="hidden md:flex bg-primary-container text-black border-4 border-black font-display text-lg px-6 py-2 rounded-none transition-all items-center gap-2 ambient-shadow"
        >
          <Phone className="w-5 h-5 fill-current" />
          DISPATCH NOW
        </motion.a>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-t border-surface-container-highest">
          <div className="px-6 py-4 space-y-4">
            <Link to="/" className="block font-bold text-sm uppercase py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <a href="#services" className="block font-bold text-sm uppercase py-2" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <div className="font-bold text-sm uppercase py-2 text-primary">Areas We Serve:</div>
            <Link to="/houston" className="block pl-4 text-sm py-1" onClick={() => setMobileMenuOpen(false)}>Houston, TX</Link>
            <Link to="/college-station" className="block pl-4 text-sm py-1" onClick={() => setMobileMenuOpen(false)}>College Station, TX</Link>
            <Link to="/texas-am" className="block pl-4 text-sm py-1" onClick={() => setMobileMenuOpen(false)}>Texas A&M Campus</Link>
            <a href="#reviews" className="block font-bold text-sm uppercase py-2" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
            <a
              href="tel:+12819890245"
              className="block bg-primary-container text-black font-display text-xl border-4 border-black px-6 py-4 rounded-none text-center shadow-[4px_4px_0px_#000]"
            >
              CALL (281) 989-0245
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
}

function Hero() {
  return (
    <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://static.wixstatic.com/media/c5947c_3afd0502c8a84fa79a67405fe1dda741~mv2.png"
          alt="Professional Locksmith Service Background"
          className="w-full h-full object-cover"
          width="1920"
          height="1080"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 w-full">
        <motion.div
          className="md:col-span-8 lg:col-span-7"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-4 py-2 text-xs font-black tracking-widest uppercase mb-6 rounded-full"
          >
            <MapPin className="w-4 h-4" />
            Serving Houston & College Station
          </motion.span>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
            className="font-display text-6xl md:text-[7rem] lg:text-[8rem] text-white leading-none tracking-tight mb-6"
          >
            LOCKED OUT?<br/>
            WE'RE THERE IN <span className="text-primary-container">15 MIN</span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
            className="text-xl md:text-2xl text-white font-bold mb-10 max-w-2xl leading-snug border-l-4 border-primary-container pl-6 uppercase tracking-wide"
          >
            Fast, heavy-duty locksmith service. 24/7 response. We open doors without breaking them.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } } }}
            className="flex flex-col sm:flex-row gap-4"
          >
              <motion.a
                href="tel:+12819890245"
                whileHover={{ scale: 1.02, y: -4, x: -4, boxShadow: '12px 12px 0px #000' }}
                whileTap={{ scale: 0.98, y: 0, x: 0, boxShadow: '0px 0px 0px #000' }}
                className="bg-primary-container text-black font-display text-4xl px-12 py-6 rounded-none flex items-center justify-center gap-4 ambient-shadow border-4 border-black transition-all"
              >
                <Phone className="w-10 h-10 fill-current" />
                GET A TECH NOW
              </motion.a>
          </motion.div>
        </motion.div>

        <div className="hidden lg:flex md:col-span-4 lg:col-span-5 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <img
              src="https://static.wixstatic.com/media/c5947c_feed6cb6e7454a2b8b6ee498281433bc~mv2.jpg"
              alt="Emergency Locksmith Dispatch"
              className="w-full max-w-sm aspect-[3/4] object-cover object-top border-8 border-black shadow-[16px_16px_0px_var(--color-primary-container)] rounded-none"
            />
            <div className="absolute -bottom-6 -left-6 bg-black text-white p-4 font-display text-xl border-4 border-primary-container shadow-[8px_8px_0px_#000]">
              <span className="text-primary-container">LICENSE #</span> 00104825
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

function TrustBar() {
  const brands = ['SCHLAGE', 'KWIKSET', 'YALE', 'BALDWIN', 'MEDECO'];

  return (
    <section className="bg-inverse-surface py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-primary-container fill-current" />
          <span className="text-inverse-on-surface font-black uppercase tracking-tighter text-sm">
            Texas Licensed & Insured
          </span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand) => (
            <span key={brand} className="text-white font-bold text-xl tracking-widest italic">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocalSEOSection() {
  const primaryAreas = SERVICE_AREAS.filter(a => a.priority === 'primary');
  const secondaryAreas = SERVICE_AREAS.filter(a => a.priority === 'secondary');

  return (
    <section id="areas" aria-labelledby="local-seo-heading" className="py-16 bg-surface border-b border-surface-container-highest/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary-container font-display text-2xl tracking-wide uppercase px-4 py-1 bg-black inline-block mb-4">Local Locksmith Services</span>
          <h2 id="local-seo-heading" className="font-display text-5xl md:text-7xl uppercase leading-[0.9] mt-3 mb-6 text-on-surface">
            Serving Greater Houston <br/>& College Station
          </h2>
          <p className="text-on-surface/80 max-w-2xl mx-auto text-xl font-bold border-l-4 border-black pl-4 text-left">
            Your trusted heavy-duty locksmith for the entire Brazos Valley area. From Texas A&M campus to
            the Greater Houston area, we're never more than 15 minutes away.
          </p>
        </div>

        {/* Primary Areas - Linked Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {primaryAreas.map((area) => (
            <Link
              key={area.name}
              to={`/${area.slug}`}
              className="bg-white p-8 rounded-none border-4 border-black hover:shadow-[12px_12px_0px_var(--color-primary-container)] hover:-translate-y-2 hover:-translate-x-2 transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <MapPin className="w-10 h-10 text-black" />
                <span className="font-display text-lg bg-black text-white px-3 py-1 border-2 border-black group-hover:bg-primary-container group-hover:text-black transition-colors">
                  {area.zip}
                </span>
              </div>
              <h3 className="font-display text-3xl mb-3">{area.name}</h3>
              <p className="text-md font-semibold text-on-surface/80 mb-6">
                Full locksmith services with 15-min response time
              </p>
              <span className="bg-black text-white font-display text-xl px-4 py-2 flex items-center justify-between group-hover:bg-primary-container group-hover:text-black transition-colors">
                VIEW AREA <ArrowRight className="w-6 h-6" />
              </span>
            </Link>
          ))}
        </div>

        {/* Secondary Areas */}
        <div className="bg-black p-8 rounded-none border-4 border-primary-container shadow-[8px_8px_0px_#ffa44f]">
          <h3 className="font-display text-2xl text-primary-container mb-6">
            ALSO SERVING GREATER HOUSTON
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {secondaryAreas.map((area) => (
              <Link
                key={area.name}
                to={`/${area.slug}`}
                className="text-center p-4 rounded-none border-2 border-surface/20 bg-surface/5 hover:bg-primary-container hover:border-primary-container hover:text-black transition-all group text-white"
              >
                <MapPin className="w-6 h-6 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <span className="font-display text-xl tracking-wide">{area.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Local Content */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-surface-container-low p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              College Station Locksmith
            </h3>
            <p className="text-on-surface/70 text-sm leading-relaxed mb-4">
              Serving College Station since 2013, we understand the unique needs of Texas A&M students,
              faculty, and local residents. Whether you're locked out at Northgate, need car keys
              programmed near campus, or require residential rekeying in Southwood Valley,
              our mobile units are stationed throughout the city.
            </p>
            <Link to="/college-station" className="text-primary font-bold text-sm flex items-center gap-1">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Texas A&M Section */}
        <div className="mt-8 bg-secondary/10 p-6 rounded-xl border border-secondary/20">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-secondary" />
                <h3 className="text-xl font-bold text-secondary">Texas A&M Campus Services</h3>
              </div>
              <p className="text-on-surface/70 text-sm leading-relaxed">
                Specializing in student lockouts at Texas A&M. <strong>Student discounts available!</strong>
                We know all campus housing areas, parking lots, and student hotspots. Fast response to
                dorms, Northgate, and anywhere on campus.
              </p>
            </div>
            <Link
              to="/texas-am"
              className="kinetic-gradient text-on-primary font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:brightness-110 transition-all"
            >
              Student Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesHub() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary-container font-display text-2xl tracking-wide uppercase px-4 py-1 bg-black inline-block mb-4">Complete Locksmith Solutions</span>
          <h2 id="services-heading" className="font-display text-6xl md:text-[6rem] leading-[0.85] tracking-tight mt-4 mb-8 text-on-surface">
            PROFESSIONAL LOCKSMITH<br/>SERVICES IN TEXAS
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1], delay: idx * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.18, ease: [0.25, 1, 0.5, 1] } }}
              className="bg-white p-8 rounded-none border-4 border-black shadow-[8px_8px_0px_#000] hover:shadow-[16px_16px_0px_var(--color-primary-container)] hover:-translate-y-2 hover:-translate-x-2 transition-all group flex flex-col h-full"
            >
              <div className="text-black mb-6 group-hover:scale-110 transition-transform origin-left bg-primary-container inline-block p-4 border-2 border-black">
                {item.icon}
              </div>
              <h3 className="font-display text-3xl mb-4 text-black uppercase">{item.title}</h3>
              <p className="text-lg font-semibold text-black/80 mb-8 flex-grow">{item.desc}</p>
              <a
                href="tel:+12819890245"
                className="bg-black text-white font-display text-xl px-4 py-3 flex items-center justify-between group-hover:bg-primary-container group-hover:text-black transition-colors"
              >
                GET HELP NOW <ArrowRight className="w-6 h-6" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const features = [
    { title: 'College Station Local Experts', desc: 'We know the Brazos Valley inside out. From Texas A&M campus to local suburbs.', icon: <MapPin className="w-6 h-6" /> },
    { title: 'Upfront Texas Pricing', desc: 'No hidden fees or surprise charges. We provide honest quotes before starting.', icon: <Banknote className="w-6 h-6" /> },
    { title: 'Fully Equipped Mobile Vans', desc: 'Our fleet is stocked with the latest key programming equipment.', icon: <Truck className="w-6 h-6" /> },
    { title: 'Zero Damage Guarantee', desc: 'Non-destructive entry methods protect your property.', icon: <ShieldCheck className="w-6 h-6" /> },
  ];

  return (
    <section aria-labelledby="why-choose-heading" className="py-24 overflow-hidden bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-white font-display text-2xl tracking-wide uppercase bg-black px-4 py-1 inline-block mb-4">Why Choose Us</span>
          <h2 id="why-choose-heading" className="font-display text-6xl md:text-[6rem] tracking-tight mb-10 leading-[0.85] text-on-surface uppercase mt-3">
            THE #1 CHOICE FOR<br/><span className="text-secondary bg-primary-container/20 px-2 line-through decoration-black decoration-8">TEXAS</span><br/>LOCKSMITH SERVICES
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feat, idx) => (
            <div key={idx} className="flex gap-5 bg-white p-6 border-4 border-black shadow-[8px_8px_0px_#000] hover:shadow-[12px_12px_0px_var(--color-primary-container)] hover:-translate-y-1 transition-all">
              <div className="shrink-0 bg-primary-container border-2 border-black p-3 rounded-none h-fit shadow-[4px_4px_0px_#000]">{feat.icon}</div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-on-surface uppercase">{feat.title}</h4>
                <p className="text-on-surface/70 leading-relaxed font-semibold">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceArea() {
  return (
    <section aria-labelledby="service-area-heading" className="py-24 bg-black text-white border-t-8 border-primary-container">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 id="service-area-heading" className="font-display text-5xl md:text-[5rem] uppercase tracking-tight mb-6 text-primary-container">
            OUR SERVICE AREA
          </h2>
          <p className="text-on-surface/70 max-w-xl mx-auto">
            Providing rapid response locksmith services across the entire Brazos Valley and Greater Houston.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICE_AREAS.filter(a => a.priority === 'primary').map((area) => (
            <Link
              key={area.slug}
              to={`/${area.slug}`}
              className="bg-surface text-black p-8 rounded-none border-4 border-surface shadow-[8px_8px_0px_#ffa44f] hover:-translate-y-2 hover:-translate-x-2 transition-transform group"
            >
              <MapPin className="w-10 h-10 text-black mb-4 group-hover:scale-110 transition-transform origin-bottom" />
              <h3 className="font-display text-3xl mb-2">{area.name}</h3>
              <p className="text-sm text-on-surface/70 mb-4">Primary Service Area</p>
              <span className="text-primary font-bold text-sm flex items-center gap-1">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    { text: "Locked my keys in my car at 2am in Downtown. carlocksout arrived in less than 15 minutes and had my car open in seconds. Absolutely professional!", name: "Marcus T.", location: "HOUSTON HEIGHTS", featured: true },
    { text: "Needed all the locks changed on our new house in Katy. The technician was very thorough, explained everything, and did a clean job.", name: "Sarah L.", location: "KATY, TX" },
    { text: "Programmed a new smart key for my BMW for half the dealership price. Very knowledgeable and fast service in Sugar Land.", name: "Jonathan R.", location: "SUGAR LAND, TX" }
  ];

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-white font-display text-2xl tracking-wide uppercase bg-black px-4 py-1 inline-block mb-4">Trusted by 5,000+ Locals</span>
          <h2 id="reviews-heading" className="font-display text-6xl md:text-[7rem] leading-[0.85] tracking-tight text-on-surface uppercase mt-4">CUSTOMER REVIEWS</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className={`p-8 bg-white rounded-none border-4 border-black ${review.featured ? 'shadow-[12px_12px_0px_var(--color-primary-container)] -translate-y-2' : 'shadow-[8px_8px_0px_#000]'}`}
            >
              <div className="flex text-primary-container mb-6 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current stroke-black stroke-2" />)}
              </div>
              <p className="text-xl font-bold text-black mb-10 min-h-[120px]">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-none border-2 border-black bg-primary-container flex items-center justify-center font-bold text-black font-display text-xl">
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-bold text-on-surface">{review.name}</div>
                  <div className="text-xs text-primary font-bold tracking-widest">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "How long does it take for a locksmith to arrive in College Station?", a: "Our average response time across College Station is 15-20 minutes. We have mobile units strategically stationed throughout the Brazos Valley." },
    { q: "Will opening my car or door cause damage?", a: "No. Our technicians are trained in non-destructive entry techniques. We use specialized tools designed to open locks without compromising your property." },
    { q: "Are you licensed and insured in Texas?", a: "Yes, CarLocksOut Locksmith is fully licensed, bonded, and insured in Texas. Our license number is 00104825. All our technicians are background-checked and professionally certified." },
    { q: "Can you program transponder keys on-site?", a: "Absolutely. Our mobile vans are equipped with advanced programming technology, allowing us to cut and program keys for most vehicles on the spot." },
    { q: "Do you offer student discounts?", a: "Yes! We offer 10% off all services for Texas A&M students with valid student ID." }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section aria-labelledby="faq-heading" className="py-24 bg-primary-container border-t-8 border-black">
      <div className="max-w-4xl mx-auto px-6">
        <h2 id="faq-heading" className="font-display text-6xl md:text-[6rem] tracking-tight mb-16 text-center text-black uppercase leading-[0.85]">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-none border-4 border-black mb-4 shadow-[8px_8px_0px_#000] hover:shadow-[12px_12px_0px_#000] hover:-translate-y-1 transition-all"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                aria-expanded={openIdx === idx}
                aria-controls={`faq-answer-${idx}`}
                className="w-full font-display text-2xl flex justify-between items-center text-black text-left p-6 md:p-8 rounded-none"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-8 h-8 text-black transition-transform flex-shrink-0 ml-4 stroke-[3px] ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              <div
                id={`faq-answer-${idx}`}
                role="region"
                aria-label={faq.q}
                className={`grid transition-all duration-300 ease-in-out ${openIdx === idx ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden bg-surface">
                  <p className="text-xl font-bold text-black/80 px-6 md:px-8 py-6 border-t-4 border-black">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t-8 border-primary-container pt-20 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <img
            src="https://static.wixstatic.com/media/c5947c_f208df5d881c4d819eb8bb218b913033~mv2.jpg"
            alt="CarLocksOut Logo"
            className="h-16 w-auto object-contain border-2 border-primary-container shadow-[4px_4px_0px_#ffa44f] mb-6"
          />
          <div className="text-4xl font-display text-primary-container mb-2 uppercase tracking-wide">CARLOCKSOUT</div>
          <p className="text-primary-container font-semibold text-sm mb-4">Houston & College Station</p>
          <p className="text-inverse-on-surface/70 text-sm mb-6">
            Professional locksmith services for Greater Houston, College Station, and the Brazos Valley.
            24/7 emergency lockouts, car keys, rekey services.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Our Services</h4>
          <ul className="space-y-3 text-sm text-inverse-on-surface/70">
            <li><a href="#services" className="hover:text-primary-container">Car Lockout</a></li>
            <li><a href="#services" className="hover:text-primary-container">Home Lockout</a></li>
            <li><a href="#services" className="hover:text-primary-container">Safe Lockout</a></li>
            <li><a href="#services" className="hover:text-primary-container">Commercial Lockout</a></li>
            <li><a href="#services" className="hover:text-primary-container">Key Programming</a></li>
            <li><a href="#services" className="hover:text-primary-container">Rekey Services</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Service Areas</h4>
          <ul className="space-y-3 text-sm text-inverse-on-surface/70">
            <li><Link to="/houston" className="hover:text-primary-container flex items-center gap-2"><MapPin className="w-4 h-4" /> Houston, TX</Link></li>
            <li><Link to="/college-station" className="hover:text-primary-container flex items-center gap-2"><MapPin className="w-4 h-4" /> College Station, TX</Link></li>
            <li><Link to="/texas-am" className="hover:text-primary-container flex items-center gap-2"><MapPin className="w-4 h-4" /> Texas A&M Campus</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary-container" />
              <a href="tel:+12819890245" className="text-inverse-on-surface/70 hover:text-white">(281) 989-0245</a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary-container" />
              <span className="text-primary-container font-bold uppercase text-xs tracking-widest">Open 24/7</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center">
        <p className="text-xs text-inverse-on-surface/50">
          © {currentYear} CarLocksOut Locksmith. All Rights Reserved. | Licensed in Texas #00104825
        </p>
      </div>
    </footer>
  );
}

// Interactive Features Section
function InteractiveFeatures() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="py-24 bg-surface border-y-8 border-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="slideLeft">
            <div className="relative">
              <img
                src="https://static.wixstatic.com/media/c5947c_7d60d033d7964d11aff55cbfcd56140d~mv2.png"
                alt="Expert Mobile Locksmith Houston"
                className="w-full rounded-none border-4 border-black shadow-[16px_16px_0px_#000] object-cover"
              />
              <div className="absolute -top-8 -right-8 bg-primary-container text-black font-display text-3xl p-6 border-4 border-black shadow-[8px_8px_0px_#000] hidden md:block">
                HOUSTON'S PRIORITY
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideRight">
            <div className="bg-white rounded-none border-4 border-black shadow-[12px_12px_0px_#000] overflow-hidden">
              <div className="bg-black p-8 text-white border-b-4 border-black">
                <h3 className="font-display text-5xl leading-none mb-4 uppercase text-primary-container">NEED FAST HELP?</h3>
                <p className="text-xl font-bold border-l-4 border-primary-container pl-4">Locked out? Lost your keys? Our expert technicians are ready to dispatch immediately.</p>
              </div>

              <div className="p-8">
                {showForm ? (
                  <EmergencyForm onClose={() => setShowForm(false)} />
                ) : (
                  <div className="space-y-8">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: 'CAR LOCKOUT', icon: '🚗' },
                        { label: 'HOME LOCKOUT', icon: '🏠' },
                        { label: 'KEY PROGRAMMING', icon: '💻' },
                        { label: 'REKEY SERVICE', icon: '🔑' },
                      ].map((item) => (
                        <button
                          key={item.label}
                          onClick={() => setShowForm(true)}
                          className="flex flex-col items-center justify-center p-6 bg-surface border-2 border-black hover:bg-primary-container hover:shadow-[4px_4px_0px_#000] transition-all group rounded-none"
                        >
                          <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</span>
                          <span className="font-display text-sm tracking-widest">{item.label}</span>
                        </button>
                      ))}
                    </div>

                    <div className="flex flex-col gap-4">
                      <motion.a
                        href="tel:+12819890245"
                        whileHover={{ scale: 1.02, y: -4, x: -4, boxShadow: '8px 8px 0px #000' }}
                        whileTap={{ scale: 0.98, y: 0, x: 0, boxShadow: '0px 0px 0px #000' }}
                        className="bg-primary-container text-black border-4 border-black font-display text-3xl py-6 flex items-center justify-center gap-4 shadow-[4px_4px_0px_#000]"
                      >
                        <Phone className="w-8 h-8 fill-current" />
                        (281) 989-0245
                      </motion.a>
                      <button
                        onClick={() => setShowForm(true)}
                        className="text-black font-display text-xl underline hover:text-primary transition-colors"
                      >
                        OR SEND A MESSAGE
                      </button>
                    </div>

                    <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-on-surface/60">
                      <div className="w-full h-px bg-black/10"></div>
                      <span className="whitespace-nowrap">TEXAS LICENSE #00104825</span>
                      <div className="w-full h-px bg-black/10"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden z-[60] bg-white border-t-8 border-black p-4 pb-safe" style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}>
      <a
        href="tel:+12819890245"
        className="w-full bg-black text-primary-container border-4 border-black font-display text-2xl py-4 rounded-none flex items-center justify-center gap-3 shadow-[8px_8px_0px_var(--color-primary-container)] uppercase"
      >
        <Phone className="w-6 h-6 fill-current" />
        CALL NOW
      </a>
    </div>
  );
}
