// Create a "Like" button with a heart icon from heroicons.
// The button should be clickable and should increment the number of likes for the image.
// The button should also be disabled if the user is not logged in.
import { HeartIcon } from '@heroicons/react/24/outline'

export default function ToggleFavorite() {
    return (
        <button title='The feature under construction' className="invisible absolute right-0 top-0 m-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[var(--color-content-900)] p-1 group-hover/item:visible">
            <HeartIcon className="h-8 w-8 text-[var(--color-content-200)]" />
        </button>
    );
}

