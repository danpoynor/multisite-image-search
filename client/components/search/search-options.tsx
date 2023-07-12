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
            <label className="flex items-center pb-2 text-[var(--color-content-300)]">
                <input
                    type="checkbox"
                    value={name.toLowerCase()}
                    checked={selectedWebsites.includes(name.toLowerCase())}
                    onChange={handleWebsiteSelectionChange}
                    className="checkbox focus:ring-indigo-600 ring-[#50d71e]"
                />
                <span className="ml-2">{name}</span>
            </label>
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex w-full justify-between items-center rounded-lg bg-[var(--color-content-700)] text-[var(--color-content-400)] px-4 py-2 text-left text-xs font-medium">
                            <span>Options</span>
                            <ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-[var(--color-content-500)]`} />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-3 pb-2 text-sm text-[var(--color-content-400)]">
                            Add options here.
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    )
}
