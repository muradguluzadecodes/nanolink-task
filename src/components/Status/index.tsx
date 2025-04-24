import clsx from "clsx";

interface StatusProps {
  status: string;
}

export default function Status({ status }: StatusProps) {
  return (
    <div
      className={clsx(
        "w-[100px] h-[40px] c-white flex justify-center items-center rounded-lg",
        {
          "bg-main-orange": status === "Wait",
          "bg-main-green": status === "Go",
        },
      )}
    >
      {status}
    </div>
  );
}
