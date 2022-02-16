import Header from "./components/Header";
import PortfolioOther from "./routes/PortfolioOther";
import PortfolioMain from "./routes/PortfolioMain";
import Welcome from "./routes/Welcome";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <PortfolioMain />
      <PortfolioOther />
    </div>
  );
}

export default App;
