import { Eye } from "lucide-react"

/**
 * @description 히로 섹션 (첫부분)
 */
export function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white overflow-hidden py-20 px-6">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sdg10/20 rounded-full blur-[100px] animate-pulse-slow" />
            <div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse-slow"
                style={{ animationDelay: "1s" }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-green-500/10 rounded-full blur-[120px]" />

            <div className="absolute top-0 left-0 w-full bg-sdg10 text-white py-3 px-4 text-center font-medium z-10 flex items-center justify-center gap-2 shadow-md">
                <Eye size={20} />
                <span>지금 당신은 어떤 시야로 이 페이지를 보고 있을까요?</span>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
                <div className="w-32 h-32 bg-sdg10 rounded-2xl flex items-center justify-center mb-8 shadow-2xl shadow-sdg10/50 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <span className="text-6xl font-black text-white">10</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">불평등 감소</h1>

                <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-2xl leading-relaxed font-light">
                    국가 내, 그리고 국가 간의 불평등을 줄이는 것은 지속가능한 발전을 위한 핵심 목표입니다.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="#about"
                        className="px-8 py-4 bg-white text-zinc-900 font-bold rounded-full hover:bg-zinc-200 transition-colors"
                    >
                        목표 알아보기
                    </a>
                    <a
                        href="#experience"
                        className="px-8 py-4 bg-sdg10 text-white font-bold rounded-full hover:bg-sdg10/90 transition-colors shadow-lg shadow-sdg10/30"
                    >
                        시야 체험하기
                    </a>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center p-2">
                    <div className="w-1 h-3 bg-white rounded-full" />
                </div>
            </div>
        </section>
    )
}
