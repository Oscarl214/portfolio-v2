import React from 'react';
import Image from 'next/image';
import GalleryData from './photosGallery';
import Link from 'next/link';
const Gallery = () => {
  const galleryImages = GalleryData;
  return (
    <div className="min-h-screen bg-neutral-light/5 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-500 mb-4">Me</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <h3 className="text-white text-lg font-semibold">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <Link href="/">
          <div className="text-center mt-12">
            <button className="bg-green-500 text-white px-8 py-3 rounded-lg transition-colors duration-200">
              Back Home
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
