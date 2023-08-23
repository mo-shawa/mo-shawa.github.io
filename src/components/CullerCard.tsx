import { Coordinates, handleCullerCardMouseMove } from "@/utils/culler"
import { useRef, useState } from "react"

export default function CullerCard() {
  const ref = useRef<HTMLDivElement>(null)
  const [cursor, setCursor] = useState<Coordinates>({
    x: 0,
    y: 0,
  })
  return (
    <div
      ref={ref}
      className="relative aspect-video h-full w-full bg-slate-50 transition-colors duration-500"
      onMouseMove={(e) => handleCullerCardMouseMove(e, ref, cursor, setCursor)}
    >
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        Tap or mouse over
      </h1>
    </div>
  )
}
