type FigcaptionProps = {
    children: React.ReactNode;
};

export default function Figcaption({ children }: FigcaptionProps) {
    return (
        <figcaption className='invisible absolute bottom-0 left-0 w-full bg-[var(--color-content-900)] p-2 text-start text-xs text-[var(--color-content-200)] group-hover/item:visible'>
            {children}
        </figcaption>
    );
}