import React from 'react';
import ReactDOM from 'react-dom';
import Quotes from "randomquote-api";
// root element
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

// root App
const App = () => (
  <QuoteBox />
);

// QuoteBox wrapper
const QuoteBox = () => {
  // local state
  const [ quote, setQuote ] = React.useState({});
  const [ color, setColor ] = React.useState('');
  
  // get initial quote and set color
  React.useEffect(() => {
    getNewQuote();
    // color
    const newColor = getNewColor()
    setColor(newColor);
    document.getElementById('root').style.background = newColor;
  }, []);
  
    // get a new color
  const getNewColor = () => {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const rgb = {
      r: randomBetween(0, 255),
      g: randomBetween(0, 255),
      b: randomBetween(0, 255)
    };
     return `rgb(${rgb.r},${rgb.g},${rgb.b})`;
  };
  
  // get a new quote and update the colors
  const getNewQuote = () => {
    // get quote
    const quote = Quotes.randomQuote();
    // set state
    setQuote(quote);
    // set colors
    const newColor = getNewColor();
    setColor(newColor);
    document.getElementById('root').style.background = newColor;
  }
  
  // render QuoteBox
  return (
    <div id="quote-box">
      <h1 id="text">
        <span className="quote-quotes">{quoteIcon()}</span>{quote.quote}
      </h1>
      <p id="author">- {quote.author}</p>
      <span className="btn-row">
        <a 
          href={`http://twitter.com/intent/tweet?text=${quote.quote}`}
          target="_blank"
          id="tweet-quote"
          style={{ background: color }}
        >
          {twitterIcon()}
        </a>
        <button 
          id="new-quote"
          onClick={() => getNewQuote()}
          style={{ background: color }}
         >New quote
        </button>
      </span>
    </div>
  );
}

// render App
root.render(<App />);

// return quotes icon to keep jsx clean
function quoteIcon () {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="quotes-icon" viewBox="0 0 16 16">
  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
</svg>
  );
}

// return twitter icon to keep jsx clean
function twitterIcon () {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="twitter-icon" width="16px" height="16px" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg>
  );
}