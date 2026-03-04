'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { fadeUp, staggerContainer, scaleIn } from '@/lib/motion';
import { toast } from 'sonner';
import { SectionHeading } from '@/components/layouts/SectionHeading';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    detail: '123 Business Avenue, Mumbai, Maharashtra 400001, India',
  },
  { icon: Phone, title: 'Call Us', detail: '+91 98765 43210' },
  { icon: Mail, title: 'Email Us', detail: 'info@vyaparion.com' },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you shortly.");
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <section className="hero-gradient py-24 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-primary-foreground/60 max-w-xl mx-auto"
          >
            We&apos;d love to hear from you. Reach out and let&apos;s start a
            conversation.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {contactInfo.map((c) => (
              <motion.div
                key={c.title}
                variants={scaleIn}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-6 text-center card-elevated"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                  <c.icon size={22} className="text-accent" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-1">
                  {c.title}
                </h4>
                <p className="text-muted-foreground text-xs">{c.detail}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionHeading
                title="Send a Message"
                subtitle="Fill out the form and we'll respond within 24 hours"
                centered={false}
              />
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { key: 'name', label: 'Your Name', type: 'text' },
                  { key: 'email', label: 'Your Email', type: 'email' },
                  { key: 'subject', label: 'Subject', type: 'text' },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="text-xs font-medium text-foreground mb-1 block">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) =>
                        setForm({ ...form, [field.key]: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-xs font-medium text-foreground mb-1 block">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-accent text-accent-foreground font-semibold text-sm glow-accent"
                >
                  Send Message <Send size={16} />
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden h-[400px] lg:h-auto"
            >
              <iframe
                title="Vyaparion Traders Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C+Maharashtra%2C+India!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
                className="w-full h-full border-0 rounded-2xl"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
