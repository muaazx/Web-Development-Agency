import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Wanderlust Travels',
    category: 'Travel Agency',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop',
    result: '140% Increase in Bookings',
  },
  {
    title: 'Elya Estates',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
    result: 'Reduced Bounce Rate by 60%',
  },
  {
    title: 'Velo Collective',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
    result: '$2.4M Annual Revenue Growth',
  },
  {
    title: 'Zenit Corporate',
    category: 'Corporate Brand',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop',
    result: 'Global Rebrand Success',
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Digital <span className="text-brand">Showcase</span>
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of our finest work, delivering measurable results through better design and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-[2.5rem] overflow-hidden bento-card border-none min-h-[400px] ${i === 0 || i === 2 ? 'md:col-span-2' : ''}`}
            >
              <img 
                referrerPolicy="no-referrer"
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent p-10 flex flex-col justify-end">
                <span className="text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block">{project.category}</span>
                <h3 className="text-3xl font-bold font-display mb-1 text-white">{project.title}</h3>
                <div className="text-sm text-zinc-400 mb-6">{project.result}</div>
                
                <div className="flex items-center space-x-3 text-xs font-bold text-white uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                   <span>View Case Study</span>
                   <ExternalLink size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
