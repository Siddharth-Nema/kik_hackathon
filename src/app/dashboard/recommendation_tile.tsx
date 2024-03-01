export default function RecommendationTile({
  title,
  subjectCode,
}: {
  title: string;
  subjectCode: string;
}) {
  return (
    <div className="Recommendation-Tile">
      <h1>{title}</h1>
      <h2>{subjectCode}</h2>
      <h3>93%</h3>
    </div>
  );
}
