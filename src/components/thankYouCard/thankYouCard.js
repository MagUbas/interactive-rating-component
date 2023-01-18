import classes from "./thankYouCard.module.css";

const ThankYouCard = (props) => {
  return (
    <div class={classes.thankYouBody}>
      <div class={classes.thankYouIcon}></div>
      <p class={classes.thankYouRating}>You selected {props.rating} out of 5</p>
      <h1>Thank you!</h1>
      <p class={classes.thankYouText}>
        We appreciated you taking time to give a rating. If you ever need more
        support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankYouCard;
