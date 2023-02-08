import React, { useState } from "react";
import a from "./chapters/1";
import b from "./chapters/2";

export default function App() {
  var [readingIndex, setReadingIndex] = useState(1);
  var [chapter, setChapter] = useState(a);
  const checkChapter = (num) => {
    setReadingIndex(num);
    num === 0
      ? setChapter({
          title: "The Index.",
          content: (
            <p>
              <button
                onClick={() => {
                  checkChapter(1);
                }}
              >
                chapter 1
              </button>
              <button
                onClick={() => {
                  checkChapter(2);
                }}
              >
                chapter 2
              </button>
            </p>
          ),
          tags: ["index"],
        })
      : num === 1
      ? setChapter(a)
      : num === 2
      ? setChapter(b)
      : setChapter(null);
    console.log(readingIndex, chapter);
  };
  return (
    <div>
      <div className="container">
        <div className="header-row-links">
          {chapter.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
        <h1>{chapter.title}</h1>
        <div className="content">{chapter.content}</div>
        <div className="footer">
          <div className="btns">
            <button
              className="prev-btn"
              onClick={() => {
                if (readingIndex > 0) {
                  checkChapter(readingIndex - 1);
                }
              }}
            >
              Back
            </button>
            <button
              className="contents-btn"
              onClick={() => {
                checkChapter(0);
              }}
            >
              Contents
            </button>
            <button
              className="next-btn"
              onClick={() => {
                if (readingIndex < 2) {
                  checkChapter(readingIndex + 1);
                }
              }}
            >
              Next
            </button>
          </div>
          <div className="bottom-links">
            <a href="https://github.com/forloopcodes/burrito">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}
