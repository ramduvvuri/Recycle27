import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

export function ClosingCTA() {
  return <section className="overflow-hidden bg-warm-cream py-20 md:py-28"><div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12"><div><EyebrowLabel label="Together for a cleaner tomorrow" /><h2 className="max-w-2xl font-display text-4xl leading-tight text-dark-text md:text-6xl">Let&apos;s create a sustainable future.</h2><p className="mt-5 max-w-xl leading-7 text-secondary-text">Join researchers, practitioners and changemakers shaping more circular, resilient systems.</p></div><Button href="/registration" showArrow className="w-fit">Register Now</Button></div></section>;
}
