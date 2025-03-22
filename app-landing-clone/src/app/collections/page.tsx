import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const collections = [
  {
    id: 1,
    title: "Training Collection",
    description: "Performance-focused modest wear that supports your most intense workouts.",
    image: "/images/collections/training.jpg",
    link: "/shop"
  },
  {
    id: 2,
    title: "Gym Outfits",
    description: "Stylish and comfortable modest gym outfits for your workout sessions.",
    image: "/images/collections/running.jpg",
    link: "/shop"
  },
  {
    id: 3,
    title: "Veiled Collection",
    description: "Elegant, modest hijabs and accessories in a variety of colors and fabrics.",
    image: "/images/collections/lifestyle.jpg",
    link: "/shop"
  }
];

export default function CollectionsPage() {
  return (
    <div className="container mx-auto px-4 pt-28 pb-16">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Collections</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our curated collections of modest activewear, designed specifically for women who want both style and performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <Card
            key={collection.id}
            className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <CardHeader className="p-0">
              <div className="h-64 relative overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  style={{objectFit: 'cover'}}
                  className="transition-transform duration-500 hover:scale-110"
                />
              </div>
            </CardHeader>
            <CardContent className="pt-6 px-6">
              <CardTitle className="mb-2">{collection.title}</CardTitle>
              <CardDescription>
                {collection.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="px-6 pb-6">
              <Link href={collection.link} className="w-full">
                <Button variant="outline" className="w-full hover:bg-black hover:text-white transition-colors">
                  Shop Collection
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
