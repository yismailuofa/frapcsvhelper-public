import React, { ReactElement } from "react";
import "./buttons.css"

interface Props {
  setFiles: React.Dispatch<React.SetStateAction<FileList | null>>;
}

export default function UploadFiles({ setFiles }: Props): ReactElement {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
        <label
          htmlFor="fileUpload"
          style={{
            fontSize: "4em",
            fontWeight: "bolder",
            padding: "0.2em",
            border: "0.08em solid #E7ECEF",
            borderRadius: "0.3em",
            transitionDuration: "0.4s",
          }}
          id="uploadButton"
        >
          Upload Files
        </label>

      <input
        id="fileUpload"
        type="file"
        multiple
        accept=".csv"
        style={{ display: "none" }}
        onChange={(e) => setFiles(e.currentTarget.files)}
      ></input>
    </div>
  );
}
