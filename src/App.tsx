import { ReactElement } from "react";
import Title from "./Title";

export default function App(): ReactElement {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage:
          "linear-gradient(0deg, rgba(100,127,179,1) 0%, rgba(163,189,237,1) 100%)",
        display: "flex",
        alignItems: "top",
        justifyContent: "center",
      }}
    >
      <Title content="FRAP CSV Helper"/>
    </div>
  );
}
