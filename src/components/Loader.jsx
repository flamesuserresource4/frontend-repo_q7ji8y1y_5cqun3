export default function Loader({ label = 'Loading...' }) {
  return (
    <div className="w-full flex items-center justify-center py-20">
      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
        </span>
        <span className="text-sm text-zinc-300">{label}</span>
      </div>
    </div>
  )
}
