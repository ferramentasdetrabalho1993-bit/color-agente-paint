import { ButtonHTMLAttributes, ReactNode } from 'react';
import { CHECKOUT_URL } from '../constants';
import { cn } from '../lib/utils';
import { ShoppingCart } from 'lucide-react';

interface BuyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  showIcon?: boolean;
}

export function BuyButton({ className, children, showIcon = true, ...props }: BuyButtonProps) {
  const handleCheckout = () => {
    // Analytics event could go here
    window.location.href = CHECKOUT_URL;
  };

  return (
    <button
      onClick={handleCheckout}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-accent px-8 py-4 font-heading text-lg font-bold text-white shadow-[0_8px_0_0_#b45309] transition-all hover:translate-y-1 hover:shadow-[0_4px_0_0_#b45309] active:translate-y-2 active:shadow-none w-full md:w-auto",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
        <div className="relative h-full w-8 bg-white/20" />
      </div>
      {showIcon && <ShoppingCart className="h-6 w-6" />}
      <span>{children}</span>
    </button>
  );
}
