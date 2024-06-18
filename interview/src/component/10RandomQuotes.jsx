import React, { useState } from "react";

function RandomQuotes() {
  const [quote, setQuote] = useState(null);

  const fetchRandomQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((quotes) => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
      })
      .catch((error) => console.error("Error fetching quotes:", error));
  };

  return (
    <>
      <div>Random Quotes</div>
      <button className="bg-red-300 p-1 rounded-lg" onClick={fetchRandomQuote}>Generate</button>
      {quote && <p>Quote of the day: {quote.text} - {quote.author}</p>}
    </>
  );
}

export default RandomQuotes;
