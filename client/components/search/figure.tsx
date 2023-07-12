type FigureProps = {
    children: React.ReactNode;
};

export default function Figure({ children }: FigureProps) {
    return (
        <figure>
            {children}
        </figure>
    );
}