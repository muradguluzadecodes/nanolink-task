import Table from "@/widgets/Table";
import { LiveTable } from "@/type/LiveTable";

const tableData: LiveTable = {
  heading: ["App", "AA", "Team"],
  rows: [
    {
      id: 1,
      apparatus: "vault",
      country: "AZ",
      bib: 212,
      athlete: "Amirbekov T.",
      difficulty: "5.400",
      execution: "8.800",
      penalty: "0.300",
      score: "12.500",
      qRank: 7,
      qTotal: "102.360",
      fRank: 4,
      fTotal: "102.360",
      overallRank: 12,
    },
    {
      id: 2,
      apparatus: "ph",
      country: "RU",
      bib: 132,
      athlete: "Amirbekov Teymur",
      status: "Wait",
      score: "12.500",
      qRank: 7,
      qTotal: "102.360",
      fRank: 4,
      fTotal: "102.360",
      overallRank: 12,
    },
    {
      id: 3,
      apparatus: "sr",
      country: "TR",
      bib: 624,
      athlete: "Terim F.",
      difficulty: "5.400",
      execution: "8.800",
      penalty: "0.300",
      score: "12.500",
      qRank: 7,
      qTotal: "102.360",
      fRank: 4,
      fTotal: "102.360",
      overallRank: 12,
    },
    {
      id: 4,
      apparatus: "hb",
      country: "FR",
      bib: 624,
      athlete: "Terim F.",
      status: "Go",
      score: "12.500",
      qRank: 7,
      qTotal: "102.360",
      fRank: 4,
      fTotal: "102.360",
      overallRank: 12,
    },
    {
      id: 5,
      apparatus: "pb",
      country: "ES",
      bib: 401,
      athlete: "Wiltord T.",
      difficulty: "5.400",
      execution: "8.800",
      penalty: "0.300",
      score: "12.500",
      qRank: 16,
      qTotal: "102.360",
      fRank: 8,
      fTotal: "102.360",
      overallRank: 17,
    },

    {
      id: 2,
      apparatus: "ph",
      country: "RU",
      bib: 132,
      athlete: "Amirbekov Teymur",
      status: "Wait",
      score: "12.500",
      qRank: 7,
      qTotal: "102.360",
      fRank: 4,
      fTotal: "102.360",
      overallRank: 12,
      inquiry: "Inquiry submitted",
    },
  ],
};

export default function Live() {
  return (
    <div>
      <Table tableData={tableData} />
    </div>
  );
}
