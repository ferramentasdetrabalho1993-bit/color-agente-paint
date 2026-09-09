import { motion } from 'framer-motion';
import childImage from '../assets/images/child_coloring_1788910989235.jpg';

export function Emotional() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-square md:aspect-[4/3] lg:aspect-square">
              <img 
                src={childImage} 
                alt="Criança colorindo com a família" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative blob behind image */}
            <div className="absolute -top-10 -left-10 w-full h-full bg-sand rounded-[3rem] -z-10 rotate-3"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 font-heading leading-tight mb-6">
              Mais do que colorir.<br />
              <span className="text-blue-600">Um momento para criar memórias.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                Em meio à rotina corrida, pequenos momentos podem se transformar em grandes memórias.
              </p>
              <p>
                Enquanto a criança colore cada página, vocês podem conversar sobre Noé, os animais, a arca, a esperança e a promessa representada pelo arco-íris.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mt-8">
                <p className="font-bold text-blue-900 text-xl">
                  Uma atividade simples que pode unir criatividade, aprendizado e momentos em família.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
