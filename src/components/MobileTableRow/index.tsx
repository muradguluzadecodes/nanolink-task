import Order from "@/components/Order";
import ReactCountryFlag from "react-country-flag";
import { AccordionArrow } from "@/icons/AccordionArrow";
import clsx from "clsx";
import { LiveTableRow } from "@/type/LiveTable";
import { ResultsTableRow } from "@/type/ResultTable";
import { useLocation } from "react-router-dom";
import Status from "@/components/Status";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";

interface MobileTableRowProps {
  data: LiveTableRow | ResultsTableRow;
  heading?: string[];
  index: number;
}

function isResultsRow(
  row: LiveTableRow | ResultsTableRow,
): row is ResultsTableRow {
  return "trainer" in row && "scores" in row;
}

export default function MobileTableRow({
  data,
  index,
  heading,
}: MobileTableRowProps) {
  const pathname = useLocation().pathname.slice(1);

  // Results

  if (pathname === "results" && isResultsRow(data)) {
    const { country, trainer, bib, scores } = data;

    return (
      <Accordion allowToggle allowMultiple={false}>
        <AccordionItem>
          <div className="mobile-row-wrapper">
            {/*Heading*/}
            <AccordionButton>
              <div className="pb-4 w-full relative grid gap-5 grid-cols-[minmax(min-content,auto)_minmax(min-content,auto)_minmax(min-content,auto)_minmax(min-content,auto)_min-content]">
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
                <p>{trainer}</p>
                <p>{bib}</p>
                <button className="flex items-start">
                  <AccordionIcon>
                    <AccordionArrow />
                  </AccordionIcon>
                </button>
              </div>
            </AccordionButton>

            {/*Body*/}
            <AccordionPanel>
              <div className="flex flex-col gap-3 pt-4 relative after:content-[''] after:w-full after:h-[1px] after:bg-background after:top-[0] after:left-0 after:absolute after:bg-main-black">
                {scores.map((item: any) => (
                  <div key={item.group} className="flex justify-between">
                    <p>{item.group[0].toUpperCase() + item.group.slice(1)}</p>
                    <div>
                      {item.scoreList.map((score: string, scoreIdx: number) => (
                        <p
                          className={clsx("text-right", {
                            "text-main-orange":
                              item.group === "total" &&
                              scoreIdx === item.scoreList.length - 1,
                          })}
                          key={score}
                        >
                          {score}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </AccordionPanel>
          </div>
        </AccordionItem>
      </Accordion>
    );
  }

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
      <Accordion allowToggle>
        <AccordionItem>
          <div className="mobile-row-wrapper">
            {/*Heading*/}
            <AccordionButton>
              <div className="grid w-full  pb-2 grid-cols-[1fr_1fr_2fr_1fr_1fr] gap-2">
                <img src={`/${apparatus}.png`} alt="" className="w-[70px]" />
                <p className="text-2xl">{country}</p>
                <p className="text-xl">{athlete}</p>
                {status ? <span /> : <p>{score}</p>}
                {status ? (
                  <Status status={status} />
                ) : (
                  <div className="flex justify-end">
                    <button className="flex items-start">
                      <AccordionArrow />
                    </button>
                  </div>
                )}
              </div>
            </AccordionButton>
            {/*Body*/}
            <AccordionPanel>
              {!status && (
                <div className="pt-4 relative after:content-[''] after:w-full after:h-[1px] after:bg-background after:top-[0] after:left-0 after:absolute after:bg-main-black">
                  <div className="w-full flex justify-end">
                    {(difficulty || execution || penalty) && (
                      <div className="flex gap-4">
                        {difficulty && (
                          <p className="text-lg">{`D: ${difficulty}`}</p>
                        )}
                        {execution && (
                          <p className="text-lg">{`E: ${execution}`}</p>
                        )}
                        {penalty && (
                          <p className="text-lg">{`P: ${penalty}`}</p>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between mt-6">
                    <div className="flex flex-col gap-4">
                      {heading.map((text) => (
                        <p className="text-lg" key={text}>
                          {text}
                        </p>
                      ))}
                    </div>
                    <div className="flex flex-col gap-4 ">
                      <div className="flex justify-between gap-5">
                        <p>{qTotal}</p>
                        <Order index={qRank} />
                      </div>{" "}
                      <div className="flex justify-between gap-5">
                        <p>{fTotal}</p>
                        <Order index={fRank} />
                      </div>{" "}
                      <div className="flex justify-between gap-5">
                        <p>{score}</p>
                        <Order index={qRank} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </AccordionPanel>
          </div>
        </AccordionItem>
      </Accordion>
    );
  }
}
