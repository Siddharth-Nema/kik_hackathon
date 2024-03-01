import { useState } from "react";

export default function PreferenceTile({
  title,
  onClick,
  status,
}: {
  title: string;
  onClick: () => void;
  status: boolean;
}) {
  const [state, setState] = useState(status);

  return (
    <div
      className={`Preference-Tile ${state ? "clicked" : ""}`}
      onClick={() => {
        setState(!state);
        onClick();
      }}
    >
      {title}
    </div>
  );
}
