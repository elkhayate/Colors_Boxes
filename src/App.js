import Colors_container from "./Colors_container";
import CoinFlip from "./CoinFlip";
import RollDice from "./RollDice";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="casino">
      <RollDice />
      <CoinFlip />
      </div>
      <Colors_container />
      
    </div>
  );
}

export default App;
