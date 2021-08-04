import { ReactElement, useState } from "react";
import Title from "./Title";
import UploadFiles from "./UploadFiles";
import FilePreview from "./FilePreview";
import * as Papa from "papaparse";

export default function App(): ReactElement {
  const [files, setFiles] = useState<FileList | null>(null);
  let minRows: number = Number.MAX_VALUE;
  let i = 0;
  let parsedFiles: any[] = []

  const makeCSV = (parsedFiles: any[]) => {
    console.log(parsedFiles)
  }

  const handleSubmit = () => {
    i = 0;
    minRows = Number.MAX_VALUE;
    parsedFiles = []
    const parseNextFile = () => {
      let file = files!.length === i ? null : files![i++];
      if (file) {
        Papa.parse(file, {
          dynamicTyping: true,
          skipEmptyLines: true,
          complete: (res) => {
            minRows = Math.min(minRows, res.data.length);
            parsedFiles.push(res.data)
            parseNextFile();
          },
        });
      }
      else {
        makeCSV(parsedFiles);
      }
    };
    parseNextFile();
  };


  return (
    <div
      style={{
        fontFamily: "'Open Sans', sans-serif",
        color: "#E7ECEF",
        marginBottom: "50px",
      }}
    >
      <Title content="FRAP CSV Helper" />
      <UploadFiles setFiles={setFiles} />
      <FilePreview files={files} handleSubmit={handleSubmit} />
    </div>
  );
}
