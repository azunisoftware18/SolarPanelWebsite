import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Check, MapPin, Phone, Sun, Battery, Zap, BarChart3, 
  Plus, ChevronRight, Play, ArrowRight, Award, TrendingUp, Clock, 
  Home, Info, Settings, Mail 
} from 'lucide-react'; 

const App = () => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth Scroll Function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-[#F5F7F9] font-sans text-gray-900 overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-3 flex justify-between items-center ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent text-white'
      }`}>
        
        {/* LOGO SECTION */}
        <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
          <img 
            src="../public/logo/logo.png" // Ensure image_5df363.png is named logo.png in public folder
            alt="Suryavolt Logo" 
            className={`h-12 w-auto transition-all duration-300 ${
              isScrolled ? 'brightness-100' : 'brightness-0 invert'
            }`} 
          />
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center font-medium">
          {['home', 'about', 'services', 'contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item)} 
              className={`capitalize transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-black' : 'text-white/80 hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden transition-colors ${isScrolled ? 'text-black' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-white text-black p-10 flex flex-col space-y-6 md:hidden z-[60]">
            <div className="flex justify-between items-center mb-4">
               {/* Mobile Menu Logo */}
               <img src="/logo.png" alt="Suryavolt Logo" className="h-10 w-auto" />
               <button className="text-3xl" onClick={() => setIsMenuOpen(false)}>×</button>
            </div>
            
            <button className="text-2xl font-bold flex items-center gap-2" onClick={() => scrollToSection('home')}>
              <Home className="w-6 h-6" /> Home
            </button>
            <button className="text-2xl font-bold flex items-center gap-2" onClick={() => scrollToSection('about')}>
              <Info className="w-6 h-6" /> About
            </button>
            <button className="text-2xl font-bold flex items-center gap-2" onClick={() => scrollToSection('services')}>
              <Settings className="w-6 h-6" /> Services
            </button>
            <button className="text-2xl font-bold flex items-center gap-2" onClick={() => scrollToSection('contact')}>
              <Mail className="w-6 h-6" /> Contact
            </button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION WITH BACKGROUND IMAGE --- */}
      <section 
        id="home" 
        className="relative h-screen flex items-center px-6 md:px-20 bg-cover bg-center" 
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop')"}}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* Dark Overlay */}
        
        <div className="relative z-10 max-w-4xl text-white">
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

        {/* Large Watermark Text */}
        <div className="absolute bottom-10 right-10 text-[15vw] font-black text-white/5 hidden lg:block select-none pointer-events-none uppercase">
          Suryavolt
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#C7F36B] rounded-full -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80" 
              alt="Solar Innovation" 
              className="rounded-3xl shadow-2xl w-full object-cover h-[500px]"
            />
          </div>
          <div>
            <h4 className="text-[#C7F36B] font-bold tracking-widest uppercase mb-4">Our Mission</h4>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Creating a cleaner, sustainable tomorrow.</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              At Suryavolt, we don't just install panels; we deliver energy independence. Our team of experts ensures that every watt is optimized for your comfort and savings.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-5xl font-black text-black">60%</div>
                <div className="text-gray-500 font-medium">Cost reduction for homes</div>
              </div>
              <div>
                <div className="text-5xl font-black text-black">10k+</div>
                <div className="text-gray-500 font-medium">Successful installations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INNOVATION VIDEO SECTION --- */}
