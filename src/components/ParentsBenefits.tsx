import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export function ParentsBenefits() {
  const benefits = [
    {
      title: "Atividade longe das telas",
      desc: "Uma alternativa divertida para momentos de lazer."
    },
    {
      title: "Estimula a criatividade",
      desc: "Colorir ajuda a criança a explorar cores e imaginação."
    },
    {
      title: "Momento de conexão",
      desc: "Uma atividade que pode ser compartilhada em família."
    },
    {
      title: "Conteúdo com propósito",
      desc: "A criança se diverte enquanto conhece uma história bíblica."
    },
    {
      title: "Fácil de usar",
      desc: "Produto digital prático e acessível."
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-heading mb-4">
            Por que os pais vão gostar?
          </h2>
        </div>

        <div className="space-y-4">
          {benefits.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="mt-1 bg-green-100 p-1 rounded-full shrink-0">
                <Check className="w-5 h-5 text-green-600" strokeWidth={3} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 font-heading">{item.title}</h3>
                <p className="text-slate-600 mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
