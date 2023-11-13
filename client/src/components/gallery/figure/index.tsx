import ToggleFavorite from './toggle-favorite';
import Content from './content'

export default function Figure({ image }) {
  return (
    <figure className="group/item relative m-0.5 h-48 max-w-[420px] flex-[1_1_auto]">
      <ToggleFavorite />
      <Content image={image} />
    </figure>
  );
}
