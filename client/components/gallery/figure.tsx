type FigureProps = {
    children: React.ReactNode;
};

export default function Figure({ children }: FigureProps) {
    return (
        <figure className="group/item relative h-72 flex-[1_0_auto] m-0.5">
            {children}
        </figure>
    );
}