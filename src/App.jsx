import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Check, MapPin, Phone, Sun, Battery, Zap, BarChart3, 
  Plus, ChevronRight, Play, ArrowRight, Award, TrendingUp, Clock, 
  Home, Info, Settings, Mail, Star, Sparkles, PartyPopper 
} from 'lucide-react'; 

const App = () => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Launching Popup State
  const [isLaunchPopupOpen, setIsLaunchPopupOpen] = useState(false);
  
  // Countdown States
  const [showCountdown, setShowCountdown] = useState(false);
  const [countdownNumber, setCountdownNumber] = useState(10); // Changed from 1 to 10
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationParticles, setCelebrationParticles] = useState([]);

  // Navbar and Launch Logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLaunchPopupOpen(true);
    }, 1000);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Countdown Logic - Now counting from 10 to 1
  useEffect(() => {
    if (showCountdown && countdownNumber >= 1) { // Changed condition
      const timer = setTimeout(() => {
        setCountdownNumber(prev => prev - 1); // Changed from +1 to -1
      }, 1000);
      
      return () => clearTimeout(timer);
    } else if (countdownNumber < 1) { // Changed condition (when reaches 0)
      setShowCountdown(false);
      setShowCelebration(true);
      
      // Generate burst particles exactly like image_ad3c90.png
      const particles = [];
      const colors = ['#FF3B3B', '#3B82F6', '#C7F36B', '#FFD700', '#FF69B4', '#FF8C00', '#00CED1', '#FF1493'];
      
      for (let i = 0; i < 80; i++) {
        const angle = (i * 45) % 360;
        const distance = Math.random() * 300 + 150;
        const size = Math.random() * 15 + 8;
        
        particles.push({
          id: i,
          angle: angle,
          color: colors[i % colors.length],
          size: size,
          distance: distance,
          delay: Math.random() * 0.3,
          duration: Math.random() * 1.5 + 1.2,
          shape: i % 3 === 0 ? 'circle' : (i % 3 === 1 ? 'square' : 'star')
        });
      }
      setCelebrationParticles(particles);
      
      // Auto close celebration after 4 seconds
      setTimeout(() => {
        setShowCelebration(false);
        setIsLaunchPopupOpen(false);
      }, 4000);
    }
  }, [showCountdown, countdownNumber]);

  // Smooth Scroll Function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleExploreClick = () => {
    setIsLaunchPopupOpen(false);
    setShowCountdown(true);
    setCountdownNumber(10); // Changed from 1 to 10
  };

  return (
    <div className="bg-[#F5F7F9] font-sans text-gray-900 overflow-x-hidden">
      
      {/* --- COUNTDOWN OVERLAY (10 to 1) --- */}
      {showCountdown && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/95 backdrop-blur-xl">
          <div className="text-center">
            <div className="text-[15vw] font-black text-[#C7F36B] animate-pulse leading-none">
              {countdownNumber}
            </div>
            <p className="text-white text-2xl mt-8 uppercase tracking-widest animate-pulse">
              {countdownNumber === 10 ? 'Launching in...' : 
               countdownNumber === 1 ? 'Almost There!' : 
               'Get Ready...'}
            </p>
            {/* Progress bar */}
            <div className="w-64 h-2 bg-gray-800 rounded-full mt-8 mx-auto overflow-hidden">
              <div 
                className="h-full bg-[#C7F36B] transition-all duration-1000"
                style={{ width: `${(10 - countdownNumber) * 10}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* --- BURST CELEBRATION OVERLAY --- */}
      {showCelebration && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/90 pointer-events-none overflow-hidden">
          {/* Burst Particles from Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            {celebrationParticles.map((p) => (
              <div
                key={p.id}
                className="absolute animate-burst-out"
                style={{
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  backgroundColor: p.shape === 'star' ? 'transparent' : p.color,
                  borderRadius: p.shape === 'circle' ? '50%' : p.shape === 'square' ? '4px' : '0',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  animationDelay: `${p.delay}s`,
                  animationDuration: `${p.duration}s`,
                  '--angle': `${p.angle}deg`,
                  '--distance': `${p.distance}px`,
                }}
              >
                {p.shape === 'star' && (
                  <Star 
                    className="w-full h-full" 
                    style={{ color: p.color, fill: p.color }}
                  />
                )}
                {p.shape === 'sparkle' && (
                  <Sparkles 
                    className="w-full h-full" 
                    style={{ color: p.color }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Center Text with Pop Effect */}
          <div className="relative z-10 text-center animate-center-pop">
            <div className="bg-gradient-to-r from-[#C7F36B] to-[#A0D640] bg-clip-text">
              <h2 className="text-7xl md:text-9xl font-black text-transparent mb-4 tracking-tighter">
                SURYAVOLT
              </h2>
            </div>
            <p className="text-white text-3xl md:text-5xl font-bold tracking-widest animate-pulse">
              IS NOW LIVE!
            </p>
            
            {/* Sparkle Effects Around Text */}
            <div className="absolute -inset-10 flex items-center justify-center pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-sparkle-rotate"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    transform: `rotate(${i * 45}deg) translateX(150px)`
                  }}
                >
                  <PartyPopper className="w-8 h-8 text-[#C7F36B]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- LAUNCH POPUP MODAL --- */}
      {isLaunchPopupOpen && !showCountdown && !showCelebration && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <div 
            className="absolute inset-0 bg-black/85 backdrop-blur-md animate-fade-in"
            onClick={() => setIsLaunchPopupOpen(false)}
          ></div>
          <div className="relative bg-white rounded-[3.5rem] p-8 md:p-14 max-w-xl w-full text-center shadow-[0_0_50px_rgba(199,243,107,0.3)] transform transition-all scale-100 animate-in fade-in zoom-in duration-500">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#C7F36B] p-6 rounded-full shadow-2xl border-8 border-[#F5F7F9]">
              <Zap className="w-12 h-12 text-black fill-black animate-pulse" />
            </div>
            <div className="mt-6 space-y-4">
              <span className="bg-black text-[#C7F36B] px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase">
                Official Launching Today
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-black leading-tight">
                Welcome to the <br /> <span className="text-gray-400 italic font-medium uppercase tracking-tighter">Suryavolt Era.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed px-4">
                We are officially live! Suryavolt is here to power your dreams with high-tech, sustainable solar solutions in Jaipur.
              </p>
            </div>
            <div className="mt-10 space-y-4">
              <button 
                onClick={handleExploreClick}
                className="w-full bg-[#C7F36B] text-black py-5 rounded-2xl font-black text-xl hover:scale-[1.02] transition-transform shadow-xl flex items-center justify-center gap-3 group active:scale-95"
              >
                Explore Website <Star className="w-6 h-6 fill-black group-hover:rotate-180 transition-transform duration-500" />
              </button>
            </div>
            <div className="absolute top-10 right-10 text-[#C7F36B] opacity-10 hidden md:block">
              <Sun className="w-20 h-20 rotate-45" />
            </div>
          </div>
        </div>
      )}

      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-3 flex justify-between items-center ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent text-white'
      }`}>
        <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
          <img 
            src="/logo/logo.png" 
            alt="Suryavolt Logo" 
            className={`h-14 w-auto transition-all duration-300 ${isScrolled ? 'brightness-100' : 'brightness-0 invert'}`} 
          />
        </div>
        
        <div className="hidden md:flex space-x-8 items-center font-medium">
          {['home', 'about', 'services', 'contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item)} 
              className={`capitalize transition-colors ${isScrolled ? 'text-gray-600 hover:text-black' : 'text-white/80 hover:text-white'}`}
            >
              {item}
            </button>
          ))}
        </div>

        <button className={`md:hidden transition-colors ${isScrolled ? 'text-black' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-white text-black p-10 flex flex-col space-y-6 md:hidden z-[60]">
            <div className="flex justify-between items-center mb-4">
               <img src="/logo/logo.png" alt="Suryavolt Logo" className="h-10 w-auto" />
               <button className="text-3xl" onClick={() => setIsMenuOpen(false)}>×</button>
            </div>
            <button className="text-2xl font-bold flex items-center gap-2" onClick={() => scrollToSection('home')}><Home className="w-6 h-6" /> Home</button>
            <button className="text-2xl font-bold flex items-center gap-2" onClick={() => scrollToSection('about')}><Info className="w-6 h-6" /> About</button>
            <button className="text-2xl font-bold flex items-center gap-2" onClick={() => scrollToSection('services')}><Settings className="w-6 h-6" /> Services</button>
            <button className="text-2xl font-bold flex items-center gap-2" onClick={() => scrollToSection('contact')}><Mail className="w-6 h-6" /> Contact</button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section 
        id="home" 
        className="relative h-screen flex items-center px-6 md:px-20 bg-cover bg-center" 
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop')"}}
      >
        <div className="absolute inset-0 bg-black/50"></div> 
        <div className="relative z-10 max-w-4xl text-white px-2">
          <h1 className="text-5xl md:text-8xl font-extrabold leading-[1.1] animate-fade-in">
            Brighter Future Begins <br /> with <span className="text-[#C7F36B]">Clean Power</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl opacity-90 max-w-2xl leading-relaxed">
            Empower your home or business with reliable, renewable solar solutions designed to cut costs and protect the planet.
          </p>
          <div className="mt-12 flex flex-wrap gap-5">
            <button onClick={() => scrollToSection('services')} className="bg-[#C7F36B] text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl flex items-center gap-2">
              Explore Programs <ChevronRight className="w-5 h-5" />
            </button>
            <button onClick={() => scrollToSection('contact')} className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all">
              Book Session
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 right-10 text-[15vw] font-black text-white/5 hidden lg:block select-none pointer-events-none uppercase">Suryavolt</div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#C7F36B] rounded-full -z-10"></div>
            <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80" alt="Solar Innovation" className="rounded-3xl shadow-2xl w-full object-cover h-[500px]" />
          </div>
          <div className="px-2">
            <h4 className="text-[#C7F36B] font-bold tracking-widest uppercase mb-4">Our Mission</h4>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-black uppercase tracking-tighter">Creating a cleaner, sustainable tomorrow.</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">At Suryavolt, we don't just install panels; we deliver energy independence. Our team of experts ensures that every watt is optimized for your comfort and savings.</p>
            <div className="grid grid-cols-2 gap-8">
              <div><div className="text-5xl font-black text-black">60%</div><div className="text-gray-500 font-medium">Cost reduction for homes</div></div>
              <div><div className="text-5xl font-black text-black">10k+</div><div className="text-gray-500 font-medium">Successful installations</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INNOVATION VIDEO SECTION --- */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 px-2">
            <span className="text-[#C7F36B] font-bold tracking-widest uppercase">Latest Innovation</span>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-[#0A0A0A] uppercase tracking-tighter">Experience the power of <br /><span className="text-gray-400">Next-Gen Solar Tech.</span></h2>
            <p className="text-gray-600 text-lg leading-relaxed">Suryavolt is pioneering the transition to smart energy. Watch how our integrated solar ecosystems transform sunlight into seamless power.</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center space-x-4"><div className="w-12 h-12 bg-[#F5F7F9] rounded-full flex items-center justify-center"><Check className="w-6 h-6 text-black" /></div><span className="font-bold">Real-time Tracking</span></div>
              <div className="flex items-center space-x-4"><div className="w-12 h-12 bg-[#F5F7F9] rounded-full flex items-center justify-center"><Award className="w-6 h-6 text-black" /></div><span className="font-bold">25 Years Warranty</span></div>
            </div>
            <button className="bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-[#C7F36B] hover:text-black transition-all shadow-lg flex items-center gap-2">Learn More <ArrowRight className="w-5 h-5" /></button>
          </div>
          <div className="flex-1 w-full relative group">
            <div className="absolute -inset-4 bg-[#C7F36B]/20 rounded-[3rem] blur-xl group-hover:bg-[#C7F36B]/30 transition-all"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white aspect-video bg-black cursor-pointer" onClick={() => setIsModalOpen(true)}>
              <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80" alt="Video Thumbnail" className="w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-all"><div className="w-20 h-20 bg-[#C7F36B] rounded-full flex items-center justify-center shadow-2xl animate-pulse"><Play className="w-8 h-8 text-black ml-1" fill="black" /></div></div>
            </div>
          </div> 
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 text-white">
            <button className="absolute top-10 right-10 text-5xl hover:text-[#C7F36B] transition-colors" onClick={() => setIsModalOpen(false)}>&times;</button>
            <div className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
              <iframe src="https://drive.google.com/file/d/19iK7c6590AEm6IzwsoQM3V0kQv6vHMQQkI1Hv9nIFH4/preview?autoplay=1" className="w-full h-full" allow="autoplay; encrypted-media" allowFullScreen title="Solar Video"></iframe>
            </div>
          </div>
        )}
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 px-6 md:px-20 bg-[#F5F7F9]">
        <div className="text-center mb-16 px-2">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">Powering Your Life</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Modern energy solutions built with the latest solar technology.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Solar Panels', icon: Sun, desc: 'High-efficiency PV modules for maximum output.' },
            { title: 'Smart Storage', icon: Battery, desc: 'Battery solutions to keep you powered at night.' },
            { title: 'EV Charging', icon: Zap, desc: 'Fast-charging stations for your electric vehicles.' },
            { title: 'Energy Audit', icon: BarChart3, desc: 'AI-driven monitoring to track your savings.' }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group border border-gray-100">
                <div className="mb-6 group-hover:animate-bounce"><Icon className="w-12 h-12 text-black" /></div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-white px-6 md:px-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center uppercase tracking-tighter">Frequently Asked Questions</h2>
          <div className="space-y-4 px-2">
            {["How much can I save with Suryavolt?", "Do solar panels work on cloudy days?", "What is the lifespan of a system?"].map((q, i) => (
              <details key={i} className="group border-2 border-gray-50 rounded-2xl p-6 cursor-pointer hover:border-[#C7F36B] transition-colors">
                <summary className="flex items-center justify-between font-bold text-xl list-none uppercase tracking-tight">{q}<Plus className="w-6 h-6 group-open:rotate-45 transition-transform" /></summary>
                <p className="mt-4 text-gray-600 leading-relaxed">Most customers see a 50-70% reduction in their monthly bills. Our high-tech panels are designed to capture even low-intensity light, ensuring performance year-round.</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 px-6 md:px-20 relative overflow-hidden bg-black min-h-[800px] flex items-center">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-40">
            <source src="/video/small.mp4" type="video/mp4"/>
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 relative z-10 w-full">
          <div className="px-2">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white uppercase tracking-tighter">Ready to <br /><span className="text-[#C7F36B]">go green?</span></h2>
            <p className="text-gray-300 text-xl mb-12 max-w-md">Leave your details and we'll provide a custom solar blueprint for your property within 24 hours.</p>
            <div className="space-y-8">
              <div className="flex items-center space-x-6 group text-white"><MapPin className="text-[#C7F36B]" /><p className="text-lg">Jaipur, Rajasthan, India</p></div>
              <div className="flex items-center space-x-6 group text-white"><Phone className="text-[#C7F36B]" /><p className="text-lg">+91 98765 43210</p></div>
              <div className="flex items-center space-x-6 group text-white"><Mail className="text-[#C7F36B]" /><p className="text-lg">info@suryavolt.com</p></div>
            </div>
          </div>

          <form className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-[3rem] text-black space-y-5 shadow-2xl mx-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="w-full p-4 bg-gray-100 rounded-2xl focus:ring-2 focus:ring-[#C7F36B] outline-none" />
              <input type="text" placeholder="Phone" className="w-full p-4 bg-gray-100 rounded-2xl focus:ring-2 focus:ring-[#C7F36B] outline-none" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-100 rounded-2xl focus:ring-2 focus:ring-[#C7F36B] outline-none" />
            <textarea placeholder="Your property details..." rows="4" className="w-full p-4 bg-gray-100 rounded-2xl focus:ring-2 focus:ring-[#C7F36B] outline-none"></textarea>
            <button className="w-full bg-black text-white py-5 rounded-2xl font-black text-lg hover:bg-[#C7F36B] hover:text-black transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2">
              Request Free Quote <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-white text-center border-t">
        <div className="text-3xl font-black tracking-tighter mb-6 uppercase">Suryavolt</div>
        <div className="flex flex-wrap justify-center gap-8 mb-10 font-bold text-gray-500 uppercase text-xs tracking-widest">
          {['home', 'about', 'services', 'contact'].map(item => (
            <button key={item} onClick={() => scrollToSection(item)} className="hover:text-black transition-colors">{item}</button>
          ))}
        </div>
        <p className="text-gray-400 text-sm px-4">© 2026 Suryavolt Solar Solutions. Powered by Innovation.</p>
      </footer>

      {/* --- BURST ANIMATION STYLES --- */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes burstOut {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) 
                       translate(calc(cos(var(--angle)) * var(--distance)), 
                                calc(sin(var(--angle)) * var(--distance))) 
                       scale(0);
            opacity: 0;
          }
        }

        @keyframes centerPop {
          0% {
            transform: scale(0.2);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes sparkleRotate {
          0% {
            transform: rotate(0deg) translateX(150px) scale(1);
            opacity: 1;
          }
          50% {
            transform: rotate(180deg) translateX(150px) scale(1.5);
            opacity: 0.8;
          }
          100% {
            transform: rotate(360deg) translateX(150px) scale(0);
            opacity: 0;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }

        .animate-burst-out {
          animation: burstOut var(--duration) cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
          will-change: transform, opacity;
        }

        .animate-center-pop {
          animation: centerPop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-sparkle-rotate {
          animation: sparkleRotate 2s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 100ms;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
};

export default App;