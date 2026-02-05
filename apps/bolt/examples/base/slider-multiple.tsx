import { Slider } from "@/examples/base/ui/slider"

export function SliderMultiple() {
  return (
    <Slider
      className="mx-auto w-full max-w-xs"
      defaultValue={[10, 20, 70]}
      max={100}
      step={10}
    />
  )
}
