import { ReactElement, useState } from "react";
import Title from "./Title";
import UploadFiles from "./UploadFiles";
import FilePreview from "./FilePreview";

export default function App(): ReactElement {
  const [files, setFiles] = useState<FileList | null>(null);

  return (
    <div
    style={{
      fontFamily: "'Open Sans', sans-serif",
      color: "#E7ECEF",
      marginBottom: "50px"
    }}
    >
      <Title content="FRAP CSV Helper" />
      <UploadFiles setFiles={setFiles} />
      <FilePreview files={files}/>
    </div>
  );
}
