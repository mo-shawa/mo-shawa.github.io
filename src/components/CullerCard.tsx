import { useRef, useState } from "react"

import { Coordinates, handleCullerCardMouseMove } from "@/utils/culler"

export default function CullerCard() {
  const ref = useRef<HTMLDivElement>(null)
  const cursor = useRef<Coordinates>({
    x: 0,
    y: 0,
  })

  function setCursor(newCursor: Coordinates) {
    cursor.current = newCursor
  }

  return (
    <div className="bg-white">
      <div
        ref={ref}
        className="relative aspect-video h-full w-full bg-slate-50 transition-colors duration-500"
        onMouseMove={(e) =>
          handleCullerCardMouseMove(e, ref, cursor, setCursor)
        }
      >
        <h1 className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-thin">
          Tap or mouse over
        </h1>
      </div>
    </div>
  )
}
