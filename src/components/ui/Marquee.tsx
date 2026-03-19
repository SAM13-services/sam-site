const ITEMS = [
  "FIPU",
  "TOP BTP",
  "Poussières de farine",
  "CARSAT",
  "Subventions professionnelles",
  "Sans engagement",
  "Montage de dossier",
  "Jusqu'à 70% financés",
  "Vérification gratuite",
]

const DOT = <span className="mx-6 text-sam-yellow font-black text-lg leading-none select-none">•</span>

export default function Marquee() {
  const track = (
    <>
      {ITEMS.map((item, i) => (
        <span key={i} className="inline-flex items-center whitespace-nowrap">
          <span className="text-sm font-bold uppercase tracking-widest text-white">{item}</span>
          {DOT}
        </span>
      ))}
    </>
  )

  return (
    <div className="bg-sam-black py-4 overflow-hidden">
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 28s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="flex">
        <div className="marquee-track flex shrink-0">
          {track}
          {track}
        </div>
      </div>
    </div>
  )
}
