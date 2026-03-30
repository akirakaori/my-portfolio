"use client";
import { motion } from 'motion/react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { label: 'Years Experience', value: 3, suffix: '+' },
  { label: 'Projects Completed', value: 25, suffix: '+' },
  { label: 'Happy Clients', value: 15, suffix: '+' },
  { label: 'Cups of Coffee', value: 500, suffix: '' },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 glass-card rounded-3xl"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                ) : (
                  '0'
                )}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
