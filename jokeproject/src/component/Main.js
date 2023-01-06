import React, { Fragment, useEffect, useState } from "react";
import "../css/Main.css";
import Quote from "./Quote";
import Tags from "./Tags";
import getQuote from "../utils/quote";

function Main() {
  const [tagName, setTagName] = useState("business");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async (tag) => {
    let response = await getQuote(tag);
    setQuote(response.content);
    setAuthor(response.author);
  };

  useEffect(() => {
    if (tagName) {
      fetchQuote(tagName);
    }
  }, [tagName]);

  useEffect(() => {
    const timer = setInterval(() => {
      fetchQuote(tagName);
    }, 6000);

    return () => clearInterval(timer);
  }, [tagName]);

  return (
    <Fragment>
      <div className="container">
        <div className="header">
          <Tags setTagName={(val) => setTagName(val)} />
          <p className="tag-name">{tagName.toUpperCase()}</p>
        </div>
        <Quote quote={quote} author={author} />
      </div>
    </Fragment>
  );
}

export default Main;
