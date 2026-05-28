import { ReactNode } from "react"

interface FilterProps {
    filterStyle: string
    children: ReactNode
}

export function Filter({ filterStyle, children }: FilterProps) {
    return <div style={{ filter: filterStyle }}>{children}</div>
}
