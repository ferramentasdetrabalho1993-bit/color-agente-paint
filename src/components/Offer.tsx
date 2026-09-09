import { Lock, Smartphone, Zap } from 'lucide-react';
import { BuyButton } from './BuyButton';
import { PRODUCT_PRICE_ORIGINAL, PRODUCT_PRICE_OFFER } from '../constants';
import { motion } from 'framer-motion';

export function Offer() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="inline-block bg-red-100 text-red-600 font-bold px-4 py-1.5 rounded-full text-sm mb-6 uppercase tracking-wide">
            Oferta Especial
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-heading mb-8">
            Leve a história da Arca de Noé para os momentos de diversão da sua criança
          </h2>
          
          <div className="flex flex-col items-center justify-center mb-8">
            <span className="text-slate-500 line-through text-xl">De R$ {PRODUCT_PRICE_ORIGINAL}</span>
            <div className="flex items-start justify-center text-blue-600 mt-2">
              <span className="text-2xl font-bold mt-2">POR R$</span>
              <span className="text-6xl md:text-7xl font-black font-heading leading-none tracking-tighter ml-2">
                {PRODUCT_PRICE_OFFER}
              </span>
            </div>
          </div>
          
          <BuyButton className="w-full md:w-auto text-xl px-12 py-5 mb-6">
            QUERO MEU LIVRO POR R$ {PRODUCT_PRICE_OFFER}
          </BuyButton>
          
          <p className="text-slate-500 text-sm mb-8">
            Pagamento processado em ambiente 100% seguro.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <Lock className="w-4 h-4 text-emerald-500" />
              <span>Compra segura</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <Smartphone className="w-4 h-4 text-blue-500" />
              <span>Produto digital</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Acesso após confirmação</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
