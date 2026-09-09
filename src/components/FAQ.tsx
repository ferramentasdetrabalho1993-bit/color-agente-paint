import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

export function FAQ() {
  const faqs = [
    {
      q: "O que vou receber?",
      a: "Você receberá o acesso ao livro digital A Arca de Noé — Livro Bíblico para Colorir."
    },
    {
      q: "É um livro físico?",
      a: "Não. Este é um produto digital."
    },
    {
      q: "Como receberei o produto?",
      a: "O acesso será disponibilizado digitalmente após a confirmação da compra."
    },
    {
      q: "Posso usar no celular?",
      a: "Sim. O material digital pode ser acessado em dispositivos compatíveis com o formato disponibilizado."
    },
    {
      q: "É indicado para crianças?",
      a: "Sim. O material foi desenvolvido com foco infantil, apresentando a história da Arca de Noé através de ilustrações e frases curtas."
    },
    {
      q: "Posso imprimir?",
      a: "Caso o arquivo e os direitos de uso da oferta permitam impressão, o material poderá ser utilizado dessa forma."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-heading">
            Perguntas frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-bold text-slate-800 font-heading">{faq.q}</span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-slate-400 transition-transform duration-300",
                    openIndex === idx ? "rotate-180" : ""
                  )} 
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-slate-600">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
