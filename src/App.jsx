import React, { useState } from 'react';
import ScoreKeeper from './ScoreKeeper';
import InputForm from './InputForm';
import ShoppingList from './ShoppingList';
import QuoteFetcher from './QuoteFetcher';
import Weather from './Weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [numPlayers, setNumPlayers] = useState(3);
  const [playerNames, setPlayerNames] = useState(Array(3).fill('Player'));
  const [target, setTarget] = useState(5);
  const [gameStarted, setGameStarted] = useState(false);

  const handlePlayerCountChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setNumPlayers(count);
    setPlayerNames(Array(count).fill('Player'));
  };

  const handleNameChange = (idx, name) => {
    const newNames = [...playerNames];
    newNames[idx] = name;
    setPlayerNames(newNames);
  };

  const handleTargetChange = (e) => {
    setTarget(parseInt(e.target.value, 10));
  };

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="app-background">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-start h-100">
          {/* Left Side */}
          <div className="col-md-6 d-flex flex-column justify-content-start align-items-center p-3">
            <div className="mb-4 w-100">
              {gameStarted ? (
                <div className="card large-card">
                  <ScoreKeeper numPlayers={numPlayers} playerNames={playerNames} target={target} />
                </div>
              ) : (
                <div className="card">
                  <InputForm
                    numPlayers={numPlayers}
                    playerNames={playerNames}
                    target={target}
                    onNumPlayersChange={handlePlayerCountChange}
                    onNameChange={handleNameChange}
                    onTargetChange={handleTargetChange}
                    onSubmit={startGame}
                  />
                </div>
              )}
            </div>
            <div className="mb-4 w-100">
              <div className="card small-card">
                <ShoppingList />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-md-6 d-flex flex-column justify-content-between align-items-center p-3">
            <div className="mb-4 w-100">
              <div className="card small-card">
                <QuoteFetcher />
              </div>
            </div>
            <div className="mb-4 w-100">
              <div className="card small-card">
                <Weather />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
