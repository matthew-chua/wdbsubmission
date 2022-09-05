import React from "react";
import classes from "./PastVictorsCard.module.css";
import Victor from "./Victor";

export default function PastVictorsCard(props) {
  return (
    <div className={classes.root}>
      {props.data.map((victor) => (
        <Victor data={victor} />
      ))}
    </div>
  );
}
