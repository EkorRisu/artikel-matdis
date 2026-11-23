"use client";

import { useState } from "react";
import Link from "next/link";

const references = [
  {
    title: "Konsep Himpunan dalam Matematika Diskrit",
    author: "Olivia Lisna Wati, Nayla Desviona, Novi Permasari, M. David Alfikri, Raja Abdul Rahman Shah ",
    type: "Artikel",
    url: "https://www.researchgate.net/publication/400000605_Konsep_Himpunan_dalam_Matematika_Diskrit",
  },
  {
    title: "Pengantar Himpunan",
    author: "Rifki Indra, S.Kom., M.Eng.",
    type: "Dokumen",
    url: "https://docs.google.com/presentation/d/1U5z6z8-dX-vMNqOJ0VFdUZCdhLDmAsRW/edit?slide=id.p1#slide=id.p1",
  },
];

export default function ReferencesPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-[#e5e6e3] text-[#202421] selection:bg-[#d9f36a]">
      <header className="sticky top-0 z-20 border-b border-[#202421]/10 bg-[#f3f4f0]/95 backdrop-blur-md">
        <div className="mx-auto flex min-h-16 max-w-6xl items-center gap-4 px-5 py-4 sm:px-8 lg:px-10">
          <button
            type="button"
            aria-label="Buka daftar isi"
            aria-expanded={isSidebarOpen}
            onClick={() => setIsSidebarOpen(true)}
            className="flex size-10 items-center justify-center rounded-lg border border-[#202421]/15 text-[#202421] transition-colors hover:bg-[#d9f36a]"
          >
            <span aria-hidden="true" className="flex w-4 flex-col gap-1">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
            </span>
          </button>
          <Link
            href="/#top"
            className="text-xs font-bold uppercase tracking-[0.18em] sm:text-sm"
            aria-label="Kembali ke artikel"
          >
            Himpunan
          </Link>
        </div>
      </header>

      <div
        aria-hidden={!isSidebarOpen}
        className={`fixed inset-0 z-40 bg-[#202421]/35 transition-opacity duration-300 ${isSidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={closeSidebar}
      />
      <aside
        aria-label="Navigasi artikel"
        aria-hidden={!isSidebarOpen}
        className={`fixed bottom-0 left-0 top-0 z-50 w-[min(21rem,88vw)] overflow-y-auto bg-[#f3f4f0] p-6 shadow-2xl transition-transform duration-300 ease-out sm:p-8 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-[#202421]/12 pb-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e48b42]">Daftar isi</p>
          <button
            type="button"
            aria-label="Tutup daftar isi"
            onClick={closeSidebar}
            className="grid size-9 place-items-center rounded-lg border border-[#202421]/15 text-xl leading-none transition-colors hover:bg-[#d9f36a]"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <nav className="mt-5 space-y-1 text-sm text-[#202421]/65">
          <Link onClick={closeSidebar} className="block rounded-lg px-3 py-3 transition-colors hover:bg-[#d9f36a] hover:text-[#202421]" href="/#materi">Pengantar</Link>
          <Link onClick={closeSidebar} className="block rounded-lg px-3 py-3 transition-colors hover:bg-[#d9f36a] hover:text-[#202421]" href="/#penyajian">Penyajian</Link>
          <Link onClick={closeSidebar} className="block rounded-lg px-3 py-3 transition-colors hover:bg-[#d9f36a] hover:text-[#202421]" href="/#jenis">Jenis himpunan</Link>
          <Link onClick={closeSidebar} className="block rounded-lg px-3 py-3 transition-colors hover:bg-[#d9f36a] hover:text-[#202421]" href="/#operasi">Operasi dasar</Link>
          <Link onClick={closeSidebar} className="block rounded-lg px-3 py-3 transition-colors hover:bg-[#d9f36a] hover:text-[#202421]" href="/#hukum">Hukum operasi</Link>
          <Link onClick={closeSidebar} className="block rounded-lg px-3 py-3 transition-colors hover:bg-[#d9f36a] hover:text-[#202421]" href="/#penerapan">Penerapan</Link>
        </nav>
        <div className="my-4 border-t border-[#202421]/10" />
        <Link onClick={closeSidebar} href="/references" className="block rounded-lg bg-[#d9f36a] px-3 py-3 text-sm font-bold text-[#202421]">Referensi</Link>
        <Link onClick={closeSidebar} href="/about" className="mt-1 block rounded-lg px-3 py-3 text-sm font-bold text-[#202421]/65 transition-colors hover:bg-[#d9f36a] hover:text-[#202421]">Tentang</Link>
      </aside>

      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-18">
        <header className="mb-12 border-b border-[#202421]/15 pb-10">
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#e48b42]">
            <span className="h-px w-8 bg-[#e48b42]" /> Sumber pembelajaran
          </p>
          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-12">
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Referensi materi
            </h1>
            <p className="max-w-md text-sm leading-7 text-[#202421]/65 sm:text-base">
              Daftar sumber yang digunakan sebagai bahan rujukan dalam penyusunan artikel Matematika Diskrit.
            </p>
          </div>
        </header>

        <section aria-labelledby="reference-list-title">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#e48b42]">Daftar pustaka</p>
              <h2 id="reference-list-title" className="text-2xl font-bold tracking-tight sm:text-3xl">Sumber rujukan</h2>
            </div>
            <p className="text-sm text-[#202421]/50">{references.length} referensi</p>
          </div>

          <div className="divide-y divide-[#202421]/12 border-y border-[#202421]/12">
            {references.map((reference, index) => (
              <article key={reference.title} className="grid gap-4 py-5 sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:gap-6">
                <span className="font-mono text-xs text-[#e48b42]">0{index + 1}</span>
                <div>
                  <h3 className="text-lg font-bold tracking-tight sm:text-xl">{reference.title}</h3>
                  <p className="mt-1 text-sm text-[#202421]/55">{reference.author} · {reference.type}</p>
                </div>
                <a
                  href={reference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit rounded-lg border border-[#202421]/15 px-4 py-2.5 text-sm font-bold transition-colors hover:border-[#202421] hover:bg-[#d9f36a]"
                >
                  Buka link <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-12 border-t border-[#202421]/15 pt-6 text-xs text-[#202421]/55">
          <p>© 2026 — Pembelajaran Himpunan</p>
        </footer>
      </main>
    </div>
  );
}
