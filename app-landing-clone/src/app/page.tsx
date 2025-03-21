"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductCard } from "@/components/ProductCard";
import Header from "@/components/Header";
import { useAnimation } from "@/context/AnimationContext";

export default function Home() {
  const { hasSeenAnimation } = useAnimation();
  const [showContent, setShowContent] = useState(hasSeenAnimation);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Update our local state if the global animation state changes
    setShowContent(hasSeenAnimation);

    // Control body overflow for animation
    document.body.style.overflow = hasSeenAnimation ? 'auto' : 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [hasSeenAnimation]);

  useEffect(() => {
    // Handle scroll animations
    if (!showContent) return;

    const handleScroll = () => {
      const scrollElements = document.querySelectorAll(
        '.animate-fadeIn-scroll, .animate-slideUp-scroll, .animate-slideIn-right, .animate-scale-in'
      );

      scrollElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Calculate how much of the element is in view as a percentage
        const scrollPercentage = 1 - elementTop / (windowHeight + elementHeight);

        if (scrollPercentage > 0 && scrollPercentage <= 1) {
          element.setAttribute('style', `--scroll: ${scrollPercentage}`);
          (element as HTMLElement).style.animationPlayState = 'running';
        }
      });
    };

    // Run once to initialize animations for elements already in view
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showContent]);

  return (
    <div className="min-h-screen bg-zinc-50 relative" ref={scrollRef}>
      {/* Use the Header component */}
      <Header />

      {/* ESC Logo Animation Screen - Fixed position when showing */}
      {!showContent && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <Image
              src="/images/logo/ESC.svg"
              alt="ESC Logo"
              width={400}
              height={400}
              className="esc-logo-animation"
              priority
            />
          </div>

          {/* Slogan with animation */}
          <div className="my-8">
            <h3 className="slogan-text text-xl md:text-2xl text-gray-800">
              <span className="slogan-word slogan-word-1">Reset</span>{" "}
              <span className="slogan-word slogan-word-2">Run</span>{" "}
              <span className="slogan-word slogan-word-3">Rule!</span>
            </h3>
          </div>

          <h2 className="text-xl md:text-2xl font-medium text-gray-700 mt-2 animate-fadeIn">ESC Fit Club</h2>
          <p className="text-sm md:text-base text-gray-500 animate-fadeIn">Join 5k+ active members</p>
        </div>
      )}

      <main className="flex min-h-screen flex-col items-center justify-center relative">
        {/* Hero Section - Only visible after animation */}
        <div className={`w-full transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative w-full min-h-[80vh] bg-gray-100">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/So_photos/intro2.jpg"
                alt="Modest Sportswear Collection"
                fill
                priority
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-2xl p-8 md:p-12 lg:p-16 h-full flex flex-col justify-center">
              <p className="text-sm md:text-base font-medium text-gray-700 mb-4">New Collection Available</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Edgy, Sporty & Comfy Modest Sportswear
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-lg">
                Discover modest sportswear designed for confidence, comfort, and style that adapts to your active lifestyle.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md flex items-center gap-2 hover:scale-105 transition-transform">
                  Shop Collection
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
                <Button variant="outline" className="px-6 py-3 rounded-md bg-white hover:bg-gray-100 transition-colors">
                  Join Community
                </Button>
              </div>
            </div>

            {/* ESC Fit Club badge */}
            <div className="absolute bottom-8 right-8 p-4 bg-white rounded-full shadow-lg flex items-center gap-3 z-20">
              <div className="w-8 h-8">
                <Image
                  src="/images/logo/ESC.svg"
                  alt="ESC Logo"
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <p className="font-bold text-sm">ESC Fit Club</p>
                <p className="text-xs text-gray-500">Join 5k+ active members</p>
              </div>
              <button className="ml-2 text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content - Only visible after animation */}
        <div className={`w-full transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {/* Main content container */}
          <div className="max-w-5xl mx-auto px-4 py-16">

            {/* Newsletter Signup */}
            <div className="bg-black text-white p-8 md:p-12 rounded-lg mb-16 animate-slideUp-scroll animation-delay-200 transform hover:scale-[1.01] transition-transform">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-pulse-slow">Join the ESC Community</h2>
                <p className="mb-6">Sign up for our newsletter to receive exclusive offers, modest styling tips, and early access to new collections.</p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input type="email" placeholder="Your email address" className="px-4 py-2 rounded flex-1 text-black focus:ring-2 focus:ring-[#FF4800] transition-all"/>
                  <Button className="bg-[#FF4800] hover:bg-orange-700 text-white hover:scale-105 transition-transform">Subscribe</Button>
                </div>
              </div>
            </div>

            {/* Featured Collections */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center animate-fadeIn-scroll">Featured Collections</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-md overflow-hidden animate-slideUp-scroll">
                  <CardHeader className="p-0">
                    <div className="h-48 relative overflow-hidden">
                      <Image
                        src="/images/So_photos/intro2.jpg"
                        alt="Training Collection"
                        fill
                        style={{objectFit: 'cover'}}
                        className="transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <CardTitle className="mb-2">Gym Ready</CardTitle>
                    <CardDescription>
                      Modest workout gear designed for freedom of movement without compromising on coverage.
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full hover:bg-black hover:text-white transition-colors">Shop Gym Wear</Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-md overflow-hidden animate-slideUp-scroll animation-delay-200">
                  <CardHeader className="p-0">
                    <div className="h-48 relative overflow-hidden">
                      <Image
                        src="/images/So_photos/card_try.jpg"
                        alt="Running Collection"
                        fill
                        style={{objectFit: 'cover'}}
                        className="transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <CardTitle className="mb-2">Sports Hijabs</CardTitle>
                    <CardDescription>
                      Breathable, secure sports hijabs that stay in place during any activity.
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full hover:bg-black hover:text-white transition-colors">Shop Hijabs</Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-md overflow-hidden animate-slideUp-scroll animation-delay-400">
                  <CardHeader className="p-0">
                    <div className="h-48 relative overflow-hidden">
                      <Image
                        src="/images/So_photos/intro.jpg"
                        alt="Lifestyle Collection"
                        fill
                        style={{objectFit: 'cover'}}
                        className="transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <CardTitle className="mb-2">Modest Athleisure</CardTitle>
                    <CardDescription>
                      Stylish, comfortable modest wear that transitions seamlessly from workout to everyday life.
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full hover:bg-black hover:text-white transition-colors">Shop Athleisure</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* Featured Products */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center animate-fadeIn-scroll">Best Sellers</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <ProductCard
                  name="Sports Hijab Hoodie"
                  price="$59.99"
                  imageSrc="/images/So_photos/so1.jpg"
                  animationDelay="100ms"
                />
                <ProductCard
                  name="Modest Running Set"
                  price="$59.99"
                  imageSrc="/images/So_photos/so2.jpg"
                  animationDelay="200ms"
                />
                <ProductCard
                  name="Modest Yoga Set"
                  price="$59.99"
                  imageSrc="/images/So_photos/So3.jpg"
                  animationDelay="300ms"
                />
                <ProductCard
                  name="Athletic Set"
                  price="$59.99"
                  imageSrc="/images/So_photos/So4.jpg"
                  animationDelay="400ms"
                />
              </div>

              <div className="text-center mt-8">
                <Button variant="outline" className="hover:bg-black hover:text-white transition-colors">View All Products</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - only visible after content is shown */}
      <footer className={`bg-gray-100 py-10 transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4 text-sm uppercase tracking-wider">Shop</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Modest Active</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Sports Hijabs</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Accessories</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Sale</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-sm uppercase tracking-wider">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Sustainability</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-sm uppercase tracking-wider">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Shipping</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Returns</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-sm uppercase tracking-wider">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-6 h-6 mr-2">
                <Image
                  src="/images/logo/ESC.svg"
                  alt="ESC Logo"
                  width={24}
                  height={24}
                />
              </div>
              <p className="text-sm text-gray-500">&copy; 2025 ESC Fit Club. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
