import { motion } from 'framer-motion';

export function Features() {
  const features = [
    {
      icon: "🚢",
      title: "A GRANDE ARCA",
      desc: "Conheça a missão recebida por Noé e a construção da arca."
    },
    {
      icon: "🦁",
      title: "OS ANIMAIS",
      desc: "Diversos animais fazem parte da aventura."
    },
    {
      icon: "🌧️",
      title: "O GRANDE DILÚVIO",
      desc: "Acompanhe a história através das ilustrações."
    },
    {
      icon: "🕊️",
      title: "A POMBA",
      desc: "Uma das cenas marcantes da narrativa."
    },
    {
      icon: "🌈",
      title: "O ARCO-ÍRIS",
      desc: "Um final cheio de esperança."
    },
    {
      icon: "❤️",
      title: "FÉ E APRENDIZADO",
      desc: "Uma oportunidade para conversar sobre valores importantes."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-heading mb-4">
            Uma história que ganha vida a cada página
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow hover:border-blue-100"
            >
              <div className="text-4xl mb-4 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 font-heading mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
