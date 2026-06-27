'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, MapPin, Clock, Star, Menu as MenuIcon, X, 
  ShoppingBag, ChevronRight, CheckCircle2, Flame, Navigation, Utensils
} from 'lucide-react';

// --- DATA STRUCTURES ---
const menuItems = [
  { name: 'Altınşiş Mix', desc: 'De ultieme proeverij van onze houtskoolgrill. Adana, Urfa, kip, lamskotelet met verse lavash en bulgur.', price: '€28.50', img: '/images/signature-platter.jpg' },
  { name: 'Adana Kebap', desc: 'Pittig lamsgehakt aan de spies, perfect gegrild. Geserveerd met geroosterde peper, tomaat en peterselie-ui salade.', price: '€22.00', img: '/images/adana-kebab.jpg' },
  { name: 'Beyti Sarma', desc: 'Lamsgehakt gerold in lavash, overgoten met warme tomatensaus, knoflookyoghurt en roomboter.', price: '€24.00', img: '/images/beyti-sarma.jpg' },
  { name: 'Tavuk Şiş', desc: 'Malse, gemarineerde kipfilet spiesen met die herkenbare rooksmaak van het vuur.', price: '€20.00', img: '/images/tavuk-sis.jpg' },
];

const reviews = [
  { text: 'Sappige kebab, warme service en royale porties. De beste in Eindhoven.', author: 'Klant Review' },
  { text: 'De open grill geeft echt die authentieke Gaziantep smaak. Alsof je in Turkije bent.', author: 'Klant Review' },
  { text: 'Perfect voor familie en vrienden. Het vlees is botermals en de lavash vers.', author: 'Klant Review' },
];

