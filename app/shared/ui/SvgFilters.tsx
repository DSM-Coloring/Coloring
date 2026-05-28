export function SvgFilters() {
    return (
        <svg
            style={{
                position: "absolute",
                width: 0,
                height: 0,
                overflow: "hidden",
            }}
            aria-hidden="true"
        >
            <defs>
                <filter id="protanopia">
                    <feColorMatrix
                        type="matrix"
                        values="
                        0.32 0.58 0.10 0 0
                        0.28 0.62 0.10 0 0
                        0.08 0.22 0.70 0 0
                        0    0    0    1 0
                        "
                    />
                    <feColorMatrix type="saturate" values="0.92" />
                </filter>
                <filter id="deuteranopia">
                    <feColorMatrix
                        type="matrix"
                        values="
                        0.62 0.30 0.08 0 0
                        0.55 0.35 0.10 0 0
                        0.05 0.25 0.70 0 0
                        0    0    0    1 0
                        "
                    />
                    <feColorMatrix type="saturate" values="0.94" />
                </filter>
                <filter id="tritanopia">
                    <feColorMatrix
                        type="matrix"
                        values="
    0.95 0.05 0.00 0 0
    0.00 0.43 0.57 0 0
    0.00 0.47 0.53 0 0
    0    0    0    1 0
    "
                    />
                    <feColorMatrix type="saturate" values="0.82" />
                </filter>
                <filter id="tritanomaly">
                    <feColorMatrix
                        type="matrix"
                        values="
                        0.88 0.12 0.00 0 0
                        0.10 0.52 0.38 0 0
                        0.05 0.58 0.37 0 0
                        0    0    0    1 0
                        "
                    />
                    <feColorMatrix type="saturate" values="0.78" />
                </filter>

                <filter id="achromatopsia">
                    <feColorMatrix
                        type="matrix"
                        values="
                        0.2126 0.7152 0.0722 0 0
                        0.2126 0.7152 0.0722 0 0
                        0.2126 0.7152 0.0722 0 0
                        0      0      0      1 0
                        "
                    />
                </filter>
            </defs>
        </svg>
    )
}
