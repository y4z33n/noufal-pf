'use client';

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const uniqueImages = [
  // 1
  '/behance/01 2.JPG.webp',
  // 2
  '/behance/12 2.JPG.webp',
  // 3
  '/behance/15 2.JPG.webp',
  // 4
  '/behance/16 2.JPG.webp',
  // 5
  '/behance/20 2.JPG.webp',
  // 6
  '/behance/20240926_5641_noufal_fomapan 101.JPG.webp',
  // 7
  '/behance/20241018_5774_250D_ECN2_1 2.JPG.webp',
  // 8
  '/behance/21 2.JPG.webp',
  // 9
  '/behance/231149215303389.6768e81638121.webp',
  // 10
  '/behance/27 2.JPG.webp',
  // 11
  '/behance/33 2.JPG.webp',
  // 12
  '/behance/96098BA2-73B4-4425-B0F3-172FFEC2B286-17728-0000061D2999E5C1 2.JPG.webp',
  // 13
  '/behance/96b049215303389.6768e81637488.webp',
  // 14
  '/behance/ae8d12215303389.6768e8163349a.webp',
  // 15
  '/behance/D3A13278-E0AD-48FE-952E-612A06B58090-4320-0000019EA64EF6B1 2.JPG.webp',
  // 16
  '/behance/DSC04810 2.JPG.webp',
  // 17
  '/behance/DSC04812 2.JPG.webp',
  // 18
  '/behance/DSC04816 2.JPG.webp',
  // 19
  '/behance/DSCF0062 2.JPG.webp',
  // 20
  '/behance/DSCF0089 2.JPG.webp',
  // 21
  '/behance/DSCF0169 2.JPG.webp',
  // 22
  '/behance/DSCF0311 2.JPG.webp',
  // 23
  '/behance/DSCF0566 2.JPG.webp',
  // 24
  '/behance/DSCF0567 2.JPG.webp',
  // 25
  '/behance/DSCF3762 2.JPG.webp',
  // 26
  '/behance/DSCF3808-3 2.JPG.webp',
  // 27
  '/behance/DSCF3821 2.JPG.webp',
  // 28
  '/behance/DSCF4029 2.JPG.webp',
  // 29
  '/behance/DSCF4030 2.JPG.webp',
  // 30
  '/behance/DSCF4249 2.JPG.webp',
  // 31
  '/behance/DSCF4271 2.webp',
  // 32
  '/behance/DSCF5498 2.JPG.webp',
  // 33
  '/behance/DSCF5533 2.webp',
  // 34
  '/behance/DSCF5822 2.JPG.webp',
  // 35
  '/behance/DSCF6105 2.JPG.webp',
  // 36
  '/behance/DSCF6131 2.JPG.webp',
  // 37
  '/behance/DSCF6206 2.JPG.webp',
  // 38
  '/behance/DSCF8676 2.JPG.webp',
  // 39
  '/behance/DSCF9196 2.JPG.webp',
  // 40
  '/behance/DSCF9274 2.JPG.webp',
  // 41
  '/behance/DSCF9323 2.JPG.webp',
  // 42
  '/behance/DSCF9475 2.JPG.webp',
  // 43
  '/behance/DSCF9485 2.JPG.webp',
  // 44
  '/behance/DSCF9486 2.JPG.webp',
  // 45
  '/behance/DSCF9494 2.webp',
  // 46
  '/behance/DSCF9501 2.JPG.webp',
  // 47
  '/behance/DSCF9666 2.JPG.webp',
  // 48
  '/behance/DSCF9801 copy 2.JPG.webp',
  // 49
  '/behance/DSCF9807 2.JPG.webp',
  // 50
  '/behance/DSCF9837.JPG.webp',
  // 51
  '/behance/DSCF9844.JPG.webp',
  // 52
  '/behance/DSCF9898.JPG.webp',
  // 53
  '/behance/DSCF9936 2.JPG.webp',
  // 54
  '/behance/E8B9F8C8-CCA7-40DB-BD3E-BE96CEEAEF58-9143-000004DD041537D3 2.JPG.webp',
  // 55
  '/behance/EA3EEB9D-83E0-401F-AEA6-0B5397B72F85-9099-00000396E65B2D41 2.JPG.webp',
  // 56
  '/behance/edit 5.JPG.webp',
  // 57
  '/behance/edit 6.JPG.webp',
  // 58
  '/behance/IMG_5057 2.webp',
  // 59
  '/behance/time-93 2.JPG.webp',
  // 60
  '/behance/time-94 2.JPG.webp'
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
      <div className="w-full flex flex-col items-center pt-8 pb-12">
        <Link href="/contact" className="contact-link-header">
          CONTACT
        </Link>
        <h1 className="homepage-title mb-1">NOUFAL SALIH</h1>
        <nav className="flex gap-8">
          <Link href="/designs" className="nav-link-home">WORKS</Link>
          <Link href="/" className="nav-link-home active">35MM</Link>
          <Link href="/films" className="nav-link-home">FILMS</Link>
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
