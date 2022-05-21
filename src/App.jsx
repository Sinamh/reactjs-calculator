import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Calc from "./pages/Calc";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Calc />
      <Footer></Footer>
    </div>
  );
}

export default App;
