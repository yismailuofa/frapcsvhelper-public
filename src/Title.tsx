import { ReactElement } from "react";

interface Props {
  content: string;
}

export default function Title({ content }: Props): ReactElement {
  return (
    <p
      style={{
        fontFamily: "'Open Sans', sans-serif",
        color: "#E7ECEF",
        fontSize: "5em",
        letterSpacing: "-0.02em",
        fontWeight: "bolder",
        textAlign: "center",
        marginTop: "0",
        marginBottom: "2em"
      }}
    >
      {content}
    </p>
  );
}
