interface FilterTransitionProps {
    isTransitioning: boolean
    children: React.ReactNode
}

/**
 * @description 화면 전환용 애니메이션 (눈깜빡임)
 */
export function FilterTransition({ isTransitioning, children }: FilterTransitionProps) {
    const timing = "cubic-bezier(0.5, 1, 0.1, 1)"

    return (
        <div className="relative">
            <div
                className={`
                    fixed top-0 left-0 w-full h-1/2
                    bg-black z-999 pointer-events-none
                    transition-transform duration-500
                    ${isTransitioning ? "translate-y-0" : "-translate-y-full"}
                `}
                style={{ transitionTimingFunction: timing }}
            />

            <div
                className={`
                    fixed bottom-0 left-0 w-full h-1/2
                    bg-black z-999 pointer-events-none
                    transition-transform duration-500
                    ${isTransitioning ? "translate-y-0" : "translate-y-full"}
                `}
                style={{ transitionTimingFunction: timing }}
            />

            {children}
        </div>
    )
}
