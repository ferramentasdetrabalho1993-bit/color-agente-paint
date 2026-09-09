import { Lock } from 'lucide-react';
import { BuyButton } from './BuyButton';

export function FinalCTA() {
  return (
    <section className="py-24 bg-blue-600 text-center px-4 relative overflow-hidden">
      {/* Decorative stars/clouds could go here */}
      <div className="absolute top-10 right-10 text-white/10 text-6xl rotate-12 hidden md:block">★</div>
      <div className="absolute bottom-10 left-10 text-white/10 text-6xl -rotate-12 hidden md:block">☁️</div>

      <div className="container mx-auto max-w-2xl relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white font-heading mb-6">
          Pronto para embarcar nessa aventura?
        </h2>
        <p className="text-blue-100 text-lg md:text-xl mb-10">
          Separe os lápis de cor e transforme a história da Arca de Noé em um momento especial para a criança.
        </p>
        
        <BuyButton className="bg-white text-blue-600 shadow-[0_8px_0_0_#e2e8f0] hover:shadow-[0_4px_0_0_#e2e8f0] w-full md:w-auto px-12">
          QUERO A ARCA DE NOÉ
        </BuyButton>
        
        <div className="flex items-center justify-center gap-2 text-blue-200 mt-6 text-sm">
          <Lock className="w-4 h-4" />
          <span>Compra 100% segura.</span>
        </div>
      </div>
    </section>
  );
}
