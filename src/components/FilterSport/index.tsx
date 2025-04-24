interface FilterSportProps {
  img: string;
  name: string;
  isActive: boolean;
}

export default function FilterSport({ img, name, isActive }: FilterSportProps) {
  return (
    <button key={name} className="hover:bg-primary w-20 h-auto">
      <img className="w-[80px] mb-4" src={img} alt="#" />
      {isActive && <p>{name}</p>}
    </button>
  );
}
