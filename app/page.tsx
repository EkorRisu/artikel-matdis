"use client";

import { useState } from "react";
import Link from "next/link";

const setTypes = [
  {
    title: "Himpunan kosong",
    notation: "∅ atau { }",
    description: "Himpunan yang tidak memiliki anggota. Contoh: himpunan bilangan asli yang kurang dari 0.",
  },
  {
    title: "Himpunan hingga",
    notation: "A = {1, 2, 3}",
    description: "Himpunan yang jumlah anggotanya dapat dihitung dan memiliki batas tertentu.",
  },
  {
    title: "Himpunan semesta",
    notation: "U",
    description: "Himpunan yang memuat seluruh objek yang sedang dibicarakan dalam suatu konteks.",
  },
  {
    title: "Subset",
    notation: "A ⊆ B",
    description: "Setiap anggota A juga merupakan anggota B. A disebut himpunan bagian dari B.",
  },
];

const operations = [
  {
    name: "Gabungan",
    symbol: "A ∪ B",
    formula: "{x | x ∈ A atau x ∈ B}",
    description: "Mengumpulkan semua anggota A dan B. Anggota yang sama tetap ditulis satu kali.",
  },
  {
    name: "Irisan",
    symbol: "A ∩ B",
    formula: "{x | x ∈ A dan x ∈ B}",
    description: "Berisi anggota yang dimiliki oleh A dan B secara bersamaan.",
  },
  {
    name: "Selisih",
    symbol: "A − B",
    formula: "{x | x ∈ A, x ∉ B}",
    description: "Berisi anggota A yang tidak terdapat di dalam B. Urutan operasi memengaruhi hasilnya.",
  },
  {
    name: "Komplemen",
    symbol: "Aᶜ",
    formula: "U − A",
    description: "Berisi anggota semesta U yang bukan anggota A.",
  },
];

