import { useState } from "react"
import { type FilterType, FILTERS } from "../../../shared/model/filter"

export function useVisionFilter() {
    const [currentFilter, setCurrentFilter] = useState<FilterType>(FILTERS[Math.floor(Math.random() * FILTERS.length)])
    const [isTransitioning, setIsTransitioning] = useState(false)

    const applyFilter = (filter: FilterType) => {
        if (filter === currentFilter) return

        setIsTransitioning(true)
        setTimeout(() => {
            setCurrentFilter(filter)
            setTimeout(() => setIsTransitioning(false), 50)
        }, 300)
    }

    return { currentFilter, isTransitioning, applyFilter }
}
