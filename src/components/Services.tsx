import { motion } from 'motion/react';
import { Layout, Palette, ShoppingBag, Send, Search, Terminal } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'High-performance, scalable web applications built with the latest technologies.',
    icon: Terminal,
    color: 'text-blue-500'
  },
  {
    title: 'UI/UX Design',
    description: 'Bespoke interfaces designed for seamless user journeys and brand impact.',
    icon: Palette,
    color: 'text-purple-500'
  },
  {
    title: 'E-commerce',
    description: 'Custom Shopify and storefront solutions that drive sales and loyalty.',
    icon: ShoppingBag,
    color: 'text-pink-500'
  },
  {
    title: 'Landing Pages',
    description: 'Focused, high-converting one-pagers that turn visitors into customers.',
    icon: Layout,
    color: 'text-emerald-500'
  },
  {
    title: 'SEO Strategy',
    description: 'Technical optimization and content strategies to dominate search results.',
    icon: Search,
    color: 'text-amber-500'
  },
  {
    title: 'Consultancy',
    description: 'Strategic advice on tech stack, product-market fit, and digital growth.',
    icon: Send,
    color: 'text-indigo-500'
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
          <a href="#pricing" className="text-sm font-bold uppercase tracking-widest text-brand hover:text-brand-light transition-colors flex items-center">
            View Pricing <Layout className="ml-2" size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 bento-card ${i === 0 || i === 3 ? 'md:col-span-2' : ''} flex flex-col justify-between group hover:border-brand/40 transition-all cursor-default`}
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-brand group-hover:scale-110 transition-transform`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display">{service.title}</h3>
                <p className="text-zinc-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
              

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
