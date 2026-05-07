import { motion } from 'motion/react';
import { Check, Shield, Star, Crown, MessageCircle } from 'lucide-react';

const plans = [
  {
    name: 'Recommended Website Package',
    price: '18,500',
    icon: Star,
    description: 'Perfect for startups, personal brands, and small businesses looking for a modern and professional online presence.',
    features: [
      'Modern Responsive Website (Up to 4 Pages)',
      'Mobile & Tablet Friendly Design',
      'Premium UI/UX Layout',
      'Contact Form Integration',
      'SEO-Friendly Structure',
      'Social Media Integration',
      'Fast Loading Speed',
      'WhatsApp Chat Button',
      'Smooth Animations & Effects',
      'Professional Landing Page Design',
      '30 Days Free Support'
    ],
    recommended: true
  },
  {
    name: 'Professional Business Package',
    price: '25,000',
    icon: Shield,
    description: 'Best for growing businesses and agencies needing a premium online presence.',
    features: [
      'Everything in Recommended Package',
      'Up to 8 Custom Pages',
      'Advanced Modern UI/UX Design',
      'Smooth Animations & Transitions',
      'CMS/Editable Content Sections',
      'Advanced SEO Setup',
      'Speed Optimization',
      'Image Gallery / Portfolio Section',
      'Testimonials & Reviews Section',
      'Booking / Inquiry Forms',
      'Google Maps Integration',
      '2 Months Free Support'
    ],
    recommended: false
  },
  {
    name: 'Premium Elite Package',
    price: '35,550',
    icon: Crown,
    description: 'For brands that want a luxury, high-converting, professional website.',
    features: [
      'Everything in Professional Package',
      'Fully Custom Premium Design',
      'Unlimited Sections & Advanced Layouts',
      'Framer Motion Animations',
      'API Integrations',
      'Advanced Performance Optimization',
      'Custom Dashboard or Admin Panel',
      'Blog / News System',
      'E-commerce or Booking Features',
      'Advanced Security Setup',
      'Priority Support',
      '2 Months Free Support',
      'Premium Visual Effects & Interactions',
      'SEO + Conversion Focused Structure'
    ],
    recommended: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Choose Your <span className="text-brand">Package</span>
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transparent pricing for world-class digital solutions. Choose the plan that fits your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.02, 
                borderColor: '#2563eb',
                zIndex: 10,
                backgroundColor: 'rgba(24, 24, 27, 1)'
              }}
              viewport={{ once: true }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 20,
                delay: i * 0.1 
              }}
              className={`relative p-8 rounded-[2.5rem] border transition-colors duration-300 flex flex-col bg-zinc-900 border-white/5`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-brand/10 text-brand">
                  <plan.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-black">Rs. {plan.price}</span>
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start space-x-3 text-sm">
                    <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-brand/10 flex items-center justify-center">
                      <Check className="text-brand" size={10} />
                    </div>
                    <span className="text-zinc-400">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/923197765190"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all bg-brand text-white hover:bg-brand-light shadow-lg shadow-brand/20"
              >
                <span>Get Started</span>
                <MessageCircle size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
