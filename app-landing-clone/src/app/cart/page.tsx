"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Minus, Plus, X, ShoppingBag } from 'lucide-react';

// Mock cart items
const initialCartItems = [
  {
    id: 1,
    name: 'Sports Hijab Hoodie',
    price: 59.99,
    image: '/images/products/product-1.jpg',
    quantity: 1,
    color: 'Black',
    size: 'M',
  },
  {
    id: 2,
    name: 'Modest Running Set',
    price: 59.99,
    image: '/images/products/product-2.jpg',
    quantity: 1,
    color: 'Blue',
    size: 'S',
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 4.99;
  const discount = promoApplied ? subtotal * 0.1 : 0; // 10% discount if promo is applied
  const total = subtotal + shipping - discount;

  const increaseQuantity = (id: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'esc10') {
      setPromoApplied(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-black">
            <ArrowLeft size={20} className="mr-2" />
            <span>Continue Shopping</span>
          </Link>
          <h1 className="text-2xl font-bold mx-auto">Your Cart</h1>
          <div className="w-32"></div> {/* Spacer for centering title */}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex justify-center items-center w-20 h-20 bg-gray-100 rounded-full mb-6">
              <ShoppingBag size={32} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Button asChild className="bg-black hover:bg-black/80">
              <Link href="/">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Cart Items ({cartItems.length})</h2>

                <ul className="divide-y">
                  {cartItems.map((item) => (
                    <li key={item.id} className="py-6 flex flex-wrap md:flex-nowrap">
                      <div className="w-full md:w-24 h-24 bg-gray-100 rounded-md relative overflow-hidden mb-4 md:mb-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 md:ml-6">
                        <div className="flex justify-between">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>

                        <div className="mt-1 text-sm text-gray-500">
                          <p>Color: {item.color}</p>
                          <p>Size: {item.size}</p>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center border rounded-md">
                            <button
                              className="p-2 text-gray-500 hover:text-black"
                              onClick={() => decreaseQuantity(item.id)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-4">{item.quantity}</span>
                            <button
                              className="p-2 text-gray-500 hover:text-black"
                              onClick={() => increaseQuantity(item.id)}
                            >
                              <Plus size={16} />
                            </button>
                          </div>

                          <button
                            className="text-gray-400 hover:text-black"
                            onClick={() => removeItem(item.id)}
                          >
                            <X size={20} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>

                  {promoApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount (10%)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Including VAT
                    </p>
                  </div>

                  <div className="pt-4">
                    <label htmlFor="promo" className="block text-sm font-medium text-gray-700 mb-2">
                      Promo Code
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        id="promo"
                        className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
                        placeholder="Enter promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={applyPromoCode}
                        disabled={promoApplied}
                      >
                        Apply
                      </Button>
                    </div>
                    {promoApplied && (
                      <p className="mt-1 text-xs text-green-600">Promo code applied successfully!</p>
                    )}
                    {!promoApplied && promoCode && (
                      <p className="mt-1 text-xs text-gray-500">Try 'ESC10' for 10% off</p>
                    )}
                  </div>

                  <Button className="w-full bg-black hover:bg-black/80">
                    Proceed to Checkout
                  </Button>

                  <div className="pt-4 text-center">
                    <p className="text-xs text-gray-500 mb-2">Secure Checkout</p>
                    <div className="flex justify-center space-x-2">
                      <Image src="/images/payment/visa.svg" alt="Visa" width={32} height={20} />
                      <Image src="/images/payment/mastercard.svg" alt="Mastercard" width={32} height={20} />
                      <Image src="/images/payment/amex.svg" alt="American Express" width={32} height={20} />
                      <Image src="/images/payment/paypal.svg" alt="PayPal" width={32} height={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
