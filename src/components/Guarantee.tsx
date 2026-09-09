import { ShieldCheck } from 'lucide-react';

export function Guarantee() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-50 p-8 rounded-2xl border border-slate-200">
          <div className="shrink-0 bg-white p-4 rounded-full shadow-sm">
            <ShieldCheck className="w-16 h-16 text-emerald-500" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-slate-800 font-heading mb-2">
              Você pode comprar com tranquilidade
            </h3>
            <p className="text-slate-600">
              Compra processada em ambiente 100% seguro, através de uma plataforma especializada na entrega de produtos digitais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
