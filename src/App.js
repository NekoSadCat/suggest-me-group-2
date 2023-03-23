import { Header } from "./Components";
import Router from "./Components/Router/Router";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Router/>
      </div>
    </div>
  );
}

export default App;
