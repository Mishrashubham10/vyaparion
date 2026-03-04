import { motion } from 'framer-motion';
import { Target, Eye, Users } from 'lucide-react';
import {
  fadeUp,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight,
} from '@/lib/motion';
import { SectionHeading } from '@/components/layouts/SectionHeading';

const timeline = [
  {
    year: '2010',
    title: 'Founded',
    desc: 'Vyaparion Traders established in Mumbai, India',
  },
  {
    year: '2014',
    title: 'Global Expansion',
    desc: 'Expanded operations to 15+ countries',
  },
  {
    year: '2018',
    title: 'Tech Integration',
    desc: 'Launched IoT-enabled supply chain solutions',
  },
  {
    year: '2022',
    title: '500+ Clients',
    desc: 'Surpassed 500 active global partnerships',
  },
  {
    year: '2025',
    title: 'Market Leader',
    desc: 'Recognized as a top trading firm in Asia-Pacific',
  },
];

const team = [
  { name: 'Arjun Mehta', role: 'Founder & CEO', emoji: '👨‍💼' },
  { name: 'Priya Sharma', role: 'COO', emoji: '👩‍💼' },
  { name: 'David Lee', role: 'Head of Global Sales', emoji: '🧑‍💼' },
  { name: 'Fatima Al-Hassan', role: 'Supply Chain Director', emoji: '👩‍🔬' },
];

const AboutPage = () => (
  <>
    {/* Hero */}
    <section className="hero-gradient py-24 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(187,92%,42%,0.1),_transparent_60%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-4"
        >
          About Us
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-primary-foreground/60 max-w-xl mx-auto"
        >
          Learn about our journey, our mission, and the people behind Vyaparion
          Traders.
        </motion.p>
      </div>
    </section>

    {/* Introduction */}
    <section className="py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="glass-card rounded-2xl p-10 card-elevated text-center">
            <div className="text-7xl mb-4">🌍</div>
            <p className="text-muted-foreground text-sm">
              Connecting markets across continents since 2010
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            Our Story
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Founded with a vision to simplify international trade, Vyaparion
            Traders has grown from a small Mumbai-based firm to a global trading
            powerhouse. We specialize in metals, textiles, technology, and
            agricultural products.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Our commitment to quality, transparency, and innovation has earned
            the trust of 500+ businesses across 50 countries.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Mission & Vision"
          subtitle="What drives us forward every day"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {[
            {
              icon: Target,
              title: 'Our Mission',
              desc: 'To empower businesses with reliable, efficient, and transparent trading solutions that drive growth and build lasting partnerships across global markets.',
            },
            {
              icon: Eye,
              title: 'Our Vision',
              desc: "To become the world's most trusted trading partner, setting new standards in innovation, sustainability, and excellence in international commerce.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-8 card-elevated text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                <item.icon size={28} className="text-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Journey"
          subtitle="Key milestones in our growth story"
        />
        <div className="max-w-3xl mx-auto space-y-8">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-6 items-start"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center font-heading font-bold text-accent text-sm">
                  {item.year}
                </div>
                {i < timeline.length - 1 && (
                  <div className="w-0.5 h-12 bg-accent/20 mt-2" />
                )}
              </div>
              <div className="glass-card rounded-xl p-5 flex-1 card-elevated">
                <h4 className="font-heading font-semibold text-foreground mb-1">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Team"
          subtitle="The people driving Vyaparion's success"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={scaleIn}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 text-center card-elevated"
            >
              <div className="text-6xl mb-4">{member.emoji}</div>
              <h4 className="font-heading font-semibold text-foreground">
                {member.name}
              </h4>
              <p className="text-accent text-xs font-medium">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  </>
);

export default AboutPage;