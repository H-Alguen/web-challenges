import React from "react";

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">My Article</h2>
      <label htmlFor="input">Input Text</label>
      <input type="text" id="input" placeholder="post here..." />
      <a href="#" className="article__link">
        Link
      </a>
    </article>
  );
}

export default Article;
