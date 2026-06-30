import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import GlareHover from './GlareHover';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Main Hero Card */}
          <GlareHover
            width="100%"
            height="auto"
            background="transparent"
            borderColor="transparent"
            borderRadius="2.5rem"
            glareOpacity={0.2}
            glareColor="#ffffff"
            className="md:col-span-2 md:row-span-2"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-600 to-indigo-900 rounded-[2.5rem] p-10 lg:p-14 flex flex-col justify-end relative overflow-hidden min-h-[500px]"
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
                  href="https://wa.me/923021414977" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Get a Quote
                </a>
              </div>
            </motion.div>
          </GlareHover>

          {/* Quick Stats Card */}
          <GlareHover
            width="100%"
            height="100%"
            background="transparent"
            borderColor="transparent"
            borderRadius="2rem"
            glareOpacity={0.15}
            glareColor="#2563eb"
            className="md:col-span-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bento-card-white flex flex-col justify-center items-center p-8 text-center h-full"
            >
              <div className="text-6xl font-black text-black">150+</div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-2">Projects Delivered</div>
            </motion.div>
          </GlareHover>

          {/* CTA / Contact Mini Card */}
          <GlareHover
            width="100%"
            height="100%"
            background="transparent"
            borderColor="transparent"
            borderRadius="2rem"
            glareOpacity={0.2}
            glareColor="#ffffff"
            className="md:col-span-2"
          >
            <motion.a
              href="https://wa.me/923021414977"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bento-card p-8 flex items-center justify-between group cursor-pointer hover:border-brand transition-colors h-full flex"
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
          </GlareHover>

          {/* Scroll Stack Banners Card */}
          <div className="md:col-span-4 bento-card overflow-hidden h-[340px] relative">
            <ScrollStack
              itemDistance={24}
              itemScale={0.04}
              itemStackDistance={24}
              stackPosition="12%"
              scaleEndPosition="4%"
              baseScale={0.9}
              className="h-full w-full"
            >
              <ScrollStackItem>
                <div className="relative w-full h-full overflow-hidden rounded-[2rem]">
                  <img src="/images/banner1.jpg" alt="Creative Design Layout" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-6 flex flex-col justify-end">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-brand-light mb-1">UI Inspiration</span>
                    <h4 className="text-lg font-bold text-white leading-tight">Creative Workspaces</h4>
                  </div>
                </div>
              </ScrollStackItem>
              <ScrollStackItem>
                <div className="relative w-full h-full overflow-hidden rounded-[2rem]">
                  <img src="/images/banner2.jpg" alt="Marketing Assets" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-6 flex flex-col justify-end">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-brand-light mb-1">Growth Marketing</span>
                    <h4 className="text-lg font-bold text-white leading-tight">Interactive Campaigns</h4>
                  </div>
                </div>
              </ScrollStackItem>
              <ScrollStackItem>
                <div className="relative w-full h-full overflow-hidden rounded-[2rem]">
                  <img src="/images/banner3.jpg" alt="Modern Typography" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-6 flex flex-col justify-end">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-brand-light mb-1">Creative Typography</span>
                    <h4 className="text-lg font-bold text-white leading-tight">High-Contrast Layouts</h4>
                  </div>
                </div>
              </ScrollStackItem>
              <ScrollStackItem>
                <div className="relative w-full h-full overflow-hidden rounded-[2rem]">
                  <img src="/images/banner4.jpg" alt="Technical SEO Analysis" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-6 flex flex-col justify-end">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-brand-light mb-1">SEO Strategy</span>
                    <h4 className="text-lg font-bold text-white leading-tight">Organic Optimization</h4>
                  </div>
                </div>
              </ScrollStackItem>
              <ScrollStackItem>
                <div className="relative w-full h-full overflow-hidden rounded-[2rem]">
                  <img src="/images/banner5.jpg" alt="Bespoke Development" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-6 flex flex-col justify-end">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-brand-light mb-1">Performance Stack</span>
                    <h4 className="text-lg font-bold text-white leading-tight">React & Vite Systems</h4>
                  </div>
                </div>
              </ScrollStackItem>
            </ScrollStack>
          </div>
        </div>
      </div>
    </section>
  );
}
