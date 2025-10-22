import Link from "next/link";

export default function Home() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md dark:bg-zinc-900">
      <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        DreamHomes
      </div>

      <nav className="flex gap-8 text-zinc-700 dark:text-zinc-300">
        <Link href="/">Home</Link>
        <Link href="/listings">Listings</Link>
        <Link href="/agents">Agents</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <button className="rounded-full bg-blue-600 px-5 py-2 text-white font-medium hover:bg-blue-700 transition">

      </button>
      <button className="rounded-full bg-blue-600 px-5 py-2 text-white font-medium hover:bg-blue-700 transition">
      Get Lost
      </button>
    </header>
  );
}
