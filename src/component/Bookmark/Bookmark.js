import React, { useState, useEffect } from "react";
import "./Bookmark.css";
const Bookmark = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const localStorageItems = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      localStorageItems.push({ key, value });
    }
    setItems(localStorageItems);
  }, []); // Run only once when the component mounts

  const handleDeleteBookmark = (key) => {
    localStorage.removeItem(key);
    // Update state after deletion
    setItems(items.filter((item) => item.key !== key));
  };

  return (
    <div className="container-bookmark">
      <h1>Your Bookmarked List</h1>
      {items &&
        items.map((item) => (
          <ul className="bookmark-ul" key={item.key}>
            <li className="bookmark-li">{item.value}</li>
            <li>
              <button className="bookmark-deletebtn" onClick={() => handleDeleteBookmark(item.key)}>
                Delete
              </button>
            </li>
          </ul>
        ))}
    </div>
  );
};

export default Bookmark;
