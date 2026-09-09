import { Hero } from './components/Hero';
import { BenefitsBar } from './components/BenefitsBar';
import { Emotional } from './components/Emotional';
import { ProductGallery } from './components/ProductGallery';
import { Features } from './components/Features';
import { ParentsBenefits } from './components/ParentsBenefits';
import { TargetAudience } from './components/TargetAudience';
import { Offer } from './components/Offer';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileCTA } from './components/MobileCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-body text-slate-800">
      <Hero />
      <BenefitsBar />
      <Emotional />
      <ProductGallery />
      <Features />
      <ParentsBenefits />
      <TargetAudience />
      <Offer />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
      <MobileCTA />
    </div>
  );
}
