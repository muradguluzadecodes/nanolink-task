import Filters from "@/widgets/Filters";
import Table from "@/widgets/Table";
import { ResultsTable } from "@/type/ResultTable";
const tableData: ResultsTable = {
  heading: ["Rank", "Team", "Bib", "Name", "D", "E", "Pen", "Total"],
  rows: [
    {
      id: 1,
      country: "RU",
      bib: 121,
      trainer: "Alexander Kheybulin",
      scores: [
        { group: "d", scoreList: ["44.323", "44.221"] },
        { group: "e", scoreList: ["23.423", "23.311"] },
        { group: "pen", scoreList: ["33.443", "23.421"] },
        { group: "total", scoreList: ["102.442", "115.345", "200.532"] },
      ],
    },
    {
      id: 2,
      country: "US",
      bib: 210,
      trainer: "Emily Johnson",
      scores: [
        { group: "d", scoreList: ["42.115", "41.980"] },
        { group: "e", scoreList: ["22.500", "22.350"] },
        { group: "pen", scoreList: ["30.000", "29.750"] },
        { group: "total", scoreList: ["94.615", "93.330", "96.245"] },
      ],
    },
    {
      id: 3,
      country: "FR",
      bib: 305,
      trainer: "Marc Dubois",
      scores: [
        { group: "d", scoreList: ["45.220", "44.900"] },
        { group: "e", scoreList: ["24.100", "23.890"] },
        { group: "pen", scoreList: ["35.500", "35.200"] },
        { group: "total", scoreList: ["104.820", "103.990", "105.310"] },
      ],
    },
    {
      id: 4,
      country: "JP",
      bib: 412,
      trainer: "Sakura Tanaka",
      scores: [
        { group: "d", scoreList: ["43.000", "42.750"] },
        { group: "e", scoreList: ["23.800", "23.600"] },
        { group: "pen", scoreList: ["34.000", "33.900"] },
        { group: "total", scoreList: ["100.800", "99.900", "101.500"] },
      ],
    },
    {
      id: 5,
      country: "BR",
      bib: 523,
      trainer: "Carlos Silva",
      scores: [
        { group: "d", scoreList: ["44.500", "44.300"] },
        { group: "e", scoreList: ["23.700", "23.550"] },
        { group: "pen", scoreList: ["33.800", "33.600"] },
        { group: "total", scoreList: ["102.000", "101.000", "103.200"] },
      ],
    },
    {
      id: 6,
      country: "CH",
      bib: 634,
      trainer: "Hans Müller",
      scores: [
        { group: "d", scoreList: ["43.750", "43.500"] },
        { group: "e", scoreList: ["23.250", "23.100"] },
        { group: "pen", scoreList: ["32.900", "32.700"] },
        { group: "total", scoreList: ["99.900", "98.850", "100.600"] },
      ],
    },
    {
      id: 7,
      country: "CN",
      bib: 745,
      trainer: "Li Wei",
      scores: [
        { group: "d", scoreList: ["44.100", "43.850"] },
        { group: "e", scoreList: ["23.600", "23.400"] },
        { group: "pen", scoreList: ["33.200", "33.000"] },
        { group: "total", scoreList: ["101.300", "100.250", "102.472"] },
      ],
    },
    {
      id: 8,
      country: "DE",
      bib: 856,
      trainer: "Laura Schmidt",
      scores: [
        { group: "d", scoreList: ["42.900", "42.650"] },
        { group: "e", scoreList: ["22.950", "22.800"] },
        { group: "pen", scoreList: ["31.500", "31.300"] },
        { group: "total", scoreList: ["97.350", "96.750", "98.230"] },
      ],
    },
  ],
};

export default function Results() {
  return (
    <>
      <Filters />
      <Table tableData={tableData} />
    </>
  );
}
