export default function FigureSkeleton() {
  return (
    <figure className="group/item relative m-0.5 h-72 flex-[1_1_auto]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200"></div>
      </div>
    </figure>
  );
}
