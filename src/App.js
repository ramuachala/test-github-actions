import "./App.css";
const API_PATH = process.env.REACT_APP_MAIN_URL;

function App() {
  return (
    <div className="App">
      <header>GitHub Actions</header>
      <main>
        <h1>GitHub Actions {API_PATH}</h1>
      </main>
      <footer>smaple footer</footer>
    </div>
  );
}

export default App;
