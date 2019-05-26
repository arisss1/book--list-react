import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function Books() {
  return (
  	<div><h1 style={{ textAlign: "center", color: "#630c50", letterSpacing: "8px" }}>Book List</h1>
    <section className="books">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
    </div>
  );
}


const Book = () => {
  return (
    <article className="book">
      <CoverImage />
      <Title />
      <Author />
    </article>
  );
};
const CoverImage = () => (
  <img
    width="200"
    src="https://images-na.ssl-images-amazon.com/images/I/71N4oeWwYlL._AC_UL200_SR200,200_.jpg"
    alt="wonkey donkey"
  />
);
const Title = () => (
  <h1 style={{ fontSize: "2rem", color: "red" }}>The Wonkey Donkey</h1>
);
const authorStyle = {
  letterSpacing: "10px",
  color: "green"
};

const Author = () => <p style={authorStyle}>by Aris Skatsikas</p>;

ReactDom.render(<Books />, document.getElementById("root"));