export default function AltinsisLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- ANIMATIONS ---
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };
  
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-amber-600 selection:text-white pb-20 md:pb-0">
      
      {/* --- NAVIGATION --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold tracking-wider text-amber-500">
            ALTINŞİŞ<span className="text-white text-sm block font-sans tracking-normal font-light">Gaziantep Kebapcısı</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#specialiteiten" className="hover:text-amber-500 transition-colors">Specialiteiten</a>
            <a href="#verhaal" className="hover:text-amber-500 transition-colors">Ons Verhaal</a>
            <a href="#reviews" className="hover:text-amber-500 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
          </div>
          
          <div className="hidden md:flex gap-4">
            <a href="tel:0402989886" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-amber-500 hover:text-amber-500 transition-all">
              <Phone size={16} /> Bel Nu
            </a>
            <a href="#bestellen" className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-amber-600 hover:bg-amber-500 text-zinc-950 font-semibold transition-all shadow-[0_0_15px_rgba(217,119,6,0.3)] hover:shadow-[0_0_25px_rgba(217,119,6,0.5)]">
              <ShoppingBag size={16} /> Bestel Online
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-zinc-950 flex flex-col items-center justify-center gap-8 text-xl font-serif pt-20"
          >
            <a href="#specialiteiten" onClick={() => setMobileMenuOpen(false)}>Specialiteiten</a>
            <a href="#verhaal" onClick={() => setMobileMenuOpen(false)}>Ons Verhaal</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Locatie & Contact</a>
            <a href="#bestellen" className="px-8 py-3 bg-amber-600 text-zinc-950 rounded-full font-sans font-bold" onClick={() => setMobileMenuOpen(false)}>Bestel Online</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-grill.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/80 to-zinc-950" />
        
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="relative z-10 text-center max-w-4xl px-6 flex flex-col items-center mt-20"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 text-sm text-amber-500">
            <Flame size={16} /> Authentieke Gaziantep stijl
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 text-white">
            Echte Gaziantep kebap.<br/>Recht van het houtskoolvuur.
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl font-light">
            Verse spiesen, lavash, bulgur en geroosterde groenten — bereid in de authentieke stijl van Zuidoost-Turkije, midden in Eindhoven.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#bestellen" className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-zinc-950 font-bold rounded-full transition-all text-lg flex items-center justify-center gap-2">
              Bestel Online <ChevronRight size={20} />
            </a>
            <a href="https://maps.google.com/?q=Kruisstraat+62+Eindhoven" target="_blank" rel="noreferrer" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full transition-all text-lg flex items-center justify-center gap-2 backdrop-blur-sm">
              <MapPin size={20} /> Route naar Kruisstraat
            </a>
          </div>
        </motion.div>

        {/* Floating Trust Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-10 left-6 right-6 md:left-1/2 md:-translate-x-1/2 md:w-max bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-wrap md:flex-nowrap justify-center gap-6 md:gap-12 shadow-2xl"
        >
          <div className="flex items-center gap-2"><Star className="text-amber-500 fill-amber-500" size={20} /><span className="font-bold">4.1</span> <span className="text-zinc-400 text-sm">(757+ reviews)*</span></div>
          <div className="hidden md:block w-px h-6 bg-white/10"></div>
          <div className="flex items-center gap-2 text-sm"><CheckCircle2 className="text-amber-500" size={18} /> Afhalen & Bezorgen</div>
          <div className="hidden md:block w-px h-6 bg-white/10"></div>
          <div className="flex items-center gap-2 text-sm"><Utensils className="text-amber-500" size={18} /> €20–30 p.p.</div>
        </motion.div>
      </section>

      {/* --- STORY SECTION --- */}
      <section id="verhaal" className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Je ruikt het vuur nog voordat het bord op tafel staat.</h2>
          <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
            Geen haastwerk. Geen vlakke smaak. Alleen vuur, vakmanschap en vlees dat precies goed van de grill komt. Gaziantep staat bekend als de culinaire hoofdstad van Turkije, en die trots proef je in elk gerecht.
          </p>
          <ul className="space-y-4 mb-8">
            {['100% Vers vlees en authentieke kruiden', 'Open houtskoolgrill in het zicht', 'Royale porties met verse lavash en bulgur', 'Warme familiesfeer en Turkse gastvrijheid'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-zinc-300">
                <Flame className="text-amber-600" size={20} /> {item}
              </li>
            ))}
          </ul>
        </motion.div>
        <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('/images/open-kitchen.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
        </div>
      </section>

      {/* --- SIGNATURE MENU SECTION --- */}
      <section id="specialiteiten" className="py-24 px-6 bg-zinc-900/30 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Onze Specialiteiten</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Ontdek de rijke smaken van Zuidoost-Turkije. Elk gerecht wordt geserveerd met huisgemaakte lavash, bulgur, en geroosterde groenten.</p>
          </div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {menuItems.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="group bg-zinc-950 border border-white/5 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-colors">
                <div className="aspect-[4/3] bg-zinc-800 relative overflow-hidden">
                  <img src={item.img} alt={item.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold font-serif">{item.name}</h3>
                    <span className="text-amber-500 font-medium">{item.price}</span>
                  </div>
                  <p className="text-zinc-400 text-sm mb-6 line-clamp-3">{item.desc}</p>
                  <a href="#bestellen" className="w-full block text-center py-2.5 rounded-lg bg-white/5 hover:bg-amber-600 hover:text-zinc-950 transition-colors font-medium border border-white/10 hover:border-amber-600">
                    Bestel dit gerecht
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <a href="#menu" className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium text-lg">
              Bekijk volledig menu & bestel online <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* --- REVIEWS --- */}
      <section id="reviews" className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">Wat onze gasten zeggen</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl text-left">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(star => <Star key={star} size={16} className="text-amber-500 fill-amber-500" />)}
              </div>
              <p className="text-zinc-300 italic mb-4">"{review.text}"</p>
              <p className="text-sm text-zinc-500">— {review.author}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-zinc-600 mt-8">*Rating gebaseerd op externe platformen, controleer actuele status online.</p>
      </section>

      {/* --- LOCATION & HOURS --- */}
      <section id="contact" className="py-24 px-6 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-bold">Kom langs of bestel</h2>
            
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-white/5 rounded-xl text-amber-500"><MapPin /></div>
              <div>
                <h3 className="text-xl font-bold mb-1">Gaziantep Altınşiş Kebapcısı</h3>
                <p className="text-zinc-400">Kruisstraat 62<br/>5612 CJ Eindhoven</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-white/5 rounded-xl text-amber-500"><Phone /></div>
              <div>
                <h3 className="text-xl font-bold mb-1">Bel Ons</h3>
                <a href="tel:0402989886" className="text-zinc-400 hover:text-amber-500 transition-colors text-lg">040 298 9886</a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-white/5 rounded-xl text-amber-500"><Clock /></div>
              <div>
                <h3 className="text-xl font-bold mb-2">Openingstijden*</h3>
                <ul className="text-zinc-400 space-y-1">
                  <li className="flex justify-between w-48"><span className="text-white font-medium">Vandaag</span> <span className="text-amber-500">12:00 - 23:59</span></li>
                  <li className="flex justify-between w-48"><span>Maandag</span> <span>14:00 - 23:00</span></li>
                  <li className="flex justify-between w-48"><span>Dinsdag</span> <span className="text-zinc-600">Gesloten</span></li>
                  <li className="flex justify-between w-48"><span>Wo/Do</span> <span>14:00 - 23:00</span></li>
                  <li className="flex justify-between w-48"><span>Vr/Za/Zo</span> <span>12:00 - 23:59</span></li>
                </ul>
                <p className="text-xs text-zinc-600 mt-2">*Tijden kunnen afwijken, check Google voor actuele tijden.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-800 rounded-3xl overflow-hidden aspect-video lg:aspect-square relative flex items-center justify-center border border-white/10 group">
             <div className="absolute inset-0 bg-[url('/images/map-visual.jpg')] bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity" />
             <a href="https://maps.google.com/?q=Kruisstraat+62+Eindhoven" target="_blank" rel="noreferrer" className="relative z-10 px-6 py-3 bg-zinc-950/80 backdrop-blur-md rounded-full border border-white/20 flex items-center gap-2 hover:bg-amber-600 hover:text-zinc-950 transition-all font-medium">
               <Navigation size={18} /> Open in Google Maps
             </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/5 py-12 px-6 text-center text-zinc-500 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-serif text-lg text-zinc-300">Altınşiş Eindhoven</div>
          <div className="flex gap-6">
            <a href="/bestellen" className="hover:text-amber-500 transition-colors">Bestellen</a>
            <a href="/privacy" className="hover:text-amber-500 transition-colors">Privacy</a>
            <a href="/voorwaarden" className="hover:text-amber-500 transition-colors">Voorwaarden</a>
          </div>
          <div>© {new Date().getFullYear()} Gaziantep Altınşiş Kebapcısı. All rights reserved.</div>
        </div>
      </footer>

      {/* --- STICKY MOBILE CTA --- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-zinc-950/90 backdrop-blur-lg border-t border-white/10 p-4 z-50 flex gap-3">
        <a href="tel:0402989886" className="flex-1 py-3 rounded-xl bg-white/10 text-white flex justify-center items-center gap-2 font-medium">
          <Phone size={18} /> Bel
        </a>
        <a href="#bestellen" className="flex-[2] py-3 rounded-xl bg-amber-600 text-zinc-950 flex justify-center items-center gap-2 font-bold shadow-lg">
          <ShoppingBag size={18} /> Bestel Online
        </a>
      </div>
    </div>
  );
}