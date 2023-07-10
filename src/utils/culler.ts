import { GenOptions, gen } from "culler"

type GradientType = "linear-gradient" | "radial-gradiant"

type GradientDirection = "to bottom right" | "to bottom" | "to right"

type Gradient = `${GradientType}(${GradientDirection}, ${string}, ${string})`

type GradientOptions = GenOptions & {
  gradientType?: GradientType
  direction?: GradientDirection
}

// TODO: Implement in culler and replace this
export function genGradient(options: GradientOptions): Gradient {
  const {
    gradientType = "linear-gradient",
    direction = "to bottom right",
    ...genOptions
  } = options
  const color1 = gen(genOptions)
  const color2 = gen(genOptions)

  return `${gradientType}(${direction}, ${color1}, ${color2})`
}
