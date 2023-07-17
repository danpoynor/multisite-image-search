import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid'

type SearchOptionsProps = {
    name: string;
    selectedWebsites: string[];
    handleWebsiteSelectionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchOptions({ name, selectedWebsites, handleWebsiteSelectionChange }: SearchOptionsProps) {
    return (
        <div className="rounded-xl p-2 mb-2 bg-[--color-content-800]">
            <label className="flex items-center text-[var(--color-content-300)]">
                <input
                    type="checkbox"
                    value={name.toLowerCase()}
                    checked={selectedWebsites.includes(name.toLowerCase())}
                    onChange={handleWebsiteSelectionChange}
                    className="checkbox"
                />
                <span className="ml-2">{name}</span>
            </label>
        </div>
    )
}
