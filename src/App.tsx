import Header from './components/Header';
import { Intro, Portfolio } from './Router';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Portfolio />
    </div>
  );
}

export default App;
