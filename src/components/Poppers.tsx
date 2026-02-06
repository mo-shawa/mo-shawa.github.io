import { gen } from 'culler'
import { useRef } from 'react'
import { useTheme } from '@/contexts/themeContext'

export default function Poppers() {
  const ref = useRef<HTMLDivElement[]>([])
  const { theme } = useTheme()

  function handleMouseOver(divRef: HTMLDivElement) {
    if (!divRef) return
    if (theme === 'dark') {
      divRef.style.backgroundColor = gen({
        type: 'rgb',
        minR: 30,
        maxR: 80,
        minG: 30,
        maxG: 80,
        minB: 40,
        maxB: 100,
        a: 0.6,
      })
    } else {
      divRef.style.backgroundColor = gen({
        type: 'rgb',
        minB: 235,
        minG: 235,
        minR: 235,
      })
    }
    setTimeout(() => {
      divRef.style.backgroundColor = 'transparent'
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
                  className={`aspect-square transition-colors duration-300 ${
                    theme === 'dark' ? 'mix-blend-screen' : 'mix-blend-multiply'
                  }`}
                ></div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
