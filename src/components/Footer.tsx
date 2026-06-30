import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import Antigravity from './Antigravity';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black pt-24 pb-12 border-t border-white/5 overflow-hidden">
      {/* Background 3D Antigravity Particle Field */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Antigravity
          count={300}
          magnetRadius={10}
          ringRadius={10}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={2}
          lerpSpeed={0.1}
          color="#2563eb"
          autoAnimate={false}
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
          <div className="max-w-sm">
            <div className="text-3xl font-bold font-display mb-6">
              Smart Web Solutions<span className="text-brand">.</span>
            </div>
            <p className="text-gray-500 mb-8 leading-relaxed">
              We build high-converting websites for businesses ready to scale. Based in Pakistan, working globally.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-16 lg:gap-32">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#services" className="text-gray-500 hover:text-white transition-colors">Services</a></li>
                <li><a href="#portfolio" className="text-gray-500 hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#about" className="text-gray-500 hover:text-white transition-colors">About Studio</a></li>
                <li><a href="#contact" className="text-gray-500 hover:text-white transition-colors">Career</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Services</h4>
              <ul className="space-y-4">
                <li><a href="#services" className="text-gray-500 hover:text-white transition-colors">Premium Web Design</a></li>
                <li><a href="#services" className="text-gray-500 hover:text-white transition-colors">Custom Web Development</a></li>
                <li><a href="#services" className="text-gray-500 hover:text-white transition-colors">Digital Marketing &amp; Meta Ads</a></li>
                <li><a href="#services" className="text-gray-500 hover:text-white transition-colors">SEO &amp; Search Strategy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-600 text-sm italic">
            © 2026 Smart Web Solutions. All rights reserved. Built with passion.
          </div>
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-brand hover:text-white transition-all shadow-xl shadow-brand/10 group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
