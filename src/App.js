import './App.css';
import BalanceContainer from "./components/Balance/BalanceController";
import GameStartedContainer from "./components/GameStarted/GameStartedController";

function App() {
    return (
        <div className="App">
            <BalanceContainer />
            <GameStartedContainer />
        </div>
    );
}

export default App;
