import { InteractiveSection } from "@/app/features/filter/ui/InteractiveSection"
import { AboutSection } from "@/app/features/home/ui/AboutSection"
import { CallToAction } from "@/app/features/home/ui/CallToAction"
import { ColorBlindnessSection } from "@/app/features/home/ui/ColorBlindnessSection"
import { Footer } from "@/app/features/home/ui/Footer"
import { HeroSection } from "@/app/features/home/ui/HeroSection"
import { FilterType } from "@/app/shared/model/filter"

interface HomePageProps {
    currentFilter: FilterType
    setFilter: (filter: FilterType) => void
}

/**
 * @description 홈 페이지
 */
export default function HomePage({ currentFilter, setFilter }: HomePageProps) {
    return (
        <main className="w-full min-h-screen bg-zinc-50">
            <HeroSection />
            <AboutSection />
            <ColorBlindnessSection />
            <InteractiveSection currentFilter={currentFilter} setFilter={setFilter} />
            <CallToAction />
            <Footer />
        </main>
    )
}
