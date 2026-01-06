import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  BarChart3, 
  Calendar, 
  Code2, 
  Database, 
  LayoutDashboard, 
  Music, 
  Settings, 
  ShoppingBag, 
  Users,
  MapPin,
  ChevronRight,
  Monitor,
  Lightbulb
} from 'lucide-react';

// Custom Logo Component mimicking the provided image, adjusted for light theme
const Logo = ({ className = "w-10 h-10", showText = true }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative group flex-shrink-0">
      {/* Circular Gradient Border */}
      <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full blur-sm opacity-20 group-hover:opacity-40 transition duration-500"></div>
      <div className="relative w-12 h-12 bg-white rounded-full p-[2px] flex items-center justify-center overflow-hidden border border-slate-200 shadow-sm">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
          {/* Stylized 'C' with lightbulb area */}
          <path 
            d="M45,30 C30,30 25,45 25,50 C25,55 30,70 45,70" 
            fill="none" 
            stroke="url(#logoGrad)" 
            strokeWidth="8" 
            strokeLinecap="round" 
          />
          {/* Lightbulb element inside C */}
          <circle cx="45" cy="50" r="8" fill="url(#logoGrad)" opacity="0.8" />
          <path d="M45,42 L45,38 M52,45 L56,43 M52,55 L56,57" stroke="url(#logoGrad)" strokeWidth="2" />
          
          {/* Stylized 'T' with circuit traces */}
          <path 
            d="M55,30 L80,30 M67,30 L67,70" 
            fill="none" 
            stroke="url(#logoGrad)" 
            strokeWidth="8" 
            strokeLinecap="round" 
          />
          {/* Circuit dots */}
          <circle cx="80" cy="30" r="3" fill="url(#logoGrad)" />
          <circle cx="67" cy="70" r="3" fill="url(#logoGrad)" />
          <path d="M67,50 L75,50 L75,60" fill="none" stroke="url(#logoGrad)" strokeWidth="2" />
          <circle cx="75" cy="60" r="2" fill="url(#logoGrad)" />
        </svg>
      </div>
    </div>
    {showText && (
      <div className="flex flex-col leading-none">
        <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">Createch</span>
        <span className="text-[8px] tracking-[0.3em] font-bold text-blue-600 uppercase ml-0.5">Technology LLC</span>
      </div>
    )}
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 border-b border-slate-100 py-3 backdrop-blur-md shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Logo className="scale-90" />
        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Innovation</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/20 text-white px-6 py-2 rounded-full text-sm font-bold transition-all">
          Launch Project
        </button>
      </div>
    </nav>
  );
};

