type FigcaptionProps = {
    children: React.ReactNode;
};

export default function Figcaption({ children }: FigcaptionProps) {
    return (
        <figcaption className='invisible group-hover/item:visible text-xs py-2 px-2 text-start absolute bottom-0 left-0 w-full text-[var(--color-content-200)] bg-[var(--color-content-900)]'>
            {children}
        </figcaption>
    );
}