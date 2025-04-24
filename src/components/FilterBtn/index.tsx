import { CategoryGroup, Option } from "@/type/filterBtn";
import clsx from "clsx";

interface FilterBtnProps {
  data: CategoryGroup;
}

export default function FilterBtn({ data }: FilterBtnProps) {
  return (
    <div className="rounded-lg w-fit overflow-hidden border-1 border-primary ">
      {data.options.map((item: Option) => (
        <button
          key={item.label}
          className={`px-6 rounded-lg py-3 ${item.isActive ? "active-option-btn" : ""}`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
