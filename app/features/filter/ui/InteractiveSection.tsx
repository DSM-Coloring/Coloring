import { FilterButton } from "./FilterButton"
import type { FilterType } from "../../../shared/model/filter"

const FILTER_OPTIONS: {
    id: FilterType
    name: string
    desc: string
    color: string
}[] = [
    {
        id: "normal",
        name: "일반 시야",
        desc: "필터 없음",
        color: "bg-zinc-800",
    },
    {
        id: "protanopia",
        name: "적색약",
        desc: "붉은 계열이 어둡고 갈색에 가깝게 보입니다.",
        color: "bg-red-500",
    },
    {
        id: "deuteranopia",
        name: "녹색약",
        desc: "녹색 구분이 어려워집니다.",
        color: "bg-green-500",
    },
    {
        id: "tritanopia",
        name: "청색약",
        desc: "파랑이 청록색처럼 보이고 노랑 구분이 어려워집니다.",
        color: "bg-blue-500",
    },

    {
        id: "tritanomaly",
        name: "청황색약",
        desc: "노랑·보라, 초록·파랑 계열 혼동이 큽니다.",
        color: "bg-purple-500",
    },
    {
        id: "achromatopsia",
        name: "색맹",
        desc: "모든 색이 회색조로 보입니다.",
        color: "bg-zinc-400",
    },
]

/**
 * @description 필터 선택 및 색약 설명 섹션
 */
export function InteractiveSection() {
    return (
        <section id="experience" className="py-24 px-6 bg-zinc-900 text-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-sdg10 tracking-widest uppercase mb-2">
                        Interactive Experience
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-black mb-6">시야를 바꿔보세요</h3>
                    <p className="text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                        아래 버튼을 클릭하여 다양한 시야를 직접 체험해보세요. 버튼을 누를 때마다 화면 전체의 색상이
                        어떻게 변하는지 관찰해보세요.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FILTER_OPTIONS.map((filter) => (
                        <FilterButton key={filter.id} {...filter} isActive={filter.id === "normal"} />
                    ))}
                </div>

                <div className="mt-16 p-8 bg-zinc-800 rounded-3xl border border-zinc-700 text-center">
                    <h4 className="text-xl font-bold mb-4">다채로운 이미지를 통해 변화를 확인해보세요</h4>
                    <div className="flex flex-wrap justify-center gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&q=80&w=400&h=300"
                            alt="Colorful forest"
                            className="rounded-2xl w-full sm:w-64 h-48 object-cover shadow-lg"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=400&h=300"
                            alt="Colorful fruit"
                            className="rounded-2xl w-full sm:w-64 h-48 object-cover shadow-lg"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=400&h=300"
                            alt="Colorful abstract"
                            className="rounded-2xl w-full sm:w-64 h-48 object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
