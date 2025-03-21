"use client";

import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockSearchResults = [
  { id: 1, name: 'Sports Hijab Hoodie', price: '$59.99', image: '/images/products/product-1.jpg', category: 'Hijabs' },
  { id: 2, name: 'Modest Running Set', price: '$59.99', image: '/images/products/product-2.jpg', category: 'Running' },
  { id: 3, name: 'Modest Yoga Set', price: '$59.99', image: '/images/products/product-5.jpg', category: 'Yoga' },
  { id: 4, name: 'Athletic Swim Set', price: '$59.99', image: '/images/products/product-6.jpg', category: 'Swimming' },
];

export default function SearchBar({ isOpen, onClose }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState(mockSearchResults);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }

    // Prevent scrolling when search is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    // Filter results based on search query
    if (searchQuery.trim() === '') {
      setResults(mockSearchResults);
    } else {
      const filtered = mockSearchResults.filter(
        item => item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
    }
  }, [searchQuery]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Search Panel */}
      <div
        className={`fixed top-0 left-0 right-0 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto p-4">
          <div className="flex items-center mb-4">
            <div className="flex-1 relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Search size={20} />
              </div>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setSearchQuery('')}
                >
                  <X size={16} />
                </button>
              )}
            </div>
            <button
              className="ml-3 p-3 text-gray-600 hover:text-black"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>

          {/* Popular searches */}
          {searchQuery === '' && (
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Popular Searches</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" onClick={() => setSearchQuery('hijab')}>Sports Hijab</Button>
                <Button variant="outline" size="sm" onClick={() => setSearchQuery('running')}>Running</Button>
                <Button variant="outline" size="sm" onClick={() => setSearchQuery('modest')}>Modest</Button>
                <Button variant="outline" size="sm" onClick={() => setSearchQuery('yoga')}>Yoga</Button>
              </div>
            </div>
          )}

          {/* Search results */}
          <div className="max-h-[60vh] overflow-y-auto">
            {results.length > 0 ? (
              <ul className="divide-y">
                {results.map((product) => (
                  <li key={product.id} className="py-2">
                    <Link href={`/products/${product.id}`} className="flex items-center hover:bg-gray-50 p-2 rounded-lg" onClick={onClose}>
                      <div className="w-16 h-16 bg-gray-100 rounded-md relative overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-gray-500">{product.category}</p>
                        <p className="text-sm font-medium">{product.price}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No results found for "{searchQuery}"</p>
                <p className="text-sm text-gray-400 mt-1">Try a different search term or browse our categories</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
