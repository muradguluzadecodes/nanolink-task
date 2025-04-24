interface ResultsScoreProps {
  children?: React.ReactNode;
}

export default function ResultsScore({ children }: ResultsScoreProps) {
  return <div className="flex flex-col gap-4">{children}</div>;
}
