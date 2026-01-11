import Link from "next/link";
import { videos } from "@/config/videos";

export default function Films() {
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
          <Link href="/" className="nav-link-home">35MM</Link>
          <Link href="/films" className="nav-link-home active">FILMS</Link>
        </nav>
      </div>

      {/* Videos */}
      <section className="films-container px-8 pb-24">
        <div className="films-video">
          <iframe
            width="100%"
            height="100%"
            src={videos.memoryBank.url}
            title={videos.memoryBank.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="films-video">
          <iframe
            width="100%"
            height="100%"
            src={videos.fiveMinutes.url}
            title={videos.fiveMinutes.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </main>
  );
} 