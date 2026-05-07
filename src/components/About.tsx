import { motion, useSpring, useTransform, animate } from 'motion/react';
import { Target, Heart, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function Counter({ value, suffix = "" }: { value: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        animate(0, value, {
          duration: 2,
          onUpdate: (latest) => setCount(Math.floor(latest))
        });
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const values = [
    {
      title: 'Mission',
      desc: 'To empower businesses with high-end digital tools that drive real growth.',
      icon: Target
    },
    {
      title: 'Passion',
      desc: 'We are obsessed with design perfection and technical excellence.',
      icon: Heart
    },
    {
      title: 'Speed',
      desc: 'Fast delivery without compromising on the depth of craft.',
      icon: Zap
    }
  ];

  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              We are <span className="text-brand">NovaWeb Studio</span>. A collective of designers & builders.
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Founded in 2020, NovaWeb was born from a simple observation: most business websites are either beautiful but broken, or functional but forgettable. We bridge that gap.
            </p>
            
            <div className="space-y-8">
              {values.map((v) => (
                <div key={v.title} className="flex space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand">
                    <v.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 font-display">{v.title}</h3>
                    <p className="text-gray-500">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-12">
               <img 
                referrerPolicy="no-referrer"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
                className="w-full h-80 object-cover rounded-[2.5rem]" 
                alt="Our Team"
              />
              <div className="p-8 bento-card-white text-center">
                <div className="text-4xl font-bold text-brand mb-2">
                  <Counter value={15} suffix="+" />
                </div>
                <div className="text-sm font-bold uppercase tracking-tighter text-gray-500">Experts</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-8 bento-card text-center border-brand/20">
                <div className="text-4xl font-bold text-brand mb-2">
                   <Counter value={250} suffix="+" />
                </div>
                <div className="text-sm font-bold uppercase tracking-tighter text-zinc-500">Launched</div>
              </div>
              <img 
                referrerPolicy="no-referrer"
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                className="w-full h-80 object-cover rounded-[2.5rem]" 
                alt="Collaboration"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
