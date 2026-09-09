import { motion } from 'framer-motion';

export function TargetAudience() {
  const audiences = [
    {
      icon: "👨‍👩‍👧",
      title: "FAMÍLIAS",
      desc: "Para atividades em casa."
    },
    {
      icon: "⛪",
      title: "IGREJAS",
      desc: "Para ministérios e atividades infantis."
    },
    {
      icon: "📚",
      title: "ESCOLAS BÍBLICAS",
      desc: "Para momentos educativos."
    },
    {
      icon: "🎁",
      title: "PRESENTE",
      desc: "Uma opção de presente criativo para crianças."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-heading mb-4">
            Perfeito para diferentes momentos
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 border border-slate-100"
            >
              <span className="text-5xl mb-4">{item.icon}</span>
              <h3 className="text-lg font-bold text-slate-800 font-heading mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