<section className="py-24 px-6 md:px-20 bg-white">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
    
    {/* Left Side: Content */}
    <div className="flex-1 space-y-8">
      <span className="text-[#C7F36B] font-bold tracking-widest uppercase">Latest Innovation</span>
      <h2 className="text-4xl md:text-6xl font-bold leading-tight text-[#0A0A0A]">
        Experience the power of <br /> 
        <span className="text-gray-400">Next-Gen Solar Tech.</span>
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed">
        Suryavolt is pioneering the transition to smart energy. Watch how our integrated 
        solar ecosystems transform sunlight into seamless power.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-[#F5F7F9] rounded-full flex items-center justify-center">
            <Check className="w-6 h-6 text-black" />
          </div>
          <span className="font-bold">Real-time Tracking</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-[#F5F7F9] rounded-full flex items-center justify-center">
            <Award className="w-6 h-6 text-black" />
          </div>
          <span className="font-bold">25 Years Warranty</span>
        </div>
      </div>

      <button className="bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-[#C7F36B] hover:text-black transition-all shadow-lg flex items-center gap-2">
        Learn More <ArrowRight className="w-5 h-5" />
      </button>
    </div>

    {/* Right Side: Video Thumbnail & Play Button */}
    <div className="flex-1 w-full relative group">
      <div className="absolute -inset-4 bg-[#C7F36B]/20 rounded-[3rem] blur-xl group-hover:bg-[#C7F36B]/30 transition-all"></div>
      <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white aspect-video bg-black cursor-pointer"
           onClick={() => setIsModalOpen(true)}>
        
        <img 
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80" 
          alt="Solar Panel Video Thumbnail" 
          className="w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-all">
          <div className="w-20 h-20 bg-[#C7F36B] rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <Play className="w-8 h-8 text-black ml-1" fill="black" />
          </div>
        </div>
      </div>
    </div>  
  </div>

  {/* --- VIDEO MODAL (POPUP) --- */}
  {isModalOpen && (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10">
      <button 
        className="absolute top-10 right-10 text-white text-5xl hover:text-[#C7F36B] transition-colors"
        onClick={() => setIsModalOpen(false)}
      >
        &times;
      </button>
      <div className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
        {/* Fixed: Added autoplay=1 and muted=1 for better browser compatibility */}
        <iframe
          src="https://drive.google.com/file/d/19iK7c6590AEm6IzwsoQM3V0kQv6vHMQQkI1Hv9nIFH4/preview?autoplay=1"
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Google Drive Video"
        ></iframe>
      </div>
    </div>
  )}
</section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 px-6 md:px-20 bg-[#F5F7F9]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Powering Your Life</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Modern energy solutions built with the latest solar technology.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Solar Panels', icon: Sun, desc: 'High-efficiency PV modules for maximum output.' },
            { title: 'Smart Storage', icon: Battery, desc: 'Battery solutions to keep you powered at night.' },
            { title: 'EV Charging', icon: Zap, desc: 'Fast-charging stations for your electric vehicles.' },
            { title: 'Energy Audit', icon: BarChart3, desc: 'AI-driven monitoring to track your savings.' }
          ].map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
                <div className="mb-6 group-hover:animate-bounce">
                  <IconComponent className="w-12 h-12 text-black" />
                </div>
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
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {["How much can I save with Suryavolt?", "Do solar panels work on cloudy days?", "What is the lifespan of a system?"].map((q, i) => (
              <details key={i} className="group border-2 border-gray-50 rounded-2xl p-6 cursor-pointer hover:border-[#C7F36B] transition-colors">
                <summary className="flex items-center justify-between font-bold text-xl list-none">
                  {q}
                  <Plus className="w-6 h-6 group-open:rotate-45 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Most customers see a 50-70% reduction in their monthly bills. Our high-tech panels are designed to capture even low-intensity light, ensuring performance year-round.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION WITH VIDEO BACKGROUND --- */}
      <section id="contact" className="py-24 px-6 md:px-20 relative overflow-hidden bg-black min-h-[800px] flex items-center">
        
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover opacity-40" // Opacity se video ko dark kiya hai taaki text dikhe
          >
        
            <source src="/video/small.mp4" type="video/mp4"/>
          </video>
          {/* Dark Overlay taaki video text ko disturb na kare */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 relative z-10 w-full">
          {/* Left Side: Contact Info */}
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
              Ready to <br /><span className="text-[#C7F36B]">go green?</span>
            </h2>
            <p className="text-gray-300 text-xl mb-12 max-w-md">
              Leave your details and we'll provide a custom solar blueprint for your property within 24 hours.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#C7F36B]/20 transition-colors">
                  <MapPin className="w-6 h-6 text-[#C7F36B]" />
                </div>
                <p className="text-lg text-white">Jaipur, Rajasthan, India</p>
              </div>
              
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#C7F36B]/20 transition-colors">
                  <Phone className="w-6 h-6 text-[#C7F36B]" />
                </div>
                <p className="text-lg text-white">+91 98765 43210</p>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#C7F36B]/20 transition-colors">
                  <Mail className="w-6 h-6 text-[#C7F36B]" />
                </div>
                <p className="text-lg text-white">info@suryavolt.com</p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <form className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-[3rem] text-black space-y-5 shadow-2xl">
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

        {/* Decorative Light Effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C7F36B]/5 blur-[120px] rounded-full -mr-64 -mt-64 z-0"></div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-white text-center border-t">
        <div className="text-3xl font-black tracking-tighter mb-6">Suryavolt</div>
        <div className="flex flex-wrap justify-center gap-8 mb-10 font-bold text-gray-500 uppercase text-xs tracking-widest">
          {['home', 'about', 'services', 'contact'].map(item => (
            <button key={item} onClick={() => scrollToSection(item)} className="hover:text-black transition-colors flex items-center gap-1">
              {item === 'home' && <Home className="w-3 h-3" />}
              {item === 'about' && <Info className="w-3 h-3" />}
              {item === 'services' && <Settings className="w-3 h-3" />}
              {item === 'contact' && <Mail className="w-3 h-3" />}
              {item}
            </button>
          ))}
        </div>
        <p className="text-gray-400 text-sm">© 2026 Suryavolt Solar Solutions. Powered by Innovation.</p>
      </footer>
    </div>
  );
};

export default App;