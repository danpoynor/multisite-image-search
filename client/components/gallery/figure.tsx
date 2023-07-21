type FigureProps = {
    children: React.ReactNode;
};

export default function Figure({ children }: FigureProps) {
    return (
        <figure className="group/item relative m-0.5 h-72 flex-[1_1_auto]">
            {children}
        </figure>
    );
}