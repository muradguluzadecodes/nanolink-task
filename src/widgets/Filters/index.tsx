import FilterBtn from "@/components/FilterBtn";
import { Filter } from "@/icons/Filter";
import Tag from "@/components/Tag";

import FilterSport from "@/components/FilterSport";
const filters = {
  sports: ["fx", "hb", "pb", "Vault", "ph", "sr"],
  categories: [
    {
      category: "test",
      options: [
        {
          label: "MAG",
          isActive: true,
        },
        {
          label: "WAG",
          isActive: false,
        },
      ],
    },
    {
      category: "test",
      options: [
        { label: "Qualification", isActive: false },
        { label: "Final", isActive: true },
      ],
    },
    {
      category: "test",
      options: [
        { label: "Apparatus", isActive: false },
        { label: "Team", isActive: true },
        { label: "All‑around", isActive: false },
      ],
    },
    {
      category: "test",
      options: [
        { label: "Seniors", isActive: false },
        { label: "Juniors", isActive: true },
      ],
    },
  ],
};
const tagList = [
  "MAG",
  "Qualification",
  "Seniors",
  "Apparatus",
  "Floor exercise",
];

export default function Filters() {
  const { categories, sports } = filters;
  return (
    <>
      {/*For Mobile*/}
      <div>
        <div className="w-full sm:display-none flex justify-end mt-10">
          <button className="flex-center gap-2 py-2 px-4 bg-primary rounded-md">
            <Filter /> Filter
          </button>
        </div>
        <div className="flex gap-4 sm:display-none mt-8 flex-wrap">
          {tagList.map((tag) => (
            <Tag key={tag} tagName={tag} />
          ))}
        </div>
      </div>
      {/*For Tablet and Above*/}
      <div>
        <div className="sm:flex display-none justify-between flex-wrap gap-4 mt-18">
          {categories.map((data) => (
            <FilterBtn key={data.category} data={data} />
          ))}
        </div>
        <div className="w-full mt-20 gap-6 sm:flex sm:justify-center display-none">
          {sports.map((sport) => {
            const editedName = sport.toLowerCase();
            console.log(editedName);
            return (
              <FilterSport
                img={`/${editedName}.png`}
                name={sport}
                isActive={editedName === "vault"}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
