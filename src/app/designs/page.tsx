'use client';

import Link from "next/link";
import { useState } from "react";

// Video URLs
const videoUrlStatic = 'https://iframe.mediadelivery.net/embed/576655/ea8c01e9-54d6-4a6a-8345-3e452fd63ab4?autoplay=false&loop=true&muted=true&preload=true&responsive=true';
const videoUrlAutoplay = 'https://iframe.mediadelivery.net/embed/576655/ea8c01e9-54d6-4a6a-8345-3e452fd63ab4?autoplay=true&loop=true&muted=true&preload=true&responsive=true';
const videoUrlWithSound = 'https://iframe.mediadelivery.net/embed/576655/ea8c01e9-54d6-4a6a-8345-3e452fd63ab4?autoplay=true&loop=true&muted=false&preload=true&responsive=true';

export default function Designs() {
  const [selectedVideo, setSelectedVideo] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const featuredVideos = Array(3).fill(videoUrlStatic);
  const bottomVideos = Array(15).fill(videoUrlStatic);

  return (
    <main className="min-h-screen flex flex-col items-center relative">
      {/* Header */}
      <div className="w-full flex flex-col items-center pt-16 pb-12">
        <h1 className="homepage-title mb-6">NOUFAL SALIH</h1>
        <nav className="flex gap-12">
          <Link href="/designs" className="nav-link-home active">works</Link>
          <Link href="/" className="nav-link-home">35mm</Link>
          <Link href="/films" className="nav-link-home">films</Link>
        </nav>
      </div>

      {/* Featured Videos - Fixed Top Row */}
      <section className="works-featured px-8 pb-8">
        {featuredVideos.map((_, i) => (
          <div 
            key={`featured-${i}`} 
            className={`works-featured-item group ${i === 2 ? 'landscape' : ''}`}
            onClick={() => setSelectedVideo(true)}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <iframe
              key={`featured-iframe-${i}`}
              src={hoveredIndex === i ? videoUrlAutoplay : videoUrlStatic}
              loading="lazy"
              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
              allowFullScreen
            />
          </div>
        ))}
      </section>

      {/* Bottom Videos - Scrollable Row */}
      <section className="works-bottom px-8 pb-24">
        {bottomVideos.map((_, i) => (
          <div 
            key={`bottom-${i}`} 
            className="works-bottom-item group"
            onClick={() => setSelectedVideo(true)}
            onMouseEnter={() => setHoveredIndex(i + 3)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <iframe
              key={`bottom-iframe-${i}`}
              src={hoveredIndex === (i + 3) ? videoUrlAutoplay : videoUrlStatic}
              loading="lazy"
              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
              allowFullScreen
            />
          </div>
        ))}
      </section>

      {/* Contact Link */}
      <Link href="/contact" className="contact-link-fixed">
        contact
      </Link>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="modal-overlay"
          onClick={() => setSelectedVideo(false)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedVideo(false)}
            >
              ✕
            </button>
            <div className="modal-video-wrapper">
              <iframe
                src={videoUrlWithSound}
                className="modal-video"
                loading="lazy"
                style={{
                  border: 0,
                  width: '100%',
                  height: '100%'
                }}
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 