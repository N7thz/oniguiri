import Image from "next/image"

interface IconProps {
    src: string
    alt: string
    height?: number
    width?: number
    className?: string
}

export const Icon = ({
    src, alt, height = 16, width = 16, className
}: IconProps) => {
    return (
        <Image
            src={src}
            height={height}
            width={width}
            alt={alt}
            className={className}
        />
    )
}
