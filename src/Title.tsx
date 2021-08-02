import { ReactElement } from "react";

interface Props {
  content: string;
}

export default function Title({ content }: Props): ReactElement {
  return (
    <div
      style={{
        fontFamily: "'Open Sans', sans-serif",
        color: "white",
        fontSize: "5em",
        letterSpacing: "-0.02em",
        fontWeight: "bolder"
      }}
    >
      {content}
    </div>
  );
}