const ServiceCard = ({ icon: Icon, title, description, tags }) => (
  <div className="group p-8 rounded-2xl bg-white border border-slate-100 hover:border-blue-500/30 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-blue-500/5">
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/5 to-purple-600/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <Icon className="text-blue-600 relative z-10" size={28} />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-500 mb-8 leading-relaxed text-sm">{description}</p>
    <div className="flex flex-wrap gap-2 mt-auto">
      {tags.map(tag => (
        <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1.5 bg-slate-50 rounded-lg text-slate-400 border border-slate-100">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const AppPreview = () => (
  <div className="relative group overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-blue-50/50 to-purple-50/50 border border-blue-100 p-8 md:p-16">
    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full"></div>
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-xs font-bold mb-8">
          <Music size={14} /> PIANO STUDIO MANAGEMENT
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
          Harmonize Your <br/><span className="gradient-text">Studio Workflow</span>
        </h2>
        <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-md">
          Born from a need for precision, our Piano Maestro app transforms how independent teachers manage students, scheduling, and billing.
        </p>
        <div className="space-y-6 mb-10">
          {[
            { icon: Calendar, text: "Dynamic Lesson Scheduling", sub: "Drag & drop management" },
            { icon: Users, text: "Student Progress Tracking", sub: "Individual curriculum notes" },
            { icon: BarChart3, text: "Automated Receivables", sub: "One-click invoice generation" }
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600 flex-shrink-0">
                <item.icon size={20} />
              </div>
              <div>
                <div className="text-slate-900 font-semibold text-sm">{item.text}</div>
                <div className="text-slate-500 text-xs mt-0.5">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
        <button className="flex items-center gap-2 text-white font-bold bg-slate-900 px-6 py-3 rounded-xl border border-slate-800 hover:bg-black transition-all shadow-lg">
          Request Beta Access <ChevronRight size={18} className="text-blue-400" />
        </button>
      </div>
      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[2rem] blur-2xl opacity-5 animate-pulse-slow"></div>
        
        <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 shadow-blue-500/10 transform rotate-1 group-hover:rotate-0 transition-transform duration-700">
          <div className="h-10 bg-slate-50 flex items-center px-5 gap-2 border-b border-slate-100">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
            <div className="ml-4 h-3 w-32 bg-slate-200 rounded-full"></div>
          </div>
          <div className="p-8 bg-white min-h-[400px]">
            <div className="flex justify-between items-center mb-10">
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100">
                  <Music className="text-blue-600" size={24} />
                </div>
                <div>
                  <div className="h-4 w-24 bg-slate-100 rounded mb-2"></div>
                  <div className="h-3 w-16 bg-slate-50 rounded"></div>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 shadow-lg shadow-blue-500/20"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="h-3 w-16 bg-blue-600/10 rounded mb-4"></div>
                <div className="flex items-end gap-1">
                  <div className="text-2xl font-bold text-slate-900 leading-none">$1,240</div>
                  <div className="text-[10px] text-slate-400 mb-1">Mtd</div>
                </div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="h-3 w-16 bg-purple-600/10 rounded mb-4"></div>
                <div className="flex items-end gap-1">
                  <div className="text-2xl font-bold text-slate-900 leading-none">24</div>
                  <div className="text-[10px] text-slate-400 mb-1">Students</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center gap-4 p-3 bg-white rounded-xl border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-slate-50"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-2 w-3/4 bg-slate-100 rounded"></div>
                    <div className="h-2 w-1/2 bg-slate-50 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-white">
        {/* Large stylized watermark logo background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-40 right-10 opacity-5 animate-pulse-slow">
           <Logo className="w-96 h-96" showText={false} />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center mb-10">
            <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-blue-200 bg-blue-50 text-xs font-bold text-blue-700 uppercase tracking-widest">
              <MapPin size={14} /> RTP • Durham • Raleigh • NC
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-10 tracking-tight leading-[0.9]">
            Architecture For <br/>
            <span className="gradient-text">Modern Creators</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
            Createch LLC is an RTP-based engineering collective specializing in enterprise ERP solutions and bespoke studio management software.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-xl">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Core Consulting</h2>
              <h3 className="text-4xl font-bold text-slate-900 leading-tight">Enterprise Infrastructure Built on Years of Experience.</h3>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={LayoutDashboard}
              title="Enterprise ERP"
              description="From Oracle to custom cloud deployments, we optimize the back-office architecture that powers global scale."
              tags={["ERP Implementation", "Cloud Arch", "Legacy Migration"]}
            />
            <ServiceCard 
              icon={Users}
              title="CRM & Sales Tech"
              description="Unified customer views and automated sales funnels that turn raw data into predictable revenue growth."
              tags={["Salesforce", "Custom CRMs", "Lead Automation"]}
            />
            <ServiceCard 
              icon={ShoppingBag}
              title="eCommerce Ops"
              description="High-transaction storefronts built for speed, resilience, and conversion-focused user experiences."
              tags={["Omnichannel", "Headless", "B2B/B2C"]}
            />
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <AppPreview />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-10 border border-blue-200">
                <Lightbulb className="text-blue-600" size={32} />
              </div>
              <h2 className="text-5xl font-bold text-slate-900 mb-8 tracking-tight">Engineering with RTP Roots.</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We started in North Carolina's Research Triangle Park, surrounded by innovation. Our journey began with high-stakes ERP consulting, but our passion has always been bridging that corporate efficiency with creative freedom.
              </p>
              <p className="text-slate-600 text-lg mb-12 leading-relaxed">
                Today, Createch LLC serves both Fortune 500 companies and independent music studios, proving that world-class technology belongs in every workspace.
              </p>
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <div className="text-5xl font-bold text-slate-900 mb-2 tracking-tighter">15<span className="text-blue-600">+</span></div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-black">Expert Consultants</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-slate-900 mb-2 tracking-tighter">100<span className="text-purple-600">%</span></div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-black">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-tr from-blue-600/5 to-purple-600/5 rounded-[3rem] border border-slate-200 p-12 flex items-center justify-center relative group shadow-2xl shadow-slate-200/50 bg-white">
                <div className="absolute -inset-10 bg-blue-500/5 blur-[100px] opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                <Logo className="w-full h-full transform -rotate-12" showText={false} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 mb-24">
            <div className="lg:col-span-2">
              <Logo className="mb-10" />
              <p className="text-slate-500 max-w-sm mb-10 leading-relaxed text-sm">
                Engineering excellence in the heart of the Research Triangle Park. We build software that respects both business logic and human creativity.
              </p>
              <div className="flex gap-4">
                {[Monitor, Database, Code2].map((Icon, i) => (
                  <div key={i} className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all cursor-pointer border border-slate-100">
                    <Icon size={20} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-slate-900 font-black text-xs uppercase tracking-[0.2em] mb-8">Solutions</h4>
              <ul className="space-y-4 text-slate-500 text-sm font-medium">
                <li><a href="#" className="hover:text-blue-600">ERP Strategy</a></li>
                <li><a href="#" className="hover:text-blue-600">CRM Implementation</a></li>
                <li><a href="#" className="hover:text-blue-600">Custom Dev</a></li>
                <li><a href="#" className="hover:text-blue-600">Cloud Arch</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-900 font-black text-xs uppercase tracking-[0.2em] mb-8">Innovation</h4>
              <ul className="space-y-4 text-slate-500 text-sm font-medium">
                <li><a href="#" className="hover:text-blue-600">Piano Maestro</a></li>
                <li><a href="#" className="hover:text-blue-600">Beta Access</a></li>
                <li><a href="#" className="hover:text-blue-600">Case Studies</a></li>
                <li><a href="#" className="hover:text-blue-600">Our Lab</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-900 font-black text-xs uppercase tracking-[0.2em] mb-8">Location</h4>
              <ul className="space-y-4 text-slate-500 text-sm font-medium leading-relaxed">
                <li>Durham, NC</li>
                <li>Research Triangle Park</li>
                <li>helo@createch.app</li>
                <li>(919)998-6818</li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-[10px] font-black uppercase tracking-widest">
            <p>© 2024 Createch, LLC. RTP's Creative Engineering Partner.</p>
            <div className="flex gap-10">
              <span className="cursor-pointer hover:text-slate-900">Privacy</span>
              <span className="cursor-pointer hover:text-slate-900">Terms</span>
              <span className="cursor-pointer hover:text-slate-900">Cookie Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}