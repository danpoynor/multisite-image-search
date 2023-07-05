import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid'

type SearchOptionsProps = {
  name: string;
  selectedWebsites: string[];
  handleWebsiteSelectionChange: () => void;
};

export default function SearchOptions({ name, selectedWebsites, handleWebsiteSelectionChange }: SearchOptionsProps) {
  return (
    <div className="mb-2 rounded-xl bg-[--color-content-800] p-2">
      <label className="flex items-center text-[var(--color-content-300)]">
        <input
          type="checkbox"
          value={name.toLowerCase()}
          checked={selectedWebsites.includes(name.toLowerCase())}
          onChange={handleWebsiteSelectionChange}
          className="h-[1.1rem] w-[1.1rem] rounded"
        />
        <span className="ml-2">{name}</span>
      </label>
    </div>
  )
}
