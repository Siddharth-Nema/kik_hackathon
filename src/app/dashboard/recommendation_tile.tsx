export default function RecommendationTile({
  title,
  avgCGPA,
  subjectCode,
}: {
  title: string;
  avgCGPA: number;
  subjectCode: string;
}) {
  return (
    <div className="flex justify-between border px-4 py-2">
      <h1 className="text-lg font-medium">{title}</h1>
      <div className="flex gap-24">
        <h2 className="font-medium">{avgCGPA.toFixed(2)}</h2>
        <h2 className="font-medium">{subjectCode}%</h2>
      </div>
    </div>
  );
}
