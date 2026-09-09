import { motion } from 'framer-motion';
import arkImage from '../assets/images/gallery_ark_1788911000098.jpg';
import animalsImage from '../assets/images/gallery_animals_1788911009045.jpg';
import { BuyButton } from './BuyButton';

export function ProductGallery() {
  const images = [
    { src: arkImage, alt: "A Grande Arca - Página para colorir" },
    { src: animalsImage, alt: "Os Animais - Página para colorir" }
  ];

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-heading mb-4">
            Conheça o livro por dentro
          </h2>
          <p className="text-xl text-slate-600">
            Uma aventura ilustrada pela história da Arca de Noé.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 mb-16">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative w-full max-w-sm rounded-2xl bg-white shadow-xl p-3 border border-slate-200 transform transition-transform hover:-translate-y-2 hover:rotate-1"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-auto rounded-xl object-cover" 
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-white px-8 py-4 rounded-full shadow-md border border-slate-100 mb-8">
            <p className="text-xl font-bold text-blue-600">
              ✨ +50 páginas de diversão e criatividade
            </p>
          </div>
          
          <div className="mt-8">
             <BuyButton>GARANTIR MEU ACESSO</BuyButton>
          </div>
        </div>
      </div>
    </section>
  );
}
