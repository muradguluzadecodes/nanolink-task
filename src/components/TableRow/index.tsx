import clsx from "clsx";
import ReactCountryFlag from "react-country-flag";
import Order from "@/components/Order";
import { useLocation } from "react-router-dom";
import { LiveTableRow } from "@/type/LiveTable";
import { ResultsTableRow } from "@/type/ResultTable";
import Status from "@/components/Status";

interface TableRowProps {
  data: LiveTableRow | ResultsTableRow;
  index: number;
  isLast?: boolean;
}

function isResultsRow(
  row: LiveTableRow | ResultsTableRow,
): row is ResultsTableRow {
  return "trainer" in row && "scores" in row;
}

export default function TableRow({
  data,
  index,
  isLast = false,
}: TableRowProps) {
  const pathname = useLocation().pathname.slice(1);

  // Results

  if (pathname === "results" && isResultsRow(data)) {
    const { country, bib, trainer, scores } = data;

    return (
      <div
        className={clsx("results-table-row", {
          "table-line": !isLast && pathname === "results",
        })}
      >
        <Order index={index} />
        <div className="flex gap-2 h-fit items-center">
          <ReactCountryFlag
            countryCode={country}
            svg
            style={{
              width: "20px",
            }}
            title="US"
          />
          <p>{country}</p>
        </div>
        <p>{bib}</p>
        <p>{trainer}</p>
        {scores.map((data: any) => (
          <div key={data.group} className="flex flex-col gap-4">
            {data.scoreList.map((score: string, scoreIdx: number) => (
              <p
                key={score}
                className={clsx({
                  "text-main-orange":
                    data.group === "total" &&
                    scoreIdx === data.scoreList.length - 1,
                })}
              >
                {score}
              </p>
            ))}
          </div>
        ))}
      </div>
    );
  }

  // Live

  if (pathname === "live" && !isResultsRow(data)) {
    const {
      apparatus,
      country,
      bib,
      athlete,
      difficulty,
      execution,
      penalty,
      score,
      qRank,
      fRank,
      qTotal,
      fTotal,
      status,
      overallRank,
    } = data;
    return (
      <div
        className={clsx(
          "py-6 display-none sm:grid grid-cols-[1fr_1fr_1fr_2fr_3fr_auto]",
          {
            "table-line": !isLast,
          },
        )}
      >
        <img className="w-[50px]" src={`/${apparatus}.png`} alt="#" />
        <div className="flex gap-2 h-fit items-center">
          <ReactCountryFlag
            countryCode={country}
            svg
            style={{
              width: "20px",
            }}
            title={country}
          />
          <p>{country}</p>
        </div>
        <p>{bib}</p>
        <p>{athlete}</p>
        {difficulty ||
          execution ||
          (penalty && (
            <div className="flex gap-4">
              {difficulty && <p>{`D: ${difficulty}`}</p>}
              {execution && <p>{`E: ${execution}`}</p>}
              {penalty && <p>{`P: ${penalty}`}</p>}
            </div>
          ))}
        {status && (
          <div>
            <Status status={status} />
          </div>
        )}
        <div className="flex gap-10">
          <div className="flex gap-4">
            <p>{score}</p>
            <Order index={qRank} />
          </div>{" "}
          <div className="flex gap-5">
            <p>{qTotal}</p>
            <Order index={fRank} />
          </div>{" "}
          <div className="flex gap-5">
            <p>{fTotal}</p>
            <Order index={overallRank} />
          </div>
        </div>
      </div>
    );
  }
}
