import React, { useState } from 'react';
import '../App.css';
import { ReactComponent as Quote } from './quote.svg';
import { ReactComponent as Refresh } from './refresh.svg';
import { ReactComponent as Twitter } from './twitter.svg';
import { ReactComponent as Tumblr } from './tumblr.svg';
import data from './data';
const QuoteBox = () => {
  const [quotes, setQuote] = useState(data);
  const [selected, setSelected] = useState({
    id: 3,
    quote:
      'Every man has two lives and the second starts when he realises he has just one',
    author: 'Confucius',
  });
  const handleClick = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(randomQuote);
    setSelected(randomQuote);
  };
  return (
    <div>
      <article className="box">
        <button onClick={handleClick}>
          <Refresh className="refresh-svg" />
        </button>
        <Quote className="quote-svg" />

        <h2>{selected.quote}</h2>
        <Quote className="quote-svg2" />
        <h3>-{selected.author}</h3>
        <a
          id="link"
          target="_top"
          href={
            'https://twitter.com/intent/tweet?text=' +
            selected.quote +
            '-' +
            selected.author
          }
        >
          <Twitter className="twitter-svg" />
        </a>
        <a
          target="_blank"
          href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Florence%20Nightingale&amp;content=I%20attribute%20my%20success%20to%20this%3A%20I%20never%20gave%20or%20took%20any%20excuse.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button"
        >
          <Tumblr className="tumblr-svg" />
        </a>
      </article>
    </div>
  );
};
export default QuoteBox;
