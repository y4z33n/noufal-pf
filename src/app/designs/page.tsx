'use client';

import Link from "next/link";
import { useState } from "react";

const worksImages = [
  '/behance/33c5a1167067379.654c8bad50703.jpg',
  '/behance/d4dac5167067379.6422fa5943590.jpg',
  '/behance/612fa3167067379.6422fa5945698.jpg',
  '/behance/113042167067379.6422f9247d6ae.jpg',
  '/behance/064e6e167067379.6422f924671b3.jpg',
  '/behance/9464be167067379.6422f9246ae3a.jpg',
  '/behance/856caf215303791.6768eb8b9e1fe.jpg',
  '/behance/62630a215303791.6768eb8b9d308.jpg',
  '/behance/Snapinst.app_464072533_1079769143103749_3125996705337578430_n_1080.jpg',
  '/behance/231149215303389.6768e81638121.jpg',
  '/behance/712eec215303389.6768e816367fd.jpg',
  '/behance/4eaca8215303791.6768eb8ba2bd3.jpg'
];

export default function Designs() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const featuredImages = worksImages.slice(0, 3);
  const bottomImages = worksImages.slice(3);

  return (
    <main className="min-h-screen flex flex-col items-center relative">
      {/* Header */}
      <div className="w-full flex flex-col items-center pt-16 pb-12">
        <h1 className="homepage-title mb-6">NOUFAL SALIH</h1>
        <nav className="flex gap-12">
          <Link href="/designs" className="nav-link-home active">works</Link>
          <Link href="/" className="nav-link-home">35 mm</Link>
          <Link href="/films" className="nav-link-home">films</Link>
        </nav>
      </div>

      {/* Featured Images */}
      <section className="works-featured px-8 pb-8">
        {featuredImages.map((src, i) => (
          <div key={i} className="works-featured-item" onClick={() => setSelectedImage(src)}>
            <img src={src} alt={`Featured work ${i + 1}`} className="works-featured-img" />
          </div>
        ))}
      </section>

      {/* Bottom Scrollable Row */}
      <section className="works-bottom px-8 pb-24">
        {bottomImages.map((src, i) => (
          <div key={i} className="works-bottom-item" onClick={() => setSelectedImage(src)}>
            <img src={src} alt={`Work ${i + 1}`} className="works-bottom-img" />
          </div>
        ))}
      </section>

      {/* Contact Link */}
      <Link href="/contact" className="contact-link-fixed">
        contact
      </Link>

      {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>✕</button>
            <div className="modal-image-wrapper">
              <img src={selectedImage} alt="Selected image" className="modal-image" />
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 