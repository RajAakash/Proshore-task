import { useCallback, useEffect, useState } from "react";
import "./App.css";
import DisplayUser from "./Components/DisplayUser";
import SearchBar from "./Components/SearchBar";

function App() {
  const [users, setUser] = useState([]);

  const onSearch = useCallback((username) => {
    fetch(`https://api.github.com/users/${username}`).then((res) =>
      res
        .json()
        .then((data) => setUser(data))
        // .then((data) => console.log(data))
        .then((err) => console.log(err))
    );
  }, []);

  useEffect(() => console.log(users));

  return (
    <div className="App">
      <SearchBar onSearch={onSearch} />
      <div className="text">
        {/* {users?.map((user) => {
          return (
            <DisplayUser
              key={user.id}
              name={user.name}
              avatar={user.avatar_url}
            />
          );
        })} */}
      </div>
    </div>
  );
}

export default App;
