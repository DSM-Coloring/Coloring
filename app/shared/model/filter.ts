export type FilterType = "normal" | "protanopia" | "deuteranopia" | "tritanopia" | "achromatopsia" | "tritanomaly"

export const FILTERS: FilterType[] = [
    "normal",
    "protanopia",
    "deuteranopia",
    "tritanopia",
    "achromatopsia",
    "tritanomaly",
]

export const FILTER_NAMES: Record<FilterType, string> = {
    normal: "일반 시야",
    protanopia: "적색약",
    deuteranopia: "녹색약",
    tritanopia: "청색약",
    tritanomaly: "청황색약",
    achromatopsia: "색맹",
}
