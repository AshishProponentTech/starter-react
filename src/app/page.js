export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-white mb-4">
          Tailwind is Working ✅
        </h1>
        <p className="text-xl text-white/90">
          GitHub Pages + Next.js + Tailwind
        </p>
        <button className="mt-6 px-8 py-3 bg-black text-white rounded-xl shadow-lg hover:bg-white hover:text-black transition">
          Test Button
        </button>
      </div>
    </main>
  );
}
