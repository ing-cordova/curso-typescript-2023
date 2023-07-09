import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { Sub } from "./components/types";

interface AppState {
  subs: Array<Sub>;
  newSubsMember: number;
}

// const INITIAL_STATE = [
//   {
//     nick: "cordova",
//     subMonths: 2,
//     avatar: "https://i.pravatar.cc/150?u=cordova",
//     description: "cordova is an star sub.",
//   },
//   {
//     nick: "jose",
//     subMonths: 1,
//     avatar: "https://i.pravatar.cc/150?u=jose",
//     description: "jose is an star sub.",
//   },
// ];

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsMember, setNewSubsMember] =
    useState<AppState["newSubsMember"]>(0);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
    setNewSubsMember((newSubsMember) => newSubsMember + 1);
  };

  return (
    <div className="App" ref={divRef}>
      <h1>Subs</h1>
      <p>Number of subs: {subs.length}</p>
      <p>Number of new subs: {newSubsMember}</p>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
