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
      className="aspect-video h-full w-full transition-colors duration-500"
      onMouseMove={(e) => handleCullerCardMouseMove(e, ref, cursor, setCursor)}
    ></div>
  )
}
