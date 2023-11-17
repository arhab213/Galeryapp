import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [search, setsearch] = useState();
  let tab = [
    { name: "Desert", url: "/paysage1.jpg" },
    { name: "hoouse in desert", url: "/paysage2.jpg" },
    { name: "montaine", url: "/paysage3.jpg" },
    { name: "Persons in montain", url: "/paysage4.jpg" },
    { name: "Pesrson in desert", url: "/paysage5.jpg" },
  ];
  let a = Math.floor(Math.random(tab.length));
  const handleChanges = (e) => {
    let { value } = e.target;
    setsearch(value);
  };

  return (
    <>
      <div id="search">
        <input type="text" onChange={handleChanges} />
      </div>

      {search
        ? tab
            .filter((elem) =>
              elem.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((e) => {
              return (
                <img src={e.url} style={{ height: "200px", width: "200px" }} />
              );
            })
        : null}
    </>
  );
}

export default App;
