import { useState } from "react";
import classes from "./ratingCard.module.css";

const RatingCard = (props) => {
  const [rating, setRating] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const getRating = (number) => {
    setRating(number);
    setDisabled(false);
  };

  const handleSubmit = (rating) => {
    props.handleSubmit(rating);
    setRating(null);
    setDisabled(true);
  };

  return (
    <div className={classes.ratingBody}>
      <div class={classes.ratingIcon}>
        <span class={classes.icon}></span>
      </div>
      <div class={classes.ratingText}>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All fedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div class={classes.ratingRating}>
        {[1, 2, 3, 4, 5].map((el) => {
          return (
            <button
              key={el}
              onClick={() => getRating(el)}
              class={`${classes.ratingSmallButton} ${
                rating === el ? classes.ratingSmallButtonActive : null
              }`}
            >
              {el}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => handleSubmit(rating)}
        disabled={disabled}
        class={classes.ratingButton}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default RatingCard;
