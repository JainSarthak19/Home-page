import React, { useState } from 'react';

export default function ScoreKeeper({ numPlayers, playerNames, target }) {
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));
    const [gameEnded, setGameEnded] = useState(false);

    const incrementScore = (idx) => {
        if (gameEnded) return;

        setScores((prevScores) => {
            const newScores = prevScores.map((score, i) => {
                if (i === idx) return score + 1;
                return score;
            });

            const hasWinner = newScores.some(score => score >= target);
            if (hasWinner) {
                setGameEnded(true);
            }

            return newScores;
        });
    };

    const reset = () => {
        setScores(new Array(numPlayers).fill(0));
        setGameEnded(false);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="w-100">
                <h1 className="text-center mb-4">Score Keeper</h1>
                <div className="row justify-content-center">
                    {Array.from({ length: numPlayers }).map((_, idx) => {
                        const score = scores[idx];
                        const isWinner = score >= target;
                        return (
                            <div key={idx} className="col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
                                <div className={`card ${isWinner ? 'border-success' : 'border-secondary'} w-100`} style={{ maxWidth: '300px' }}>
                                    <div className="card-header text-center">
                                        <h5 className="card-title">{playerNames[idx]}</h5>
                                    </div>
                                    <div className="card-body text-center">
                                        <h6 className="card-subtitle mb-2 text-muted">Score: {score}</h6>
                                        <button
                                            onClick={() => incrementScore(idx)}
                                            className={`btn ${isWinner ? 'btn-success' : 'btn-primary'} ${gameEnded ? 'disabled' : ''}`}
                                            disabled={gameEnded}
                                        >
                                            +1
                                        </button>
                                        {isWinner && <div className="mt-2 text-success font-weight-bold">WINNER!</div>}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="text-center mt-4">
                    <button
                        onClick={reset}
                        className="btn btn-danger"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}
