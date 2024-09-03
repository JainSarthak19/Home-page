import React from 'react';

function InputForm({ numPlayers, playerNames, target, onNumPlayersChange, onNameChange, onTargetChange, onSubmit }) {
    return (
        <div className="card mx-auto" style={{ maxWidth: '500px' }}>
            <div className="card-body">
                <h2 className="text-center mb-4">Setup Players</h2>
                <div className="mb-3">
                    <label htmlFor="numPlayers" className="form-label">Number of Players</label>
                    <input
                        type="number"
                        id="numPlayers"
                        className="form-control"
                        min="1"
                        value={numPlayers}
                        onChange={onNumPlayersChange}
                    />
                </div>
                <div className="mb-3">
                    {Array.from({ length: numPlayers }).map((_, idx) => (
                        <div key={idx} className="mb-2">
                            <label htmlFor={`playerName${idx}`} className="form-label">Player {idx + 1} Name</label>
                            <input
                                type="text"
                                id={`playerName${idx}`}
                                className="form-control"
                                value={playerNames[idx]}
                                onChange={(e) => onNameChange(idx, e.target.value)}
                            />
                        </div>
                    ))}
                </div>
                <div className="mb-3">
                    <label htmlFor="target" className="form-label">Target Score</label>
                    <input
                        type="number"
                        id="target"
                        className="form-control"
                        min="1"
                        value={target}
                        onChange={onTargetChange}
                    />
                </div>
                <button
                    onClick={onSubmit}
                    className="btn btn-primary w-100"
                >
                    Start Game
                </button>
            </div>
        </div>
    );
}

export default InputForm;
