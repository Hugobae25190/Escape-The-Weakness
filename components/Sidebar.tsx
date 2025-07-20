export default function Sidebar() {
  return (
    <aside className="w-64 bg-black p-6 border-r border-orange-500 hidden md:flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold text-orange-500 mb-8">X Campus</h3>
        <nav className="flex flex-col gap-3">
          <a href="#" className="hover:text-orange-500"># Daily Quest</a>
          <a href="#" className="hover:text-orange-500"># General</a>
          <a href="#" className="hover:text-orange-500"># Progression</a>
          <a href="#" className="hover:text-orange-500"># Missions</a>
        </nav>
      </div>
      <div className="text-sm text-zinc-500">@EscapeTheWeakness</div>
    </aside>
  )
}