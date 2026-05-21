const COLORS = [
    { name: "Red", hex: "bg-red-500" },
    { name: "Orange", hex: "bg-orange-500" },
    { name: "Yellow", hex: "bg-yellow-400" },
    { name: "Green", hex: "bg-green-500" },
    { name: "Teal", hex: "bg-teal-500" },
    { name: "Blue", hex: "bg-blue-500" },
    { name: "Indigo", hex: "bg-indigo-500" },
    { name: "Purple", hex: "bg-purple-500" },
    { name: "Pink", hex: "bg-pink-500" },
    { name: "Magenta", hex: "bg-sdg10" },
]

/**
 * @description 색약 설명
 */
export function ColorBlindnessSection() {
    return (
        <section className="py-24 px-6 bg-white text-zinc-900">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-sm font-bold text-sdg10 tracking-widest uppercase mb-2">
                            Visual Inequality
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-black mb-6">색각 이상에 대하여</h3>

                        <div className="space-y-6 text-lg text-zinc-600">
                            <p>
                                전 세계 남성의 약 8%, 여성의 약 0.5%가 색각 이상(Color Blindness)을 가지고 있습니다.
                                이는 수억 명의 사람들이 우리가 흔히 '정상'이라고 부르는 것과는 다른 방식으로 세상을 보고
                                있다는 것을 의미합니다.
                            </p>
                            <p>
                                색각 이상은 크게 적색약(Protanopia), 녹색약(Deuteranopia), 청색약(Tritanopia) 등으로
                                나뉘며, 각각 특정 색상을 인식하는 데 어려움을 겪습니다.
                            </p>
                            <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 mt-8">
                                <h4 className="font-bold text-zinc-900 mb-2">왜 이것이 중요할까요?</h4>
                                <p className="text-base">
                                    우리의 사회 인프라, 웹사이트, 표지판 등은 대부분 '일반적인 시야'를 기준으로 설계되어
                                    있습니다. 이는 의도치 않게 누군가에게는 정보 접근의 장벽(불평등)이 됩니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                        {COLORS.map((color, index) => (
                            <div key={index} className="flex flex-col items-center gap-2">
                                <div className={`w-full aspect-square rounded-2xl ${color.hex} shadow-md`} />
                                <span className="text-xs font-medium text-zinc-500 uppercase">{color.name}</span>
                            </div>
                        ))}

                        <div className="col-span-2 sm:col-span-5 h-32 rounded-2xl bg-linear-to-r from-red-500 via-green-500 to-blue-500 shadow-md mt-4" />

                        <div className="col-span-2 sm:col-span-5 grid grid-cols-3 gap-4 mt-4">
                            <div className="h-24 rounded-2xl bg-linear-to-br from-yellow-400 to-orange-500 shadow-md" />
                            <div className="h-24 rounded-2xl bg-linear-to-br from-teal-400 to-blue-600 shadow-md" />
                            <div className="h-24 rounded-2xl bg-linear-to-br from-pink-400 to-purple-600 shadow-md" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
