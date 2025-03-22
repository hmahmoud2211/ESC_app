'use client';

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

// SafeImage component handles image loading errors
export default function SafeImage(props: ImageProps) {
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Only run on client side to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // If there's an error loading the image, we'll show a fallback
  if (error) {
    return (
      <div
        className="bg-gray-200 flex items-center justify-center"
        style={{
          width: props.width || '100%',
          height: props.height || '100%',
          ...(props.style || {})
        }}
      >
        <span className="text-gray-400">Image not available</span>
      </div>
    );
  }

  // Before client-side hydration completes, simply render the image without error handling
  if (!mounted) {
    return <Image {...props} />;
  }

  // Return the regular Image component with error handling once mounted
  return (
    <Image
      {...props}
      onError={() => setError(true)}
    />
  );
}
