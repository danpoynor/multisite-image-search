type FigcaptionProps = {
    children: React.ReactNode;
};

export default function Figcaption({ children }: FigcaptionProps) {
    return <figcaption className='text-xs mt-2'>{children}</figcaption>;
}