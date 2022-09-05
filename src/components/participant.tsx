import React from "react";
import Image from "next/image";
import runner1 from "../../public/runner1.jpg";
import classes from "./Participant.module.css";

export default function Participant() {
  return (
    <div>
      <div>
        <Image src={runner1} alt="runner1" width={400} height={200} />
      </div>
      <div className={classes.bottomCard}>
        <div>
          <div className={classes.participantName}>name here</div>
          <div>Score here</div>
        </div>
        <div className={classes.spacer} />
        <div>
          <button className={classes.button}>upvote</button>
          <button className={classes.button}>downvote</button>
        </div>
      </div>
    </div>
  );
}
