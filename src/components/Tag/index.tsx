import { Close } from "@/icons/Close";

export default function Tag({ tagName }: { tagName: string }) {
  return (
    <div className="flex gap-2 py-2 px-4 bg-main-blue rounded-full">
      <button>
        <Close />
      </button>
      <p>{tagName}</p>
    </div>
  );
}
