// Create a "Like" button with a heart icon from heroicons.
// The button should be clickable and should increment the number of likes for the image. 
// The button should also be disabled if the user is not logged in.
import { HeartIcon } from '@heroicons/react/24/outline'

export default function ToggleFavorite() {
    return (
        <button title='Toggle Favorite' className="flex items-center cursor-pointer justify-center absolute top-0 right-0 w-8 h-8 bg-[var(--color-content-900)] rounded-full m-2 invisible group-hover/item:visible p-1">
            <HeartIcon className="w-8 h-8 text-[var(--color-content-200)]" />
        </button>
    );
}

