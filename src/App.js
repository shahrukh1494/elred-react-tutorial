import "./App.css";
import "./test.scss";
import FirstPage from "./FirstPage";
import UserContext from "./UserContext";

function App() {
  const user = "Jonah Jamesson";

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <header className="App-header">
          <FirstPage />
        </header>
      </div>
    </UserContext.Provider>
  );
}

export default App;
