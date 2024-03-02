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
      className={`my-1 rounded-full border bg-gray-200 px-4 py-1 text-sm ${state ? "clicked" : ""}`}
      onClick={() => {
        setState(!state);
        onClick();
      }}
    >
      {title}
    </div>
  );
}
