import { Globe, Users, TrendingUp, Scale } from "lucide-react"

const TARGETS = [
    {
        icon: <TrendingUp className="w-8 h-8 text-white" />,
        title: "소득 불평등 감소",
        desc: "하위 40% 인구의 소득 증가율을 국가 평균보다 높게 달성하고 유지합니다.",
        color: "bg-blue-500",
    },
    {
        icon: <Users className="w-8 h-8 text-white" />,
        title: "사회적 포용 증진",
        desc: "나이, 성별, 장애, 인종, 민족, 출신, 종교, 경제적 지위 등에 관계없이 모든 사람의 포용을 촉진합니다.",
        color: "bg-green-500",
    },
    {
        icon: <Scale className="w-8 h-8 text-white" />,
        title: "기회 균등 보장",
        desc: "차별적인 법, 정책, 관행을 철폐하고 적절한 법률과 정책을 장려하여 기회 균등을 보장합니다.",
        color: "bg-yellow-500",
    },
    {
        icon: <Globe className="w-8 h-8 text-white" />,
        title: "개발도상국 발언권 강화",
        desc: "글로벌 경제 및 금융 기관의 의사결정 과정에서 개발도상국의 대표성과 발언권을 강화합니다.",
        color: "bg-purple-500",
    },
]

export function AboutSection() {
    return (
        <section id="about" className="py-24 px-6 bg-zinc-50 text-zinc-900">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-sdg10 tracking-widest uppercase mb-2">About SDG 10</h2>
                    <h3 className="text-4xl md:text-5xl font-black mb-6">왜 불평등을 줄여야 할까요?</h3>
                    <p className="text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                        세계는 그 어느 때보다 연결되어 있지만, 불평등은 여전히 심각한 문제입니다. 경제적 성장만으로는
                        빈곤을 해결할 수 없으며, 성장은 포용적이어야 하고 경제, 사회, 환경의 세 가지 차원을 모두
                        아울러야 합니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {TARGETS.map((target, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-3xl shadow-xl shadow-zinc-200/50 hover:-translate-y-2 transition-transform duration-300 border border-zinc-100 flex gap-6"
                        >
                            <div
                                className={`shrink-0 w-16 h-16 ${target.color} rounded-2xl flex items-center justify-center shadow-lg`}
                            >
                                {target.icon}
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-3">{target.title}</h4>
                                <p className="text-zinc-600 leading-relaxed">{target.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-zinc-900 text-white rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-sdg10/20 rounded-full blur-3xl" />

                    <div className="relative z-10 max-w-2xl">
                        <h4 className="text-2xl font-bold mb-4">우리는 모두 다르게 세상을 봅니다</h4>
                        <p className="text-zinc-300 leading-relaxed">
                            불평등은 눈에 보이는 경제적 지표에만 있는 것이 아닙니다. 우리가 세상을 인식하는 방식
                            자체에도 차이가 존재합니다. 이 페이지는 여러분에게 '다름'을 직접 체험하게 함으로써, 우리가
                            서로를 이해하고 포용해야 하는 이유를 시각적으로 전달합니다.
                        </p>
                    </div>

                    <div className="relative z-10 shrink-0">
                        <div className="w-32 h-32 rounded-full border-8 border-sdg10 flex items-center justify-center">
                            <span className="text-4xl font-black text-sdg10">10</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
