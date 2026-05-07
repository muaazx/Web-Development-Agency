import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
          {/* Main Hero Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-blue-600 to-indigo-900 rounded-[2.5rem] p-10 lg:p-14 flex flex-col justify-end relative overflow-hidden min-h-[500px]"
          >
            <div className="absolute top-10 right-10 opacity-10">
              <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 16.5C21 16.8 20.9 17.1 20.7 17.3L12.7 21.7C12.5 21.8 12.3 21.9 12 21.9C11.7 21.9 11.5 21.8 11.3 21.7L3.3 17.3C3.1 17.1 3 16.8 3 16.5V7.5C3 7.2 3.1 6.9 3.3 6.7L11.3 2.3C11.5 2.2 11.7 2.1 12 2.1C12.3 2.1 12.5 2.2 12.7 2.3L20.7 6.7C20.9 6.9 21 7.2 21 7.5V16.5Z" />
              </svg>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold uppercase tracking-wider text-blue-100 mb-6 w-fit"
            >
              <span>Available for projects in 2026</span>
            </motion.div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-[1.1] mb-6 text-white">
              We Build High-Converting Websites for Growing Businesses
            </h1>
            <p className="text-blue-100 text-lg max-w-md mb-8">
              Premium UI/UX design and development for brands that demand excellence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wa.me/923197765190" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>

          {/* Quick Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 bento-card-white flex flex-col justify-center items-center p-8 text-center"
          >
            <div className="text-6xl font-black text-black">150+</div>
            <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-2">Projects Delivered</div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 md:row-span-1 bento-card p-8 flex flex-col justify-between"
          >
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand">
              <Play size={20} className="fill-brand" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Watch Showreel</h3>
              <p className="text-zinc-500 text-sm mt-1">Our 2025 highlights</p>
            </div>
          </motion.div>

          {/* CTA / Contact Mini Card */}
          <motion.a
            href="https://wa.me/923197765190"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 md:row-span-1 bento-card p-8 flex items-center justify-between group cursor-pointer hover:border-brand transition-colors"
          >
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center">
                <ArrowRight className="text-brand group-hover:translate-x-1 transition-transform" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Ready to scale?</h3>
                <p className="text-zinc-500">Book your discovery call today.</p>
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
