import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Muneeb Ahmed',
    role: 'Founder, TechLahore',
    content: 'Smart Web Solutions transformed our digital presence. Their attention to detail and technical prowess is unmatched. We saw a 3x increase in conversions within months.',
    avatar: '/images/testimonials/man1.jpg',
    rating: 5
  },
  {
    name: 'Ayesha Khan',
    role: 'CEO, Organic Karachi',
    content: 'The team understood our vision perfectly. The new platform is not just beautiful, it’s lightning fast and extremely easy to manage.',
    avatar: '/images/testimonials/woman1.png',
    rating: 5
  },
  {
    name: 'Zubair Qureshi',
    role: 'Marketing Head, Islamabad Solutions',
    content: 'Working with Smart Web Solutions was a breeze. They delivered ahead of schedule and the final result exceeded our wildest expectations.',
    avatar: '/images/testimonials/man2.jpg',
    rating: 5
  },
  {
    name: 'Saima Malik',
    role: 'Product Manager at Faisalabad Textiles',
    content: 'The level of professionalism and creativity shown by Smart Web Solutions is outstanding. They really know how to build for the modern web.',
    avatar: '/images/testimonials/woman2.jpg',
    rating: 5
  },
  {
    name: 'Usman Ghani',
    role: 'CTO, Peshawar Innovations',
    content: 'Choosing Smart Web Solutions was the best decision for our rebranding. Their technical stack is cutting-edge and the results speak for themselves.',
    avatar: '/images/testimonials/man3.jpg',
    rating: 5
  },
  {
    name: 'Fatima Zahra',
    role: 'Founder, Lahore Boutique',
    content: 'From concept to launch, the experience was seamless. Our new site has significantly improved our brand image and customer engagement.',
    avatar: '/images/testimonials/woman3.jpg',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-6"
          >
            <Quote className="text-brand" size={32} />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4 font-display">Client Voices</h2>
          <p className="text-gray-500">Don't take our word for it. Hear from our partners.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 bento-card ${i === 0 ? 'md:col-span-2' : ''} flex flex-col justify-between`}
            >
              <div>
                <div className="flex space-x-1 mb-8">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-brand text-brand" />
                  ))}
                </div>
                <p className={`text-gray-300 italic mb-10 leading-relaxed ${i === 0 ? 'text-2xl' : 'text-lg'}`}>
                  "{t.content}"
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-brand/20" />
                <div>
                  <div className="font-bold font-display">{t.name}</div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
