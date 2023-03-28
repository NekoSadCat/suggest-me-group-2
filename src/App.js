import { Header, Home, Details } from "./Components";
import Router from "./Components/Router/Router";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Router />
        {/* <Home /> */}
        {/* <Details /> */}
      </div>
    </div>
  );
}

export default App;
