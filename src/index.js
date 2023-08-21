import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Card";
import sdata from "./sdata";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1 className="heading_style">List Of 5 Best Wallpapers</h1>
    {sdata.map((val) => {
      return (
        <Card
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          links={val.links}
        />
      );
    })}
  </React.StrictMode>
);
