import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

export function HeroSpline() {
  return (
    <div className="relative w-full h-full">
      <Spotlight className="-top-40 left-0 md:left-20 md:-top-20" fill="#00e5a0" />
      <SplineScene
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  );
}
