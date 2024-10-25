import Image from "next/image"

interface IconProps {
    src: string
    alt: string
    className?: string
}

export const Icon = ({ src, alt, className }: IconProps) => {
    return (
        <Image
            src={src}
            width={16}
            height={16}
            alt={alt}
            className={className}
        />
    )
}
