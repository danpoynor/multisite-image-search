type GalleryImageProps = {
    src: string;
    alt: string;
}

export default function GalleryImage({ src, alt }: GalleryImageProps) {
    return (
        <img src={src} alt={alt} className='max-h-[240px] mx-auto max-w-full' />
    )
}