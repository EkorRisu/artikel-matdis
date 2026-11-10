"use client";

import { useState } from "react";
import Link from "next/link";

const members = [
    { name: "Antonius I Wayan Tegar Febrian", role: "Penyusun materi" },
    { name: "Qiva Hood Kaurow", role: "Penyusun materi" },
    { name: "Reno Muharram", role: "Penyusun materi" },
    { name: "Mohammad Daffa Azzauza", role: "Penyusun materi" },
    { name: "Faisal Abdul Aziz", role: "Penyusun materi" },
];

export default function AboutPage() {
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
                    <Link onClick={closeSidebar} className="block rounded-lg px-3 py-3 transition-colors hover:bg-[#d9f36a] hover:text-[#202421]" href="/#materi">Pengantar</Link>
                    <Link onClick={closeSidebar} className="block rounded-lg px-3 py-3 transition-colors hover:bg-[#d9f36a] hover:text-[#202421]" href="/#penyajian">Penyajian</Link>
                    <Link onClick={closeSidebar} className="block rounded-lg px-3 py-3 transition-colors hover:bg-[#d9f36a] hover:text-[#202421]" href="/#jenis">Jenis himpunan</Link>
                    <Link onClick={closeSidebar} className="block rounded-lg px-3 py-3 transition-colors hover:bg-[#d9f36a] hover:text-[#202421]" href="/#operasi">Operasi dasar</Link>
                    <Link onClick={closeSidebar} className="block rounded-lg px-3 py-3 transition-colors hover:bg-[#d9f36a] hover:text-[#202421]" href="/#hukum">Hukum operasi</Link>
                    <Link onClick={closeSidebar} className="block rounded-lg px-3 py-3 transition-colors hover:bg-[#d9f36a] hover:text-[#202421]" href="/#penerapan">Penerapan</Link>
                </nav>
                <div className="my-4 border-t border-[#202421]/10" />
                <Link onClick={closeSidebar} href="/#operasi" className="block rounded-lg px-3 py-3 text-sm font-bold text-[#e48b42] transition-colors hover:bg-[#d9f36a] hover:text-[#202421]">Operasi</Link>
                <Link onClick={closeSidebar} href="/about" className="mt-1 block rounded-lg px-3 py-3 text-sm font-bold text-[#202421]/65 transition-colors hover:bg-[#d9f36a] hover:text-[#202421]">Tentang</Link>
            </aside>
            <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-18">
                <section className="mb-12 border-b border-[#202421]/15 pb-10">
                    <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#e48b42]">Tentang proyek</p>
                    <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-12">
                        <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
                            Belajar himpunan, Bersama.
                        </h1>
                        <p className="max-w-md text-sm leading-7 text-[#202421]/65 sm:text-base">
                            Modul pembelajaran Matematika Diskrit dan Teori Himpunan yang dirangkum untuk membantu memahami konsep dasar informatika.
                        </p>
                    </div>
                </section>

                <section aria-labelledby="members-title">
                    <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#e48b42]">Tim penyusun</p>
                            <h2 id="members-title" className="text-2xl font-bold tracking-tight sm:text-3xl">Anggota kelompok</h2>
                        </div>
                        <p className="text-sm text-[#202421]/50">{members.length} anggota</p>
                    </div>

                    <div className="divide-y divide-[#202421]/12 border-y border-[#202421]/12">
                        {members.map((member, index) => (
                            <article key={member.name} className="grid gap-2 py-5 sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:gap-6">
                                <span className="font-mono text-xs text-[#e48b42]">0{index + 1}</span>
                                <h3 className="text-lg font-bold tracking-tight sm:text-xl">{member.name}</h3>
                            </article>
                        ))}
                    </div>
                </section>

                <footer className="mt-12 border-[#202421]/15 pt-6 text-xs text-[#202421]/55">
                    <p>© 2026 — Pembelajaran Himpunan</p>
                </footer>
            </main>
        </div>
    );
}
