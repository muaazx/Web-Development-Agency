import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, MessageCircle, CheckCircle, AlertCircle, Loader } from 'lucide-react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'Premium Web Design',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setFormState('success');
      setForm({ name: '', email: '', subject: 'Premium Web Design', message: '' });
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send message.');
      setFormState('error');
    }
  };

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
              <a href="mailto:amuaaz872@gmail.com" className="flex items-center space-x-6 p-4 rounded-3xl bg-white/5 border border-white/5 hover:border-brand/40 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em]">Email Us</div>
                  <div className="font-bold">amuaaz872@gmail.com</div>
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
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12 space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CheckCircle size={40} className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-zinc-400">
                      Thanks for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setFormState('idle')}
                    className="mt-4 px-8 py-3 bg-white/5 border border-white/10 rounded-2xl font-medium hover:border-brand/40 transition-colors"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-brand outline-none transition-colors"
                        placeholder="Ahmed Khan"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-brand outline-none transition-colors"
                        placeholder="ahmed@business.pk"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-2">Service</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full bg-white border border-white/10 rounded-2xl p-5 text-black focus:border-brand outline-none transition-colors appearance-none font-medium"
                    >
                      <option>Premium Web Design</option>
                      <option>Custom Web Development</option>
                      <option>E-commerce Solution</option>
                      <option>Digital Marketing &amp; Meta Ads</option>
                      <option>SEO Optimization</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-2">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-brand outline-none transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>

                  {/* Error message */}
                  <AnimatePresence>
                    {formState === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="flex items-center space-x-3 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400"
                      >
                        <AlertCircle size={18} />
                        <span className="text-sm">{errorMsg}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    type="submit"
                    disabled={formState === 'loading'}
                    whileHover={{ scale: formState === 'loading' ? 1 : 1.02 }}
                    whileTap={{ scale: formState === 'loading' ? 1 : 0.98 }}
                    className="w-full py-5 bg-brand text-white font-bold rounded-2xl flex items-center justify-center space-x-2 shadow-xl shadow-brand/20 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
                  >
                    {formState === 'loading' ? (
                      <>
                        <Loader size={20} className="animate-spin" />
                        <span>Sending…</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={20} />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
