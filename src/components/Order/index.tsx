export default function Order({ index }: { index: number }) {
  return (
    <div className="w-6 h-6 bg-main-blue flex-center">
      <p>{index}</p>
    </div>
  );
}
