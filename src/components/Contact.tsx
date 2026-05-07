import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bento-card p-10 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Let's craft your <span className="text-brand">Digital Future</span>
              </h2>
              <p className="text-zinc-500 text-lg mb-12">
                Ready to take your business to the next level? Reach out for a free discovery call.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:muaazx001@gmail.com" className="flex items-center space-x-6 p-4 rounded-3xl bg-white/5 border border-white/5 hover:border-brand/40 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em]">Email Us</div>
                  <div className="font-bold">muaazx001@gmail.com</div>
                </div>
              </a>
              <a href="https://wa.me/923197765190" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-6 p-4 rounded-3xl bg-white/5 border border-white/5 hover:border-brand/40 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em]">WhatsApp</div>
                  <div className="font-bold">+923197765190</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bento-card p-10 md:p-14 border-brand/10"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-2">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-brand outline-none transition-colors" placeholder="Ahmed Khan" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-2">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-brand outline-none transition-colors" placeholder="ahmed@business.pk" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-2">Subject</label>
                <select className="w-full bg-white border border-white/10 rounded-2xl p-5 text-black focus:border-brand outline-none transition-colors appearance-none font-medium">
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>Redesign Website</option>
                  <option>Bugs Fix & Maintenance</option>
                  <option>E-commerce Solution</option>
                  <option>SEO Optimization</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-2">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-brand outline-none transition-colors" placeholder="How can we help?"></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-brand text-white font-bold rounded-2xl flex items-center justify-center space-x-2 shadow-xl shadow-brand/20"
              >
                <span>Send Message</span>
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
