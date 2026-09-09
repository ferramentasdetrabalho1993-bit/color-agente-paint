import { useState, useEffect } from 'react';
import { BuyButton } from './BuyButton';
import { PRODUCT_PRICE_OFFER } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling down 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-50 md:hidden"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 font-bold uppercase">Oferta</span>
              <span className="text-lg font-black text-blue-600 font-heading leading-none">
                R$ {PRODUCT_PRICE_OFFER}
              </span>
            </div>
            <BuyButton className="py-3 px-6 text-base w-auto shadow-[0_4px_0_0_#b45309] hover:shadow-[0_2px_0_0_#b45309]" showIcon={false}>
              COMPRAR
            </BuyButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
