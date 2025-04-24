export type ScoreGroup = "d" | "e" | "pen" | "total";

export interface Score {
  group: ScoreGroup;
  scoreList: string[];
}

export interface ResultsTableRow {
  id: number;
  country: string;
  bib: number;
  trainer: string;
  scores: Score[];
}

export interface ResultsTable {
  heading: string[];
  rows: ResultsTableRow[];
}
