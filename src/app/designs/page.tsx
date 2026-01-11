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

  const featuredVideos = Array(12).fill(videoUrlStatic);

  return (
    <main className="min-h-screen flex flex-col items-center relative" style={{ height: '100vh', overflow: 'hidden' }}>
      {/* Header */}
      <div className="w-full flex flex-col items-center pt-8 pb-12" style={{ flexShrink: 0 }}>
        <Link href="/contact" className="contact-link-header">
          CONTACT
        </Link>
        <h1 className="homepage-title mb-1">NOUFAL SALIH</h1>
        <nav className="flex gap-8">
          <Link href="/designs" className="nav-link-home active">WORKS</Link>
          <Link href="/" className="nav-link-home">35MM</Link>
          <Link href="/films" className="nav-link-home">FILMS</Link>
        </nav>
      </div>

      {/* Videos - Scrollable Row */}
      <section className="works-featured">
        {featuredVideos.map((_, i) => (
          <div 
            key={`featured-${i}`} 
            className={`works-featured-item group ${i === 1 ? 'landscape' : ''}`}
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