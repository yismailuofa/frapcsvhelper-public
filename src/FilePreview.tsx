import { ReactElement } from "react";
import "./buttons.css"
import HelpText from "./HelpText";

interface Props {
  files: FileList | null;
  handleSubmit: () => void;
}

export default function FilePreview({ files, handleSubmit }: Props): ReactElement {
  return (
    <div style={{ textAlign: "center", marginTop: "3em" }}>
      {(!files || (files && files.length === 0)) && <HelpText />}
      {files && files.length > 0 && (
        <ol style={{ listStylePosition: "inside", marginLeft: "-2em" }}>
          {Array.from(files).map((file) => (
            <li key={file.name} style={{ margin: "1em" }}>
              {file.name}
            </li>
          ))}
        </ol>
      )}
      {files && files.length > 0 && (
        <button
          style={{
            fontFamily: "'Open Sans', sans-serif",
            color: "#0F7173",
            backgroundColor: "#E7ECEF",
            fontSize: "2em",
            fontWeight: "bold",
            textDecoration: "none",
            border: "none",
            borderRadius: "0.2em",
            transitionDuration: "0.4s"
          }}
          id="submitButton"
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}
    </div>
  );
}
