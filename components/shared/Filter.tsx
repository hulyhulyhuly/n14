"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type filterItem = {
  name: string;
  value: string;
};

interface FilterProps {
  placeholder: string;
  filters: filterItem[];
  // containerCls?: string;
  otherCls?: string;
}

const Filter = ({ placeholder, filters, otherCls }: FilterProps) => (
  <div className="hidden max-md:flex">
    <Select>
      <SelectTrigger
        className={`body-regular light-border background-light800_dark300 text-dark500_light700 min-h-[56px] border px-4 py-2 sm:min-w-[170px] ${otherCls}`}
      >
        <div className="line-clamp-1 flex-1 text-left">
          <SelectValue placeholder={placeholder} />
        </div>
      </SelectTrigger>

      <SelectContent>
        {filters.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

export default Filter;
