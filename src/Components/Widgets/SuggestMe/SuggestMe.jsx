import React from "react";

import s from "./SuggestMe.module.scss";

const SuggestMe = () => {
  return (
    <div className={s.suggestMe}>
      <h1 className={s.suggestMe__title}>Suggest.me</h1>
      <div className={s.suggestMe__txt}>
        <p> Discover new and exciting movies with Suggest.me!</p>

        <p>
          Our platform generates a personalized list of films for you to enjoy,
          making it easy to find your next favorite.
        </p>
        <p>Give it a try and see what the algorithm suggests for you 😉</p>
      </div>
    </div>
  );
};

export default SuggestMe;
