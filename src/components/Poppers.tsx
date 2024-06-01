import { gen } from "culler"
import { useRef } from "react"

export default function Poppers() {
  const ref = useRef<HTMLDivElement[]>([])

  function handleMouseOver(divRef: HTMLDivElement) {
    if (!divRef) return
    divRef.style.backgroundColor = gen({
      type: "rgb",
      minB: 235,
      minG: 235,
      minR: 235,
    })
    setTimeout(() => {
      divRef.style.backgroundColor = "transparent"
    }, 300)
  }

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden rounded-3xl">
      <div className="flex h-full w-full ">
        {[...Array(20)].map((_, outerIdx) => (
          <div key={outerIdx} className="h-full w-[5%] min-w-[3vh]">
            {[...Array(20)].map((_, innerIdx) => {
              const trueIdx = outerIdx * 20 + innerIdx
              return (
                <div
                  ref={(node) => (ref.current[trueIdx] = node!)}
                  key={trueIdx}
                  onMouseOver={() => handleMouseOver(ref.current[trueIdx])}
                  className={`rounded- aspect-square mix-blend-multiply transition-colors duration-300`}
                ></div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
