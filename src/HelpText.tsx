import { ReactElement } from 'react'


export default function HelpText(): ReactElement {
    return (
        <h2
        style={{
            textAlign: "center",
            marginTop: "2em"
        }}
      >
        Please upload your csv files one group at a time.<br/>
        ✅ (A1.csv, A2.csv, A3.csv ...)<br/>
        ❌ (A1.csv, A2.csv, B1.csv ...)
      </h2>
    )
}
