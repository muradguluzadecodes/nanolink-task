import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

interface TabItem {
  isLive: boolean;
  text: string;
}

export default function TabItem({ isLive, text }: TabItem) {
  const path =
    (text === "Live" && "live") || (text === "Results" && "results") || "/";

  const pathname = useLocation().pathname.slice(1);
  const isActive = text.toLowerCase() === pathname;

  return (
    <Link
      to={path}
      key={text}
      className={clsx(
        "relative md:w-100 py-6 px-6 hover:bg-primary flex-center gap-2",
        {
          "after:content-[''], after:absolute after:bottom-0 after:w-[100%] after:h-[1px] after:bg-main-blue":
            isActive,
        },
      )}
    >
      {isLive && <span className="w-2 h-2 rounded-full bg-red-500" />}
      <p>{text}</p>
    </Link>
  );
}
