import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function GymsharkPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header/Navbar */}
      <header className="border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="text-black font-bold">
            <Image src="/images/gymshark/logo.svg" alt="Gymshark" width={120} height={32} />
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="text-gray-700 hover:text-black">WOMEN</Link>
            <Link href="#" className="text-gray-700 hover:text-black">MEN</Link>
            <Link href="#" className="text-gray-700 hover:text-black">ACCESSORIES</Link>
            <Link href="#" className="text-gray-700 hover:text-black">BLOG</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-gray-700 hover:text-black">
              <span className="sr-only">Search</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </Link>
            <Link href="#" className="text-gray-700 hover:text-black">
              <span className="sr-only">Account</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </Link>
            <Link href="#" className="text-gray-700 hover:text-black">
              <span className="sr-only">Cart</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-zinc-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Level Up Your Workouts With The Gymshark Training App</h1>
              <p className="text-lg text-gray-600 mb-8">
                Download The Gymshark Training App to access hundreds of free workout programs, from strength training and functional fitness to mobility and yoga.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
                <Button className="bg-black hover:bg-gray-800 text-white" size="lg">
                  Download for iOS
                </Button>
                <Button className="bg-black hover:bg-gray-800 text-white" size="lg">
                  Download for Android
                </Button>
              </div>
              <div className="relative mx-auto max-w-md">
                <div className="aspect-w-9 aspect-h-16 relative overflow-hidden rounded-xl shadow-xl">
                  <div className="h-[500px] w-full relative">
                    <Image
                      src="/images/gymshark/app-screenshot.jpg"
                      alt="Gymshark App Screenshot"
                      fill
                      style={{objectFit: 'cover'}}
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">The Gymshark Training App</h2>
            <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
              The Gymshark Training App is available on both iOS and Android. Download it now to access hundreds of free workout programs, customize your workouts, and track your progress.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-zinc-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Free Workout Programs</h3>
                <p className="text-gray-600">
                  Get access to hundreds of free workout programs, from strength training to yoga.
                </p>
              </div>
              <div className="bg-zinc-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Customizable Workouts</h3>
                <p className="text-gray-600">
                  Create your own workouts or customize existing ones to suit your goals and equipment.
                </p>
              </div>
              <div className="bg-zinc-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Progress Tracking</h3>
                <p className="text-gray-600">
                  Track your workouts, see your progress over time, and stay motivated.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 md:py-16 bg-zinc-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">Find Your Program</h3>
                  <p className="text-gray-600">
                    Pick the program that fits your goals. We've got programs for beginners to advanced athletes, with options for home or gym workouts.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Follow Along</h3>
                  <p className="text-gray-600">
                    Each exercise comes with video demonstrations and clear instructions to ensure proper form.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">Track Your Progress</h3>
                  <p className="text-gray-600">
                    Log your workouts, see your improvement over time, and stay motivated with progress tracking.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Join the Community</h3>
                  <p className="text-gray-600">
                    Connect with like-minded fitness enthusiasts and share your progress with the Gymshark community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>

            <div className="max-w-3xl mx-auto">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mt-1 mr-3 text-black">•</span>
                  <p>Access to 40+ different workouts with a periodized plan - structured progression included.</p>
                </li>
                <li className="flex items-start">
                  <span className="mt-1 mr-3 text-black">•</span>
                  <p>Workouts for all fitness levels with beginner, intermediate, and advanced options to push you further.</p>
                </li>
                <li className="flex items-start">
                  <span className="mt-1 mr-3 text-black">•</span>
                  <p>Search for exercises by muscle groups to add to your custom workouts.</p>
                </li>
                <li className="flex items-start">
                  <span className="mt-1 mr-3 text-black">•</span>
                  <p>Save your favorite exercises for quick access.</p>
                </li>
                <li className="flex items-start">
                  <span className="mt-1 mr-3 text-black">•</span>
                  <p>Log sets, reps, weight, and rest times to track your progression.</p>
                </li>
                <li className="flex items-start">
                  <span className="mt-1 mr-3 text-black">•</span>
                  <p>Add notes to your exercises for personal reference.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-zinc-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">All You Need to Know</h2>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-white rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    Is the Gymshark Training App completely free to use?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    Yes, the Gymshark Training App is completely free to download and use.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    How many workout programs are available?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    There are over 40 different workout programs available, with new ones added regularly.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-white rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    Can I customize the workouts for my needs?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    Yes, you can modify existing workouts or create your own custom workouts based on your preferences and available equipment.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-white rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    Is the app available in different languages?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    Currently, the app is available in English, but we're working on supporting additional languages in future updates.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Download CTA Section */}
        <section className="py-12 md:py-16 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Download The Gymshark Training App Today</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Start your fitness journey with free access to hundreds of workout programs, exercise demonstrations, and progress tracking.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Button className="bg-white hover:bg-gray-200 text-black" size="lg">
                Download for iOS
              </Button>
              <Button className="bg-white hover:bg-gray-200 text-black" size="lg">
                Download for Android
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">HELP</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">FAQs</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Delivery</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Returns</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">ABOUT</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Careers</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Blog</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Student Discount</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">COMMUNITY</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Events</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Ambassadors</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Training App</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Fitness Tips</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">SOCIAL</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Instagram</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Facebook</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Twitter</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">YouTube</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">&copy; 2025 Gymshark. All Rights Reserved.</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link>
                <Link href="#" className="text-gray-400 hover:text-white">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
