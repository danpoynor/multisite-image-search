type GalleryImageProps = {
    src: string;
    alt: string | undefined;
}

export default function Image({ src, alt }: GalleryImageProps) {
    return (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
    )
}
