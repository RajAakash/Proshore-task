import { useCallback, useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";

function App() {
  const onSearch = useCallback((username) => {
    fetch(`https://api.github.com/users/${username}`).then((res) =>
      res
        .json()
        .then((data) => console.log(data))
        .then((err) => console.log(err))
    );
  }, []);

  return (
    <div className="App">
      <SearchBar onSearch={onSearch} />
      <div className="text">This is to display text.</div>
    </div>
  );
}

export default App;
