import { useLocation } from "react-router-dom";

export default function TableHeading({ data }: { data: string[] }) {
  const pathname = useLocation().pathname.slice(1);

  return (
    <div className={`${pathname}-table-heading`}>
      {data.map((header) => (
        <p key={header}>{header}</p>
      ))}
    </div>
  );
}
