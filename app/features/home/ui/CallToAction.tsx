/**
 * @description 우리가 왜 이것을 선택했는지
 */
export function CallToAction() {
    return (
        <section className="py-24 px-6 bg-sdg10 text-white text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                    다름을 이해하는 것에서
                    <br />
                    평등은 시작됩니다
                </h2>
                <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
                    우리가 세상을 보는 방식이 다르듯, 각자가 처한 상황과 환경도 다릅니다. 서로의 다름을 인지하고 배려할
                    때, 비로소 진정한 의미의 불평등 해소(SDG 10)에 한 걸음 다가설 수 있습니다.
                </p>
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white text-sdg10 text-4xl font-black shadow-2xl">
                    10
                </div>
            </div>
        </section>
    )
}
