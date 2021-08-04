import { ReactElement, useState } from "react";
import Title from "./Title";
import UploadFiles from "./UploadFiles";
import FilePreview from "./FilePreview";
import * as Papa from "papaparse";

export default function App(): ReactElement {
  const [files, setFiles] = useState<FileList | null>(null);

  const makeCSV = (parsedFiles: any[], numRows: number) => {
    const csvObj: object[] = [];
    for (var i = 1; i < numRows; i++) {
      let currRow = {};
      for (var j = 1; j < parsedFiles.length + 1; j++) {
        const [, b, c, d] = parsedFiles[j - 1][i];
        const calcVal = (b - d) / (c - d);
        currRow = { ...currRow, [j]: calcVal };
      }
      csvObj.push(currRow);
    }
    const blob = new Blob([Papa.unparse(csvObj)]);
    const date = new Date();
    const filename = "MergedResults" + date.toLocaleDateString() + ".csv";
    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(blob);
    } else {
      var link = document.createElement("a");
      if (link.download !== undefined) {
        var url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", filename);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
    setFiles(null);
  };

  const handleSubmit = () => {
    let i = 0;
    let minRows = Number.MAX_VALUE;
    const parsedFiles: unknown[] = [];
    const parseNextFile = () => {
      let file = files!.length === i ? null : files![i++];
      if (file) {
        Papa.parse(file, {
          dynamicTyping: true,
          skipEmptyLines: true,
          complete: (res) => {
            minRows = Math.min(minRows, res.data.length);
            parsedFiles.push(res.data);
            parseNextFile();
          },
          error: () => {
            window.alert("Something went wrong, Please try again.");
          },
        });
      } else {
        makeCSV(parsedFiles, minRows);
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
