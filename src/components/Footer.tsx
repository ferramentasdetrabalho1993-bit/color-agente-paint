import { CONTACT_EMAIL, PRODUCER_NAME } from '../constants';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-center pb-24 md:pb-12">
      <div className="container mx-auto px-4">
        <h4 className="text-white font-heading font-bold text-xl mb-4">
          A Arca de Noé — Livro Bíblico para Colorir
        </h4>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          {CONTACT_EMAIL && <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">Contato</a>}
        </div>
        
        <p className="text-sm">
          &copy; {year} {PRODUCER_NAME}. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-2 opacity-50 max-w-2xl mx-auto">
          Este site não faz parte do site do Facebook ou da Meta Platforms, Inc. Além disso, este site não é endossado pelo Facebook de nenhuma maneira. Facebook é uma marca comercial da Meta Platforms, Inc.
        </p>
      </div>
    </footer>
  );
}
