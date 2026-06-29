import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Rolled CRM',
    category: 'Enterprise SaaS Application',
    image: '/images/rolled_crm.png',
    result: 'Complete Business Dashboard CRM with Real-time Analytics',
    link: 'https://rolled-three.vercel.app/dashboard',
  },
  {
    title: 'Gourmet Gateway',
    category: 'Premium Restaurant Website',
    image: '/images/gourmet_restaurant.png',
    result: 'Elegant UX and Reservation Portal for Fine Dining',
    link: 'https://gourmet-gateway-sable.vercel.app/',
  },
  {
    title: 'SwiftSol Technologies',
    category: 'Corporate Business Website',
    image: '/images/swiftsol.png',
    result: 'High-Performance Corporate Portfolio & Agency Landing Page',
    link: 'https://swiftsol.vercel.app/',
  },
  {
    title: 'Camford Academiya',
    category: 'Educational Portal & LMS',
    image: '/images/camford_academy.png',
    result: 'Interactive Student Academy Hub and Course Manager',
    link: 'https://camford-academiya.vercel.app/',
  },
  {
    title: 'Fast Food Delivery',
    category: 'E-commerce & Menu App',
    image: '/images/fast_food.png',
    result: 'Modern High-Speed Online Ordering Menu Application',
    link: 'https://fast-food-website-nu.vercel.app/',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Digital <span className="text-brand">Showcase</span>
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A hand-picked selection of our live developments. Responsive design, premium performance, and bespoke user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 200, damping: 20 }}
              className={`group relative rounded-[2.5rem] overflow-hidden bg-zinc-900/40 border border-white/5 hover:border-brand/40 hover:shadow-2xl hover:shadow-brand/5 transition-all duration-500 min-h-[420px] flex flex-col justify-end ${
                i === 0 || i === 3 ? 'md:col-span-2' : i === 4 ? 'md:col-span-3' : ''
              }`}
            >
              <img 
                referrerPolicy="no-referrer"
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out opacity-40 group-hover:opacity-55"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

              <div className="relative p-8 md:p-10 z-20 flex flex-col items-start">
                <span className="text-brand text-[10px] font-extrabold uppercase tracking-[0.25em] mb-3 block px-3 py-1 rounded-full bg-brand/10 border border-brand/20">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold font-display mb-2 text-white">{project.title}</h3>
                <p className="text-sm text-zinc-400 mb-6 max-w-xl">{project.result}</p>
                
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-bold text-white uppercase tracking-wider py-3.5 px-6 rounded-full bg-white/5 border border-white/10 hover:border-brand/50 hover:bg-brand/25 transition-all duration-300 w-fit transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <span>Visit Live Demo</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
