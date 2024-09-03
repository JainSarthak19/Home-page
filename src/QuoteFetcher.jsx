import { useState, useEffect } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {
    const [quote, setQuote] = useState({ text: "", author: "" });

    useEffect(() => {
        fetchQuote();
    }, []);

    async function fetchQuote() {
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setQuote(randomQuote);
    }

    return (
        <div className="card p-4 shadow-sm mb-4" style={{ maxWidth: '400px', margin: 'auto' }}>
            <div className="card-body">
                <h5 className="card-title">Quote of the Moment</h5>
                <p className="card-text">
                    <q>{quote.text}</q>
                </p>
                <footer className="blockquote-footer">{quote.author}</footer>
                <button onClick={fetchQuote} className="btn btn-primary mt-3">
                    Fetch New Quote
                </button>
            </div>
        </div>
    );
}
