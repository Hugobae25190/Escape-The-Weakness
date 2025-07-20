export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-orange-500">
      <h1 className="text-5xl font-bold">ESCAPE THE WEAKNESS</h1>
      <p className="mt-4 text-xl text-white">La plateforme masculine pour devenir fort, libre et discipliné.</p>
      <a
        href="/dashboard"
        className="mt-8 rounded-xl bg-orange-500 px-6 py-3 text-lg font-semibold text-black hover:bg-orange-400"
      >
        Entrer dans l’arène
      </a>
    </main>
  )
}