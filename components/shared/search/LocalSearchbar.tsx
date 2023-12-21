"use client";

import Image from "next/image";

import { Input } from "@/components/ui/input";

interface customInputProps {
  searchContent: string;
  searchHolder: string;
  setSearchContent: Function;
  otherCls?: string;
}

const LocalSearchbar = ({
  searchContent,
  searchHolder,
  setSearchContent,
  otherCls,
}: customInputProps) => (
  <div
    className={`background-light800_darkgradient flex min-h-[56px] w-full grow items-center gap-4 rounded-xl px-4 ${otherCls}`}
  >
    <Image
      src="/assets/icons/search.svg"
      alt="search-icon"
      width={24}
      height={24}
      className="cursor-pointer"
    />

    <Input
      type="text"
      value={searchContent}
      onChange={(e) => setSearchContent(e.target.value)}
      placeholder={searchHolder}
      className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
    />
  </div>
);

export default LocalSearchbar;
