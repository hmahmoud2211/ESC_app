import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Newsletter() {
  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Join the ESC Community</h2>
          <p className="text-gray-300">
            Sign up for our newsletter to receive exclusive offers, modest styling tips, and early access to new collections.
          </p>
        </div>

        <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            className="flex-1 border-0 text-black"
            required
          />
          <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white border-0">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
}
