export default function QuickInfoTile({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="border-zin flex min-w-96 flex-col rounded-2xl border p-4 shadow-md">
      <h4 className="text-xl font-semibold text-gray-600">{title}</h4>
      <h2 className="mt- text-4xl font-bold">{value}</h2>
    </div>
  );
}
