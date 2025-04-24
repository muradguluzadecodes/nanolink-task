export type Apparatus = "vault" | "ph" | "sr" | "hb" | "pb";

export type Status = "Wait" | "Go";

export interface LiveTableRow {
  id: number;
  apparatus: Apparatus;
  country: string;
  bib: number;
  athlete: string;

  difficulty?: string;
  execution?: string;
  penalty?: string;
  score?: string;

  qRank?: number;
  qTotal?: string;
  fRank?: number;
  fTotal?: string;
  overallRank?: number;
  inquiry?: string;
  status?: Status;
}

export interface LiveTable {
  heading: string[];
  rows: LiveTableRow[];
}
