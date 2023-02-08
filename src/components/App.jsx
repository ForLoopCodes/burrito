import React from "react";

export default function App() {
  return (
    <div>
      <div className="container">
        <div className="header-row-links">
          <span>#Chapter 01</span>
        </div>
        <h1>first chapter.</h1>
        <div className="content">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            perspiciatis numquam dolorum sit magni expedita debitis sint
            voluptatum accusamus, eveniet aut, voluptas quos doloribus
            architecto? Nobis repellat veniam cupiditate dicta. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Laborum perspiciatis
            numquam dolorum sit magni expedita debitis sint voluptatum
            accusamus, eveniet aut, voluptas quos doloribus architecto? Nobis
            repellat veniam cupiditate dicta.
          </p>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            perspiciatis numquam dolorum sit magni expedita debitis sint
            voluptatum accusamus, eveniet aut, voluptas quos doloribus
            architecto? Nobis repellat veniam cupiditate dicta.
          </p>
        </div>
        <div className="footer">
          <div className="btns">
            <button className="prev-btn">Back</button>
            <button className="contents-btn">Contents</button>
            <button className="next-btn">Next</button>
          </div>
          <div className="bottom-links">
            <a href="https://github.com/forloopcodes/burrito">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}
