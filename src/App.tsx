import Header from "./components/Header";
import PortfolioOther from "./routes/PortfolioOther";
import PortfolioMain from "./routes/PortfolioMain";

function App() {
  return (
    <div className="App">
      <Header />
      <PortfolioMain />
      <PortfolioOther />
    </div>
  );
}

export default App;
