import Image from "next/image";
import Link from "next/link";

export default function Contact() {
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
          <Link href="/films" className="nav-link-home">FILMS</Link>
        </nav>
      </div>

      {/* Content */}
      <div className="mt-auto mb-12 relative w-full flex-1 px-12">
        <Image
          src="/behance/Group 1.jpg"
          alt="Noufal Salih"
          fill
          className="object-contain"
          priority
        />
      </div>
    </main>
  );
} 