import React from "react";
import "./App.css";
import { useAsBind } from "use-as-bind";

const WASM_FILENAME = process.env.NODE_ENV === 'development' ? 'main-debug.wasm' : 'main.wasm';

function App() {
  const { loaded, error, instance } = useAsBind(WASM_FILENAME);
  return (
    <div className="App">
      {loaded && instance.exports.add(1, 4)}
      {error && JSON.stringify(error)}
    </div>
  );
}

export default App;
