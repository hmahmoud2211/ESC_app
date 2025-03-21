import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LululemonPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      {/* Top Banner */}
      <div className="bg-[#342e28] text-white py-2 text-center text-sm">
        Membership Madness is giving big. March 17-28, only in the lululemon iOS app.
        <Link href="#" className="ml-1 underline hover:no-underline">Learn More</Link>
      </div>

      {/* Header/Navbar */}
      <header className="border-b border-gray-200 py-4 bg-white">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="text-black font-medium">
            <Image src="/images/lululemon/logo.svg" alt="lululemon" width={120} height={32} />
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="text-gray-700 hover:text-black">Women</Link>
            <Link href="#" className="text-gray-700 hover:text-black">Men</Link>
            <Link href="#" className="text-gray-700 hover:text-black">Bags</Link>
            <Link href="#" className="text-gray-700 hover:text-black">Accessories</Link>
            <Link href="#" className="text-gray-700 hover:text-black">Shoes</Link>
            <Link href="#" className="text-gray-700 hover:text-black">Member Offers</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-sm py-1 px-3 text-sm w-40"
              />
            </div>
            <Link href="#" className="text-gray-700 hover:text-black">
              <span className="sr-only">Account</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </Link>
            <Link href="#" className="text-gray-700 hover:text-black">
              <span className="sr-only">Wishlist</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </Link>
            <Link href="#" className="text-gray-700 hover:text-black">
              <span className="sr-only">Cart</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-[#fafafa]">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-medium mb-6 text-[#342e28]">Potential, in the palm of your hand.</h1>
              <p className="text-lg text-gray-700 mb-12">
                Download our app to unlock all these possibilities.
              </p>
            </div>
          </div>
        </section>

        {/* App Showcase */}
        <section className="py-8 md:py-12 bg-[#342e28] text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="max-w-xs">
                  <div className="aspect-w-9 aspect-h-16 relative rounded-xl overflow-hidden">
                    <div className="h-[400px] w-full relative bg-black">
                      <Image
                        src="/images/lululemon/feature-2.jpg"
                        alt="Lululemon App Screenshot"
                        fill
                        style={{objectFit: 'contain'}}
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="max-w-xl">
                  <h2 className="text-3xl font-medium mb-8">
                    Scan this code.<br />
                    Download the lululemon App.<br />
                    Reap the benefits.
                  </h2>
                  <div className="h-48 w-48 bg-white rounded-lg flex items-center justify-center mb-8 overflow-hidden relative">
                    <Image
                      src="/images/lululemon/app-qr.jpg"
                      alt="App QR Code"
                      fill
                      style={{objectFit: 'cover'}}
                    />
                  </div>
                  <Link href="#">
                    <Button className="bg-white hover:bg-gray-200 text-[#342e28] font-medium px-8 py-6 h-auto rounded-none text-base">
                      DOWNLOAD FOR iOS
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
              {/* Feature 1 */}
              <div className="flex">
                <div className="w-full">
                  <div className="mb-8 h-[250px] relative rounded-md overflow-hidden">
                    <Image
                      src="/images/lululemon/feature-1.jpg"
                      alt="Early Access Feature"
                      fill
                      style={{objectFit: 'cover'}}
                      className="rounded-md"
                    />
                  </div>
                  <h2 className="text-2xl font-medium mb-4 text-[#342e28]">Tap into early access.</h2>
                  <p className="text-gray-700">
                    Members get first dibs on the newest gear—only on the lululemon App.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex">
                <div className="w-full">
                  <div className="mb-8 h-[250px] relative rounded-md overflow-hidden">
                    <Image
                      src="/images/lululemon/feature-2.jpg"
                      alt="Easier Checkouts Feature"
                      fill
                      style={{objectFit: 'cover'}}
                      className="rounded-md"
                    />
                  </div>
                  <h2 className="text-2xl font-medium mb-4 text-[#342e28]">Easier checkouts await.</h2>
                  <p className="text-gray-700">
                    Flash your Membership Pass to instantly pull up your account. And never spell out your email again.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex">
                <div className="w-full">
                  <div className="mb-8 h-[250px] relative rounded-md overflow-hidden bg-gray-200">
                    <div className="flex items-center justify-center h-full">
                      <p className="text-gray-500">Feature Image</p>
                    </div>
                  </div>
                  <h2 className="text-2xl font-medium mb-4 text-[#342e28]">Goes with you—perfectly.</h2>
                  <p className="text-gray-700">
                    Personalized recommendations make it easy to find new favourites, and you can track them to your door.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex">
                <div className="w-full">
                  <div className="mb-8 h-[250px] relative rounded-md overflow-hidden">
                    <Image
                      src="/images/lululemon/feature-4.jpg"
                      alt="Fast Shopping Feature"
                      fill
                      style={{objectFit: 'cover'}}
                      className="rounded-md"
                    />
                  </div>
                  <h2 className="text-2xl font-medium mb-4 text-[#342e28]">Get what you love, faster.</h2>
                  <p className="text-gray-700">
                    Checkout in a flash, save favourites for later, see if your size is in-store and build and share a wish list.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="py-12 text-center">
          <div className="container mx-auto px-4">
            <Link href="#">
              <Button className="bg-[#342e28] hover:bg-[#4a4236] text-white font-medium px-8 py-6 h-auto rounded-none text-base">
                DOWNLOAD FOR iOS
              </Button>
            </Link>
            <p className="text-xs text-gray-500 max-w-3xl mx-auto mt-8">
              Apple, the Apple logo, iPhone, and iPod touch are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc., registered in the U.S. and other countries. IOS is a trademark or registered trademark of Cisco in the U.S. and other countries and is used under license.
            </p>
            <p className="text-xs text-gray-500 mt-4">
              *Requires iOS 13.0 or later. Compatible with iPhone, iPad and iPod Touch.
            </p>
          </div>
        </section>

        {/* Questions Section */}
        <section className="py-16 bg-gray-200">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-medium mb-4 text-[#342e28]">Any questions?</h2>
            <p className="text-gray-700">
              Get in touch at gec@lululemon.com
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-sm uppercase mb-4 text-[#342e28]">My Account</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-gray-600 hover:text-black">Membership Program</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-black">Sign In</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-black">Register</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-black">Order Status</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-black">Returns</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase mb-4 text-[#342e28]">Help</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-gray-600 hover:text-black">Ordering</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-black">Returns and Refunds</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-black">Shipping and Delivery</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-black">Payment</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-black">Redeem Gift Cards</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-black">Programs and Discounts</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-black">Services</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-black">Product and Sizing</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-black">Stores</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-black">Account</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase mb-4 text-[#342e28]">About Us</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-gray-600 hover:text-black">Our Business</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-black">Media</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-black">Investors</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-black">Strategic Sales</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-black">Affiliates and Creators</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-black">Sweat Collective</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase mb-4 text-[#342e28]">Contact Us</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-gray-600 hover:text-black">Live Chat</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-black">Contact Us</Link></li>
              </ul>
              <div className="pt-8">
                <Link href="#" className="text-gray-600 hover:text-black text-sm block mb-2">Email Sign Up</Link>
                <Link href="#" className="text-gray-600 hover:text-black text-sm block mb-2">Careers</Link>
                <Link href="#" className="text-gray-600 hover:text-black text-sm block mb-2">Lululemon Apps</Link>
                <Link href="#" className="text-gray-600 hover:text-black text-sm block mb-2">Sitemap</Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
            <div className="flex space-x-6 mb-6 md:mb-0">
              <Link href="#" className="text-gray-600 hover:text-black">
                <span className="sr-only">Twitter</span>
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black">
                <span className="sr-only">Pinterest</span>
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black">
                <span className="sr-only">YouTube</span>
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black">
                <span className="sr-only">Facebook</span>
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black">
                <span className="sr-only">Instagram</span>
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
            <div className="md:mt-0 mt-4">
              <p className="text-xs text-gray-500">
                lululemon athletica 1818 Cornwall Ave, Vancouver BC V6J 1C7
              </p>
              <div className="flex space-x-4 mt-2">
                <Link href="#" className="text-xs text-gray-500 hover:text-black">Privacy Policy</Link>
                <Link href="#" className="text-xs text-gray-500 hover:text-black">Terms of Use</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
