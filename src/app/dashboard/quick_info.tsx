export default function QuickInfoTile({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="border-zin flex min-w-72 flex-col rounded-xl border p-4 shadow-md">
      <h4 className="text-lg font-semibold text-gray-600">{title}</h4>
      <h2 className="mt- text-2xl font-bold">{value}</h2>
    </div>
  );
}
