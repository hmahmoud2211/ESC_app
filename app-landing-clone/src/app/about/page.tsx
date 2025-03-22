import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 pt-28 pb-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About ESC</h1>

        <div className="mb-16 relative h-96 w-full">
          <Image
            src="/images/collections/lifestyle.jpg"
            alt="Team at ESC"
            fill
            className="object-cover rounded-lg shadow-md"
          />
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2023, ESC was born from a shared passion for creating modest activewear that doesn't compromise on style or performance. We recognized a gap in the market for high-quality modest sportswear that caters to women who want to maintain their modesty while pursuing active lifestyles.
          </p>
          <p className="text-gray-700 mb-4">
            Our founder, a fitness enthusiast who struggled to find suitable modest workout clothing, decided to create her own solutions. What started as personal designs soon evolved into a full collection that garnered interest from friends and community members, ultimately leading to the creation of ESC.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            At ESC, our mission is to empower women to pursue active, healthy lifestyles while honoring their commitment to modesty. We believe that modesty should never be a barrier to participation in sports and fitness activities. Through thoughtful design, quality materials, and innovative solutions, we create activewear that provides comfort, functionality, and style without compromising modesty values.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-2">Inclusivity</h3>
              <p className="text-gray-700">
                We design for women of all backgrounds who value modesty, creating products that respect diverse cultural and personal preferences.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-2">Quality</h3>
              <p className="text-gray-700">
                We use premium fabrics and construction techniques to ensure our garments perform well and last through many workouts.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-2">Innovation</h3>
              <p className="text-gray-700">
                We constantly seek new solutions to the unique challenges of creating modest activewear that functions at the highest level.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-2">Sustainability</h3>
              <p className="text-gray-700">
                We strive to make responsible choices in our materials, production methods, and business practices to minimize our environmental impact.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-700 mb-8">
            ESC is run by a small, dedicated team of designers, fitness enthusiasts, and business professionals who share a passion for our mission. We work closely with our community to understand their needs and continuously improve our products.
          </p>

          <div className="flex justify-center">
            <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-black/80 transition-colors">
              Join Our Team
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
