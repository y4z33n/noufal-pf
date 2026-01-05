import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen px-12 flex flex-col">
      <div className="pt-8">
        <h1 className="site-title">NOUFAL SALIH</h1>
        <nav className="flex justify-between items-start">
          <div className="nav-items flex flex-col gap-1">
            <Link href="/" className="nav-link">35 mm</Link>
            <Link href="/films" className="nav-link">films</Link>
            <Link href="/designs" className="nav-link">designs</Link>
          </div>
          <div className="nav-items">
            <Link href="/contact" className="nav-link active">contact</Link>
          </div>
        </nav>
      </div>

      <div className="mt-auto mb-12 relative w-full flex-1">
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