import { motion } from 'motion/react';
import { Check, Star, MessageCircle } from 'lucide-react';

const plan = {
  name: 'Complete Digital Presence Package',
  icon: Star,
  description: 'An all-in-one comprehensive solution for startups, growing businesses, and luxury brands looking for a premium online presence.',
  features: [
    'Modern Responsive Website (Custom Pages)',
    'Mobile & Tablet Friendly Design',
    'Premium UI/UX Layout & Advanced Design',
    'Smooth Framer Motion Animations & Effects',
    'Contact, Booking & Inquiry Forms',
    'SEO-Friendly Structure & Advanced Setup',
    'Social Media & Google Maps Integration',
    'Fast Loading Speed Optimization',
    'WhatsApp Chat Button',
    'CMS/Editable Content Sections',
    'Image Gallery / Portfolio Section',
    'Testimonials & Reviews Section',
    'Custom Dashboard or Admin Panel',
    'Blog / News System',
    'E-commerce or Booking Features',
    'API Integrations & Advanced Security',
    'Priority Support (2 Months Free)',
  ],
};

export default function Pricing() {
  return (
    <section id="packages" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Our Service <span className="text-brand">Package</span>
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need in one comprehensive package. Request a tailored quote for your business growth.
          </p>
        </div>

        {/* Package Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.02,
            borderColor: '#2563eb',
            zIndex: 10,
            backgroundColor: 'rgba(24, 24, 27, 1)',
          }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
          className="relative p-8 md:p-12 rounded-[2.5rem] border transition-colors duration-300 flex flex-col bg-zinc-900 border-white/5"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap">
            All-In-One Solution
          </div>

          <div className="mb-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-brand/10 text-brand">
              <plan.icon size={32} />
            </div>
            <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
            <p className="text-zinc-400 text-base leading-relaxed max-w-2xl mx-auto">{plan.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-12">
            {plan.features.map((feature) => (
              <div key={feature} className="flex items-start space-x-3 text-sm md:text-base">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center">
                  <Check className="text-brand" size={12} />
                </div>
                <span className="text-zinc-300">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center border-t border-white/5 pt-8">
            <span className="text-sm uppercase tracking-widest text-brand font-bold mb-2">Custom Pricing</span>
            <p className="text-zinc-400 text-sm mb-8 text-center">Get a tailored quote based on your exact requirements</p>
            
            <a
              href={`https://wa.me/923021414977?text=${encodeURIComponent(
                `Hi NextGenDevelopers, I would like to request a quote for the "${plan.name}".`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto md:px-12 py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all bg-brand text-white hover:bg-brand-light shadow-lg shadow-brand/20"
            >
              <span>Get a Quote</span>
              <MessageCircle size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
