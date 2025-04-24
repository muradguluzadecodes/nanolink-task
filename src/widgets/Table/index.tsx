import TableRow from "@/components/TableRow";
import TableHeading from "@/components/TableHeading";
import MobileTableRow from "@/components/MobileTableRow";
import { useLocation } from "react-router-dom";
import { ResultsTable } from "@/type/ResultTable";
import { LiveTable } from "@/type/LiveTable";

interface TableProps {
  tableData: ResultsTable | LiveTable;
}

export default function Table({ tableData }: TableProps) {
  const { heading, rows } = tableData;

  return (
    <section className="md:mt-20 mt-14">
      <TableHeading data={heading} />
      {rows.map((listItem: any, index) => (
        <TableRow
          isLast={rows.length === index + 1}
          index={index + 1}
          data={listItem}
          key={listItem.id}
        />
      ))}

      <div className="flex flex-col gap-6">
        {rows.map((listItem: any, index) => (
          <MobileTableRow
            heading={tableData.heading}
            key={listItem.id}
            data={listItem}
            index={index + 1}
          />
        ))}
      </div>
    </section>
  );
}
