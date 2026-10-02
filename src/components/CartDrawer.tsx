import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Check, Download, Tag, Lock } from 'lucide-react';
import { StudyMaterial } from '../data/professorData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: StudyMaterial[];
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onClearCart
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [isCheckoutCompleted, setIsCheckoutCompleted] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const discountAmount = subtotal * discount;
  const finalTotal = Math.max(0, subtotal - discountAmount);

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'OXFORDSTUDENT20' || promoCode.trim().toUpperCase() === 'DODIYA20') {
      setDiscount(0.2);
      setPromoApplied(true);
    } else {
      alert('Invalid coupon code. Try DODIYA20 for 20% off!');
    }
  };

  const handleSimulateCheckout = () => {
    setIsCheckoutCompleted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-md bg-white border-l border-slate-200 h-full flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-red-900" />
            <h3 className="font-serif text-lg text-slate-900">Your Study Materials Cart</h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-red-900/10 text-red-900 font-mono font-bold">
              {cartItems.length}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        {isCheckoutCompleted ? (
          <div className="flex-1 p-6 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-700 flex items-center justify-center animate-bounce">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-2xl text-slate-900">Payment Confirmed!</h4>
            <p className="text-xs text-slate-600 max-w-xs leading-relaxed">
              Thank you for purchasing Dr. Rajnikant Dodiya's study materials. Your digital archives have been unlocked below.
            </p>

            <div className="w-full space-y-2 mt-4 text-left">
              {cartItems.map((item) => (
                <div key={item.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-900 truncate pr-2">{item.title}</span>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); alert("Downloading " + item.title); }}
                    className="px-3 py-1.5 rounded bg-red-900 hover:bg-red-800 text-white font-medium flex items-center gap-1.5 shrink-0 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" /> Download
                  </a>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                onClearCart();
                setIsCheckoutCompleted(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-700 hover:bg-slate-100 transition-all"
            >
              Close & Return to Library
            </button>
          </div>
        ) : cartItems.length === 0 ? (
          <div className="flex-1 p-6 flex flex-col items-center justify-center text-center space-y-3">
            <ShoppingBag className="w-12 h-12 text-slate-300" />
            <p className="text-sm text-slate-500">Your cart is empty.</p>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-red-900/10 text-red-900 text-xs font-semibold border border-red-900/20 hover:bg-red-900/20 transition-all"
            >
              Browse Study Materials
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.map((item) => (
                <div 
                  key={item.id} 
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-3 group hover:border-slate-300 transition-all"
                >
                  <div className="flex-1">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-red-900 font-semibold">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-sm font-medium text-slate-900 line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">{item.format}</p>
                    <div className="mt-2 text-xs font-semibold text-slate-900">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1.5 text-slate-400 hover:text-red-900 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

              {/* Promo Code Box */}
              <div className="pt-2">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <Tag className="w-4 h-4 text-red-900" />
                  <input 
                    type="text"
                    placeholder="Coupon (e.g. DODIYA20)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    disabled={promoApplied}
                    className="bg-transparent text-xs text-slate-900 placeholder-slate-400 focus:outline-none flex-1 font-mono"
                  />
                  <button
                    onClick={handleApplyPromo}
                    disabled={promoApplied || !promoCode}
                    className="px-3 py-1 rounded bg-slate-200 hover:bg-red-900 text-xs font-medium text-slate-800 hover:text-white transition-all disabled:opacity-50"
                  >
                    {promoApplied ? 'Applied' : 'Apply'}
                  </button>
                </div>
                {promoApplied && (
                  <p className="text-[11px] text-emerald-700 mt-1 flex items-center gap-1 font-medium">
                    <Check className="w-3 h-3" /> 20% Academic Student Discount applied!
                  </p>
                )}
              </div>
            </div>

            {/* Footer summary */}
            <div className="p-6 border-t border-slate-200 bg-slate-50 space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Student Discount (20%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-semibold text-slate-900 pt-2 border-t border-slate-200">
                  <span>Total Amount</span>
                  <span className="text-red-900 font-serif text-xl">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleSimulateCheckout}
                className="w-full py-3 rounded-xl bg-red-900 hover:bg-red-800 text-white text-xs font-medium shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <Lock className="w-4 h-4" />
                Complete Purchase & Access Downloads (${finalTotal.toFixed(2)})
              </button>

              <p className="text-[10px] text-center text-slate-500 flex items-center justify-center gap-1 font-mono">
                <span>Instant PDF Access • 256-bit SSL • Official Columbia Literature Archive</span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
