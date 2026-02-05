import { Slider } from "@/examples/radix/ui/slider"

export function SliderDemo() {
  return (
    <Slider
      className="mx-auto w-full max-w-xs"
      defaultValue={[75]}
      max={100}
      step={1}
    />
  )
}
