'use client';

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const uniqueImages = [
  '/behance/064e6e167067379.6422f924671b3.jpg',
  '/behance/113042167067379.6422f9247d6ae.jpg',
  '/behance/231149215303389.6768e81638121.jpg',
  '/behance/33c5a1167067379.654c8bad50703.jpg',
  '/behance/4eaca8215303791.6768eb8ba2bd3.jpg',
  '/behance/612fa3167067379.6422fa5945698.jpg',
  '/behance/62630a215303791.6768eb8b9d308.jpg',
  '/behance/712eec215303389.6768e816367fd.jpg',
  '/behance/856caf215303791.6768eb8b9e1fe.jpg',
  '/behance/9464be167067379.6422f9246ae3a.jpg',
  '/behance/ae8d12215303389.6768e8163349a.jpg',
  '/behance/d4dac5167067379.6422fa5943590.jpg',
  '/behance/Group 1.jpg',
  '/behance/Snapinst.app_398401347_3208711702608443_4155358523516609111_n_1080.jpg',
  '/behance/Snapinst.app_458150968_409976705030991_3003213998141914843_n_1080.jpg',
  '/behance/Snapinst.app_458197946_481146534719666_1006552734349911390_n_1080.jpg',
  '/behance/Snapinst.app_461420894_1699595260885518_3183616118233824594_n_1080.jpg',
  '/behance/Snapinst.app_464072533_1079769143103749_3125996705337578430_n_1080.jpg'
];

// Generate 60 images by repeating the array
const displayImages: string[] = [];
while (displayImages.length < 60) {
  displayImages.push(...uniqueImages);
}
const finalImages = displayImages.slice(0, 60);

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen flex flex-col items-center relative">
      {/* Header */}
      <div className="w-full flex flex-col items-center pt-16 pb-12">
        <h1 className="homepage-title mb-6">NOUFAL SALIH</h1>
        <nav className="flex gap-12">
          <Link href="/designs" className="nav-link-home">works</Link>
          <Link href="/" className="nav-link-home active">35 mm</Link>
          <Link href="/films" className="nav-link-home">films</Link>
        </nav>
      </div>

      {/* Image Grid */}
      <section className="image-grid pb-8">
        {finalImages.map((src, i) => (
          <div 
            key={`img-${i}`} 
            className="image-grid-item"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Portfolio image ${i + 1}`}
              className="image-grid-img"
              width={300}
              height={300}
            />
          </div>
        ))}
      </section>

      {/* Contact Link */}
      <Link href="/contact" className="contact-link-fixed">
        contact
      </Link>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="modal-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <div className="modal-image-wrapper">
              <Image
                src={selectedImage}
                alt="Selected image"
                className="modal-image"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