export default function Home() {
  const currentYear = 2026;
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
          <Link href="/#top" className="text-xs font-bold uppercase tracking-[0.18em] sm:text-sm" aria-label="Kembali ke awal artikel">
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
        aria-label="Daftar isi artikel"
        aria-hidden={!isSidebarOpen}
        className={`fixed bottom-0 left-0 top-0 z-50 w-[min(21rem,88vw)] overflow-y-auto bg-[#f3f4f0] p-6 shadow-2xl transition-transform duration-300 ease-out sm:p-8 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-[#202421]/12 pb-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e48b42]">Daftar isi</p>
          <button type="button" aria-label="Tutup daftar isi" onClick={closeSidebar} className="grid size-9 place-items-center rounded-lg border border-[#202421]/15 text-xl leading-none transition-colors hover:bg-[#d9f36a]">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <nav className="mt-5 space-y-1 text-sm text-[#202421]/65">
          <a onClick={closeSidebar} className="block rounded-lg px-3 py-3 transition-colors hover:bg-[#d9f36a] hover:text-[#202421]" href="#materi">Pengantar</a>
          <a onClick={closeSidebar} className="block rounded-lg px-3 py-3 transition-colors hover:bg-[#d9f36a] hover:text-[#202421]" href="#penyajian">Penyajian</a>
          <a onClick={closeSidebar} className="block rounded-lg px-3 py-3 transition-colors hover:bg-[#d9f36a] hover:text-[#202421]" href="#jenis">Jenis himpunan</a>
          <a onClick={closeSidebar} className="block rounded-lg px-3 py-3 transition-colors hover:bg-[#d9f36a] hover:text-[#202421]" href="#operasi">Operasi dasar</a>
          <a onClick={closeSidebar} className="block rounded-lg px-3 py-3 transition-colors hover:bg-[#d9f36a] hover:text-[#202421]" href="#hukum">Hukum operasi</a>
          <a onClick={closeSidebar} className="block rounded-lg px-3 py-3 transition-colors hover:bg-[#d9f36a] hover:text-[#202421]" href="#penerapan">Penerapan</a>
        </nav>
        <div className="my-4 border-t border-[#202421]/10" />
        <a onClick={closeSidebar} href="#operasi" className="block rounded-lg px-3 py-3 text-sm font-bold text-[#e48b42] transition-colors hover:bg-[#d9f36a] hover:text-[#202421]">Operasi</a>
        <Link onClick={closeSidebar} href="/about" className="mt-1 block rounded-lg px-3 py-3 text-sm font-bold text-[#202421]/65 transition-colors hover:bg-[#d9f36a] hover:text-[#202421]">Tentang</Link>
      </aside>

      <main id="top" className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-18">
        <article>
          <header className="mb-12 border-b border-[#202421]/15 pb-10">
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#e48b42]">
              <span className="h-px w-8 bg-[#e48b42]" /> Artikel pembelajaran · Matematika diskrit
            </p>
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-12">
              <h1 className="max-w-4xl text-4xl font-bold leading-[1.03] tracking-tight sm:text-6xl">
                Pengenalan Himpunan dalam Matematika Diskrit
              </h1>
              <div className="max-w-md">
                <p className="text-base leading-7 text-[#202421]/70">
                  Himpunan adalah cara formal untuk mengelompokkan objek. Dari konsep sederhana ini, kita dapat membangun logika, basis data, algoritma, dan sistem komputasi.
                </p>
              </div>
            </div>
          </header>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_15rem]">
            <div id="materi" className="min-w-0">
              <section id="pengantar" className="scroll-mt-24" aria-labelledby="pengantar-title">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#e48b42]">01 / Pengantar</p>
                <h2 id="pengantar-title" className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl">Apa itu himpunan?</h2>
                <div className="space-y-4 text-base leading-8 text-[#202421]/75">
                  <p>
                    Himpunan adalah kumpulan objek yang terdefinisi dengan jelas sehingga kita dapat menentukan apakah sebuah objek termasuk di dalamnya atau tidak. Objek dalam himpunan disebut <strong className="text-[#202421]">anggota</strong> atau <strong className="text-[#202421]">elemen</strong>.
                  </p>
                  <p>
                    Contohnya, A = {"{2, 4, 6, 8}"} adalah himpunan bilangan genap positif kurang dari 10. Angka 4 merupakan anggota A, ditulis 4 ∈ A, sedangkan 5 bukan anggota A, ditulis 5 ∉ A. Urutan penulisan anggota tidak berpengaruh dan anggota yang sama tidak dihitung berulang.
                  </p>
                </div>
              </section>

              <section id="penyajian" className="mt-14 scroll-mt-24" aria-labelledby="penyajian-title">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#e48b42]">02 / Notasi</p>
                <h2 id="penyajian-title" className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Tiga cara menyajikan himpunan</h2>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-[#202421]/12 bg-[#f3f4f0] p-5 transition-transform hover:-translate-y-0.5">
                    <p className="mb-4 font-mono text-xs font-bold text-[#e48b42]">01 · ENUMERASI</p>
                    <h3 className="mb-3 text-lg font-bold">Mendaftarkan anggota</h3>
                    <p className="font-mono text-sm">A = {"{1, 2, 3, 4}"}</p>
                    <p className="mt-4 text-sm leading-6 text-[#202421]/65">Semua anggota ditulis di antara kurung kurawal dan dipisahkan koma.</p>
                  </div>
                  <div className="rounded-xl border border-[#202421]/12 bg-[#f3f4f0] p-5 transition-transform hover:-translate-y-0.5">
                    <p className="mb-4 font-mono text-xs font-bold text-[#e48b42]">02 · DESKRIPSI</p>
                    <h3 className="mb-3 text-lg font-bold">Kata-kata</h3>
                    <p className="font-mono text-sm">B = {"{bilangan prima < 10}"}</p>
                    <p className="mt-4 text-sm leading-6 text-[#202421]/65">Menjelaskan sifat atau syarat yang dimiliki seluruh anggota.</p>
                  </div>
                  <div className="rounded-xl border border-[#202421]/12 bg-[#f3f4f0] p-5 transition-transform hover:-translate-y-0.5">
                    <p className="mb-4 font-mono text-xs font-bold text-[#e48b42]">03 · PEMBENTUK</p>
                    <h3 className="mb-3 text-lg font-bold">Notasi pembentuk</h3>
                    <p className="font-mono text-sm">C = {"{x | x < 5}"}</p>
                    <p className="mt-4 text-sm leading-6 text-[#202421]/65">Simbol | dibaca “sedemikian sehingga” dan diikuti syarat anggota.</p>
                  </div>
                </div>
              </section>

              <section id="jenis" className="mt-14 scroll-mt-24" aria-labelledby="jenis-title">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#e48b42]">03 / Klasifikasi</p>
                <h2 id="jenis-title" className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Jenis-jenis himpunan</h2>
                <div className="divide-y divide-[#202421]/12 border-y border-[#202421]/12">
                  {setTypes.map((type, index) => (
                    <div key={type.title} className="grid gap-3 py-5 sm:grid-cols-[3rem_1fr_auto] sm:items-start sm:gap-5">
                      <span className="font-mono text-xs text-[#e48b42]">0{index + 1}</span>
                      <div>
                        <h3 className="text-lg font-bold">{type.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-[#202421]/65">{type.description}</p>
                      </div>
                      <span className="font-mono text-sm font-bold text-[#202421]/60 sm:text-right">{type.notation}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section id="operasi" className="mt-14 scroll-mt-24" aria-labelledby="operasi-title">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#e48b42]">04 / Operasi</p>
                <h2 id="operasi-title" className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Operasi dasar pada himpunan</h2>
                <p className="mb-6 max-w-2xl text-base leading-7 text-[#202421]/70">
                  Misalkan A = {"{1, 2, 3}"} dan B = {"{3, 4, 5}"}. Operasi berikut membantu kita membandingkan dan menggabungkan data secara sistematis.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {operations.map((operation) => (
                    <article key={operation.name} className="rounded-xl border border-[#202421]/12 bg-[#f3f4f0] p-5 transition-transform hover:-translate-y-0.5 sm:p-6">
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <h3 className="text-xl font-bold">{operation.name}</h3>
                        <span className="font-mono text-lg font-bold text-[#e48b42]">{operation.symbol}</span>
                      </div>
                      <p className="mb-3 overflow-x-auto whitespace-nowrap rounded-lg bg-[#e5e6e3] px-3 py-2 font-mono text-sm">{operation.formula}</p>
                      <p className="text-sm leading-6 text-[#202421]/65">{operation.description}</p>
                    </article>
                  ))}
                </div>
                <div className="mt-5 rounded-xl bg-[#202421] p-6 text-[#f3f4f0]">
                  <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-[#d9f36a]">Contoh cepat</p>
                  <p className="font-mono text-sm leading-7 sm:text-base">A ∪ B = {"{1, 2, 3, 4, 5}"} · A ∩ B = {"{3}"} · A − B = {"{1, 2}"} · B − A = {"{4, 5}"}</p>
                </div>
              </section>

              <section id="hukum" className="mt-14 scroll-mt-24" aria-labelledby="hukum-title">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#e48b42]">05 / Sifat operasi</p>
                <h2 id="hukum-title" className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Hukum-hukum penting</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-[#202421]/12 bg-[#d9f36a] p-5">
                    <h3 className="mb-3 font-bold">Komutatif</h3>
                    <p className="font-mono text-sm">A ∪ B = B ∪ A</p>
                    <p className="mt-3 text-sm leading-6 text-[#202421]/70">Pertukaran urutan tidak mengubah hasil gabungan maupun irisan.</p>
                  </div>
                  <div className="rounded-xl border border-[#202421]/12 bg-[#f3f4f0] p-5">
                    <h3 className="mb-3 font-bold">Asosiatif</h3>
                    <p className="font-mono text-sm">(A ∩ B) ∩ C = A ∩ (B ∩ C)</p>
                    <p className="mt-3 text-sm leading-6 text-[#202421]/65">Pengelompokan operasi dapat diubah tanpa mengubah hasil.</p>
                  </div>
                  <div className="rounded-xl border border-[#202421]/12 bg-[#f3f4f0] p-5">
                    <h3 className="mb-3 font-bold">Distributif</h3>
                    <p className="font-mono text-sm">A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)</p>
                    <p className="mt-3 text-sm leading-6 text-[#202421]/65">Irisan dapat didistribusikan terhadap gabungan, seperti aljabar.</p>
                  </div>
                  <div className="rounded-xl border border-[#202421]/12 bg-[#202421] p-5 text-[#f3f4f0]">
                    <h3 className="mb-3 font-bold">De Morgan</h3>
                    <p className="font-mono text-sm text-[#d9f36a]">(A ∪ B)ᶜ = Aᶜ ∩ Bᶜ</p>
                    <p className="mt-3 text-sm leading-6 text-[#f3f4f0]/65">Komplemen gabungan menjadi irisan komplemen, dan sebaliknya.</p>
                  </div>
                </div>
              </section>

              <section id="kardinalitas" className="mt-14 scroll-mt-24" aria-labelledby="kardinalitas-title">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#e48b42]">06 / Pengukuran</p>
                <h2 id="kardinalitas-title" className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl">Kardinalitas dan hasil kali Kartesius</h2>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-xl bg-[#f3f4f0] p-6">
                    <p className="mb-4 font-mono text-2xl font-bold">|A ∪ B| = |A| + |B| − |A ∩ B|</p>
                    <p className="text-sm leading-7 text-[#202421]/65">Kardinalitas adalah banyaknya anggota suatu himpunan. Rumus inklusi-eksklusi mencegah anggota irisan dihitung dua kali.</p>
                  </div>
                  <div className="rounded-xl bg-[#f3f4f0] p-6">
                    <p className="mb-4 font-mono text-2xl font-bold">|A × B| = |A| · |B|</p>
                    <p className="text-sm leading-7 text-[#202421]/65">Hasil kali Kartesius membentuk pasangan berurutan (a, b) dari setiap a ∈ A dan b ∈ B.</p>
                  </div>
                </div>
              </section>

              <section id="penerapan" className="mt-14 scroll-mt-24 rounded-2xl bg-[#202421] p-6 text-[#f3f4f0] sm:p-8" aria-labelledby="penerapan-title">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#d9f36a]">07 / Informatika</p>
                <h2 id="penerapan-title" className="mb-5 text-3xl font-bold tracking-tight">Mengapa konsep ini penting?</h2>
                <div className="grid gap-6 sm:grid-cols-3">
                  <div className="border-t border-[#f3f4f0]/20 pt-4"><h3 className="mb-2 font-bold text-[#d9f36a]">Basis data</h3><p className="text-sm leading-6 text-[#f3f4f0]/65">JOIN, UNION, dan INTERSECT pada SQL bekerja dengan gagasan operasi himpunan.</p></div>
                  <div className="border-t border-[#f3f4f0]/20 pt-4"><h3 className="mb-2 font-bold text-[#d9f36a]">Algoritma</h3><p className="text-sm leading-6 text-[#f3f4f0]/65">Set membantu menyimpan data unik, menguji keanggotaan, dan menemukan irisan dengan efisien.</p></div>
                  <div className="border-t border-[#f3f4f0]/20 pt-4"><h3 className="mb-2 font-bold text-[#d9f36a]">Keamanan</h3><p className="text-sm leading-6 text-[#f3f4f0]/65">Hak akses pengguna dapat dimodelkan sebagai himpunan izin dan peran.</p></div>
                </div>
              </section>

            </div>

          </div>
        </article>

        <footer className="mt-16 border-t border-[#202421]/15 pt-6 text-xs text-[#202421]/55">
          <p>© {currentYear} — Pembelajaran Himpunan · Disusun untuk pengantar Matematika Diskrit</p>
        </footer>
      </main>
    </div>
  );
}
