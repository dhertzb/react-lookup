import "./styles/global.css";
import List from "./components/List";
import Card from "./components/Card";
import React, { useEffect, useState } from "react";

import { test } from "./services/api";

function App() {
  const [gifs, setGifs] = useState([]);
  function getGifs() {
    test()
      .then((res) => {
        const rawGifs = res.data.data;
        setGifs(rawGifs.map((gif) => gif.images.original.url));
      })
      .catch((err) => {});
  }

  useEffect(() => {
    getGifs();
  }, []);

  return (
    <div className="main">
      <Card>
        <List list={gifs} />
      </Card>
    </div>
  );
}

export default App;
