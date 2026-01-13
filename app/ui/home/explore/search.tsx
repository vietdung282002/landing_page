"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { roboto } from "../../fonts";

export default function Search({ placeholder }: { placeholder: string }) {
  return (
    <div
      className={`${roboto.className} relative flex flex-1 flex-shrink-0 w-full h-full`}
    >
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full h-full rounded-[10px] py-[9px] bg-gray-100 pl-17 text-xl placeholder:text-gray-200 placeholder:text-xl"
        placeholder={placeholder}
        onChange={(e) => {}}
      />
      <MagnifyingGlassIcon className="absolute left-8 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-200 peer-focus:text-gray-900" />
    </div>
  );
}
