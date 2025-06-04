'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const carouselItems = [
  {
    title: "Get 5% Cashback!",
    subtitle: "On adding ₹500 or more to your wallet",
    image: "/cashback.png",
    bg: "bg-gradient-to-r from-green-400 to-blue-500",
  },
  {
    title: "Refer & Earn ₹50",
    subtitle: "Invite friends and earn when they sign up",
    image: "/referandearn.jpg",
    bg: "bg-gradient-to-r from-purple-500 to-indigo-600",
  },
  {
    title: "Secure Transactions",
    subtitle: "Now with 2FA & bank-grade encryption",
    image: "/securetransactions.png",
    bg: "bg-gradient-to-r from-yellow-400 to-orange-500",
  },
];

export const HomePageCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % carouselItems.length);
  const prev = () => setCurrent((current - 1 + carouselItems.length) % carouselItems.length);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const item = carouselItems[current];
  if (!item) return null;

  return (
    <div className="relative w-full max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-lg h-96">
      <div className={`flex flex-col items-center h-full p-8 text-white ${item.bg} transition-all duration-500`}>
        {item.image && (
          <div className="hidden md:block w-1/2 pr-6">
            <Image
                width={300}
                height={300}
                src={item.image}
                alt={item.title}

            />
          </div>
        )}

        <div className="flex flex-col justify-center w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">{item.title}</h2>
          <p className="text-sm sm:text-base opacity-90">{item.subtitle}</p>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-40 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m11.25 9-3 3m0 0 3 3m-3-3h7.5" />
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-40 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m12.75 15 3-3m0 0-3-3m3 3h-7.5" />
        </svg>
      </button>
    </div>
  );
};
