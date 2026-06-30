import { motion } from 'motion/react';
import { Layout, Palette, ShoppingBag, Search, Terminal, Megaphone, TrendingUp } from 'lucide-react';
import ElectricBorder from './ElectricBorder';

const services = [
  {
    title: 'Premium Web Design',
    description: 'Bespoke, visual-first interfaces designed for maximum brand impact, responsiveness, and premium user experiences.',
    icon: Palette,
    color: 'text-purple-500'
  },
  {
    title: 'Custom Web Development',
    description: 'High-performance, secure, and scalable web applications built with modern frameworks like React and Next.js.',
    icon: Terminal,
    color: 'text-blue-500'
  },
  {
    title: 'E-commerce Solutions',
    description: 'Custom Shopify setups, optimized checkout flows, and payment integrations that drive revenue and loyalty.',
    icon: ShoppingBag,
    color: 'text-pink-500'
  },
  {
    title: 'Digital Marketing & Meta Ads',
    description: 'Highly-targeted Facebook, Instagram, and social campaigns engineered to scale lead generation and sales.',
    icon: Megaphone,
    color: 'text-rose-500'
  },
  {
    title: 'SEO & Search Strategy',
    description: 'Technical page-speed optimization, off-page strategies, and targeted keywords to dominate search engine results.',
    icon: Search,
    color: 'text-amber-500'
  },
  {
    title: 'Conversion Optimization',
    description: 'Analytical reviews, A/B testing, and high-performance landing pages tuned to turn visitors into brand advocates.',
    icon: TrendingUp,
    color: 'text-emerald-500'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold mb-6"
            >
              Our <span className="text-brand">Expertise</span>
            </motion.h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We provide a full suite of digital solutions tailored to your business goals. From conceptual design to robust deployment.
            </p>
          </div>
          <a href="#packages" className="text-sm font-bold uppercase tracking-widest text-brand hover:text-brand-light transition-colors flex items-center">
            View Packages <Layout className="ml-2" size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ElectricBorder
              key={service.title}
              color="#2563eb"
              speed={0.8}
              chaos={0.08}
              borderRadius={32}
              className={i === 0 || i === 3 ? 'md:col-span-2' : ''}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bento-card h-full flex flex-col justify-between group hover:border-brand/40 transition-all cursor-default"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-brand group-hover:scale-110 transition-transform">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-display">{service.title}</h3>
                  <p className="text-zinc-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </ElectricBorder>
          ))}
        </div>
      </div>
    </section>
  );
}
