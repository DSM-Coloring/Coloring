import type { FilterType } from "../../../shared/model/filter"

interface FilterButtonProps {
    id: FilterType
    name: string
    desc: string
    color: string
    isActive: boolean
}

export function FilterButton({ id, name, desc, color, isActive }: FilterButtonProps) {
    return (
        <button
            className={`relative overflow-hidden group p-6 rounded-3xl text-left transition-all duration-300 border-2
        ${
            isActive
                ? "border-white bg-zinc-800 scale-105 shadow-2xl shadow-black/50"
                : "border-zinc-800 bg-zinc-900 hover:border-zinc-600 hover:bg-zinc-800/50"
        }`}
        >
            <div
                className={`absolute top-0 right-0 w-32 h-32 ${color} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity`}
            />
            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-2xl font-bold">{name}</h4>
                    {isActive && (
                        <span className="px-3 py-1 bg-white text-black text-xs font-bold rounded-full">
                            현재 적용됨
                        </span>
                    )}
                </div>
                <p className="text-zinc-400">{desc}</p>
            </div>
        </button>
    )
}
