import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/products';

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 pt-28 pb-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Shop All Products</h1>
        <p className="text-gray-600 max-w-2xl">
          Browse our complete collection of modest activewear, designed for comfort and performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="p-0">
              <div className="relative h-64 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-base font-medium">{product.name}</CardTitle>
                  <p className="text-gray-500 text-sm mt-1">{product.category}</p>
                </div>
                <span className="font-semibold">${product.price.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full" variant="outline">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
