'use client';

import Link from "next/link";
import { useState, useRef } from "react";
import { portfolioVideos } from "@/config/videos";

export default function Designs() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const featuredVideos = portfolioVideos.slice(0, 3);
  const bottomVideos = portfolioVideos.slice(3);

  const handleVideoHover = (videoSrc: string, isEntering: boolean) => {
    const videoRef = videoRefs.current[videoSrc];
    
    if (isEntering) {
      setHoveredVideo(videoSrc);
      if (videoRef) {
        videoRef.play().catch(() => {});
      }
    } else {
      setHoveredVideo(null);
      if (videoRef) {
        videoRef.pause();
        videoRef.currentTime = 0;
      }
    }
  };

  const handleVideoClick = (e: React.MouseEvent, videoSrc: string) => {
    e.stopPropagation();
    setSelectedVideo(videoSrc);
  };

  return (
    <main className="min-h-screen flex flex-col items-center relative">
      {/* Header */}
      <div className="w-full flex flex-col items-center pt-16 pb-12">
        <h1 className="homepage-title mb-6">NOUFAL SALIH</h1>
        <nav className="flex gap-24">
          <Link href="/designs" className="nav-link-home active">works</Link>
          <Link href="/" className="nav-link-home">35 mm</Link>
          <Link href="/films" className="nav-link-home">films</Link>
        </nav>
      </div>

      {/* Featured Videos - Fixed Top Row */}
      <section className="works-featured px-8 pb-8">
        {featuredVideos.map((src, i) => {
          const isGoogleDrive = src.includes('drive.google.com');
          return (
            <div 
              key={`featured-${i}`} 
              className="works-featured-item group"
              onMouseEnter={() => handleVideoHover(src, true)}
              onMouseLeave={() => handleVideoHover(src, false)}
              onClick={(e) => handleVideoClick(e, src)}
            >
              {isGoogleDrive ? (
                <iframe
                  src={hoveredVideo === src ? `${src}?autoplay=1` : src}
                  className="works-featured-img"
                  allow="autoplay"
                />
              ) : (
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[src] = el;
                  }}
                  src={src}
                  className="works-featured-img"
                  muted
                  loop
                  preload="metadata"
                />
              )}
              {hoveredVideo === src && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 pointer-events-none">
                  <div className="text-white text-xl">▶</div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Bottom Videos - Scrollable Row */}
      <section className="works-bottom px-8 pb-24">
        {bottomVideos.map((src, i) => {
          const isGoogleDrive = src.includes('drive.google.com');
          return (
            <div 
              key={`bottom-${i}`} 
              className="works-bottom-item group"
              onMouseEnter={() => handleVideoHover(src, true)}
              onMouseLeave={() => handleVideoHover(src, false)}
              onClick={(e) => handleVideoClick(e, src)}
            >
              {isGoogleDrive ? (
                <iframe
                  src={hoveredVideo === src ? `${src}?autoplay=1` : src}
                  className="works-bottom-img"
                  allow="autoplay"
                />
              ) : (
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[src] = el;
                  }}
                  src={src}
                  className="works-bottom-img"
                  muted
                  loop
                  preload="metadata"
                />
              )}
              {hoveredVideo === src && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 pointer-events-none">
                  <div className="text-white text-lg">▶</div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Contact Link */}
      <Link href="/contact" className="contact-link-fixed">
        contact
      </Link>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="modal-overlay"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedVideo(null)}
            >
              ✕
            </button>
            <div className="modal-image-wrapper">
              {selectedVideo.includes('drive.google.com') ? (
                <iframe
                  src={`${selectedVideo}?autoplay=1`}
                  className="modal-image"
                  allow="autoplay"
                  style={{ width: '100%', height: '100%', border: 'none' }}
                />
              ) : (
                <video
                  src={selectedVideo}
                  className="modal-image"
                  controls
                  autoPlay
                  loop
                />
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 