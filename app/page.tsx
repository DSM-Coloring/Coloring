"use client"

import { useEffect, useState } from "react"

import { useVisionFilter } from "./features/filter/model/useVisionFilter"
import { FilterTransition } from "./features/filter/ui/FilterTransition"
import { SvgFilters } from "./shared/ui/SvgFilters"
import HomePage from "./pages/home/page"
import { Filter } from "./features/filter/ui/Filter"

export default function Page() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const { currentFilter, isTransitioning, applyFilter } = useVisionFilter()

    if (!mounted) return null

    const filterStyle = currentFilter === "normal" ? "none" : `url(#${currentFilter})`

    return (
        <>
            <SvgFilters />

            <FilterTransition isTransitioning={isTransitioning}>
                <Filter filterStyle={filterStyle}>
                    <HomePage currentFilter={currentFilter} setFilter={applyFilter} />
                </Filter>
            </FilterTransition>
        </>
    )
}
