import { InteractiveSection } from "./features/filter/ui/InteractiveSection"
import { AboutSection } from "./features/home/ui/AboutSection"
import { CallToAction } from "./features/home/ui/CallToAction"
import { ColorBlindnessSection } from "./features/home/ui/ColorBlindnessSection"
import { Footer } from "./features/home/ui/Footer"
import { HeroSection } from "./features/home/ui/HeroSection"

export default function Home() {
    return (
        <main className="w-full min-h-screen bg-zinc-50">
            <HeroSection />
            <AboutSection />
            <ColorBlindnessSection />
            <InteractiveSection />
            <CallToAction />
            <Footer />
        </main>
    )
}
