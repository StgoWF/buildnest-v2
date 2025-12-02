'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Homepage() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the proper service selection landing page
    router?.replace('/servicios-seleccion');
  }, [router]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1e3a5f] mx-auto mb-4"></div>
        <p className="text-gray-600">Redirigiendo...</p>
      </div>
    </div>
  );
}