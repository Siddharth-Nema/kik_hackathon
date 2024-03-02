export default function QuickInfoTile({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="QuickInfoTile">
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
}
