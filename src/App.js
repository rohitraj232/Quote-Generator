import React from "react";
import QuoteGenerater from "./component/QuoteGenerater/QuoteGenerater";
import { Routes, Route } from "react-router-dom";
import Bookmark from "./component/Bookmark/Bookmark";
import Navbar from "./component/Navbar/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<QuoteGenerater />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
    </div>
  );
};

export default App;
