import { BookOpen, CheckCircle2, Lock } from 'lucide-react';
import { BuyButton } from './BuyButton';
import { motion } from 'framer-motion';

import heroImage from '../assets/images/hero_book_mockup_1788910978144.jpg';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white pt-20 pb-16 lg:pt-32 lg:pb-24">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 opacity-20 hidden md:block">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-400"><path d="M17.5 19c-1.5 0-2.5-1-3-1.5-.5.5-1.5 1.5-3 1.5s-2.5-1-3-1.5C8 18 7 19 5.5 19A2.5 2.5 0 0 1 3 16.5c0-1.5 1-2.5 1.5-3-.5-.5-1.5-1.5-1.5-3A2.5 2.5 0 0 1 5.5 8c1.5 0 2.5 1 3 1.5.5-.5 1.5-1.5 3-1.5s2.5 1 3 1.5c.5-.5 1.5-1.5 3-1.5A2.5 2.5 0 0 1 21 10.5c0 1.5-1 2.5-1.5 3 .5.5 1.5 1.5 1.5 3A2.5 2.5 0 0 1 17.5 19z"/></svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-blue-800 mb-6 font-semibold text-sm">
              <BookOpen className="h-4 w-4" />
              <span>LIVRO BÍBLICO INFANTIL</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 leading-tight mb-4 font-heading">
              A Arca de Noé
            </h1>
            
            <p className="text-xl sm:text-2xl text-blue-600 font-bold mb-6 font-heading">
              Uma aventura de fé, criatividade e descobertas para as crianças.
            </p>
            
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Transforme a história de Noé em um momento divertido de criatividade, aprendizado e conexão em família.
            </p>
            
            <ul className="space-y-3 mb-10 text-left">
              {[
                "Mais de 50 páginas para colorir",
                "História de Noé contada de forma lúdica",
                "Animais, cenas bíblicas e atividades",
                "Arquivo digital para acessar de forma prática"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="w-full flex flex-col items-center lg:items-start gap-3">
              <BuyButton className="w-full sm:w-auto text-xl px-10 py-5">
                QUERO O LIVRO AGORA
              </BuyButton>
              <div className="flex items-center gap-2 text-sm text-slate-500 font-medium mt-2">
                <Lock className="h-4 w-4 text-emerald-600" />
                <span>Compra 100% segura</span>
              </div>
              <p className="text-xs text-slate-400">
                Acesso digital após a confirmação do pagamento.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent z-10 rounded-3xl pointer-events-none"></div>
              <img 
                src={heroImage} 
                alt="Livro A Arca de Noé" 
                className="w-full h-auto object-cover rounded-2xl relative z-0"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
            
            {/* Floating badges */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-sky-100 z-20 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-amber-100 p-2 rounded-full">
                  <span className="text-2xl">🎨</span>
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">Diversão Garantida</p>
                  <p className="text-xs text-slate-500">Para os pequenos</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
