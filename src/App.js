import classes from "./App.module.css";
import { useState } from "react";
import RatingCard from "./components/ratingCard/ratingCard";
import ThankYouCard from "./components/thankYouCard/thankYouCard";

function App() {
  const [rating, setRating] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (number) => {
    setRating(number);
    setShowThankYou(true);
  };

  return (
    <div className={classes.app}>
      {showThankYou ? (
        <ThankYouCard rating={rating} />
      ) : (
        <RatingCard handleSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default App;
