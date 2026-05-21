/**
 * @description 푸터 컴포넌트
 */
export function Footer() {
    return (
        <footer className="bg-zinc-950 text-zinc-500 py-12 px-6 text-center">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-sdg10 rounded-md flex items-center justify-center text-white font-bold text-sm">
                        10
                    </div>
                    <span className="font-bold text-zinc-300">Reduced Inequalities</span>
                </div>
                <p className="mb-4 text-sm">
                    이 프로젝트는 UN 지속가능발전목표(SDGs) 10번 '국가 내, 국가 간 불평등 해소'를 알리기 위해
                    제작되었습니다.
                </p>
                <p className="text-xs">© {new Date().getFullYear()} SDG 10 Awareness Project. All rights reserved.</p>
            </div>
        </footer>
    )
}
