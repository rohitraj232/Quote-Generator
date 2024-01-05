import React, { useEffect, useState } from "react";
import './QuoteGenerater.css'
import bookmarkImg from '../images/bookmark.png'
import Loader from "../Loader/Loader";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');

  const fetchData = async () => {
    let data = await fetch("https://api.quotable.io/random");
    data = await data.json();
    setQuote(data);
  };

  const getTags = async () => {
    let tagData = await fetch('https://api.quotable.io/tags');
    tagData = await tagData.json();
    setTags(tagData);
  };

  const handleTagQuote = async (tagName) => {
    let quoteData = await fetch(`https://api.quotable.io/random?tags=${tagName}`);
    quoteData = await quoteData.json();
    setQuote(quoteData);
  };

  const handleBookmark = () => {
    localStorage.setItem(`${quote._id}`, quote.content);
    alert("Your quote saved in your fav section")
  };

  useEffect(() => {
    fetchData();
    getTags();
  }, []);

  return (
    <div>
      {quote ? 
          <div className="container-quote">
            <div className="quote">{quote.content}
              <div className="tags">~~ {quote.author}</div>
            </div>
            <button onClick={fetchData} className="get_quote">Get Quote</button>
            <button onClick={handleBookmark} className="bookmark_img"><img src={bookmarkImg} /></button>

            <select onChange={(e) => setSelectedTag(e.target.value)} onClick={() => handleTagQuote(selectedTag)}>
              <option value="">Select a Tag</option>
              {tags.map(item => (
                <option key={item._id} value={item.name}  >
                  {item.name}
                </option>
              ))}
            </select>
          </div> : <Loader/>}
    </div>
  );
};

export default QuoteGenerator;
