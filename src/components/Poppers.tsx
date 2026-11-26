import { gen } from 'culler'
import { memo } from 'react'
import { useTheme } from '@/contexts/themeContext'

const GRID = [...Array(20)].map((_, i) => i)

function Poppers() {
  const { theme } = useTheme()

  // One delegated handler instead of 400 per-cell closures and refs.
  function handleMouseOver(e: React.MouseEvent<HTMLDivElement>) {
    const cell = e.target as HTMLElement
    if (cell.dataset.cell === undefined) return
    cell.style.backgroundColor =
      theme === 'dark'
        ? gen({
            type: 'rgb',
            minR: 30,
            maxR: 80,
            minG: 30,
            maxG: 80,
            minB: 40,
            maxB: 100,
            a: 0.6,
          })
        : gen({
            type: 'rgb',
            minB: 235,
            minG: 235,
            minR: 235,
          })
    window.setTimeout(() => {
      cell.style.backgroundColor = 'transparent'
    }, 300)
  }

  // The cells never overlap, so blending the container as one group looks the
  // same as blending each cell, but costs one blend layer instead of 400.
  return (
    <div
      onMouseOver={handleMouseOver}
      className={`absolute inset-0 h-full w-full overflow-hidden rounded-3xl ${
        theme === 'dark' ? 'mix-blend-screen' : 'mix-blend-multiply'
      }`}
    >
      <div className="flex h-full w-full ">
        {GRID.map((col) => (
          <div key={col} className="h-full w-[5%] min-w-[3vh]">
            {GRID.map((row) => (
              <div
                key={row}
                data-cell=""
                className="aspect-square transition-colors duration-300"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(Poppers)
