import React from "react";
import "./App.css";
import { useAsBind } from "use-as-bind";

function App() {
  const { loaded, error, instance } = useAsBind("main.wasm");
  return (
    <div className="App">
      {loaded && instance.exports.add(1, 2)}
      {error && JSON.stringify(error)}
    </div>
  );
}

export default App;
