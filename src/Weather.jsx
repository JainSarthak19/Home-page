import React, { useState, useEffect } from 'react';

function Weather() {
    const [weather, setWeather] = useState('');

    useEffect(() => {
        // Fetch weather data here
        // Example placeholder data
        setWeather('Sunny, 25°C');
    }, []);

    return (
        <div className="card p-3">
            <h2 className="text-center mb-3">Current Weather</h2>
            <p className="text-center">{weather}</p>
        </div>
    );
}

export default Weather;
