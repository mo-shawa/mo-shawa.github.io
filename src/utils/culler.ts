import { Color, gen, GenOptions } from "culler"

type GradientType = "linear-gradient" | "radial-gradiant"

type GradientDirection = "to bottom right" | "to bottom" | "to right"

type Gradient = `${GradientType}(${GradientDirection}, ${Color}, ${Color})`

type GradientOptions = GenOptions & {
  gradientType?: GradientType
  direction?: GradientDirection
}

export type Coordinates = {
  x: number
  y: number
}

// TODO: Implement in culler and replace this
export function genGradient(options: GradientOptions): Gradient {
  const {
    gradientType = "linear-gradient",
    direction = "to bottom right",
    ...genOptions
  } = options
  const color1 = "rgb(255, 255, 255)"
  const color2 = gen(genOptions)

  return `${gradientType}(${direction}, ${color1}, ${color2})`
}

export function handleCullerCardMouseMove(
  evt: React.MouseEvent<HTMLDivElement, MouseEvent>,
  cullerRef: React.RefObject<HTMLDivElement>,
  cursor: React.MutableRefObject<Coordinates>,
  setCursor: (newCursor: Coordinates) => void
) {
  const { current } = cullerRef
  if (!current) return

  const { clientX, clientY } = evt
  const { x, y } = current.getBoundingClientRect()

  const currentX = clientX - x
  const currentY = clientY - y

  if (
    cursorMinChange(currentX, cursor.current.x, 50) ||
    cursorMinChange(currentY, cursor.current.y, 50)
  ) {
    setCursor({ x: currentX, y: currentY })
    const color = gen({
      r: Math.abs(currentX - 155),
      g: 50 + currentY / 5,
      b: currentY,
      a: 0.4,
    })

    current.style.background = color
  }
}

function cursorMinChange(prev: number, curr: number, diff: number) {
  return curr > prev + diff || curr < prev - diff
}
