import { gen } from "culler"
import { useRef } from "react"

export default function Poppers() {
  const ref = useRef<HTMLDivElement[]>([])

  function handleMouseOver(divRef: HTMLDivElement) {
    if (!divRef) return
    divRef.style.backgroundColor = gen({
      type: "rgb",
      minB: 230,
      minG: 230,
      minR: 230,
    })
    setTimeout(() => {
      divRef.style.backgroundColor = "transparent"
    }, 300)
  }

  return (
    <div className="absolute inset-0 flex h-full w-full ">
      {[...Array(20)].map((_, outerIdx) => (
        <div key={outerIdx} className="h-full  w-[5%] min-w-[3vh]">
          {[...Array(20)].map((_, innerIdx) => {
            const trueIdx = outerIdx * 20 + innerIdx

            return (
              <div
                ref={(node) => (ref.current[trueIdx] = node!)}
                key={trueIdx}
                onMouseOver={() => handleMouseOver(ref.current[trueIdx])}
                className={`aspect-square rounded-full mix-blend-multiply transition-colors duration-300`}
                // style={{
                // 	backgroundColor: gen({
                // 		type: "rgb",
                // 		minB: 230,
                // 		minG: 230,
                // 		minR: 230,
                // 	}),
                // }}
              ></div>
            )
          })}
        </div>
      ))}
    </div>
  )
}
