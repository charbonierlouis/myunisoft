import React from "react";

interface TableProps {
  data: Array<any>;
  header: Array<string>;
  headBackgroundColor?: string;
  headColor?: string;
  rowBackgroundColor?: string;
  rowColor?: string;
  style?: React.CSSProperties;
}

const Table = ({
  data,
  header,
  headBackgroundColor = "#f5f9fc",
  headColor = "#525f7f",
  rowBackgroundColor = "white",
  rowColor = "#525f7f",
  style = {},
}: TableProps) => {
  return (
    <table className="table" style={style}>
      <thead
        className="thead"
        style={{ backgroundColor: headBackgroundColor, color: headColor }}
      >
        <tr>
          {header.map((title, key) => {
            return (
              <td className="td" key={key}>
                {title}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody
        className="tbody"
        style={{ backgroundColor: rowBackgroundColor, color: rowColor }}
      >
        {data.map((item, i) => {
          const keys = Object.keys(item);
          return (
            <tr key={i} className="tr">
              {keys.map((key, j) => {
                return (
                  <td className="td" key={j}>
                    {item[key]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
